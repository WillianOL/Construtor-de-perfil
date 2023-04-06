const inputName = document.getElementById("idNome");
const inputAnoNascimento = document.getElementById("idAnoNas");
const btnGerarPefil = document.querySelector("#btn_JS");
const modal = document.querySelector(".conteinerModal");
const nameOfPersonDiv = document.querySelector(".nome");
const divDiagnosticoPerfil = document.querySelector(".perfilResult .res");

// Faz a validação dos dados.
function dataCheck() {
    const nomeCaracters = inputName.value.length;
    const anoNascimentoCaracters = inputAnoNascimento.value.length;

    if (anoNascimentoCaracters != 4 || nomeCaracters === 0) {
        modal.classList.add("abreModal");
    } else {
        perfilConstructor();
    }
}
btnGerarPefil.addEventListener("click", dataCheck);

// ALtera a imagem de perfil, calcula a idade e mostra o nome e idade calculada.
function perfilConstructor() {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - inputAnoNascimento.value;
    const nome = inputName.value;
    const imagemPerfil = document.querySelector(".fotoPerfil img");
    const inputGenero = document.querySelectorAll(".sexDado input");

    const sexHomem = inputGenero[0].checked;
    const sexMulher = inputGenero[1].checked;
    let genero;
    let geracao;
    if (sexHomem) {
        genero = "homem";
        nameOfPersonDiv.innerHTML = `Seja bem-vindo, ${nome}! <br> Você tem ${idade} anos`;
        if (idade >= 60) {
            imagemPerfil.setAttribute("src", "../img/idoso-homem.jpg");
            geracao = "idoso";
        } else if (idade >= 20) {
            imagemPerfil.setAttribute("src", "../img/adulto-homem.jpg");
            geracao = "adulto";
        } else if (idade >= 12) {
            imagemPerfil.setAttribute("src", "../img/adolescente-homem.jpg");
            geracao = "adolescente";
        } else {
            imagemPerfil.setAttribute("src", "../img/criança-menino.jpg");
            geracao = "criança";
        }
    }

    if (sexMulher) {
        genero = "mulher";
        nameOfPersonDiv.innerHTML = `Seja bem-vinda, ${nome}! <br> Você tem ${idade} anos`;
        if (idade >= 60) {
            imagemPerfil.setAttribute("src", "../img/idosa-mulher.jpg");
            geracao = "idosa";
        } else if (idade >= 20) {
            imagemPerfil.setAttribute("src", "../img/adulta-mulher.jpg");
            geracao = "adulta";
        } else if (idade >= 12) {
            imagemPerfil.setAttribute("src", "../img/adolescente-mulher.jpg");
            geracao = "adolescente";
        } else {
            imagemPerfil.setAttribute("src", "../img/criança-menina.jpg");
            geracao = "criança";
        }
    }
    divDiagnosticoPerfil.innerHTML = `<p>Olá, <span>${nome}!</span> <br> Detectamos que você é um(a) ${genero} ${geracao} de ${idade} anos.</p>`;
    
    alteraTelaComResultado();
}

// Faz a mudança de tela com o resuldado do perfil
function alteraTelaComResultado() {
    const conteinerResultadoPerfil = document.querySelector(".perfilResult");
    const divDadosPefil = document.querySelector(".infoLeft");

    divDadosPefil.classList.add("hideInfoLeft");
    setInterval(() => {
        divDadosPefil.classList.add("hideInfoLeftDisplay");
        conteinerResultadoPerfil.classList.add("perfilResultShow");
    }, 1000);
}

const yearElement = document.querySelector(".dadoAno-js");
// Faz a validação do input ano de nascimento
function inputDataVerification() {
    const anoLenth = yearElement.value.length;
    const spanNoAnoNascimento = document.querySelector(".dado span");

    if (anoLenth != 4) {
        yearElement.classList.add("inputAnoErro");
        spanNoAnoNascimento.classList.add("spanErro");
    } else {
        yearElement.classList.remove("inputAnoErro");
        spanNoAnoNascimento.classList.remove("spanErro");
    }
}
yearElement.addEventListener("input", inputDataVerification);

const btnModal = document.querySelector(".btnModal"); // Botão para fechar o modal
btnModal.addEventListener("click", () => {
    modal.classList.remove("abreModal");
});
