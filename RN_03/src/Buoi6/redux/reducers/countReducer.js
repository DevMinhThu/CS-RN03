import {COUNT_UP, COUNT_DOWN} from '../actions/countAction';

const initState = {
  number: 0,
};

const countReducer = (state = initState, action) => {
  console.log('countReducer', action.type);

  switch (action.type) {
    case COUNT_UP:
      state.number += 1;
      console.log('COUNT_UP', state);
      return {...state};

    case COUNT_DOWN:
      return {...state, number: state.number - 1};

    case 'RESET':
      return {number: 0};

    default:
      return state;
  }
};

export default countReducer;
