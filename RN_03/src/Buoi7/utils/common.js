export const getResultGame = (playerSelect, computerSelect) => {
  let times = 0;
  let scores = 0;
  switch (playerSelect) {
    case 'rock':
      switch (computerSelect) {
        case 'scissor':
          times = 1;
          scores = 1;
          break;
        case 'paper':
          times = -1;
          break;
        default:
          break;
      }
      break;
    case 'paper':
      switch (computerSelect) {
        case 'rock':
          times = 1;
          scores = 1;
          break;
        case 'scissor':
          times = -1;
          break;
        default:
          break;
      }
      break;
    default:
      switch (computerSelect) {
        case 'paper':
          times = 1;
          scores = 1;
          break;
        case 'rock':
          times = -1;
          break;
        default:
          break;
      }
      break;
  }
  return {times, scores};
};
