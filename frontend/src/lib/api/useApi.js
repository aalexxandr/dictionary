import rateLimit from 'axios-rate-limit';
import axios from 'axios';

const API_URL = "http://localhost:1337";

const instance = rateLimit(axios.create({baseURL: API_URL}), {maxRequests: 6, perMilliseconds: 1000});

export const request = async (method, url, data = {}) => {
    const headers = {
        // Authorization: `Bearer ${userAccessToken}`,
    };

    try{
        const res = await instance({
            method,
            headers,
            url: `${API_URL}${url}`,
            data: method === 'get' ? {} : data,
            params: method === 'get' ? data : {},
        })

        return res.data
    } catch (error) {
        // errorHandler
    }
}

