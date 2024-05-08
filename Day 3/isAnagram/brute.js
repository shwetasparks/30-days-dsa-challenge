//anagram brute
function anagram(str1,str2){
  //1. check if length are equal
  let n1=str1.length;
  let n2=str2.length;
  if(n1!=n2){
    return false;
  }
  
  //2. sort
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  
  console.log(str1)
  console.log(str2)
for(let i=0;i<n1;i++){
  if(str1[i]===str2[i]){
    return true
  }
  else return false
}
  
  
}
let str1='anagram';
let str2='margana'
let result=anagram(str1,str2)
console.log(result)