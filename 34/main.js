const list = document.querySelector(`#list`)

function addItem (){
    const addItem = document.createElement(`li`)

    addItem.textContent = `Item`

    list.appendChild(addItem);
}



function removeItem(){

    if(list.lastChild){
    list.removeChild(list.lastChild)}
    else{
        alert('rong')
    }
}