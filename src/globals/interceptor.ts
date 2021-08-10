import axios from 'axios';
import { ApiError } from './apiError';
import ERRORS from './errorConstants';
// import storage from './localStorage';
import BaseURL from '../utils/baseUrl';

// eslint-disable-next-line no-unused-vars
const setupInterceptors = () => {
  // Default settings for axios request
  // TODO : Replace base URL with API from process.env
  axios.defaults.baseURL = BaseURL();
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;

  axios.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => {
      // Process response body
      // use store.dispatch() to dispatch any redux actions
      if (response.status >= 500) {
        throw new ApiError(ERRORS.SERVER_ERROR);
      } else if (response.status === 401) {
        throw new ApiError(ERRORS.UNAUTHORISED_ERROR);
      } else if (response.status === 403) {
        throw new ApiError(ERRORS.FORBIDDEN_ERROR);
      } else if (response.status === 404) {
        throw new ApiError(ERRORS.CLIENT_ERROR);
      } else if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202 ||
        response.status === 204
      ) {
        return response.data;
      } else {
        throw new ApiError(ERRORS.CLIENT_ERROR);
      }
    },
    (error) => Promise.reject(error)
  );
};

// /**
//  * Set auth token as default in axios
//  * @param token
//  */
// export const setAuthToken = (token = storage.getItem('accessToken')) => {
//   axios.defaults.headers.common.Authorization = token;
// };

// setAuthToken();

export default setupInterceptors;
