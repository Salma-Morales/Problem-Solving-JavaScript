
 function diagonalDifference(arr) {
     let arrLastIndex = arr.length -1;
     let totalRtL = arr[0][0];
     let totalLtR = arr[0][arrLastIndex];

     for (let i = 1; i < arr.length; i++) {
      totalRtL = totalRtL + arr[i][i];
     }

     for (let i = 1; i < arr.length; i++) {
         totalLtR = totalLtR + arr[i][arrLastIndex - i];
         
     }

     let difference;
     

     if(totalRtL < totalLtR){
         difference = totalLtR - totalRtL;
         return difference;
     } else {
        difference = totalLtR - totalRtL;
         return difference;
     } 
   
 }


diagonalDifference([[6, 2, 4],
                         [4, 3, 6],
                         [10, 8, 1]])
