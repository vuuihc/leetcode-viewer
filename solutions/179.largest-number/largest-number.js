/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let strs = nums.map(item=>item.toString());
    if(!/[^0]/.test(strs.join(""))){
        return "0";
    }
    let quickSort = (a,l,r)=>{
        if(l>=r){
            return;
        }else{
            let base = a[l],index=l,low=l;high=r;
            while(low<high){
                while(low<high && a[high]+base<=base+a[high]){
                    high--;
                }
                while(low<high && a[low]+base>=base+a[low]){
                    low++;
                }
                a[index] = a[high];
                a[high] = a[low];
                index = low;
            }
            a[index] = base;
            quickSort(a,l,index);
            quickSort(a,index+1,r);
        }
    }
    quickSort(strs,0,strs.length-1);
    return strs.join("");
};