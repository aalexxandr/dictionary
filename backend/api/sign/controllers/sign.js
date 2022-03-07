const {request} = require('../../../lib/api/axios');

const sanitizeEntity = data => ({
  'userJwt': data.jwt,
  'userId': data.user.id,
  'userEmail': data.user.email,
  'userName': data.user.username,
})

module.exports = {
  async signIn(ctx) {
    const {identifier, password} = ctx.request.body
    try {
      return sanitizeEntity(await request('POST', '/auth/local', {identifier, password}))
    } catch (error) {
      ctx.send(error.response.data.message, error.response.data.statusCode)
    }
  },

  async signUp(ctx) {
    const {username, email, password} = ctx.request.body
    try {
      return sanitizeEntity(await request('POST', '/auth/local/register', {username, email, password}))
    } catch (error) {
      ctx.send(error.response.data.message, error.response.data.statusCode)
    }
  }
}
