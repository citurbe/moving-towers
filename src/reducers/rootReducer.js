import { combineReducers } from 'redux';
const discs = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function towers(state={tower1:discs, tower2:[6, 5, 4, 3, 2, 1], tower3:[4, 3, 2, 1]}, action) {
  switch(action.type) {
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
