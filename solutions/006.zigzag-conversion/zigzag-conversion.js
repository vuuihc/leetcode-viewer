/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = [],
        unitLength=numRows*2-2;
    if(numRows<2) return s;
    for(let i=0;i<s.length;i++){
        let unit = Math.floor(i/unitLength);//第几个循环，商
        let j = i-unitLength*unit;//余数 0~unitLength-1
        let column = unit*(numRows-1),row;
        if(j>=numRows){
            column = column + j-numRows+2;
            row = numRows - (j-numRows)-2;
        }else{
            column = column+1;
            row = j;
        }
        if(result[row]===undefined){
            result[row]=[];
        }
        result[row][column] = s[i];
    }
    // console.log(result);
    return result.map(item=>item.filter(i=>i!==undefined).join("")).join("");
    
};