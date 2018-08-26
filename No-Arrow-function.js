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