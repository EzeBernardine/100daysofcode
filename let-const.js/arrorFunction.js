// this is the actual ES5
let arr = ['a', 's', 'g']
let value = arr.map(function(a){
  return `${a} pig`
})
console.log(value) - Array(3)["a pig", "s pig", "g pig"]

// But this can be rewritten as
let arr = ['a', 's', 'g']
let value = arr.map( (a) =>{
  return `${a} pig`
})

// And also as
let arr = ['a', 's', 'g']
let value = arr.map( a=>  `${a} pig`)

// function declaration is an anonymous function ie it does not have a name
let names = () => console.log('hi') - 'hi'
names()

// But for function statement and its a named function
function names() {
  console.log('hi')
}
names()
