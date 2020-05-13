import { addHyper} from '../actions/Hyper';
import reducer from '../reducers/hyperReducer';

describe('hyper reducer', () => {
  it('handles the ADD_HYPER action', () => {
    const state = [];
    const action = addHyper(100);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      coffees: 100
    }]);
  });
});
