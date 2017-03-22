/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums=nums;
    for(let i=1;i<nums.length;i++){
        this.nums[i] += this.nums[i-1]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    // this.memorization={};
    // function getResult(i,j){
    //     let result=0;
    //     if(i===j){
    //         return this.nums[i];
    //     }else if(this.memorization[i+"-"+j]){
    //         return this.memorization[i+"-"+j];
    //     }else{
    //         let middle=i+((j-i)>>1);
    //         result= getResult(i,middle)+getResult(middle+1,j);
    //         this.memorization[i+"-"+j] = result;
    //         return result;
    //     }
    // }
    // return getResult.apply(this,i,j);
    return i>=1?this.nums[j]-this.nums[i-1]:this.nums[j];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */