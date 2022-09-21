//roda função playsound, transformando o código em letra minúscula, após o keyup
document.body.addEventListener("keyup", (event)=> {
   playSound(event.code.toLowerCase());
})

//clique na caixa de composição, variável song pega o que foi digitado, se está diferente de vazio..
//e playcomposition é acionado para o songarray
document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !==''){
        songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound){
    let audioelement = document.querySelector(`#s_${sound}`);//variável da tecla apertada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)//variável de qual quadrado é apertado
    let input = document.querySelector("#input");

    input.addEventListener("focus", () => {//solucao pra nao fazer som quando se digita no input
    input.classList.add("mute");
    });
    input.addEventListener("blur", () => {
    input.classList.remove("mute");
    });
   

    if(audioelement && !input.classList.contains("mute")){//! é negação, entao se nao tem mute, audio toca
        audioelement.currentTime = 0;
        audioelement.play();//se audioelement é escolhido com sucesso, toca o áudio
    } else if (audioelement && !input.classList.contains("mute")) {
        audioelement.pause();
      }


    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },500);//adicona class active q dá efeito amarelo e remove meio segundo depois
    }

}

//se cria-se o for sem o wait, todas tecladas são executadas ao mesmo tempo
//com wait e settimeout, aguarda-se 0,25 segundos entre a execução de uma tecla e outra
function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait);

    wait += 250;
    }
}

