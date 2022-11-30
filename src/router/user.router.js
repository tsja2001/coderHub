const KoadRouter = require('@koa/router')
const userController = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

const userRouter = new KoadRouter({ prefix: '/users' })

// 注册用户
userRouter.post('/', verifyUser, handlePassword, userController.create)

module.exports = userRouter
