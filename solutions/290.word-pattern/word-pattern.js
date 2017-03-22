/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr1 = pattern.split(""),arr2=str.split(" "),hashTable = {},hashTable1 = {}
    if(arr1.length!=arr2.length) return false
    var flag = true
    arr1.forEach((item,index)=>{
        if(hashTable[item]){
            if(hashTable[item]!=arr2[index]){
                flag= false
            }
        }else{
            hashTable[item] = arr2[index]
        }
    })
    arr2.forEach((item,index)=>{
        if(hashTable1[item]){
            if(hashTable1[item]!=arr1[index]){
                flag= false
            }
        }else{
            hashTable1[item] = arr1[index]
        }
    })
    return flag
};