const jwt = require('jsonwebtoken')
const { privateKey } = require('../config/screct')

class LoginController {
  async sign(ctx, next) {
    // 获取用户信息
    const { id, name } = ctx.user
    // 颁发token
    const token = jwt.sign({ id, name }, privateKey, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })

    // console.log(token)
    // 返回用户信息
    ctx.body = {
      code: 0,
      data: {
        token,
        id,
        name,
      },
    }
  }
}

module.exports = new LoginController()
