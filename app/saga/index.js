import { takeLatest } from 'redux-saga/effects';
import userActions from '../constants/userAction';
import categoryActions from '../constants/categoryAction';
import expenseActions from '../constants/expenseAction';

import { getActiveSensor } from './userSaga';
import { getCategoryList } from './categorySaga';
import { getExpensesList } from './expenseSaga';

export default function* saga() {
  // Methods for userSaga
  yield takeLatest(userActions.GET_USER, getActiveSensor);

  // Methods for categorySaga
  yield takeLatest(categoryActions.GET_CATEGORIES, getCategoryList);

  // Methods for expenseSaga
  yield takeLatest(expenseActions.GET_EXPENSES, getExpensesList);
}
