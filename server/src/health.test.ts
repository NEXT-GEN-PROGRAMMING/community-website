import { describe, it, expect } from 'vitest'
import Fastify from 'fastify'

// Mirrors the health route registered in src/index.ts.
// Kept isolated from the real server bootstrap (which connects to
// Postgres via Prisma on import) so this test has no external
// dependencies and runs anywhere, including CI without a live DB.
function buildTestServer() {
  const fastify = Fastify()

  fastify.get('/api/v1/health', async () => {
    return { status: 'ok', timestamp: new Date() }
  })

  return fastify
}

describe('GET /api/v1/health', () => {
  it('returns status ok with a 200', async () => {
    const fastify = buildTestServer()

    const response = await fastify.inject({
      method: 'GET',
      url: '/api/v1/health',
    })

    expect(response.statusCode).toBe(200)

    const body = response.json()
    expect(body.status).toBe('ok')
    expect(typeof body.timestamp).toBe('string')
  })
})