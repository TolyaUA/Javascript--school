// function declaration
function testFuntion(){
const x = 5;
const y = 10;
}
function randomSum(){
const min = 100;
const max= 100;
return Math.floor(Math.random(min)* max);
}

console.log(randomSum());
  
function getRandom() {
    return Math.random();
  }
  console.log(getRandom(12))

  function randomSum2(){
const min = 100 ;
const max = 300 ;
let res = Math.floor(min+Math.random()*(max+1-min));
console.log(res);

}
randomSum2();
  let i = 100;
function wich(){
i++;
document.querySelector('.div').style.width = i +'px';
document.querySelector('.div').style.height = i +'px';
console.log(i)
}

wich();
// document.querySelector('.div').onclick=wich
// // document.querySelector('.div').style.wich = i +'px'
document.querySelector(".div").addEventListener('mousemove',wich)