import axios from 'axios';

export const getSitesList = () =>
  axios({
    method: 'get',
    url: `/users?page=1`,
  });
