const { SQL_ERROR } = require('../config/error')
const momentService = require('../service/moment.service')

class MomentController {
  async create(ctx, next) {
    // 获取用户信息
    const { id } = ctx.user

    // 获取输入内容
    const { content } = ctx.request.body

    // 存储数据
    const res = await momentService.create({
      id,
      content,
    })

    ctx.body = {
      code: '0',
      data: res,
    }
  }

  async list(ctx, next) {
    // 获取分页信息
    const { size = 10, offsite = 0 } = ctx.query

    // 查询数据
    try {
      const res = await momentService.query(offsite, size)
      ctx.body = {
        code: '0',
        data: res,
      }
    } catch (err) {
      console.log('[ err ] >', err)
      ctx.app.emit('error', SQL_ERROR, ctx)
    }
  }
}

module.exports = new MomentController()
