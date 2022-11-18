const jwt = require("jsonwebtoken");
const User = require("../db/schemas/user");
//레디스는 보류
//const redisCli = require("../util/redis");
require("dotenv").config(); //환경변수 쓸 일이 없다면 이부분 지울 것

module.exports = async (req, res, next) => {
  try {
    const { authorization, refreshtoken } = req.headers;
    console.log("어쓰 미들웨어의 공간========="); ///################
    console.log(authorization); //Bearer 토큰이름 형태로 나옴
    console.log("어쓰 미들웨어++++++++"); ///################
    console.log(refreshtoken); //왜 리프레시 토큰은 언디파인드 일까?? 레디스에 저장하지 않아서??
    const tokenType = authorization.split(" ")[0];
    const accessToken = authorization.split(" ")[1];

    console.log("중간보고"); ///################

    const refreshToken = refreshtoken;
    console.log(refreshtoken); ///################
    console.log("토큰 타입======================"); ///################
    console.log(tokenType); ///################
    console.log("토큰 타입끝++++++++++++++"); ///################

    //토큰 타입이 Bearer가 아닐경우 에러
    if (tokenType !== "Bearer")
      return res.status(400).json({ message: "잘못된 요청입니다." });

    /**AccessToken검증 함수 선언 */
    function validateAccessToken(accessToken) {
      try {
        jwt.verify(accessToken, process.env.SECRET_KEY);
        return true;
      } catch (error) {
        return false;
      }
    }

    /**RefreshToken검증 함수 선언 */
    const validateRefreshToken = async (refreshToken) => {
      try {
        const decoded = jwt.decode(accessToken); // decode 명령은 뭔가
        const token = await redisCli.get(`${decoded.userId}`);
        console.log(token);
        if (refreshToken === token) {
          jwt.verify(refreshToken, process.env.SECRET_KEY);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    };

    /**검증결과에 따라 true,false가 담김 (type: blooean)*/
    const isAccessTokenValidate = validateAccessToken(accessToken);
    const isRefreshTokenValidate = await validateRefreshToken(refreshToken);

    /**refreshToken 만료시 재로그인 */
    if (refreshToken && !isRefreshTokenValidate) {
      return res.status(419).json({ message: "다시 로그인 해주세요" });
    }

    /**refreshToken유효 accesstoken 재발급*/
    if (refreshToken && accessToken && isRefreshTokenValidate) {
      const decoded = jwt.decode(accessToken);
      const newAccessToken = jwt.sign(
        { userId: decoded.userId, userKey: decoded.userKey },
        process.env.SECRET_KEY
        // {
        //   expiresIn: "60s",
        // }
      );
      return res.status(200).json({ message: "재발급", Token: newAccessToken });
    }

    /**AccessToken만료시 서버에게 만료상태 전송*/
    if (
      !refreshToken &&
      !isAccessTokenValidate &&
      accessToken !== "undefined"
    ) {
      return res.status(401).json({ message: "토큰 만료" });
    } else if (accessToken !== "undefined") {
      /**토큰이 유효한 경우 */
      const { userId } = jwt.verify(accessToken, process.env.SECRET_KEY);
      console.log("유저아이디");
      console.log(userId);
      const user = await User.findOne({ where: { userId: userId } });
      res.locals.user = user;
    } else {
      //토큰이 없는 요청일시 익명유저 정보를 저장
      res.locals.user = { userKey: 0, userId: "Anonymous" };
    }
    next();
  } catch (err) {
    return res.status(500).json({ message: "Auth미들웨어 에러", error: err });
  }
};
