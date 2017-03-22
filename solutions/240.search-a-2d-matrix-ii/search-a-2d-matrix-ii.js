/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let bs = (matrix,isRow,row=0,column=0,target)=>{
        let left=0,
            length=isRow?matrix[0].length:matrix.length,
            right=length-1,
            leftValue=isRow?matrix[row][left]:matrix[left][column];
        while(left<=right){
            let middle=left+((right-left)>>1),
                middleValue = isRow?matrix[row][middle]:matrix[middle][column];
            if(middleValue===target){
                return true;
            }else if(middleValue>target){
                right=middle-1;
            }else{
                left=middle+1;
            }
        }
        return false;
    }
    for(let i=0;i<matrix.length;i++){
        let result = bs(matrix,true,i,0,target);
        console.log(result);
        if(result) return true;
    }
    return false;
};