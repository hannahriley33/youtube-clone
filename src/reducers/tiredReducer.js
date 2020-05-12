import { ADD_TIRED } from '../actions/Tired';


export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TIRED:
      return [...state, action.payload];
    default:
      return state;
  }
}
