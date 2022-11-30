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
}

module.exports = new MomentController()
