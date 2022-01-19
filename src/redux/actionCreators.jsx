import { useDispatch } from 'react-redux';
import { COLORS, MODES, BTNCOLOR } from '../utils/constants';
import { CHANGE_MODE } from './Reducer/actionTypes';
export const changeModeFunc = (color, mode) => ({
  type: CHANGE_MODE,
  payload: {
    color,
    mode,
  },
});
