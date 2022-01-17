import { COLORS, MODES } from '../../utils/constants';
import { UPDATE_SETTINGS, CHANGE_MODE } from './actionTypes';

export const REDUCER = 'Store';

let initialState = {
  color: COLORS.POMODORO,
  //payload: 60,
  currentMode: MODES.POMODORO, // | long-break | short-break
  pomodorDuration: 120,
  longBreakDuration: 240,
  shortBreakDuration: 180,
  autoStartBreak: false,
  autoStartPomodoro: false,
  longBreakIntervalCycle: 2,
};
let Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        color: action.payload.color,
        currentMode: action.payload.mode, // 'pomodor' | sh | lnshortBreakDuration
      };
    case UPDATE_SETTINGS:
      return {
        ...state,
        pomodorDuration: action.payload.pomodorDuration * 60,
        longBreakDuration: action.payload.longBreakDuration * 60,
        shortBreakDuration: action.payload.shortBreakDuration * 60,
        autoStartBreak: action.payload.autoStartBreak,
        autoStartPomodoro: action.payload.autoStartPomodoro,
        longBreakIntervalCycle: action.payload.longBreakIntervalCycle,
      };
    default:
      return state;
  }
};
export { Reducer };
