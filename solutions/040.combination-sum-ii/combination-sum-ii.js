/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let l = candidates.length,
        results = [],
        flag = [];
    let fixedSum = (a,n,c,sum)=>{
        if(sum===0){
            let result = [];
            for(let i=0;i<n;i++){
                if(flag[i]){
                    result.push(a[i]);
                }
            }
            results.push(result);
        }else if(c===n){
            return;
        }else{
            flag[c] = true;
            if(sum-a[c]>=0){
                fixedSum(a,n,c+1,sum-a[c]);
            }
            flag[c] = false;
            if(sum>=0){
                fixedSum(a,n,c+1,sum);
            }
        }
    }
    Array.prototype.sort.apply(candidates,[(a,b)=>b-a]);
    console.log(candidates);
    fixedSum(candidates,l,0,target);
    let removedIndex = [];
    Array.prototype.sort.apply(results,[(a,b)=>b.join("")-a.join("")])
    for(let i=0;i<results.length-1;i++){
        if(results[i].join("")===results[i+1].join("")){
            removedIndex.push(i+1);
        }
    }
    return results.filter((item,index)=>!removedIndex.includes(index));
};