import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9d967f6c768c.ngrok.io',
});

export default api;