import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-burger-6af73.firebaseio.com/'
});

export default instance;