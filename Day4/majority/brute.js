function majority(arr){
  let count=0;
  let n=arr.length;
  //compare to get same element
  for(let i=0;i<n;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
        count++
      }
      //check majority
     if(count>Math.floor(n/2)){
       return arr[i]
     }
      
      
    }
    return -1
    
  }
}
let arr=[2,2,3,3,2,2]
let result=majority(arr)
console.log(result)