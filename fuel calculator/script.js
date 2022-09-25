//calcular relação combustíveis
//

const gasolina = document.querySelector('.gasolina')
const etanol = document.querySelector('.etanol')

document.querySelector('.calcular').addEventListener('click', calcGas)

function calcGas(){
    let calcrelation = etanol.value / gasolina.value

    if (etanol.value == '' || gasolina.value == ''){
        document.querySelector('span').style.display = 'block';
        document.querySelector('span').innerHTML = 'Preencha os campos dos combustíveis'
    } 

    if (calcrelation > 0.7){
        document.querySelector('span').style.display = 'block';
        document.querySelector('span').innerHTML = 'O combustível que compensa é Gasolina'
        document.querySelector('.middle-left').classList.add("animacao")
    } else if (calcrelation <= 0.7) {
        document.querySelector('span').style.display = 'block';
        document.querySelector('span').innerHTML = 'O combustível que compensa é Etanol'
        document.querySelector('.middle-right').classList.add("animacao")
    }
}