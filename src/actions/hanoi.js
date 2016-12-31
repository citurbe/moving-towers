

const hanoi = function(n, source, dest, aux){
  if (n === 0) return;
     hanoi(n-1, source, aux, dest);
     dest.discs.push(source.discs.pop());
     hanoi(n-1, aux, dest, source);
};
