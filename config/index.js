require('dotenv').config();

module.exports = {
  pgDBConfig: {
    client: 'postgresql',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_DB_PORT,
    database: process.env.POSTGRES_DB,
  }
}