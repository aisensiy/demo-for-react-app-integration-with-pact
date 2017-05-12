import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

axios.defaults.adapter = httpAdapter;

let baseUrl = 'https://jsonplaceholder.typicode.com';

if (process.env.NODE_ENV === 'test') {
    baseUrl = 'http://localhost:8234';
}

const fetcher = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchTodos = () => {
    return fetcher.get('/todos').then(res => res.data);
}