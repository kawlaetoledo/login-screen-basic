const email = "admin@admin.com"
const senha = "abc123"

var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");
var botãoEntrar = document.getElementById("btn-entrar");


botãoEntrar.addEventListener('click', function () {

    if (campoEmail.value == "" || campoSenha.value == "") {
        alert("E-mail e senha devem ser preenchidos!");
        return;
    } else if (campoEmail.value.toLowerCase() != email || campoSenha.value != senha) {
        alert("Usuário ou senha inválidos!")
        return;
    } else {
        window.open("tela-principal.html", "_self");
        alert("Aqui vamos para tela principal!");
    }
})