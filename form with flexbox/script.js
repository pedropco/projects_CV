const nameform = document.querySelector('.name')
const spanform = document.querySelector('span')
const mailForm = document.querySelector('.mail')
const adressForm = document.querySelector('.adress')
const textMessage = document.querySelector('.input-resize')

document.querySelector('.send').addEventListener('click', checkContent)

function checkContent(e){ 
    e.preventDefault()

    showLoading(true)

    clearFormResponse()
    //2 ways of showing message for form response, both the errors of the success in sending form
    if (nameform.value.split(' ').length < 2){         
    displayMessage('Put the complete name')
    } else if (textMessage.value.split(' ').length <3) {
    displayMessage('At least 3 words for message')
    } else if(!mailForm.value.includes("@") || mailForm.value.length <10) { 
    spanform.style.display = 'block'
    spanform.style.color = 'red'
    spanform.innerHTML = "Use an valid email"
    } else if(adressForm.value.length < 10 || !adressForm.value.includes(" ")) {
    spanform.style.display = 'block'
    spanform.style.color = 'red'
    spanform.innerHTML = "Minimum of 10 letters for address"
    } else {
        setTimeout(() => {
            displayMessage('It was sent', true)
        /*spanform.style.display = 'block';
        spanform.style.color = 'green'
        spanform.innerHTML = "Succesfully sent!"*/
        nameform.value = ''
        textMessage.value = ''
        adressForm.value = ''
        mailForm.value = ''
          }, 500);
    }

    setTimeout(() => {
    
        showLoading(false);  
      }, 500);
}

function showLoading(loading = false){
    if(loading){
        document.querySelector('#loader-overlay').classList.remove('d-none')
    } else {
        document.querySelector('#loader-overlay').classList.add('d-none')
    }

}


function clearFormResponse(){
    spanform.innerHTML = "";
    document.querySelector(".form-response").innerHTML = "";
}


function displayMessage(message, sucess_message = false){
    let message_li = document.createElement('li');
    message_li.classList.add( sucess_message ? "success_message" : "error_message"
    );
    message_li.append(message);
    document.querySelector('.form-response').appendChild(message_li)
    }



//for disable the button of send
/*
function disableButton(){
    document.querySelector('.send').setAttribute('disabled', true)
}*/