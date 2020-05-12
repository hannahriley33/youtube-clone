import { combineReducers } from 'redux';
import educatedReducer from './educatedReducer';
import hungryReducer from './hungryReducer';
import hyperReducer from './hyperReducer';
import tiredReducer from './tiredReducer';

export default combineReducers({
  educatedReducer: educatedReducer,
  hungryReducer: hungryReducer,
  hyperReducer: hyperReducer,
  tiredReducer: tiredReducer
});
