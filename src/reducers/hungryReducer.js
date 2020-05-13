import { ADD_HUNGRY } from '../actions/Hungry';


export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_HUNGRY:
      return [...state, action.payload];
    default:
      return state;
  }
}
