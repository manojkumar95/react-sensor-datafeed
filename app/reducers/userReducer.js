import { fromJS } from 'immutable';

import userActions from '../constants/userAction';

const initialState = fromJS({
  sensorId: ''
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.GET_USER:
      return state.set('loading', true);
    case userActions.GET_USER_SUCCESS:
      return state
        .set('sensorId', action.user.sensorId)
        .set('loading', false);
    case userActions.GET_USER_ERROR:
      return state
        .set('userError', action.error)
        .set('loading', false);
    default:
      return state;
  }
};

export default userReducer;
