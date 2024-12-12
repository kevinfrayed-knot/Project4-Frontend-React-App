

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://c00da881-a7e2-4059-b181-b654dd25d973-00-xx7fo1mkkn67.worf.repl.co/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
