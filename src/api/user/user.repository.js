//const { Users, Posts, Comments } = require('../db/models');          //모델 데이터를 가져와야함

class UserRepository {

    //회원가입 데이터를 저장
    signup = async ( user )=>{
        return await Users.create(user)
    }

    //유저 이메일 파일을 가져옴
    userFindEmail = async (email)=>{
        return await Users.findOne({where: {email}});
    }
}

module.exports = UserRepository ;