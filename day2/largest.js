//create largest
function largest(arr){
    let largest=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
    
}
let arr=[1,2,4,7,7,5]
let largestEle=largest(arr)
console.log(largestEle);