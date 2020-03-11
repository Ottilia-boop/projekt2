const header = document.querySelector('.hlink')
const hamb = document.querySelector('.hamb')

function toggleMeny() {
  header.classList.toggle('hActive')
  hamb.classList.toggle('toggle')
}

document.querySelector('.hamb').addEventListener('click', toggleMeny)