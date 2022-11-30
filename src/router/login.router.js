const KoadRouter = require('@koa/router')
const loginController = require('../controller/login.controller')
const { verifyLoginin } = require('../middleware/login.middleware')
// const loginService = require('../service/login.service')

const loginRouter = new KoadRouter({
  prefix: '/login',
})

loginRouter.post('/', verifyLoginin, loginController.sign)
// loginRouter.post('/', verifyLoginin, (ctx, next) => {
//   ctx.body = 11
// })

module.exports = loginRouter
