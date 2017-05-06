import axios from 'axios';

const localhost = 'http://localhost:3001/api/';

const backend = axios.create({
  baseURL: '/api/',
  timeout: 1000
});

export const requestRoll = (dice, quantity) => {
  return backend.request({
    url: '/roll',
    method: 'GET',
    params: {
      dice, quantity
    }
  })
}