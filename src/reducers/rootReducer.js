import { combineReducers } from 'redux';

function towers(state={tower1:[], tower2:[], tower3:[]}, action) {
  switch(action.type) {
    case 'SET_UP':
      return {tower1:action.payload, tower2:[],tower3:[]};
    case 'MOVE':
      let to = action.payload.to;
      let from = action.payload.from;
      to.discs.push(from.discs.pop());
      let changeObject = {};
      changeObject[`tower${from.id}`] = [...from.discs];
      changeObject[`tower${to.id}`] = [...to.discs];
      return Object.assign({}, state, changeObject);
    case 'RESET':
      return {tower1:[], tower2:[], tower3:[]};
    default:
      return state;
  }
}

function speed(state=950, action) {
  switch(action.type) {
    case 'SPEED':
      return action.payload;
    case 'RESET':
      return 950;
    default:
      return state;
  }
}

function status(state='ready', action) {
  switch(action.type) {
    case 'PAUSE':
      return 'stop';
    case 'PLAY':
      return 'go';
    case 'RESET':
      return 'ready';
    default:
      return state;
  }
}

const rootReducer = combineReducers({towers, speed, status});

export default rootReducer;
