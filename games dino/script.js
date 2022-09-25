//variables
const dino = document.querySelector('.dino')
const rock = document.querySelector('.rock')
const score = document.querySelector('span')

//events
document.addEventListener('keypress', ()=>{
    if(!dino.classList.contains('jump-animation'));
    dinoJump()})

//start the game
document.querySelector('button').addEventListener('click', ()=>{
    rock.classList.add('rolling');
})

//increase the speed, what also happens in intervals of some seconds
document.querySelector('.speed').addEventListener('click', ()=>{
    rock.classList.remove('rolling')
    rock.classList.add('rolling-faster')
})


//Functions

//activates jumping for the dino
function dinoJump(){
        dino.classList.add('jump-animation')
    setTimeout (()=>{
        dino.classList.remove('jump-animation')
    }, 1000)
}

//executed each 50ms for dino and rock co;lision
setInterval(()=>{
     dinoRockShock()}, 50)


//add 1 to score if rock is rolling each 1.9 seconds
const increaseScore =  setInterval(()=>{
    if(rock.classList.contains('rolling') && !rock.classList.contains('rolling-faster')){
     score.innerHTML++}}, 1900)

//add 1 to score if rock is rolling fast each 1.3 seconds
const increaseScore2 =  setInterval(()=>{
    if(rock.classList.contains('rolling-faster')){
    score.innerHTML++}}, 1300)
    

//funcion for dino and rock collision
function dinoRockShock(){
    const dinoposition = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    const rockposition = parseInt(window.getComputedStyle(rock, null).getPropertyValue('left'))

    if(dinoposition >= 95 && rockposition <= 50 && rockposition > 0){
        alert('game over');
        location.reload()
    }
}


//function for rock start rolling fast each few seconds
setTimeout (function rollFast(){
    if(rock.classList.contains('rolling')){
    rock.classList.remove('rolling')
    rock.classList.add('rolling-faster')}
}, 12600)

