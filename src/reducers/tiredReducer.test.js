import { addTired } from '../actions/Tired';
import reducer from '../reducers/tiredReducer';

describe('tired reducer', () => {
  it('handles the ADD_TIRED action', () => {
    const state = [];
    const action = addTired(1, 2);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      coffees: 1,
      naps: 2
    }]);
  });
});
