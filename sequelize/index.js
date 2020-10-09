const path = require('path')
const { Sequelize } = require('sequelize')

const { applyExtraSetup } = require(path.join(__dirname, 'extra-setup'))

const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  }
)

const models = [
  require('./models/forward.model')
]

for (const model of models) {
  model(sequelize)
}

applyExtraSetup(sequelize)

module.exports = sequelize
