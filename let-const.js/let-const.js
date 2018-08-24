// var is functin scoped
function NAMES(){
  var name = 'Ada';
  console.log(name)
}
NAMES()
// console.log(name)
// this will say namenot defined

// But if i wrap it in a block,
{  var name = 'Obi'}
console.log(name)
// this is defined and so, not block scoped

var name = 'Ada';
console.log(name)
// this will be global. But to restrict it from that, you put it in an IFE

(function(){
  var name = 'Emeka';
  console.log(name)
})()