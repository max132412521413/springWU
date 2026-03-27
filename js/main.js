let fadeLayer = document.querySelector("div.fade-layer");

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");
    fadeLayer.classList.toggle("visible");
    
}

fadeLayer.addEventListener("click",showMenu);
