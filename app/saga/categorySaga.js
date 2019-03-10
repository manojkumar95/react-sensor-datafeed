import { call, put } from 'redux-saga/effects';
import {
  getCategorySuccess,
  getCategoryError

} from '../actions/category';
import { getCategories } from '../service/category';

/**
 * Generator method to get all categories
 * @param {object} action
 */
function* getCategoryList(action) {
  try {
    const { dataId } = action;
    const response = yield call(getCategories, dataId);
    yield put(getCategorySuccess(response));
  } catch (e) {
    yield put(getCategoryError(e));
  }
}

module.exports = {
  getCategoryList
};
