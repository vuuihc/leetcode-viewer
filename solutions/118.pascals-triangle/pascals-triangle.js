/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [],
        pre,
        current = [1];
    if(numRows>0){
        result.push(current);
    }
    for(let i=0;i<numRows-1;i++){
        pre = current,
        current = [];
        for(let j=0;j<pre.length;j++){
            if(j===0){
                current.push(1);
            }else{
                current.push(pre[j]+pre[j-1]);
            }
        }
        current.push(1);
        result.push(current);
    }
    return result;
};