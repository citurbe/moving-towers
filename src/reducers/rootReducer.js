import { combineReducers } from 'redux';

function towers(state={tower1:[], tower2:[], tower3:[]}, action) {
  switch(action.type) {
    case 'SET_UP':
      return {tower1:action.payload, tower2:[],tower3:[]};
    case 'MOVE':
      let to = action.payload.to;
      let from = action.payload.from;
      let aux = action.payload.aux;
      to.discs.push(from.discs.pop());
      let changeObject = {};
      changeObject[`tower${from.id}`] = [...from.discs];
      changeObject[`tower${to.id}`] = [...to.discs];
      changeObject[`tower${aux.id}`] = [...aux.discs];
      let newState = Object.assign({}, state, changeObject);
      console.log(newState);
      return newState;
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
