const path = require('path')

const { models } = require(path.join(__dirname, '..', '..', 'sequelize'))

async function getAll (req, res) {
  const forwards = await models.Forward.findAll()
  res.status(200).json(forwards)
}

module.exports = {
  getAll
}
