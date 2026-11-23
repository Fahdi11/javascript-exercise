function changeImage(){
    const img = document.querySelector(`#img`)

    const url = prompt(`Enter Image!`);
    const borderColor = prompt(`Enter Color`);
    const width = prompt(`Inter wiedh`)
  
    

    img.setAttribute(`src` , url)
    img.style.border = `5px solid ${borderColor}`;
    img.style.width = `${width}px`;
    
}