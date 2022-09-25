const input = document.querySelector('input')
//events
document.body.addEventListener('keypress', (event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('button').addEventListener('click', () => {
 let song = input.value;
    
if(song !== '') {
    let songInput = song.split('');
    playComposition(songInput);
}
})
input.addEventListener('focus', ()=>{
    input.classList.add('mute')
})
input.addEventListener('blur', ()=>{
    input.classList.remove('mute')
})
//variables

//functions
function playSound(sound){
    let audioElement = document.querySelector(`#${sound}`);
    let keyElement = document.querySelector(`div[key-sound="${sound}"]`)

    if(input.classList.contains('mute')){
        audioElement.stop() 
    } else if (!input.classList.contains('mute')){
        audioElement.currentTime = 0
        audioElement.play()
    }


    if(keyElement){
        keyElement.classList.add('active')

    setTimeout(()=>{
        keyElement.classList.remove('active')
    }, 1000)
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 2000;
    }
    
}

