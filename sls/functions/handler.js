'use strict'
const ServerlessExpress = require('@vendia/serverless-express/middleware')
const app = require('./server')

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
]
const server = ServerlessExpress.createServer(app, null, binaryMimeTypes)

module.exports.nuxt = (event, context) => ServerlessExpress.proxy(server, event, context)
