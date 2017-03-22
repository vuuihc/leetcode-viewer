/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let al=a.length,bl=b.length,preCache="0",result,str="";
    let add2number = (c,d,cache)=>{
        let result;
        switch(c+d){
            case "00":
                result=cache;
                cache="0";
                break;
            case "01":
            case "10":
                if(cache==="1"){
                    result="0";
                    cache="1";
                }else{
                    result="1";
                }
                break;
            case "11":
                result=cache;
                cache="1";
                break;
        }
        return {result,cache};
    }
    while(al>0 || bl>0){
        let {result,cache} = add2number(a[--al]||"0",b[--bl]||"0",preCache);
        preCache=cache;
        str = result+str;
    }
    if(preCache==="1") return preCache+str;
    return str;
};