// the function here is ES6 syntax. The value of this is bounded
let something = document.querySelector('.sth');
something.addEventListener('click', function () {
  console.log(this)
})
// this will be the selector (.sth)

// But when you use an arrowfunction, the value of this is not rebounded. It goes  to the parent scope
let something = document.querySelector('.sth');
something.addEventListener('click', () => {
  console.log(this)
})
// this will be the window