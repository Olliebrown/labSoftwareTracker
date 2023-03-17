import Express from 'express'
import { dbQuery, dbClose } from '../database/mongoDB.js'

// Create a router for our data routes
const router = new Express.Router()

// Get list of all software
router.get('/software', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// Get details for existing software
router.get('/software/:id', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// New software
router.put('/software', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// Modify exiting software
router.post('/software/:id', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// Get list of all courses
router.get('/course', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// Get details of one course
router.get('/course/:id', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// New Course
router.put('/course', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

// Modify exiting course
router.post('/course/:id', async (req, res) => {
  res.status(501).json({ error: true, message: 'not yet implemented' })
})

export default router
