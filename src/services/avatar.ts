import axios from 'axios';

const avatarimg = axios.create({
  baseURL: 'https://avatars.githubusercontent.com/u/',
});

export default avatarimg;
