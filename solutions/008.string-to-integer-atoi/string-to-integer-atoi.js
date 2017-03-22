/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str.length===0) return 0;
    s = str.trim();
    let l=s.length,
        result=0,level=0,
        charCode0 = "09".charCodeAt(0),
        charCode9 = "09".charCodeAt(1),
        charCodeEqual = "=".charCodeAt(0);
        // isBegin=false;
    for(let i=l-1;i>=0;i--){
        if((s.charCodeAt(i)<charCode0 || s.charCodeAt(i)>charCode9)){
            // if(isBegin){
                if(i===0){
                    if(s[i]==="-"){
                        result = -result;
                    }else if(s[i]!=="+"){
                        result=0;
                    }
                }else{
                    result=0;
                    level=0;
                }
            // }
        }else{
            // if(!isBegin){
            //     isBegin = true;
            // }
            result+=(s.charCodeAt(i)-charCode0)*Math.pow(10,level);
            level++;
        }
    }
    if(result>2147483647) result = 2147483647;
    if(result<-2147483648) result = -2147483648;
    return result;
};