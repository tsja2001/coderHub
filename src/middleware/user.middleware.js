const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
} = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  // 2.2.判断用户是否存在
  const queryedUsers = await userService.findUserByName(name)
  if (queryedUsers.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
  }

  await next()
}

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}

module.exports = {
  verifyUser,
  handlePassword,
}
