import axios from 'axios';

const api = axios.create({
  baseURL: 'http://9d967f6c768c.ngrok.io',
});

export default api;