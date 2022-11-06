const joi = require('joi');

module.exports = {
    //회원가입시 체크사항
    signupSchema: joi.object({
        email: joi
            .string()
            .pattern(
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
            )
            .required(),
        nickname: joi.string().min(2).max(10).required(),
        password: joi
            .string()
            .pattern(/^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/)
            .required(),
        confirm: joi
            .string()
        .pattern(/^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/)
        .required(),
    }),
    //로그인시 체크사항
    loginSchema: joi.object({
        email: joi
            .string()
            .pattern(
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
            )
            .required(),
        password: joi
            .string()
            .pattern(/^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/)
            .required(),
    }),
    //이메일 중복체크
    emailDupSchema: joi.object({
        email: joi
            .string()
            .pattern(
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
            )
            .required()
    }),

};
