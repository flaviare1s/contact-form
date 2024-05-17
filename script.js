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
    let isValid = true

    if(!form.checkValidity()) {
        if(!firstNameInput.checkValidity()) {
            firstNameInput.classList.add('errorActive')
            firstNameError.innerText = 'This field is required'
            isValid = false
        } else {
            firstNameInput.classList.remove('errorActive')
            firstNameError.innerText = ''
        }

        if(!lastNameInput.checkValidity()) {
            lastNameInput.classList.add('errorActive')
            lastNameError.innerText = 'This field is required'
            isValid = false
        } else {
            lastNameInput.classList.remove('errorActive')
            lastNameError.innerText = ''
        }

        if(!emailInput.checkValidity()) {
            emailInput.classList.add('errorActive')
            emailInput.value = 'email@example.com'
            emailError.innerText = 'Please enter a valid email address'
            isValid = false
        } else {
            emailInput.classList.remove('errorActive')
            emailError.innerText = ''
        }

        if(!generalRadioInput.checked && !supportRadioInput.checked) {
            queryError.innerText = 'Please select a query type'
            radiosContainers.forEach(container => {
                container.classList.add('errorActive')
            })
            isValid = false
        } else {
            queryError.innerText = ''
        }

        if(!messageInput.checkValidity()) {
            messageInput.classList.add('errorActive')
            messageError.innerText = 'This field is required'
            isValid = false
        } else {
            messageInput.classList.remove('errorActive')
            messageError.innerText = ''
        }

        if(!checkboxInput.checked) {
            checkboxError.innerText = 'To submit this form, please consent to being contacted'
            isValid = false
        } else {
            checkboxError.innerText = ''
        }

        if(!isValid) {
            return
        } else {
            submitForm()
        }
    }
}

function submitForm() {
    alert('enviado')
    form.reset()
}

btnSubmit.addEventListener('click', validateForm)
