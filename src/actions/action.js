

const setup = function(value) {
  let arr = [];
  for(let i=parseInt(value);i>0;i--){
    arr.push(i);
  }
  return {type:'SET_UP', payload: arr};
};


const show = function(towerA, towerB, towerC){
  debugger
  let towers = [towerA, towerB, towerC];

  return {type:'SHOW', payload: towers.sort(function(a, b){
    return a.keys()[0] - b.keys()[0];
  })
};
};

export { setup, show };
