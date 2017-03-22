/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let counter1=0,
        counter2=0,
        m1,m2;
    for(let i=0; i<nums.length;i++){
        if(nums[i]===m1){
            counter1++;
        }else if(nums[i]===m2){
            counter2++;
        }else if(counter1===0){
            m1=nums[i];
            counter1 =1;
        }else if(counter2===0){
            m2=nums[i];
            counter2 =1;
        }else {
            counter1--;
            counter2--;
        }
    }
    return [m1,m2].filter(m=>nums.filter(i=>i===m).length*3>nums.length);
};