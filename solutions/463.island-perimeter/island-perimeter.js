/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var rowSides = [],colSides=[]
    for(var i=0;i<grid.length;i++){
        if(grid[i][0]===0)
          rowSides[i] = 0
        else
          rowSides[i] = 1
        for(var j=1;j<grid[0].length;j++){
            if(grid[i][j-1]===0&&grid[i][j]===1)
              rowSides[i] += 1
        }
    }
    for(var i=0;i<grid[0].length;i++){
        if(grid[0][i]===0)
          colSides[i] = 0
        else
          colSides[i] = 1
        for(var j=1;j<grid.length;j++){
            if(grid[j-1][i]===0&&grid[j][i]===1)
              colSides[i] += 1
        }
    }
    var sum = (a,b)=>a+b
    return 2*(rowSides.reduce(sum) + colSides.reduce(sum))
};