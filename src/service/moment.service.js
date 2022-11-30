const connection = require('../app/database')

class MomentServer {
  async create(data) {
    const statement =
      'INSERT INTO `moment` (`user_id`, `content`) VALUES (?, ?)'

    const res = await connection.execute(statement, [
      data.id,
      data.content,
    ])

    return res
  }

  async query(offsite, size) {
    const statement = `
			SELECT m.content, m.createAt, m.updateAt, m.id, JSON_OBJECT('name', u.name, 'createAt', u.createAt) user
				FROM moment m
				LEFT JOIN user u
				ON m.user_id= u.id
				LIMIT ? OFFSET ?
			`

    const [res] = await connection.execute(statement, [size, offsite])

    console.log('[ res ] >', res)

    return res
  }
}

module.exports = new MomentServer()
