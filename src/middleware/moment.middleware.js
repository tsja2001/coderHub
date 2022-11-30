const { MISSING_DATA, NO_PERMISSION } = require('../config/error')
const {
  queryById,
  queryByIdAndUserId,
} = require('../service/moment.service')

const verifyMoment = async (ctx, next) => {
  const { content } = ctx.request.body
  if (!content) {
    return ctx.app.emit('error', MISSING_DATA, ctx)
  }

  await next()
}

module.exports = { verifyMoment }
