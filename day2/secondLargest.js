//create largest
function largest(arr) {
   let largest = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
         largest = arr[i];
      }
   }
   return largest;
}
//second largest
function secondLargest(arr) {
   let secondLargest = -1;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > secondLargest || arr[i] != largest) {
         secondLargest = arr[i];
      }
   }
   return secondLargest;
}

let arr = [1, 2, 4, 7, 7, 5];
let second = secondLargest(arr);
console.log("second largest is", second);
let largestele=largest(arr)
console.log("largest is ", largestele);
