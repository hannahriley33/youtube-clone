import { Study, STUDY } from './Study';

describe('study actions', () => {
  it('creates an add study action', () => {
    const action = Study(1);

    expect(action).toEqual({
      type: STUDY
    });
  });
});
