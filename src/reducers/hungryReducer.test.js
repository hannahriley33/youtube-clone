import { addHungry } from '../actions/Hungry';
import reducer from '../reducers/hungryReducer';

describe('hungry reducer', () => {
  it('handles the ADD_HUNGRY action', () => {
    const state = [];
    const action = addHungry(1);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      snacks: 1
    }]);
  });
});
