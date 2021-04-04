//-- My Explicit solution for :
//https://www.codewars.com/kata/5765870e190b1472ec0022a2
//https://www.codewars.com/kata/57658bfa28ed87ecfa00058a

function Maze(maze) {
  this.arch = maze.split("\n").map(a => a.split(""));
  this.queue = [];
  //-- a table to keep track of what's inside the queue 
  this.qTable = {};
  this.boudnaryY = this.arch.length;
  this.boudnaryX = this.arch[0].length;

  this.isInMaze = (y, x) => {
    if (x >= 0 && x < this.boudnaryX && y >= 0 && y < this.boudnaryY) return true;
    return false;
  }

  this.cells = [];

  this.parse = () => {
    for (let i = this.arch.length - 1; i > -1; i--) {
      let rowCells = [];
      for (let j = this.arch[0].length - 1; j > -1; j--) {
        rowCells.unshift(this.arch[i][j] == "W" ? null : new cell(i, j, this));
      }
      this.cells.unshift(rowCells);
    }
    this.cells.forEach(a => a.filter(x => x != null).forEach(b => b.assignNeighbours(this)));
  }

  this.canBeSolved = () => {
    this.cells[this.boudnaryY - 1][this.boudnaryX - 1].setCellValue(0)
    return this.cells[0][0].distanceToExit < Infinity;
  }
}

function cell(y, x, maze) {
  this.x = x;
  this.y = y;
  this.maze = maze;
  this.distanceToExit = Infinity; 
  this.North = this.South =this.East =  this.West = null;

  this.assignNeighbours = () => {
    if (this.maze.isInMaze(this.y - 1, this.x)) this.North = maze.cells[this.y - 1][this.x];
    if (this.maze.isInMaze(this.y + 1, this.x)) this.South = maze.cells[this.y + 1][this.x];
    if (this.maze.isInMaze(this.y, this.x + 1)) this.East = maze.cells[this.y][this.x + 1];
    if (this.maze.isInMaze(this.y, this.x - 1)) this.West = maze.cells[this.y][this.x - 1];
  }
  
  this.neighbors = () => [this.North, this.South, this.East, this.West].filter(x => x != null);
  
  this.updateDistance = () => {
    let newVal = this.getLowestNeighbor();
    let maze = this.maze;
    //-- check to see if the value was updated, then we would need to update the other neighbors
    if (newVal != this.distanceToExit - 1) {
      this.distanceToExit = newVal + 1;
      this.neighbors()
        //-- get Only items that aren't present in the table
        .filter(a => maze.qTable[a.x + "," + a.y] === undefined)
        .forEach(a => {
          maze.qTable[a.x + "," + a.y] = "1";
          maze.queue.push(a);
        });

      delete this.maze.qTable[this.x + "," + this.y];
    }
  }

  this.getLowestNeighbor = () => {
    let val = [this.distanceToExit - 1, ...this.neighbors().map(x => x.distanceToExit)]
      .reduce((a, b) => Math.min(a, b));
    return val;
  }

  this.setCellValue = (val) => {
    this.distanceToExit = val;
    let maze = this.maze;
    
    this.neighbors()
      .forEach(a => {
        if (maze.qTable[a.x + "," + a.y] === undefined) {
          maze.qTable[a.x + "," + a.y] = "1";
          maze.queue.push(a);
        }
      });

    while (maze.queue.length > 0) {
      //dequeues the queue
      let cell = maze.queue.shift();
      cell.updateDistance();
    }
  }
}

//-- The function that code wars uses
function pathFinder(maze) {
  let theMaze = new Maze(maze);
  theMaze.parse();
  return theMaze.canBeSolved();
}


//-- Test Case 
var mo = `...W......
...W.W.W..
W....WWWW.
.WWWW.W...
W.W.......
..W.WW..W.
W......W..
...WWWWW..
..WWW.....
........W.`
let theMaze = new Maze(mo)
theMaze.parse()
theMaze.cells;
theMaze.cells[theMaze.cells.length - 1][theMaze.cells[0].length - 1].setCellValue(0);
