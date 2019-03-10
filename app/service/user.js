import axios from 'axios/index';

const getActiveSensor = () => axios({
  method: 'get',
  url: '/sensors/active-sensor'
});

module.exports = {
  getActiveSensor
};
