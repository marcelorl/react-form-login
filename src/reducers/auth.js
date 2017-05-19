import {
  ON_SUBMIT_STEP_1,
  ON_SUBMIT_STEP_2
} from 'actions/auth';

const INITIAL_STATE = {
  step1: {}, step2: {}, errors: {}, valid: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_SUBMIT_STEP_1:
      return Object.assign({}, state, {
        error: {},
        valid: false
      });
    case ON_SUBMIT_STEP_2:
      return Object.assign(state, {
        error: {},
        valid: false
      });
    default:
      return state
  }
};

export default authReducer;
