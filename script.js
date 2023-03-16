// Definição das variáveis e seleção dos elementos HTML relevantes:

var barraCaracter = document.querySelector("#barraCaracter")

var entradaButton = document.querySelector("#button")

var tamanhoCaracteres = document.querySelector("#caracteres")

var mostraSenha = document.querySelector("#password")

var campoSenha = document.querySelector("#campo-senha")

// ***********************
// Definição da string de caracteres possíveis para a senha:
var caracteresCriados = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#'

var novaSENHA = ''

// barra de seleção

tamanhoCaracteres.innerHTML = barraCaracter.value

barraCaracter.oninput = function () {
    tamanhoCaracteres.innerHTML = this.value
}

// Função que gera a senha e a exibe na página:

function gerarSenha() {
    var aleat = "";
    for (var i = 0, n = caracteresCriados.length; i < barraCaracter.value; ++i) {
        aleat = aleat + caracteresCriados.charAt(Math.floor(Math.random() * n))
    }

    // A função gerarSenha utiliza um loop for para percorrer a string de caracteres
    // possíveis e escolher aleatoriamente caracteres para compor a senha,
    // baseando-se no tamanho selecionado pelo usuário na barra de seleção.

    // A função também atualiza o conteúdo da div campoSenha,
    // que antes estava oculta (hide), para exibir a senha gerada.

    console.log(aleat)
    campoSenha.classList.remove("hide")
    novaSENHA = aleat
    password.innerHTML = aleat

}

