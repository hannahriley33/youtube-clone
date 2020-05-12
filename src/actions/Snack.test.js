import { Snack, EAT_SNACK } from './Snack';

describe('snack actions', () => {
  it('creates an + snack action', () => {
    const action = Snack(2);

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });
});
