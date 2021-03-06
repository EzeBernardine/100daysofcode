// var is function scoped
function NAMES(){
  var name = 'Ada';
  console.log(name)
}
NAMES()
console.log(name) - defined

// But if i wrap it in a block,
{  var name = 'Obi'}
console.log(name) - 'obi'

var name = 'Ada';
console.log(name)
// this will be global. But to restrict it from that, you put it in an IFE
// An IFE is a self invoking function or a self executing anonymous function
(function(){
  var name = 'Emeka';
  console.log(name) - Emeka
})()
console.log(name) - ''
// this is coming from the windows

for(var i = 1; i < 10;i++){
  console.log(i) - 1-10
}
i - 10;
// this is because i has been globally declared

for(var i = 1; i < 10; i++){
  setTimeout(function(){
    console.log(`the number is ${i}`) - 10
  }, 1000)
}
// setTimeout is a method  that allow your program to run after the sprcified time

// But with let, it gives you the exact value
for(let i = 1; i < 10; i++){
  setTimeout(function(){
    console.log(`the number is ${i}`) - the number is 0-9
  }, 1000)
}
