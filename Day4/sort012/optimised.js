function sortNum(arr) {
   let n = arr.length;
   let low = 0;
   let high = n - 1;
   let mid = 0;
   while (mid <= high) {
      if (arr[mid] === 0) {
         [arr[mid], arr[low]] = [arr[low], arr[mid]];
         low++;
         mid++;
      } else if (arr[mid] ===1) {
         mid++;
      } else {
         arr[mid]===2; // Corrected here from arr[mid] === 2;
         [arr[mid], arr[high]] = [arr[high], arr[mid]];
         high--;
      }
   }
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0];
sortNum(arr);
console.log(arr);
