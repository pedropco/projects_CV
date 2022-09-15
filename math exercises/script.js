//BMI Calculator (IMC em português)
document.querySelector('.enviar').addEventListener('click', imc)

const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const result = document.querySelector('#result')

function imc(){
  

    if (peso.value !== '' || altura.value !== '') {
    

    let bmi = (peso.value/(altura.value * altura.value)).toFixed(2)

    var classification = ''
    if (bmi <= 18.5) {
        classification = 'Underweight';
    } else if (bmi <= 24.9) { 
        classification = "Healthy"
    } else if (bmi <= 29.9) { 
        classification = 'Overweight'
    } else if (bmi <= 34.9){
        classification = 'Obese'
    } else if (bmi >= 35) {
        classification = "Extremely Obese"
    }


    result.innerHTML = `Your BMI ${bmi} is ${classification} `
    }
}



//Average calculator
const average_numbers = document.querySelector('.average_numbers');
document.querySelector('.average_calculate').addEventListener('click', average_calculate)

function average_calculate(){
    
    let input = average_numbers.value

    let nums = input.split(",");
    calculateAverage(nums)
    function calculateAverage(numArr){
        total = 0
        numArr.forEach((num) => total += Number(num));

        let calculated_average = total/numArr.length;
        document.querySelector('#result_average').innerHTML = calculated_average
    }

}

/*function calculateAverage(numArr){
    let total = 0;
    
    /*for (let i of numArr){
        total += Number(numArr[i];
    }
    numArr.forEach((num) => total += Number(num));

    let calculated_average = total/numArr.length;
    document.querySelector('#result_average').innerHTML = calculated_average
}*/



/*
document.write('Write a JavaScript program to display the current day and time in the following format.</br>')
function getTime() {
var today = new Date()

day = today.getDate()
dayOfWeek = new Date().toLocaleDateString('pt-BR', {weekday: 'long'})
time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

document.write('Today is: '+ dayOfWeek + '</br>')
document.write('Current time is: '+ time + '</br>')

}

document.write('Write a JavaScript program to get the current dat. Output: dd/mm/yyyy.</br>')

dayToday = new Date()
dateToday = dayToday.getDate() + '/' + dayToday.getMonth() + '/' + dayToday.getFullYear()

document.write('Current date Today is: '+ dateToday + '</br></br></br>')

document.querySelector('.print').addEventListener('click', Print)

function Print(){ 
    window.print()
}

//mexer na palavra para direita
/*function paraDireita(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}*/

//calculating the average
// soma é zero
// criar 
function calc() {
    let sum = 0;
    let numbers= [ 2, 6, 10, 20]
    

    for (let i of numbers ){
            sum += i
    }

   
    average = sum/numbers.length

    console.log(average)
}
calc()

//calc IMC
//imc = peso/altura2
//retornar 1 único número
// gerar erro se receber parametro não número
// deve retornar erro caso nao receba nenhum parametro



