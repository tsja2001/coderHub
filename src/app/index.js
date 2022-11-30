const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')
const { autoRegister } = require('../router/auto_register')
const bodyPaser = require('koa-bodyparser')

const Koa = require('koa')

const app = new Koa()

app.use(bodyPaser())

// // 用户
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
// // 登陆
// app.use(loginRouter.routes())
// app.use(loginRouter.allowedMethods())
// 自动注册路由, 代替上面手动注册的写法⬆
autoRegister(app)

module.exports = app
