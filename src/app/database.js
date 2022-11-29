// 配置数据库连接池

const mysql2 = require('mysql2')

const connectionPool = mysql2.createPool({
  host: 'localhost',
  port: '3306',
  database: 'coderhub',
  user: 'root',
  password: 'a164157852',
  connectionLimit: 5,
})

// 测试链接是否成功
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log('数据库连接失败')
    console.log(err)
    return
  }

  connection.connect((err) => {
    if (err) {
      console.log('数据库交互失败', err)
    } else {
      console.log('数据库连接成功, 可以操作数据库')
    }
  })
})

const connection = connectionPool.promise()

module.exports = connection
