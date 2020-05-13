import { takeNap, TAKE_NAP } from './Nap';

describe('NAP actions', () => {
  it('creates an tajke NAP action', () => {
    const action = takeNap(1);

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });
});
