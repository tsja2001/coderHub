const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')
const bodyPaser = require('koa-bodyparser')

const Koa = require('koa')

const app = new Koa()

app.use(bodyPaser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

module.exports = app
