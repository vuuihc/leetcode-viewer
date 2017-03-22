/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = {
        1:"*",
        2:"abc",
        3:"def",
        4:"ghi",
        5:"jkl",
        6:"mno",
        7:"pqrs",
        8:"tuv",
        9:"wxyz"
    },
    result=[];
    let recursive = (parentStr,remainDigit)=>{
        if(remainDigit.length===0){
            if(parentStr.length!==0){
                result.push(parentStr);   
            }
            return;
        }
        let curChars = map[remainDigit[0]];
        for(let i = 0;i<curChars.length;i++){
            recursive(parentStr+curChars[i],remainDigit.slice(1));
        }
    }
    recursive("",digits);
    return result;
};