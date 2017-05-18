import {
  USER_COORDS_REQUEST_FETCH,
  USER_COORDS_SUCCESS_FETCH,
  USER_SUCCESS_SAVE,
  USER_LOGOUT
} from 'actions/auth';

const INITIAL_STATE = {
  loading: false, user: {}, logged: false, error: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_COORDS_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        position: {}
      });
    case USER_COORDS_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        position: action.position
      });
    case USER_SUCCESS_SAVE:
      return Object.assign(state, {
        error: '',
        loading: false,
        logged: true,
        user: action.user
      });
    case USER_LOGOUT:
      return Object.assign(state, {
        error: '',
        logged: false,
        user: {}
      });
    default:
      return state
  }
};

export default authReducer;
