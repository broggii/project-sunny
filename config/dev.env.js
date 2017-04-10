var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: "AIzaSyD8qYGyC2l9le4vpRZ6S8cJ7Fo6vCPkpOA",
  AUTH_DOMAIN: "sunny-29d91.firebaseapp.com",
  DATABASE_URL: "https://sunny-29d91.firebaseio.com",
  PROJECT_ID: "sunny-29d91",
  STORAGE_BUCKET: "sunny-29d91.appspot.com",
  MESSAGING_SENDER_ID: "247618304038"
})
