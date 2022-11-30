const connection = require('../app/database')

class LoginService {
  async login(user) {
    const { name, password } = user

    const statement = 'SELECT * FROM user WHERE name=? AND password=?'

    const res = await connection.execute(statement, [name, password])

    return res
  }
}

module.exports = new LoginService()
