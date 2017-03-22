/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0,right=0,l=0,h={};
    while(right<s.length){
        if(h[s[right]]!==undefined && left<=h[s[right]]){
            left=h[s[right]]+1;
        }
        // console.log(left,right,l);
        h[s[right]]=right;
        l=Math.max(l,right-left+1);
        right++;
    }
    return l;
};