export const COUNT_UP = '@feature/COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';

export const countUpAction = () => ({type: COUNT_UP});
export const countDownAction = () => ({type: COUNT_DOWN});
export const updateUsernameAction = payload => ({
  type: UPDATE_USERNAME,
  payload,
});
