import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:3001/api/',
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