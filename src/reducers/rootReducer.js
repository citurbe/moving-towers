import { combineReducers } from 'redux';

function towers(state={tower1:[], tower2:[], tower3:[]}, action) {
  switch(action.type) {
    case 'SET_UP':
      return Object.assign({}, state, {tower1:action.payload});
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
