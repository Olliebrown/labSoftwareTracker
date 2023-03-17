// File IO library
import fs from 'fs'

// Server libraries
import Express from 'express'
import https from 'https'

// Environment secrets
import CONFIG from './CONFIG.js'

// Our custom data router
import dataRouter from './api/data.js'

// Determine server port to use
const SERVER_PORT = (CONFIG._DEV_ ? CONFIG.DEV_PORT : CONFIG.PORT)

// Main express server app
const app = new Express()

// Create an SSL server if we are in dev mode
let server = null
if (CONFIG._DEV_) {
  // Read in our HTTPS credentials (for testing only)
  const key = fs.readFileSync('./server/devServerSSL/key.pem')
  const cert = fs.readFileSync('./server/devServerSSL/cert.pem')

  // Build secure server
  server = https.createServer({ key, cert }, app)
}

// Basic logging route
app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.url}`)
  next()
})

// Data routes
app.use('/data', dataRouter)

// Serve contents of the public folder
app.use(Express.static('public'))

// Start server listening on the designated port
if (server) {
  server.listen(SERVER_PORT, () => {
    console.log(`SECURE server listening at https://localhost:${SERVER_PORT}`)
  })
} else {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is listening at http://localhost:${SERVER_PORT}`)
  })
}
