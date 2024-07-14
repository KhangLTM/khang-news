import { axiosInstance as axios } from '.';
import { getBearerToken } from '@/services';

// import { ErrorCode } from '@/constants';

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: any) => {
    const res: ResponseError = error.response.data;
    // if (res?.errorCode == ErrorCode.AccessTokenExpired && !error.config._isRetry) {
    //   console.log('refresh token');
    // }

    return Promise.reject(error);
  }
);
