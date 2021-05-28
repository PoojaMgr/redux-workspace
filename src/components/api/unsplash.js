import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4d33Onr60ug6KgpCUW9QR8Lyl66NxGyOOaYSkY6GhV8'
      }
});