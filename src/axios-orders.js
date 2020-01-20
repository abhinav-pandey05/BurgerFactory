import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e97ae.firebaseio.com/',
});

export default instance;