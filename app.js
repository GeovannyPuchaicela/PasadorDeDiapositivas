// Número total de slides (tomado del input hidden)
const totalSlides = parseInt(document.getElementById("num_slides").value);

// Elementos del DOM
const listaItems = document.querySelectorAll("#lista li");
const imgContainer = document.querySelector("#container img");
const slideActualSpan = document.getElementById("slideActual");
const totalSlidesSpan = document.getElementById("totalSlides");

const btnNext = document.getElementById("btnAvanzar");
const btnBack = document.getElementById("btnRetroceder");

// Rutas de imágenes (aquí tú pones tus propios archivos)
let imagenes = [
    "Diapositiva1.jpeg",
    "Diapositiva2.jpeg",
    "Diapositiva3.jpeg",
    "Diapositiva4.jpeg",
    "Diapositiva5.jpeg",
    "Diapositiva6.jpeg",
    "Diapositiva7.jpeg",
    "Diapositiva8.jpeg"
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
}

// Botón siguiente
btnNext.addEventListener("click", () => {
    slideActual++;
    if (slideActual > totalSlides) slideActual = 1;
    mostrarSlide(slideActual);
});

// Botón atrás
btnBack.addEventListener("click", () => {
    slideActual--;
    if (slideActual < 1) slideActual = totalSlides;
    mostrarSlide(slideActual);
});

// Click en la lista
listaItems.forEach((li, index) => {
    li.addEventListener("click", () => {
        mostrarSlide(index + 1);
    });
});

// Iniciar con el slide 1
mostrarSlide(1);
