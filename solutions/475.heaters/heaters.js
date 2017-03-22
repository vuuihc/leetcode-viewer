/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let quickSort = (array,left,right) => {
        if(left >= right){
            return;
        }
        let low = left,high = right,curIndex = left,base = array[left];
        while(low < high){
            while(low < high && array[high] >= base){
                high --;
            }
            while(low < high && array[low] <= base){
                low ++;
            }
            array[curIndex] = array[high];
            array[high] = array[low];
            curIndex = low;
        }
        array[curIndex] = base;
        quickSort(array,left,curIndex);
        quickSort(array,curIndex+1,right);
    }
    var binarySearch = (array,key)=>{
        let left=0,right=array.length-1;
        while(left<right){
            let middle = left + ((right - left)>>1);
            if(array[middle] < key){
                left = middle + 1;
            }else if( array[middle] > key){
                right = middle - 1;
            }else{
                return middle;
            }
        }
        if(array[left]<key){
            return -(left+1);
        }
        return -left;
    }
    // quickSort(heaters,0,heaters.length-1);
    heaters.sort((a,b)=>a-b);
    // console.log(heaters);
    let result =  -1;
    let max = 1e9;
    for(let i=0;i<houses.length;i++){
        let index = binarySearch(heaters,houses[i]);
        // console.log("bs return",index);
        if(index<0){
            index = - index;
        }
        let dist1 = index>=1?houses[i]-heaters[index-1]:max;
        let dist2 = index<heaters.length?heaters[index]-houses[i]:max;
        // console.log(index,dist1,dist2);
        result = Math.max(result,Math.min(dist1,dist2));
        // console.log("result",result);
    }
    return result;
};