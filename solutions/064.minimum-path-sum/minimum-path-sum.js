/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length,
        n=grid[0].length,
        sum = Array.from({length:m},(v,k)=>Array.from({length:n},(v,k)=>grid[0][0]));//空间可以优化
    for(let i=1;i<m;i++){
        sum[i][0] = sum[i-1][0] + grid[i][0];
    }
    for(let j=1;j<n;j++){
        sum[0][j] = sum[0][j-1] + grid[0][j];
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            sum[i][j] = Math.min(sum[i-1][j],sum[i][j-1]) + grid[i][j];
        }
    }
    return sum[m-1][n-1];
};