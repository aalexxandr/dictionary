import axios from 'axios';
import rateLimit from 'axios-rate-limit';

type method = 'GET' | 'POST' | 'PUT' | 'DELETE'

const API_URL: string = "http://localhost:1337"

const instance = rateLimit(axios.create({baseURL: API_URL}), {maxRequests: 6, perMilliseconds: 1000})

export const request = async (method: method, url: string, data: object = {}) => {
    const headers = {
        // Authorization: `Bearer ${userAccessToken}`,
    }

    try{
        const res = await instance({
            method,
            headers,
            url: `${API_URL}${url}`,
            data: method === 'GET' && data,
            params: method === 'GET' && data,
        })

        return res.data
    } catch (error) {
        // errorHandler
    }
}

