const userRouter = require('../router/user')
const bodyPaser = require('koa-bodyparser')

const Koa = require('koa')

const app = new Koa()

app.use(bodyPaser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app
