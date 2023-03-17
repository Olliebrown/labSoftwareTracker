import dotenv from 'dotenv'

// Read in configuration secrets for Mongo
dotenv.config()

export default {
  _DEV_: process.argv.some(param => param.toLowerCase() === 'dev'),

  DEV_PORT: process.env.DEV_PORT ?? 3000,
  PORT: process.env.PORT ?? 4242,

  MONGO_HOST: process.env.MONGO_HOST ?? 'bad.host.com',
  MONGO_USER: process.env.MONGO_USER ?? 'noUser',
  MONGO_PW: process.env.MONGO_PW ?? 'noPassword',
  MONGO_DB: process.env.MONGO_DB ?? 'unknownDB'
}
