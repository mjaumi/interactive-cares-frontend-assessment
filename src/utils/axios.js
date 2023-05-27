import axios from 'axios';

// creating base URL instance for data fetching here
const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
});

export default axiosInstance;