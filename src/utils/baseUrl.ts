const BaseURL = () => {
  const { REACT_APP_API_PROTOCOL, REACT_APP_API_HOST, API_PORT } = process.env;
  let baseURL = '/api';
  if (REACT_APP_API_PROTOCOL && REACT_APP_API_HOST) {
    baseURL = `${REACT_APP_API_PROTOCOL}${REACT_APP_API_HOST}${
      API_PORT ? `:${API_PORT}` : ''
    }${baseURL}`;
  }
  return baseURL;
};

export default BaseURL;
