import { Coffee, DRINK_COFFEE } from './Coffee';

describe('coffee/hyper actions', () => {
  it('creates an add coffee action', () => {
    const action = Coffee(1, 2);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: {
        coffees: 1
      }
    });
  });
});
