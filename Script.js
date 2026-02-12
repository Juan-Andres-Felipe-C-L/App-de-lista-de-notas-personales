function agregarTarea() {
    
    let nuevaTareaTexto = document.querySelector("input").value;

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;

}