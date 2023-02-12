const handleOnMove = e => {
    /* Slider for header */
    let p = e.clientX / window.innerWidth * 100;

    p > 50 ? (document.getElementById("about").style.width= `${p-0.7}%`)
    :document.getElementById("about").style.width = `${p-0.5}%`
    
}

const handleCursor = e => {
    document.getElementById("cursor-custom")
}

document.addEventListener('mousemove',(e) => handleOnMove(e));
document.addEventListener('touchmove',(e) => handleOnMove(e.touches[0]));

const handleMouseMove = e =>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;
}



/* Section-2 position due to the use of absolute in section 1*/
const section1VhValue = 60;
const section1Vh = section1VhValue + 'vh'

for (element of document.getElementById('section-1').children){
    element.style.height=  section1Vh
}

document.getElementById("section-2").style.top = document.getElementsByClassName("side")[0].style.height
