import { addEducated } from '../actions/Educated';
import reducer from '../reducers/educatedReducer';

describe('educated reducer', () => {
  it('handles the ADD_EDUCATED action', () => {
    const state = [];
    const action = addEducated(1);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      studies: 1
    }]);
  });
});
