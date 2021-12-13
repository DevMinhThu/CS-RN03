export const USER_SELECT = 'USER_SELECT';
export const USER_PLAY = 'USER_PLAY';
export const CAL_RESULT = 'CAL_RESULT';
export const USER_RESET = 'USER_RESET';

export const userSelect = payload => ({type: USER_SELECT, payload});
export const userPlay = () => ({type: USER_PLAY});
export const calResult = () => ({type: CAL_RESULT});
export const userReset = () => ({type: USER_RESET});
