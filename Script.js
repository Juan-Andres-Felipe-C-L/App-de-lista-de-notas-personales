/*Buena noche intructor Alejandro, soy el aprendiz Juan Andrés Felipe. Gracias por darme más tiempo para entregarle esta 
evidencia de la actividad. Debo de informarle que este código lo realicé con la ayuda de la IA de Chat GPT.*/

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const texto = document.getElementById("texto").value;

    const nuevaNota = document.createElement("div");
    nuevaNota.classList.add("nota");

    nuevaNota.innerHTML = `
        <h3>${titulo}</h3>
        <p>${texto}</p>
        <button class="btnImportante">Importante</button>
        <button class="btnEliminar">Eliminar</button>
    `;

    const btnEliminar = nuevaNota.querySelector(".btnEliminar");
    btnEliminar.addEventListener("click", function() {
        nuevaNota.remove();
    });

    const btnImportante = nuevaNota.querySelector(".btnImportante");
    btnImportante.addEventListener("click", function() {
        nuevaNota.classList.toggle("importante");
    });

    lista.appendChild(nuevaNota);
    formulario.reset();
});
