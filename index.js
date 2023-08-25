const container = document.querySelector(".container");
const puntero = document.querySelector(".puntero");
const btn = document.querySelector(".btn");
const ladopuntero = 100;
puntero.style.width = ladopuntero + "px";
puntero.style.height = ladopuntero + "px";
let btnGrande = false;



container.addEventListener("mousemove", (e) => {
    puntero.style.top = (e.pageY - (ladopuntero / 2)) + "px"
    puntero.style.left = (e.pageX - (ladopuntero / 2)) + "px"
    
});

btn.addEventListener("mouseover", () => {

});

function cargar(url) {
    window.location = "machine.html"
};

