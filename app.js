// Número total de slides (tomado del input hidden)
const totalSlides = parseInt(document.getElementById("num_slides").value);

// Elementos del DOM
const listaItems = document.querySelectorAll("#lista li");
const imgContainer = document.querySelector("#container img");
const slideActualSpan = document.getElementById("slideActual");
const totalSlidesSpan = document.getElementById("totalSlides");

const btnNext = document.getElementById("btnAvanzar");
const btnBack = document.getElementById("btnRetroceder");
const toggleBtn = document.querySelector(".toggle-btn");
const lista = document.getElementById("lista");

// Rutas de imágenes
let imagenes = [
    "recursos/Diapositiva1.jpeg",
    "recursos/Diapositiva2.jpeg",
    "recursos/Diapositiva3.jpeg",
    "recursos/Diapositiva4.jpeg",
    "recursos/Diapositiva5.jpeg",
    "recursos/Diapositiva6.jpeg",
    "recursos/Diapositiva7.jpeg",
    "recursos/Diapositiva8.jpeg"
];

// Estado inicial
let slideActual = 1;

// Mostrar total
totalSlidesSpan.textContent = totalSlides;

// Cambiar imagen y resaltado
function mostrarSlide(n) {
    slideActual = n;

    // Cambiar imagen
    imgContainer.src = imagenes[n - 1];

    // Actualizar contador
    slideActualSpan.textContent = slideActual;

    // Quitar clase activa
    listaItems.forEach(li => li.classList.remove("activo"));

    // Poner clase activa
    listaItems[n - 1].classList.add("activo");

    // Actualizar estado del botón next
    if (slideActual >= totalSlides) {
        btnNext.classList.add("disabled");
    } else {
        btnNext.classList.remove("disabled");
    }

    // Actualizar estado del botón back
    if (slideActual <= 1) {
        btnBack.classList.add("disabled");
    } else {
        btnBack.classList.remove("disabled");
    }
}

// Botón siguiente
btnNext.addEventListener("click", () => {
    if (slideActual < totalSlides) {
        slideActual++;
        mostrarSlide(slideActual);
    }
});

// Botón atrás
btnBack.addEventListener("click", () => {
    if (slideActual > 1) {
        slideActual--;
        mostrarSlide(slideActual);
    }
});

// Click en la lista
listaItems.forEach((li, index) => {
    li.addEventListener("click", () => {
        mostrarSlide(index + 1);
    });
});

// Toggle del menú lateral
toggleBtn.addEventListener("click", () => {
    lista.classList.toggle("active");
});

// Iniciar con el slide 1
mostrarSlide(1);
