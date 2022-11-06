const UserService = require('./user.service');

//회원가입시 입력 데이터가 조건에 부합하는지 체크
const { signupSchema, emailDupSchema, loginSchema } = require('../../util/validation');

class UserController {
    userService = new UserService();

    //회원가입
    signUp = async (req, res, next) =>{

        try{
            //입력받은 정보들을 검증하는 파일에 넣어서 검증한다.
            const {nickname, email, password, confirm} = await signupSchema.validateAsync(req.body);

            //비번과 비번확인란에 적힌 내용이 다른 경우
            if (password !== confirm) throw new Error('비밀번호와 확인란이 일치하지 않습니다');

            //이미지 파일은 넣지 않는 걸로
            //검증에 통과한 파일들을 서비스로 넘긴다.
            await this.userService.signUp(nickname, email, password);

            res.status(201).json({ ok: true, message:'회원가입 성공'});

        }catch(err){
            res.status(500).json({ ok: false, message: err.message});
            //next(err)
        }

    }

    //로그인
    login = async (req, res, next) =>{
        //입력받은 정보들을 검증하는 파일에 넣어서 검증한다.
        const {email, password} = await loginSchema.validateAsync(req.body);

        //받아온 파일들을 서비스로 넘긴다.
        const loginUser = await this.userService.login(email, password)

        res.header('Authorization', loginUser);
        res.cookie('Authorization', loginUser, { Expires: 3600 });
        res.send({ token: loginUser });

    }

    //이메일 중복 확인
    emailDup = async (req, res, next) =>{
        try {
            //입력받은 이메일을 검증하는 파일로 넘김
            const { email } = await emailDupSchema.validateAsync(req.body);

            //이메일 내용이 공백일 경우
            if (email == '') throw new Error('이메일을 입력해 주세요');

            //이메일을 중복확인을 하는 서비스로 보내기
            const emailDup = await this.userService.dupCheckEmail(email);
            //중복이라면 값이 true가 나온다.

            if (emailDup) {
                return res.status(400).json({ok: false,errorMessage: '이메일이 이미 존재합니다'});
            } else {
                await this.userService.dupCheckEmail(email);
                return res.status(200).json({ok: true,message: '사용 가능한 이메일입니다'});
            }
        } catch (error) {
            next(error);
        }

    }


}

module.exports = UserController;