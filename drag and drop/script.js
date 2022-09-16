//item: dragstart and dragend
//item dragstart opacity decreases
//item dragend remove opacity
//area:  dragover, dragleave and drop
//area dragover adds black background if current target has item
//area dragleav removes black background if current target has no item
//area drop appendschild item if current target has item selected
//areas get attribute and turn all green
//neutralarea: dragover, dragleave and drop 
//neutralarea dragover ads background
//neutralarea dragleav removes background
//neutralarea dropg appenschild dragged item





//function Item
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

function dragStart(e){
    e.currentTarget.classList.add('dragging')
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging')
}

//function area

document.querySelectorAll('.area').forEach(item => {
    item.addEventListener('dragover', dragOverArea)
    item.addEventListener('dragleave', dragLeaveArea)
    item.addEventListener('drop', dropArea)
})
function dragOverArea(e){
    if(e.currentTarget.querySelector('.item') === null){
        e.preventDefault()
        e.currentTarget.classList.add('hover')
    }
}
function dragLeaveArea(e){
    e.currentTarget.classList.remove('hover')
}
function dropArea(e){
    e.currentTarget.classList.remove('hover')

    if (e.currentTarget.querySelector('.item') === null) {
        let dragged_item = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragged_item)
        updateAreas()
    }
}

//function neutralArea

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)

function dragOverNeutral(e){
    e.preventDefault()
    e.currentTarget.classList.add('hover')  
}

function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover')
}

function dropNeutral(e){
    e.currentTarget.classList.remove('hover')
    let dragged_item2 = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragged_item2)       
    updateAreas()
}

//function updateArea

//getatrribute data-name
let areas = {
    a: null,
    b: null,
    c: null
}

function updateAreas(){
    document.querySelectorAll('.area').forEach(item =>{
        let nome = item.getAttribute('data-name');
        if(item.querySelector('.item') !== null) {
            areas[nome] = item.querySelector('.item').innerHTML;
        } else {
            areas[nome] = null;
        }
    })
    console.log(areas)
    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct');
        document.querySelector('.areas').classList.remove('incorrect');
    } else if (areas.a === null && areas.b === null && areas.c === null) {
        document.querySelector('.areas').classList.remove('correct');
        document.querySelector('.areas').classList.remove('incorrect');
    }else if(areas.a !== '1' && areas.b !== '2' && areas.c !== '3'){
        document.querySelector('.areas').classList.remove('correct');
        document.querySelector('.areas').classList.add('incorrect');
    }
}
