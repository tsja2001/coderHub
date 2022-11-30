const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  PASSWORD_IS_INCORRENT,
  USER_IS_NOT_EXISTS,
  UN_AUTHORIZATION,
  NONE_TOKEN,
} = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')
const jwt = require('jsonwebtoken')
const { publicKey } = require('../config/screct')

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

const varifyAuth = (ctx, next) => {
  const bearerToken = ctx.header.authorization
  if (!bearerToken) {
    return ctx.app.emit('error', NONE_TOKEN, ctx)
  }

  const token = bearerToken.replace('Bearer ', '')

  try {
    const res = jwt.verify(token, publicKey, {
      algorithms: ['RS256'],
    })

    ctx.user = res
    next()
  } catch (err) {
    return ctx.app.emit('error', UN_AUTHORIZATION, ctx)
  }
}

module.exports = {
  verifyLoginin,
  varifyAuth,
}
