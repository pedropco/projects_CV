const onemoreitem = document.querySelector('.onemoreitem')

onemoreitem.addEventListener('focus', ()=>{
    if (onemoreitem.value !== '') {
    onemoreitem.setAttribute('type', 'checkbox');
    }
  
})