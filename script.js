const form = document.querySelector('#form')
const firstNameInput = document.querySelector('#firstName')
const firstNameError = document.querySelector('#firstNameError')
const lastNameInput = document.querySelector('#lastName')
const lastNameError = document.querySelector('#lastNameError')
const emailInput = document.querySelector('#email')
const emailError= document.querySelector('#emailError')
const queryError = document.querySelector('#queryError')
const generalRadioInput = document.querySelector('#general')
const supportRadioInput = document.querySelector('#support')
const messageInput = document.querySelector('#message')
const messageError = document.querySelector('#messageError')
const checkboxInput = document.querySelector('#checkbox')
const checkboxError = document.querySelector('#checkboxError')
const messageArea = document.querySelector('#message')
const btnSubmit = document.querySelector('#btnSubmit')
const radiosContainers = document.querySelectorAll('.radio-container')

radiosContainers.forEach(item => {
    item.addEventListener('click', (event) => {
        radiosContainers.forEach(el => el.classList.remove('focus'))
        item.classList.add('focus')
        event.stopPropagation()
    })
})

document.addEventListener('click', () => {
    radiosContainers.forEach(item => item.classList.remove('focus'))
})

function validateForm(event) {
    event.preventDefault()
}

btnSubmit.addEventListener('click', validateForm)
