import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7004'
})
export default api;