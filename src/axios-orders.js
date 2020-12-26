import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-thing-926d4.firebaseio.com/'
});

export default instance;