

const setup = function(value) {
  let arr = [];
  for(let i=parseInt(value);i>0;i--){
    arr.push(i);
  }
  return {type:'SET_UP', payload: arr};
};

export { setup };
