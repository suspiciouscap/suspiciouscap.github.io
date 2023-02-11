const handleOnMove = e => {
    
    let p = e.clientX / window.innerWidth * 100;

    

    document.getElementById("about").style.width = `${p}%`;
 
}

document.addEventListener('mousemove',(e) => handleOnMove(e));
document.addEventListener('touchmove',(e) => handleOnMove(e.touches[0]));

const handleMouseMove = e =>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;

}
