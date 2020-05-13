import { ADD_EDUCATED } from '../actions/Educated';


export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_EDUCATED:
      return [...state, action.payload];
    default:
      return state;
  }
}
