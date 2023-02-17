let a = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
  index = [i];
}
console.log(index);

let t = a.reduce((acc, item, index) => {
  return acc + item;
}, 0);

console.log(t);
let c = [1, 2, 3, 4,25];
let max = c[0];
for (let i = 0; i < c.length; i++) {
  if (c[i] > max) {
    max = a[i];
    index = i
   
  }
}
console.log(max)
let b = c.reduce((acc,item,index)=>{
if(item > acc[1]){
return [index,item];
}
else{
return acc;
}
},[0,a[0]]);
console.log(b)

