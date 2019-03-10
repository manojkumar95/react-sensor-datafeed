import { call, put } from 'redux-saga/effects';
import UserActions from '../actions/user';
import UserService from '../service/user';
import Notification from '../components/Notification';

/**
 * Generator method to fetch user
 */
function* getActiveSensor(action) {
  try {
    const { cb } = action;
    const response = yield call(UserService.getActiveSensor);
    if (cb) {
      cb(response);
    }
    yield put(UserActions.getActiveSensorSuccess(response));
  } catch (e) {
    yield put(UserActions.getActiveSensorError(e));
  }
}

/**
 * Generator method to update user
 */
function* updateUser(action) {
  try {
    const { userData } = action;
    yield call(UserService.updateUser, userData);
    yield put(UserActions.updateUserSuccess(userData));
    Notification('success', 'User updated successfully');
  } catch (e) {
    Notification('error', e.message);
    yield put(UserActions.updateUserError(e));
  }
}

module.exports = {
  getActiveSensor,
  updateUser
};
