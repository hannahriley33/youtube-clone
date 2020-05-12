import { addNap, ADD_NAP } from './Nap';

describe('NAP actions', () => {
  it('creates an add NAP action', () => {
    const action = addNap(1, 2);

    expect(action).toEqual({
      type: ADD_NAP,
      payload: {
        coffees: 1,
        naps: 2
      }
    });
  });
});
