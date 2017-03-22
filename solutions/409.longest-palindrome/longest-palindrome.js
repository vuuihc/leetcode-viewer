/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let h = Array.from({length:256},(v,i)=>0),count=0,hasOdd=false;
    // console.log(h);
    for(let i=0;i<s.length;i++){
        h[s.charCodeAt(i)]++;
        // console.log(s.charCodeAt(i));
    }
    // console.log(h);
    for(let i=0;i<h.length;i++){
        count += (h[i]>>1);
        if(!hasOdd && h[i]%2!==0){
            hasOdd = true;
        }
    }
    // console.log(maxOdd);
    if(hasOdd){
        return count*2+1;
    }else{
        return count*2;
    }
};