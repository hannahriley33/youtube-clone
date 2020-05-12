export const ADD_NAP = 'ADD_NAP';
export const addNap = (coffees, naps) => ({
  type: ADD_NAP,
  payload: {
    coffees,
    naps
  }
});
