import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const API_URL: string = "http://localhost:1337"

export const instance = rateLimit(axios.create({baseURL: API_URL}), {maxRequests: 6, perMilliseconds: 1000})