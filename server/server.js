import Express from 'express'
import dotenv from 'dotenv'

// Read in any needed environment variables
dotenv.config()
const PORT = process.env.PORT ?? 3000

// Main express server app
const app = new Express()

// Basic logging route
app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.url}`)
  next()
})

// Serve contents of the public folder
app.use(Express.static('public'))

// Start server listening on the designated port
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})
