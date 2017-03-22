/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let quickSort = (array,left,right)=>{
        if(left>=right){
            return;
        }
        let base=array[left],low=left,high=right,curIndex=left;
        while(low<high){
            while(low<high && array[high]>=base){
                high--;
            }
            while(low<high && array[low]<=base){
                low++;
            }
            array[curIndex] = array[high];
            array[high] = array[low];
            curIndex = low;
        }
        array[curIndex] = base;
        quickSort(array,left,curIndex);
        quickSort(array,curIndex+1,right);
    }
    quickSort(citations,0,citations.length-1);
    for(let i=0;i<citations.length;i++){
        if(citations[i]>=citations.length-i){
            return citations.length - i;
        }
    }
    return 0;
};