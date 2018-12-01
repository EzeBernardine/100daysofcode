








  document.getElementsByClassName('input')[0].addEventListener('click', displayName)

 function displayName() {
  if (document.querySelector('.name') != null) {
    document.querySelector('.name').className = 'displayName';
  }
 }

