import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://agenda-app-api.vercel.app/api',
    withCredentials: true,
})

export default instance

//baseURL: 'http://localhost:8080/api'