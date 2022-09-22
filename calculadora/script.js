const input = document.querySelector('.input')
const minus = document.querySelector('.item-equal')

document.querySelectorAll('.number').forEach(item =>{
    item.addEventListener('click',()=>{
        if(item.textContent == 'x'){
            input.innerHTML += '*'
        }  else {
         input.innerHTML += item.textContent 
        }})
})

document.querySelector('.item-clean').addEventListener('click', ()=>{
    input.innerHTML = ""
})

document.querySelector('.minus1').addEventListener('click', ()=>{
     input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-1)
})

function calcResult(){
    var resultado = input.innerHTML;
    if(resultado)
    {
        input.innerHTML = eval(resultado);
    }
    else
    {
        input.innerHTML = ""
    }
}
