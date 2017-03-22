/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!==0) return false;
    let stack =[],valid=true;
    for(let i=0;i<s.length && valid;i++){
        switch(s[i]){
            case "(":
            case "{":
            case "[":
                stack.push(s[i]);
                break;
            case "]":
                if(stack.pop()!=="["){
                    valid=false;
                }
                break;
            case "}":
                if(stack.pop()!=="{"){
                    valid=false;
                }
                break;
            case ")":
                if(stack.pop()!=="("){
                    valid=false;
                }
                break;
        }
    }
    return valid && stack.length===0;
};