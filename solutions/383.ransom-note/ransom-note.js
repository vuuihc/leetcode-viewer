/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let h=Array.from({length:256},(v,i)=>0);
    for(let i=0;i<magazine.length;i++){
        h[magazine.charCodeAt(i)]++;
    }
    for(let i=0;i<ransomNote.length;i++){
        if(h[ransomNote.charCodeAt(i)]<=0) return false;
        h[ransomNote.charCodeAt(i)]--;
    }
    return true;
};