import axios from 'axios/index';

const getLatestSensorDatafeed = sensorId => axios({
  method: 'get',
  url: `/datafeeds/${sensorId}`
});

module.exports = {
  getLatestSensorDatafeed
};
