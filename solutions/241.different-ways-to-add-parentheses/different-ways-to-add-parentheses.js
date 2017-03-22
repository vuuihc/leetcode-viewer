/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let result = [];
    for(let i=0;i<input.length;i++){
        if(input[i]==="+"||input[i]==="-"||input[i]==="*"){
            let part1=input.substring(0,i),
                part2=input.substring(i+1);
            let ret1 = diffWaysToCompute(part1),
                ret2 = diffWaysToCompute(part2),
                c=0;
            ret1.forEach(r1=>{
                ret2.forEach(r2=>{
                    switch(input[i]){
                        case "+":
                            c=r1+r2;
                            break;
                        case "-":
                            c=r1-r2;
                            break;
                        case "*":
                            c=r1*r2;
                            break;
                    }
                    result.push(c);
                })
            })
        }
    }
    if(result.length===0){
        result.push(Number(input));
    }
    return result;
};