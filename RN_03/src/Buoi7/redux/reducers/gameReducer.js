import {paper, rock, scissor} from '../../images';
import {
  CAL_RESULT,
  USER_PLAY,
  USER_RESET,
  USER_SELECT,
} from '../actions/gameAction';
import {getResultGame} from '../../utils/common';
const initState = {
  playerSelect: {id: 'scissor', image: scissor},
  computerSelect: {id: 'rock', image: rock},
  listSelect: [
    {id: 'scissor', image: scissor},
    {id: 'rock', image: rock},
    {id: 'paper', image: paper},
  ],
  scores: 0,
  times: 9,
};

const gameReducer = (state = {...initState}, action) => {
  switch (action.type) {
    case USER_SELECT:
      state.playerSelect = action.payload;
      return {...state};
    case USER_PLAY:
      state.computerSelect = state.listSelect[Math.floor(Math.random() * 3)];
      return {...state};
    case CAL_RESULT:
      const {playerSelect, computerSelect} = state;
      const {times, scores} = getResultGame(playerSelect.id, computerSelect.id);
      console.log(times, scores);
      state.times += times;
      state.scores += scores;
      return {...state};
    case USER_RESET:
      return {...initState};
    default:
      return state;
  }
};

export default gameReducer;
