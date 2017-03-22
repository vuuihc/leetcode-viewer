/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var result = 0,distance
    for(var i=0;i<points.length;i++){
        var hashTable={}
        for(var j=0;j<points.length;j++){
            // if(!distance[i][j]) {
            //     if(distance[j] && distance[j][i]){
            //         distance[i][j] = distance[j][i]
            //     }else{
            //         distance[i][j] = (points[j][0]-points[i][0])*(points[j][0]-points[i][0])+(points[j][1]-points[i][1])*(points[j][1]-points[i][1])
            //     }
            // }
            distance = (points[j][0]-points[i][0])*(points[j][0]-points[i][0])+(points[j][1]-points[i][1])*(points[j][1]-points[i][1])   
            result += (hashTable[distance] || 0) * 2
            hashTable[distance] = (hashTable[distance] || 0) + 1
            // if(!hashTable[distance[i][j]]){
            //     hashTable[distance[i][j]] = 1
            // }else{
            //     hashTable[distance[i][j]] += 1
            // }
        }
        // for(var m=0;m<hashTable.length;m++){
        //     if(hashTable[m]>1){
        //         result += hashTable[m]*(hashTable[m]-1)
        //     }
        // }
    }
    return result
};