//better
function sort(arr){
  let n=arr.length
  let cnt0=0
  let cnt1=0
  let cnt2=0
  
  
  //count 0,1,2
  for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
      cnt0++;
    }
    else if(arr[i]===1){
      cnt1++
    }
    else cnt2++
  }
  
  //replace and arrange in sorted (0 to count0)
  for(let i=0;i<cnt0;i++){
    arr[i]=0
  }
   for(let i=cnt0;i<=cnt0+cnt1;i++){
    arr[i]=1
     
   }
   for(let i=cnt1+cnt2;i<n;i++){
    arr[i]=2
   }
return arr
 
}
let arr=[0,0,1,2,0,1,2]
let result =sort(arr)
console.log(result)
