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

//EFECTO NUMEROS

document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll('.numero');
    const velocidad = 70;

    const iniciarContador = (entries, observer) => {
        entries.forEach(entry => {
            const contador = entry.target;
            
            if (entry.isIntersecting) {
                // El elemento entró en pantalla: Iniciamos animación
                const objetivo = +contador.getAttribute('data-target');
                let actual = 0;
                const incremento = objetivo / velocidad;

                const actualizar = () => {
                    actual += incremento;
                    if (actual < objetivo) {
                        contador.innerText = Math.ceil(actual).toLocaleString();
                        // Guardamos el ID del timeout para poder cancelarlo si es necesario
                        contador.dataset.timer = setTimeout(actualizar, 20);
                    } else {
                        contador.innerText = objetivo.toLocaleString();
                    }
                };
                actualizar();
            } else {
                // El elemento salió de pantalla: Reiniciamos a 0 y limpiamos el timer
                clearTimeout(contador.dataset.timer);
                contador.innerText = '0';
            }
        });
    };

    const observer = new IntersectionObserver(iniciarContador, {
        threshold: 0.5 
    });

    contadores.forEach(contador => observer.observe(contador));
});

//mover imagenes

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aparece
                entry.target.classList.add('active');
            } else {
                // Desaparece (resetea el estado)
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.animar-img').forEach(el => observer.observe(el));
});

// APARECER TEXTO MAQUINA DE ESCRIBIR (Ejecución única y fija)

document.addEventListener("DOMContentLoaded", () => {
    let typedTitulo = null;
    let typedDesc = null;
    let typedDesc2 = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la sección entra en pantalla
            if (entry.isIntersecting) {
                
                // ¡La clave! Dejamos de observar ESTA sección específica de inmediato
                observer.unobserve(entry.target);

                // Lógica para la primera sección
                if (entry.target.id === 'seccion-texto') {
                    typedTitulo = new Typed('#texto-maquina-titulo', {
                        strings: ['¿<span class="text-[#00a1f1]">Como</span> funciona nuestra <span class="text-[#00a1f1]">plataforma</span>?'],
                        typeSpeed: 15,
                        showCursor: false
                    });

                    typedDesc = new Typed('#texto-maquina-desc', {
                        strings: ['Permite ubicar sobre el plano Geográfico de Venezuela, la posición en tiempo real de toda la Flota de Vehículos de su Empresa o Grupo en particular, a través de nuestra Plataforma Digital.'],
                        typeSpeed: 5,
                        showCursor: false,
                        startDelay: 200 
                    });
                }

                // Lógica para la segunda sección
                if (entry.target.id === 'seccion-texto2') {
                    typedDesc2 = new Typed('#texto-maquina-titulo2', {
                        strings: ['<span class="text-[#00a1f1]">Ubicación</span> y <span class="text-[#00a1f1]">rastreo</span> en tiempo real'],
                        typeSpeed: 5,
                        showCursor: false,
                        startDelay: 200 
                    });
                }
            }
        });
    }, { threshold: 0.3 }); 

    const seccion1 = document.getElementById('seccion-texto');
    const seccion2 = document.getElementById('seccion-texto2');

    if (seccion1) observer.observe(seccion1);
    if (seccion2) observer.observe(seccion2);
});

//APARECER TEXTO

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.3 });

    const seccionBeneficios = document.getElementById('seccion-beneficios');
    if (seccionBeneficios) {
        observer.observe(seccionBeneficios);
    }
});

//MAQUINA DE ESCRIBIR 2

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('contenedor-beneficios');
    const elementos = document.querySelectorAll('.maquina-texto');
    let instancias = [];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementos.forEach((el, index) => {
                    const texto = el.dataset.original || el.textContent;
                    el.textContent = ''; 
                    
                    setTimeout(() => {
                        instancias.push(new Typed(el, {
                            strings: [texto],
                            typeSpeed: 10,
                            showCursor: false
                        }));
                    }, index * 200);
                });
            } else {
                
                instancias.forEach(t => t.destroy());
                instancias = [];
                elementos.forEach(el => {
                    if (el.dataset.original) el.textContent = el.dataset.original;
                });
            }
        });
    }, { threshold: 0.3 });

    elementos.forEach(el => {
        el.dataset.original = el.textContent;
    });

    if (contenedor) observer.observe(contenedor);
});

//APARECER TEXTO

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.3 });

    const seccionBeneficios = document.getElementById('seccion-beneficios2');
    if (seccionBeneficios) {
        observer.observe(seccionBeneficios);
    }
});


//ENVIAR CORREO 

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitamos que la página se recargue

    const btn = this.querySelector('button');
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    btn.innerText = "Abriendo correo...";
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    const destinatario = "Galaxgpsvzla@gmail.com";
    const asunto = "Nuevo mensaje de contacto - " + nombre;
    const body = `Nombre: ${nombre}%0D%0AEmail: ${correo}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`;

    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${body}`;

    setTimeout(() => {
        btn.innerText = "Enviar Mensaje";
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 3000);
});