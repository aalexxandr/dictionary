const axios = require('axios')
const rateLimit = require('axios-rate-limit')

const API_URL = 'http://localhost:1337'

const instance = rateLimit(axios.create({baseURL: API_URL}), {maxRequests: 6, perMilliseconds: 1000})

module.exports = {
  async request(method, url, data ) {

    const res = await instance({
      method,
      url: `${API_URL}${url}`,
      data: method === 'POST' && data,
      params: method === 'GET' && data,
    })

    return res.data
  }
}
