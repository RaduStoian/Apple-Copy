console.log("You suck!");


function noMenu() {
document.getElementById("dropdown").classList.remove("active");
}

noMenu();

document.getElementById("show").addEventListener("click", openMenu);



function openMenu() {
    
    document.getElementById("dropdown").classList.toggle("active");
}



