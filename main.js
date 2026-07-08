//NAVBAR FUNCIONAL

const btnSubMenu = document.getElementById("btn_subMenu");
const subMenu = document.getElementById("subMenu");

btnSubMenu.addEventListener("click", () => {
    btnSubMenu.classList.toggle("active");
    
    if (btnSubMenu.classList.contains("active")) {
        subMenu.classList.remove("mover_ul2");
        subMenu.classList.add("mover_ul");
    } else {
        subMenu.classList.remove("mover_ul");
        subMenu.classList.add("mover_ul2");
    }
});

//EFECTO DE LUZ CIRCULAR

const overlay = document.getElementById('flashlight');

document.addEventListener('mousemove', (e) => {
  // Usamos e.clientX y e.clientY que ya consideran la posición de la ventana
  overlay.style.setProperty('--x', `${e.clientX}px`);
  overlay.style.setProperty('--y', `${e.clientY}px`);
});