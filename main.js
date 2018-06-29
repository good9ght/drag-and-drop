function permitirDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("card", event.target.id);
}

function copy(event) {
    event.preventDefault();
    let elemento = event.dataTransfer.getData("card");
    // event.target.appendChild(document.getElementById(data));

    let copiaElemento = document.getElementById(elemento).cloneNode(true);
    copiaElemento.id = elemento+1;
    event.target.appendChild(copiaElemento);
}

function deletar(event) {
    event.preventDefault();
    let elemento = event.dataTransfer.getData("card");
    elemento = document.getElementById(elemento);
    elemento.parentNode.removeChild(elemento);
    return false;
}