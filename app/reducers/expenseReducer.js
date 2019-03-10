import { fromJS } from 'immutable';
import expenseAction from '../constants/expenseAction';

const initialState = fromJS({
  expensesList: [],
  loading: false
});

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    // get expense list
    case expenseAction.GET_EXPENSES:
      return state
        .set('loading', true)
        .set('expensesList', []);
    case expenseAction.GET_EXPENSES_SUCCESS:
      return state
        .set('loading', false)
        .set('expensesList', action.response);
    case expenseAction.GET_EXPENSES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
};

export default expenseReducer;
