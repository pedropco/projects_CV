//Clock operating and updating each minute


function myTimer(){
    const currentTime = new Date ()
    const currentHours = currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.querySelector('.time').innerHTML = currentHours;
}

setInterval(myTimer, 1000);


//getting name and filling bom dia xxx
function qualSeuNome(){
    const namePerson = prompt("qual seu nome?", "Digite aqui");
    document.querySelector('.name').innerHTML = namePerson;
}


//return greeting depending the period of the day


function horas(){
    let now = new Date
    let hours = now.getHours()
    if (hours > 0  && hours < 12) {
        document.querySelector('.greet').innerHTML = 'Bom dia, ';
    } else if ( hours > 12 && hours < 18) { 
        document.querySelector('.greet').innerHTML = 'Boa tarde, ';
    } else { 
        document.querySelector('.greet').innerHTML = 'Boa noite, ';
    }
} 


function update(){
    horas();
    myTimer();
}


setInterval(horas, 0);