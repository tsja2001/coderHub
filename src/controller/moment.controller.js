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

  async id(ctx, next) {
    const { momentId } = ctx.params

    // 查询数据
    try {
      const res = await momentService.queryById(momentId)
      ctx.body = {
        code: '0',
        data: res,
      }
    } catch (err) {
      console.log('[ err ] >', err)
      ctx.app.emit('error', SQL_ERROR, ctx)
    }
  }

  async update(ctx, next) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body

    try {
      const res = await momentService.updata(content, momentId)
      ctx.body = {
        code: '0',
        data: res,
      }
    } catch (err) {
      console.log('[ err ] >', err)
      ctx.app.emit('error', SQL_ERROR, ctx)
    }
  }

  async delete(ctx, next) {
    const { momentId } = ctx.params

    try {
      const res = await momentService.delete(momentId)
      ctx.body = {
        code: '0',
        message: '删除成功',
        data: res,
      }
    } catch (err) {
      console.log('[ err ] >', err)
      ctx.app.emit('error', SQL_ERROR, ctx)
    }
  }
}

module.exports = new MomentController()
