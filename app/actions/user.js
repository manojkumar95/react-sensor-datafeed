import BaseAction from './BaseAction';
import constants from '../constants/userAction';

class UserAction extends BaseAction {
  constructor() {
    super({
      getActiveSensor: {
        type: constants.GET_USER,
        params: ['cb']
      },
      getActiveSensorSuccess: {
        type: constants.GET_USER_SUCCESS,
        params: ['user']
      },
      getActiveSensorError: {
        type: constants.GET_USER_ERROR,
        params: ['error']
      }
    });
  }
}

export default new UserAction();
