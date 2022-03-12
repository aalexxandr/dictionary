const {request} = require('../../../lib/api/axios');

module.exports = {
  async signIn(ctx) {
    const {identifier, password} = ctx.request.body
    try {
      return strapi.services.sign.sanitizeEntity(
        await request('POST', '/auth/local', {identifier, password})
      )
    } catch (error) {
      const {statusCode} = error.response.data

      ctx.send({
        data: null,
      }, statusCode)
    }
  },

  async signUp(ctx) {
    const {username, email, password} = ctx.request.body
    try {
      return strapi.services.sign.sanitizeEntity(
        await request('POST', '/auth/local/register', {username, email, password})
      )
    } catch (error) {
      const {statusCode} = error.response.data

      ctx.send({
        data: null,
      }, statusCode)
    }
  }
}
