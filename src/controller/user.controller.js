const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    // 1.获取用户传过来的信息
    const user = ctx.request.body
    // 2.将user数据存储在数据库中
    const res = await userService.create(user)
    // 3.查看存储结果, 告诉前端存储成功
    ctx.body = {
      message: '创建成功',
      data: {
        res,
      },
    }
  }
}

module.exports = new UserController()
