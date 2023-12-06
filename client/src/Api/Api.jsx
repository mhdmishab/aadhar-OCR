import axios from 'axios';

// const baseURL = 'https://aadhaarscan.onrender.com/api/v1/';
const baseURL = 'http://localhost:3000/api/v1'

const instance = axios.create({
    baseURL: baseURL,
})

export default instance;