/*
* for of 可以用break   直接拿到值
* for in ...
* */

var arr =['a','b','c']
for(let val of arr){
  // for of 可以用 break
  if(val==='b'){
    break;
  }
  console.log(val)
}

for(let i in arr){
  console.log(arr[i])
}
