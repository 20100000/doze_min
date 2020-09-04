
const jwt = {
  SECRET: process.env.JWT_SECRET
}
const mySql = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  PASSWORD: process.env.DB_PASSWORD,
  USER: process.env.DB_USERNAME,
  DATABASE: process.env.DB_DATABASE
}

module.exports = {
  jwt,
  mySql
}
