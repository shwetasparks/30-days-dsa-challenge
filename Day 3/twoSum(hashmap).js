function twoSum(arr,target){
  let n=arr.length
  let map= new Map();
  for(let i=0;i<n;i++){
    let required= target-arr[i];
    if(map.has(required)){
      return [map.get(required),i]
    }
    else map.set(arr[i],i)
  }
  return []
}
let arr=[2,6,5,8,11]
let result=twoSum(arr,14)
console.log(result)