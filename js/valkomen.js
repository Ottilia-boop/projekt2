const header = document.querySelector('.hlink')
const hamb = document.querySelector('.hamb')

function toggleMeny() {
  header.classList.toggle('hActive')
  hamb.classList.toggle('toggle')
}

document.querySelector('.hamb').addEventListener('click', toggleMeny)

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3500);
}