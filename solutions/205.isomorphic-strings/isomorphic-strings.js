/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false;
    let a={};
    for(let i=0;i<s.length;i++){
        if(a[s[i]]){
            if(a[s[i]]!==t[i]){
                return false;
            }
        }else{
            a[s[i]] = t[i];
        }
    }
    a = {};
    for(let i=0;i<t.length;i++){
        if(a[t[i]]){
            if(a[t[i]]!==s[i]){
                return false;
            }
        }else{
            a[t[i]] = s[i];
        }
    }
    return true;
    
};