import axios from 'axios';

const localhost = 'http://localhost:3001/api/';

const local = window.location.host.search('localhost') === 0 ? true : false;

const backend = axios.create({
  baseURL: local ? localhost : '/api/',
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