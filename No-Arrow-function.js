// When you need the this key word
const something = document.getElementById('sth');
something.addEventListener('click', ()=>{
  console.log(this)
})
// this will mot point to the parent which  could be window. To avoid this
const something = document.getElementById('sth');
something.addEventListener('click', function(){
  console.log(this)
})

// Ehen you need a method tobind to the object
let obj = {
  name: 'May',
  school: ()=>{
    console.log(this.name)
  }
}
// this will reffer to the parent scope. To avoid it
let obj = {
  name: 'May',
  school: function() {
    console.log(this.name)
  }
}
// or this will also  work
let obj = {
  name: 'May',
  school(){
    console.log(this.name)
  }
}

// when you need to add a  method using a prototype
class car{
  constructor(make, colour){
    this.make = make,
    this.colour = colour
  }
}
 let bux = new car('make', 'red')
 let keke = new car('mAKE', 'yellow')
 car.prototype.surmarize=function(){
   return `this car is ${this.make} make and the colour is ${this.colour}`
 }
  keke.surmarize() - "this car is undefined make and the colour is undefined"
  // To avoid this
  class car{
    constructor(make, colour){
      this.make = make,
      this.colour = colour
    }
  }
  let bux = new car('make', 'red')
  let keke = new car('mAKE', 'yellow')
  car.prototype.surmarize=function(){
    return `this car is ${this.make} make and the colour is ${this.colour}`
  }
    keke.surmarize() - "this car is mAKE make and the colour is yellow"

    // When you need the arguement object
    