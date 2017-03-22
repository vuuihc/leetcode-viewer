/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let h = {};
    for(let i=0;i<nums.length;i++){
        if(h[nums[i]]!==undefined){
            h[nums[i]]--;
        }else{
            h[nums[i]]=1;
        }
    }
    // console.log(h);
    for(let i in h){
        if(h[i]===1){
            return Number(i);
        }
    }
    // h.forEach((v,i)=>{
    //     console.log(v,i);
    //     if(v===1){
    //         return i;
    //     }
    // })
};