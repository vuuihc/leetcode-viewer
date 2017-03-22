/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // function getResult(n){
    //     if(n===1||n===0) return 1;
    //     let result = 0;
    //     for(let i=1;i<=n;i++){
    //         if(i===1||i===2){
    //             result += getResult(n-i);
    //         }
    //     }
    //     return result;
    // }
    let dp =[];
    dp[0]=1;
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
    
};