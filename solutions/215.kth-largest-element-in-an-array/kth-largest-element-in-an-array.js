/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let partition = (array,left,right)=>{
        let base = array[left],curIndex=left,
            low=left,high=right;
        // console.log(low,high);
        while(low<high){
            while(low<high && array[high] <= base){
                high--;
            }
            while(low<high && array[low] >= base){
                low++;
            }
            array[curIndex]=array[high];
            array[high]=array[low];
            curIndex=low;
        }
        array[curIndex]=base;
        return curIndex;
    }
    // k=nums.length-k;
    let low=0,high=nums.length-1,j=0;
    while(low<=high){
        j = partition(nums,low,high);
        console.log(j+1,"th",nums[j]);
        // console.log(low,high);
        // console.log(nums);
        if(j+1>k){
            high=j-1;
        }else if(j+1<k){
            low=j+1;
        }else{
            break;
        }
    }
    console.log("K",k);
    return nums[k-1];
};