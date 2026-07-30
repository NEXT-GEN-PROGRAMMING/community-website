import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import { PrismaClient } from './generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const fastify = Fastify({ logger: true })
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

// Register Plugins
await fastify.register(cors, { origin: '*' })
await fastify.register(swagger, {
  swagger: {
    info: { title: 'NEXT-GEN API', version: '1.0.0' }
  }
})
await fastify.register(swaggerUi, { routePrefix: '/docs' })

// Basic Health Route
fastify.get('/api/v1/health', async () => {
  return { status: 'ok', timestamp: new Date() }
})

// Example Database Route
fastify.get('/api/v1/users', async () => {
  const users = await prisma.user.findMany()
  return { status: 'success', users }
})

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '8000')
    await fastify.listen({ port, host: '0.0.0.0' })
    fastify.log.info(`Server running on http://localhost:${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
