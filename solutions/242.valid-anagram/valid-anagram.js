/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let quickSort = (array,left,right)=>{
        if(left>=right){
            return;
        }
        let base = array[left],low=left,high=right,curEmpty=left;
        while(low<high){
            while(high>low && array[high]>=base){
                high--;
            }
            while(low<high && array[low]<=base){
                low++;
            }
            array[curEmpty] = array[high];
            array[high] = array[low];
            curEmpty = low;
        }
        array[curEmpty] = base;
        quickSort(array,left,curEmpty);
        quickSort(array,curEmpty+1,right);
    }
    if(s.length!==t.length) return false;
    let array = s.split("");
    quickSort(array,0,array.length-1);
    s = array.join("");
    array = t.split("");
    quickSort(array,0,array.length-1);
    t = array.join("");
    return s==t;
};