const { MISSING_DATA } = require('../config/error')

const verifyMoment = async (ctx, next) => {
  const { content } = ctx.request.body
  if (!content) {
    return ctx.app.emit('error', MISSING_DATA, ctx)
  }

  await next()
}

module.exports = { verifyMoment }
