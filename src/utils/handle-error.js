const app = require('../app')
const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  PASSWORD_IS_INCORRENT,
  USER_IS_NOT_EXISTS,
  UN_AUTHORIZATION,
  NONE_TOKEN,
  MISSING_DATA,
  SQL_ERROR,
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
    case UN_AUTHORIZATION:
      ctx.body = {
        code: -1005,
        message: 'token过期, 请重新登陆',
      }
      break
    case NONE_TOKEN:
      ctx.body = {
        code: -1006,
        message: '请传入token',
      }
      break
    case MISSING_DATA:
      ctx.body = {
        code: -1007,
        message: '参数缺少数据',
      }
      break
    case SQL_ERROR:
      ctx.body = {
        code: -1008,
        message: '数据库错误',
      }
      break
  }
})
