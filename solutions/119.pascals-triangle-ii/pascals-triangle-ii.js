/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pre,current = [1];
    for(let i=0;i<rowIndex;i++){
        pre = current,
        current = [];
        for(let j=0;j<pre.length;j++){
            if(j===0){
                current.push(0+pre[j])
            }else{
                current.push(pre[j]+pre[j-1])
            }
        }
        current.push(1);
    }
    return current;
};