/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var quickSort = (nums,left,right)=>{
        if(left>=right){
            return;
        }else{
            let base = nums[left],low=left,high=right,curIndex=left;
            while(low<high){
                while(low<high && nums[high]>=base){
                    high--;
                }
                while(low<high && nums[low]<=base){
                    low++;
                }
                nums[curIndex]=nums[high];
                nums[high]=nums[low];
                curIndex = low; 
            }
            nums[curIndex]=base;
            quickSort(nums,left,curIndex);
            quickSort(nums,curIndex+1,right);
        }
    };
    let count = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-count-1]){
            count++;
        }else{
            nums[i-count] = nums[i];//把后面的向前移动count位
        }
    }
    return nums.length-count;
};