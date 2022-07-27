const contects = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')
listItems.forEach((item,idx) =>{
    item.addEventListener('click',() => {
        hideAllContents()
        hideAllItems()
        item.classList.add('active')
        contects[idx].classList.add('show')
    })
})
function hideAllContents() {
    contects.forEach(contects=> contects.classList.remove('show'))
}
function hideAllItems(){
    listItems.forEach(item =>item.classList.remove('active'))
}