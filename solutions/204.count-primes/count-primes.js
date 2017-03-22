/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let h = [],count = 0;
    for(let i=2;i*i<n;i++){
        if(!h[i]){
            for(let j=i;j*i<n;j++){
                h[i*j]=true;
            }
        }
        
    }
    for(let i=2;i<n;i++){
        if(!h[i]){
            count++;
        }
    }
    return count;
};