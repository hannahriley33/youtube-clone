import { addHyper, ADD_HYPER } from './Hyper';

describe('hyper actions', () => {
  it('creates an add hyper action', () => {
    const action = addHyper(1, 2);

    expect(action).toEqual({
      type: ADD_HYPER,
      payload: {
        coffees: 1
      }
    });
  });
});
