

const setup = function(value) {
  let arr = [];
  for(let i=parseInt(value, 10);i>0;i--){
    arr.push(i);
  }
  return {type:'SET_UP', payload: arr};
};


const move = function(from, to, aux){
  return {type:'MOVE', payload: {from:from, to:to, aux:aux}};
};



export { setup, move };
