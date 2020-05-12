export const DRINK_COFFEE = 'DRINK_COFFEE';
export const Coffee = (coffees) => ({
  type: DRINK_COFFEE,
  payload: {
    coffees
  }
});
