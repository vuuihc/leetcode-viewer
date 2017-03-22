/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let quickSort = (a,l,r)=>{
        if(l>=r){
            return;
        }
        let base = a[l],low=l,high=r,cur=l;
        while(low<high){
            while(low<high && a[high]>=base){
                high--;
            }
            while(low<high && a[low]<=base){
                low++;
            }
            a[cur] = a[high];
            a[high] = a[low];
            cur = low;
        }
        a[cur] = base;
        quickSort(a,l,cur);
        quickSort(a,cur+1,r);
    }
    quickSort(nums,0,nums.length-1);
};