/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let l=s.length,
        low=high=0,maxLen=1;
    if(l<2){
        return s;
    }
    let extendPalindrome = (s,j,k)=>{
        while(j>=0 && k<=l && s[j]===s[k]){
            j--;
            k++;
        }
        if(k-j-1>maxLen){
            // console.log("j",j,"k",k);
            maxLen = k-j-1;
            low = j+1;
            high = k-1;
        }
    }
    for(let i=0;i<l;i++){
        extendPalindrome(s,i,i);
        extendPalindrome(s,i,i+1);
    }
    // console.log(low,high);
    return s.substring(low,high+1);
};