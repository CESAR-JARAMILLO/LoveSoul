const toggleIcon = document.querySelector('.hamburger')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const toggleContainer = document.querySelector('.nav-toggle-container')

toggleIcon.addEventListener('click', () => {
  hamburger.classList.toggle('hide')
  close.classList.toggle('hide')
  toggleContainer.classList.toggle('hide')
})