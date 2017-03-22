/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let quickSort = (array,index,left,right)=>{
        if(left>=right) return;
        let low=left,
            high=right,
            empty=left,
            base = array[empty];
        while(low<high){
            while(low < high && base.start <= array[high].start){ high--; }
            while(low < high && array[low].start <= base.start){ low++; }
            array[empty]=array[high];
            array[high]=array[low];
            empty = low;
        }
        // console.log(base);
        array[empty]=base;
        quickSort(array,index,left,empty-1);
        quickSort(array,index,empty+1,right);
    }
    quickSort(intervals,0,0,intervals.length-1);
    // console.log(intervals);
    let result = [],
        l = intervals.length;
    if(l<2) return intervals;
    for(let i=0;i<l;i++){
        // console.log(intervals[i]);
        if(i<l-1 && intervals[i].end>=intervals[i+1].start){
            intervals[i+1].start = intervals[i].start;
            intervals[i+1].end = Math.max(intervals[i].end,intervals[i+1].end);
        }else{
            result.push(intervals[i]);
        }
    }
    
    return result;
};