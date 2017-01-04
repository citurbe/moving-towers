hanoi(tower1, tower2, tower3) {
  // direction of rotation of the smallest disk
  var totalDisks = tower1.discs.length;
  var dir = (totalDisks % 2 === 0) ? 1 : -1;
  var towers = [tower1, tower2, tower3];
  var i, towerMin;

  // towerMin will point to rod with smallest disk
  towerMin = 0;

  // we need (2^numberOfDisks - 1) moves
  var numberOfMoves = (1 << totalDisks) - 1;

  // To avoid using % operator we precompute next and prev tables
  var next = [1, 2, 0];
  var prev = [2, 0, 1];

  var moveSmallest = true;

  for (i = 0; i < numberOfMoves; i++) {
      if (moveSmallest) {
        var oldTowerMin = towerMin;
        // in JS -1 % 3 === -1, we add 3 to get positive result
        towerMin = (oldTowerMin + dir + 3) % 3;

        moveDisk(oldTowerMin, towerMin);
      }
      else {
        if (topDiskSize(next[towerMin]) > topDiskSize(prev[towerMin])) {
          moveDisk(prev[towerMin], next[towerMin]);
        }
        else {
          moveDisk(next[towerMin], prev[towerMin]);
        }
    }
    moveSmallest = !moveSmallest;
  }


  function topDiskSize(towerIndex) {
    if (towers[towerIndex].length === 0) return Number.MAX_VALUE;

    var tower = towers[towerIndex]
    return tower[tower.length-1];
  }

  function moveDisk(from, to){
    let aux = towers.filter(function(tower){tower !== towers[from] && tower !== towers[to]})
    this.props.move(towers[from], towers[to], aux[0])
  }

};
