import axios from 'axios'

const api = axios.create({
    baseURL: 'http://crudbackend.herokuapp.com'
});

export default api;
