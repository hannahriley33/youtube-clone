import { addHungry, ADD_HUNGRY } from './Hungry';

describe('hungry actions', () => {
  it('creates an add hungry action', () => {
    const action = addHungry(2);

    expect(action).toEqual({
      type: ADD_HUNGRY,
      payload: {
        snacks: 2
      }
    });
  });
});
