console.log("Carregou")

var formulario = document.getElementById("forms")

formulario.addEventListener("submit", function(event) {
    event.preventDefault()

    var campoNome = document.getElementById("nome").value
    var campoEmail = document.getElementById("email").value


    console.log(campoNome)
    console.log(campoEmail)
})