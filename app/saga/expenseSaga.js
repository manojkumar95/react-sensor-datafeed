import { call, put } from 'redux-saga/effects';
import {
  getExpensesSuccess,
  getExpensesError
} from '../actions/expense';
import { getLatestSensorDatafeed } from '../service/expense';

/**
 * Generator method to get all expenses
 * @param {object} action
 */
function* getExpensesList(action) {
  try {
    const { sensorId } = action;
    const response = yield call(getLatestSensorDatafeed, sensorId);
    yield put(getExpensesSuccess(response));
  } catch (e) {
    yield put(getExpensesError(e));
  }
}

module.exports = {
  getExpensesList
};
