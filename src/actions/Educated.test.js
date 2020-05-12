import { addEducated, ADD_EDUCATED } from './Educated';

describe('educated actions', () => {
  it('creates an add educated action', () => {
    const action = addEducated(1);

    expect(action).toEqual({
      type: ADD_EDUCATED,
      payload: {
        studies: 1
      }
    });
  });
});
