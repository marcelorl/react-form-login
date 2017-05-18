export const ON_CHANGE = 'ON_CHANGE';
export const ON_LOGIN_SUCCESS = 'ON_LOGIN_SUCCESS';
export const ON_LOGIN_FAIL = 'ON_LOGIN_FAIL';
export const ON_LOGOUT = 'ON_LOGOUT';

const onChange = () => {
  return {
    type: ON_CHANGE
  }
};

const onLoginSuccess = () => {
  return {
    type: ON_LOGIN_SUCCESS
  }
};

const onLoginFail = () => {
  return {
    type: ON_LOGIN_FAIL
  }
};

export const logout = () => {
  return dispatch => {
    dispatch();
  }
};

export const login = () => {
  return dispatch => {
    dispatch();
  }
};

export const change = () => {
  return dispatch => {
    dispatch();
  }
};
