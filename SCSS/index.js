








  document.getElementsByClassName('inputName')[0].addEventListener('click', displayName);
  document.getElementsByClassName('inputPassword')[0].addEventListener('click', displayPassword);

 function displayName()  {
   const nameDiv = document.querySelector('.nameDiv')
  if (nameDiv != null) document.querySelector('.nameDiv').className = 'display'; 
 }
 function displayPassword() {
   const passwordDiv = document.querySelector('.passwordDiv') 
  if (passwordDiv != null) document.querySelector('.passwordDiv').className = 'display'; 
 }

const button = document.getElementsByClassName('button')[0].addEventListener('click', hello)
function hello() {
  const value = document.getElementsByClassName('inputName')[0].value;
  alert(`Welcome ${value}, its nice to meet you`)
}