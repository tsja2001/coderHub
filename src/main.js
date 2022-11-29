const app = require('./app')
const { SERVER_PORT } = require('./config/server')
// 为了让其中代码执行, 需要引入一次
require('./utils/handle-error')

app.listen(SERVER_PORT, () => {
  console.log('启动成功')
})
