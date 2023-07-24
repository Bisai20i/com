let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let submit = document.getElementById('submit')
let nameError = document.getElementById('nameError')
let emailError = document.getElementById('emailError')
const radioButtons = document.querySelectorAll('input[type="radio"][name="Gender"]')
const finalError = document.getElementById('finalError')
const form = document.getElementById('myForm')


form.addEventListener('submit',function(event){
    event.preventDefault()
    finalError.textContent = ''
    if(firstName.style.border === '3px solid red')
    {
        finalError.textContent = 'Error'
        return
    }
    if(lastName.style.border === '3px solid red')
    {
        finalError.textContent = 'Error'
        return
    }
    if(email.style.border === '3px solid red')
    {
        finalError.textContent = 'Error'
        return
    }
    if(email.value.trim()==='')
    {
        finalError.textContent = 'All fields Compulsory'
        return
    }
    if(firstName.value.trim()==='' || lastName.value.trim() === '')
    {
        finalError.textContent = 'All fields Compulsory'
        return
    }
    let genderNotFilled = true
for(radioButton of radioButtons)
    {
        if(radioButton.checked)
        {
            genderNotFilled =  false
            break
        }
    }
    if(genderNotFilled)
    {
        finalError.textContent = 'All fields Compulsory'
        return
    }
    localStorage.setItem('userName',firstName.value.trim())
    form.submit()
})
function containsNumber(nameContent){
    const testValue = /\d/
    return testValue.test(nameContent)

}


firstName.addEventListener('input',function (){
    if(firstName.value.trim() === '')
    {
        nameError.textContent = 'First Name Required'
        firstName.style.border = '3px solid red'

        
    }
    else if(containsNumber(firstName.value.trim()))
    {
        nameError.textContent = 'Invalid Name !! Name cannot be alphanumeric'
        firstName.style.border = '3px solid red'
        
    }
    else if(firstName.value.length <=3)
    {
        nameError.textContent = 'Your Name Sounds like a pets Name!! Are you human or a pet? Length of you name must be greater.'
        firstName.style.border = '3px solid red'
    }
    else{
        nameError.textContent = ''
        firstName.style.border = '3px solid #20d20d'
    }
})

lastName.addEventListener('input',function (){
    if(lastName.value.trim() === '')
    {
        nameError.textContent = 'Last Name Required'
        lastName.style.border = '3px solid red'
        
    }
    else if(containsNumber(lastName.value.trim()))
    {
        nameError.textContent = 'Invalid Name !! Sur Name cannot be alphanumeric'
        lastName.style.border = '3px solid red'
        
    }
    else if(lastName.value.length <2)
    {
        nameError.textContent = 'Your Last Name is too short, You must be lying.'
        lastName.style.border = '3px solid red'
    }
    else{
        nameError.textContent = ''
        lastName.style.border = '3px solid #20d20d'
    }
})











function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

email.addEventListener('input',function (){
    if(email.value === '')
    {
        emailError.textContent = 'We need your valid Email. Please enter your email.'
        email.style.border = '3px solid red'
        
    }
    else if(!isValidEmail(email.value))
    {
        emailError.textContent = 'Are you fooling us!! ? You must enter valid email.'
        email.style.border = '3px solid red'
        
    }
    else{
        emailError.textContent = ''
        email.style.border = '3px solid #20d20d'
    }
})