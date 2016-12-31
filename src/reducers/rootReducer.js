import { combineReducers } from 'redux';

function towers(state={tower1:[], tower2:[], tower3:[]}, action) {
  switch(action.type) {
    case 'SET_UP':
      return {tower1:action.payload, tower2:[],tower3:[]};
    case 'SHOW':
      return {tower1:action.payload[0], tower2:action.payload[1], tower3:action.payload[2]};
    default:
      return state;
  }
}

function speed(state=0, action) {
  switch(action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({towers, speed});

export default rootReducer;
