const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  PASSWORD_IS_INCORRENT,
  USER_IS_NOT_EXISTS,
} = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')

const verifyLoginin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判断用户名密码不为空
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  // 判断用户是否存在
  const queryedUsers = await userService.findUserByName(name)
  if (!queryedUsers[0]) {
    return ctx.app('error', USER_IS_NOT_EXISTS, ctx)
  }

  // 验证密码
  const md5Pwd = queryedUsers[0].password
  if (md5Pwd !== md5password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRENT, ctx)
  }

  // 将用户名密码存在ctx中
  ctx.user = queryedUsers[0]

  await next()
}

module.exports = {
  verifyLoginin,
}
