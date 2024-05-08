

function leftRotate(arr){
  let n=arr.length
  let temp= new Array(n)
  for(let i=0;i<arr.length;i++){
    temp[i-1]=arr[i];
   }
   temp[n-1]=arr[0];
  return temp;
}
let arr=[1,23,455,61,6,17,7]
let rotated=leftRotate(arr)
console.log("rotated array is= ",rotated);
console.log("original array is= ",arr)
