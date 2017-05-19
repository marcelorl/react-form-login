import {
  ON_SUBMIT_STEP_1,
  ON_SUBMIT_STEP_2
} from 'actions/auth';

const INITIAL_STATE = {
  step1: { name: '', age: '' }, step2: { birthDate: '', gender: '' }
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_SUBMIT_STEP_1:
      return Object.assign({}, state, { step1: action.data });
    case ON_SUBMIT_STEP_2:
      return Object.assign({}, state, { step2: action.data });
    default:
      return state
  }
};

export default authReducer;
