
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navElement = document.getElementsByClassName('nav-element')[0]


toggleButton.addEventListener('click', () => {
    navElement.classList.toggle('active')
})

