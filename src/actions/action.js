

const setup = function(value) {
  let arr = [];
  for(let i=parseInt(value, 10);i>0;i--){
    arr.push(i);
  }
  return {type:'SET_UP', payload: arr};
};


const move = function(from, to){
  return {type:'MOVE', payload: {from:from, to:to}};
};

const setSpeed = function(value) {
  return {type:'SPEED', payload: value};
};

const pause = function() {
  return {type:'PAUSE'};
};

const play = function() {
  return {type:'PLAY'};
};

const reset = function() {
  return {type:'RESET'};
}



export { setup, move, setSpeed, play, pause, reset };
