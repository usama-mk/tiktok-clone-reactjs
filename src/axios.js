import axios from 'axios';

const instance= axios.create({
    baseURL: "https://tiktok-clone-backend-deploy.herokuapp.com/"
});

export default instance;