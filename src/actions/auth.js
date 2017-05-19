export const ON_SUBMIT_STEP_1 = 'ON_SUBMIT_STEP_1';
export const ON_SUBMIT_STEP_2 = 'ON_SUBMIT_STEP_2';

const onSubmitStep1Action = data => {
  return {
    type: ON_SUBMIT_STEP_1,
    data
  }
};

const onSubmitStep2Action = data => {
  return {
    type: ON_SUBMIT_STEP_2,
    data
  }
};

export const onSubmitStep1 = data => {
  console.log('STEP 1', data);

  return dispatch => {
    dispatch(onSubmitStep1Action(data));
  }
};

export const onSubmitStep2 = data => {
  console.log(data);

  return dispatch => {
    dispatch(onSubmitStep2Action(data));
  }
};
