const path = require('path')
const express = require('express')
const { Nuxt } = require('nuxt')
const ServerlessExpressMiddleware = require('@vendia/serverless-express/middleware')

// Create App
const app = express()

// Set API Gateway Middleware
app.use(ServerlessExpressMiddleware.eventContext())

// Provide Assets
app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))

// Add Nuxt
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

module.exports = app
