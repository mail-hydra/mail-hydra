require('dotenv').config()

const port = process.env.PORT || 3000

const app = require('./express')
const db = require('./sequelize')

async function assertDatabaseConnectionOk () {
  console.log('Checking database connection...')
  try {
    await db.authenticate()
    console.log('Database connection OK!')
  } catch (error) {
    console.log('Unable to connect to the database:')
    console.log(error.message)
    process.exit(1)
  }
}

async function init () {
  await assertDatabaseConnectionOk()

  console.log(`Starting on port ${port}...`)

  app.listen(port, () => {
    console.log(`Express server started on port ${port}.`)
  })
}

init()
