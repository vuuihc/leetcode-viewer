/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let h = Array.from({length:256},(v,i)=>0),result;
    for(let i=0;i<t.length;i++){
        h[t.charCodeAt(i)]++;
    }
    for(let i=0;i<s.length;i++){
        h[s.charCodeAt(i)]--;
    }
    h.forEach((v,i)=>{
        if(v>0){
            result = String.fromCharCode(i);
        }
    })
    return result;
};