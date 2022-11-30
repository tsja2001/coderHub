const connection = require('../app/database')

class premissionService {
  async momentPremissionService(id, userId) {
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?`

    const [res] = await connection.execute(statement, [id, userId])

    return !!res.length
  }
  async verifyPremissionService(keyName, keyIdValue, userId) {
    const statement = `SELECT * FROM ${keyName} WHERE id = ? AND user_id = ?`

    const [res] = await connection.execute(statement, [
      keyIdValue,
      userId,
    ])

    return !!res.length
  }
}

module.exports = new premissionService()
