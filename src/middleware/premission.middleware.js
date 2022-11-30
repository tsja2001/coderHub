const { NO_PERMISSION } = require('../config/error')
const {
  momentPremissionService,
  verifyPremissionService,
} = require('../service/premission.service')

class PremissionMiddleware {
  async momentPremission(ctx, next) {
    const { momentId } = ctx.params
    const userId = ctx.user.id

    const res = await momentPremissionService(momentId, userId)

    if (!res) {
      return ctx.app.emit('error', NO_PERMISSION, ctx)
    }

    await next()
  }
  async verifyPremission(ctx, next) {
    const keys = Object.keys(ctx.params)

    const keyId = keys[0]

    const keyName = keyId.replace('Id', '')

    const keyIdValue = ctx.params[keyId]

    const userId = ctx.user.id

    const res = await verifyPremissionService(
      keyName,
      keyIdValue,
      userId
    )

    if (!res) {
      return ctx.app.emit('error', NO_PERMISSION, ctx)
    }

    await next()
  }
}

module.exports = new PremissionMiddleware()
