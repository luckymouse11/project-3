import express from 'express'
import mongoose from 'mongoose'
import { PORT, dbURI } from './config/environment.js'
import router from './config/router.js'

// Node setup
const app = express()

// Start server
const startServer =  async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('👋🏽 Database has connected successfully')

    // Middleware
    app.use(express.json())

    // Router middleware
    app.use('/api', router)

    // Log every request
    app.use((req, _res, next) => {
      console.log(`🚨 Request received: ${req.method} - ${req.url}`)
      next()
    })


    // Catcher
    app.use((_req, res) => {
      return res.status(404).json({ message: 'Path not found' })
    })

    const server = app.listen(PORT, () => console.log(`🚀 Server up and running on port ${PORT}`))
    server.timeout = 10000    // 10sec server timeout
  } catch (err) {
    console.log('🚨 Alert - cannot connect')
    console.log(err)
  }
}

startServer()