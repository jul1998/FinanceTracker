import axios from 'axios';

const BASE_URL = 'http://localhost:6001/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const endpoints = {
  login: 'auth/login',
  logout: 'auth/logout',
register: 'auth/register',
};

