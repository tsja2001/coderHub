const connection = require('../app/database')

class MomentServer {
  async create(data) {
    const statement =
      'INSERT INTO `moment` (`user_id`, `content`) VALUES (?, ?)'

    const res = connection.execute(statement, [data.id, data.content])

    return res
  }
}

module.exports = new MomentServer()
