import React, { Component } from 'react';
import Controls from '../controls/Controls';
import Face from '../../components/face/Face';

// turn these into actions
export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export default class Moods extends Component {
  // use selectors to grab states
  
  
  // state = {
  //   coffees: 0,
  //   snacks: 0,
  //   naps: 0,
  //   studies: 0
  // }


  handleSelection = action => {
    switch(action.type) {
      case 'DRINK_COFFEE':
        dispatch(addHyper(coffees))
        break;
      case 'EAT_SNACK':
        this.setState(state => ({ snacks: state.snacks + 1 }));
        break;
      case 'TAKE_NAP':
        this.setState(state => ({ naps: state.naps + 1 }));
        break;
      case 'STUDY':
        this.setState(state => ({ studies: state.studies + 1 }));
        break;
      default:
        console.log(`unhandled type: ${action.type}`);
    }
  }

  render() {
    const { coffees, snacks, naps, studies } = this.state;
    const face = getFace(this.state);

    return (
      <>
        <Controls>
          <button onClick={() => handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
          <button onClick={() => handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
          <button onClick={() => handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
          <button onClick={() => handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
        </Controls>
        <Face emoji={face} />
      </>
    );
  }
}
