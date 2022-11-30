const app = require('../app')
const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  PASSWORD_IS_INCORRENT,
  USER_IS_NOT_EXISTS,
} = require('../config/error')

app.on('error', (error, ctx) => {
  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      ctx.body = {
        code: -1002,
        message: '用户名或密码不能为空',
      }
      break
    case NAME_IS_ALREADY_EXISTS:
      ctx.body = {
        code: -1002,
        message: '用户名已被占用, 不能使用',
      }
      break
    case PASSWORD_IS_INCORRENT:
      ctx.body = {
        code: -1003,
        message: '密码不正确, 请重试',
      }
      break
    case USER_IS_NOT_EXISTS:
      ctx.body = {
        code: -1004,
        message: '用户不存在, 请先注册',
      }
      break
  }
})
