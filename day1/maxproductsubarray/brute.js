
function maxproduct(arr){
    let maximum= Number.MIN_SAFE_INTEGER;
 
    for(let i=0;i<arr.length-1;i++){
        for(let j=i;j<arr.length;j++){
               let product = 1;
            for(let k=i;k<=j;k++){
                product= product*arr[k]
                
            }
            maximum= Math.max(maximum,product );
            
        }
    }
    return maximum;
}
let result=maxproduct([1,2,-3,0,-4,-5])
console.table(result)