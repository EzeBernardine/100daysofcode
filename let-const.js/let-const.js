// var is functin scoped
function NAMES(){
  var name = 'Ada';
  console.log(name)
}
NAMES()
// console.log(name)
// this will say namenot defined

// But if i wrap it in a block,
{
  var name = 'Obi'
}
console.log(name)
// this is defined and so, not block scoped