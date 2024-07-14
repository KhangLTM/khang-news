import axiosRequest from 'axios';

import { VITE_BASE_API } from '@/constants';
export const axios = axiosRequest.create({
  baseURL: VITE_BASE_API,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export const axiosInstance = axios;
