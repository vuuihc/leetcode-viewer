/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = "",remain;
    let m = Math.floor(num/1000);
    remain = num-m*1000;
    while(m--){
        result+="M";
    }
    if(remain>=900){
        result+="CM";
        remain = remain-900;
    }else{
        if(remain>=500){
            result+="D";
            remain-=500
        }else if(remain>=400){
            result+="CD";
            remain-=400;
        }
        let c = Math.floor(remain/100);
        while(c--){
            result+="C";
            remain -= 100;
        }
    }
    if(remain>=90){
        result+="XC";
        remain -= 90;
    }else{
        if(remain>=50){
            result+="L";
            remain-=50;
        }else if(remain>=40){
            // if(remain===49){
            //     result+="IL";
            //     remain -= 49;
            // }else{
                result+= "XL";
                remain -= 40;
            // }
        }
        let x = Math.floor(remain/10);
        while(x--){
            result+="X";
            remain -= 10;
        }
    }
    if(remain>=9){
        result+="IX";
    }else{
        if(remain>=5){
            result+="V";
            remain-=5;
        }else if(remain>=4){
            result+="IV";
            remain-=4;
        }
        while(remain--){
            result+="I";
        }
    }
    return result;
};