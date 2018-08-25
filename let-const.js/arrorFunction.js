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
// its easy to debug
function names() {
  console.log('hi')
}
names()

//
// To return an object
let name = (name, age, size)=>{name: name, age: age, size: size};
name('ada', 2, 32) - error

// But when you wrap it in parenthesis
let name = (name, age, size)=>({name: name, age: age, size: size});
name('ada', 2, 32) - Object { name: "ada", age: 2, size: 32 }

// To make things nicer
let name = (name, age, size)=>({name: name, age: age, size: size});
console.table(name('ada', 2, 32)) - 
(index)
Values
name
ada
age
2
size
32
// this will apear in a tablular format

// Usind filter
let age = [2, 2, 5, 8, 6, 8, 2, 4 , 6]
let fil = age.filter(age => age > 2 );
console.log(fil) - Array(6)[5, 8, 6, 8, 4, 6]
