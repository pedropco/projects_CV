//Variables
const input = document.querySelector('input')
const adiciona = document.querySelector('.textInsert button')
const deleteAll = document.querySelector('.deleteAll')
const ul = document.querySelector('ul')

var itensDB = []

//events

deleteAll.addEventListener('click', ()=>{
  itensDB = [];
updateDB()
})

input.addEventListener('keypress', e =>{
    if(e.key == 'Enter' && input.value != ''){
        setItemDB()
    }
})

adiciona.addEventListener('click', () => {
    if (input.value !== ""){
        setItemDB()
    }
})

//Functions

function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens atingido!')
    return
  }

  itensDB.push({ 'item': input.value, 'status': '' })
  updateDB()
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB))
  loadItens()
}

function loadItens() {
  ul.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i)
  })
}

function insertItemTela(text, status, i) {
  const li = document.createElement('li')
  
  li.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
    </div>
    `
  ul.appendChild(li)

  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  input.value = ''
}

function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked' 
  } else {
    itensDB[i].status = '' 
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}
