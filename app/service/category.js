import axios from 'axios/index';

const getCategories = dataId => axios({
  method: 'get',
  url: `/datafeeds/${dataId}`
});

module.exports = {
  getCategories
};
