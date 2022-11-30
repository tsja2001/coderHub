const KoadRouter = require('@koa/router')
const loginController = require('../controller/login.controller')
const {
  verifyLoginin,
  varifyAuth,
} = require('../middleware/login.middleware')
// const loginService = require('../service/login.service')

const loginRouter = new KoadRouter({
  prefix: '/login',
})

loginRouter.post('/', verifyLoginin, loginController.sign)

loginRouter.get('/test', varifyAuth, (ctx) => {
  ctx.body = '111'
})

module.exports = loginRouter
