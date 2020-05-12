import { ADD_NAPS } from '../actions/Naps';


export default function reducer(state = {}, action) {
  switch(action.type) {
    case ADD_NAPS:
      return { ...state, naps: state.naps + 1 };
    default:
      return state;
  }
}
