/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = [],j=0;
    if(strs.length<2) return strs[0] || "";
    while(true){
        if(prefix[j]===undefined) prefix[j]= strs[0][j];
        for(let i=1;i<strs.length;i++){
            if(strs[i][j]!==prefix[j] || strs[i][j]===undefined){
                prefix.pop();
                return prefix.join("");
            }
        }
        j++;
    }
};