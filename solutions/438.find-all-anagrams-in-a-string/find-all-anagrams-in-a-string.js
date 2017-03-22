/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let h = Array.from({length:256},(v,k)=>0),l=p.length,result=[];
    for(let i=0;i<p.length;i++){
        h[p.charCodeAt(i)] ++;
    }
    let left = 0,right = 0,count = p.length;
    while(right<s.length){
        if(h[s.charCodeAt(right++)]-->=1) count--;
        if(count===0) result.push(left);
        if(right - left === p.length && h[s.charCodeAt(left++)]++>=0) count++;
    }
    return result;
};