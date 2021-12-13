import {UPDATE_USERNAME} from '../actions/countAction';

const initState = {
  username: '',
  address: '',
};

const userReducer = (state = initState, action) => {
  console.log('userReducer', action.type);
  switch (action.type) {
    case UPDATE_USERNAME:
      state.username = action.payload;
      return {...state};
    case 'RESET':
      return {username: '', address: ''};
    default:
      return state;
  }
};

export default userReducer;
