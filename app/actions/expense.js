import expenseAction from '../constants/expenseAction';

/**
 * Actions to fetch expense list
 */
const getLatestSensorDatafeed = sensorId => ({
  type: expenseAction.GET_EXPENSES,
  sensorId
});

const getExpensesSuccess = response => ({
  type: expenseAction.GET_EXPENSES_SUCCESS,
  response
});

const getExpensesError = error => ({
  type: expenseAction.GET_EXPENSES_ERROR,
  error
});

module.exports = {
  getLatestSensorDatafeed,
  getExpensesSuccess,
  getExpensesError
};
