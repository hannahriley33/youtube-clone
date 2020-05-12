import { addTired, ADD_TIRED } from './Tired';

describe('tired actions', () => {
  it('creates an add tired action', () => {
    const action = addTired(1, 2);

    expect(action).toEqual({
      type: ADD_TIRED,
      payload: {
        coffees: 1,
        naps: 2
      }
    });
  });
});
