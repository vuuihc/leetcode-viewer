/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
    // let compareString = (str1,str2)=>{
    //     for(let i=0;i<str1.length;i++){
    //         if(str1[i]!==str2[i]){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    let length = str.length;
    for(let i=2;i<=length;i++){
        if(length%i===0){
            let subLength = length/i,
                flag = true;
            let firstBase = str.slice(0,subLength);
            for(let j=1;j<i;j++){
                let seg = str.slice(subLength*j,subLength*(j+1));
                if(seg!==firstBase){
                    flag = false;
                    break;
                }
            }
            if(flag){
                return flag;
            }
        }
    }
    return false;
};