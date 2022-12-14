// 动态相关接口
const KoaRouter = require('@koa/router')
const momentController = require('../controller/moment.controller')
const { varifyAuth } = require('../middleware/login.middleware')
const { verifyMoment } = require('../middleware/moment.middleware')
const {
  momentPremission,
} = require('../middleware/premission.middleware')

const momentRouter = new KoaRouter({
  prefix: '/moment',
})

momentRouter.post(
  '/',
  varifyAuth,
  verifyMoment,
  momentController.create
)

momentRouter.get('/', momentController.list)

momentRouter.get('/:momentId', momentController.id)

momentRouter.patch(
  '/:momentId',
  varifyAuth,
  momentPremission,
  momentController.update
)

momentRouter.delete(
  '/:momentId',
  varifyAuth,
  momentPremission,
  momentController.delete
)

module.exports = momentRouter
