import axios from 'axios';

export const instanceUrl = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
