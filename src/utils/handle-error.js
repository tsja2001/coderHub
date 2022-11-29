const app = require('../app')
const {
  NAME_IS_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
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
  }
})
