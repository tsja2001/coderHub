// 动态相关接口
const KoaRouter = require('@koa/router')
const momentController = require('../controller/moment.controller')
const { varifyAuth } = require('../middleware/login.middleware')

const momentRouter = new KoaRouter({
  prefix: '/moment',
})

momentRouter.post('/', varifyAuth, momentController.create)
// momentRouter.post('/', varifyAuth, async (ctx) => {
//   console.log('[ ctx.request.body ] >', ctx.request.body)

//   setTimeout(() => {
//     ctx.body = 'aaaaa'
//   }, 100)
// })

module.exports = momentRouter
