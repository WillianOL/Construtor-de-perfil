const modal = document.querySelector('.conteinerModal');
const btnGerarPefil = document.querySelector('#btn_JS');
const inputName = document.getElementById('idNome');
const inputAnoNascimento = document.getElementById('idAnoNas');
const nameOfPersonDiv = document.querySelector('.nome');

function dataChecker() {
    const nome = inputName.value;
    const anoNascimento = inputAnoNascimento.value;

    if(anoNascimento.length === 0 || anoNascimento <= 0 || nome.length === 0){
        modal.classList.add('abreModal');
    } else{
        perfilConstructor();
    }
}

const yearElement = document.querySelector('dadoAno-js');


function perfilConstructor() {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - inputAnoNascimento.value;
    const nome = inputName.value
    const imagemPerfil = document.querySelector('.fotoPerfil img');
    const inputGenero = document.querySelectorAll('.sexDado input');

    if(inputGenero[0].checked){
        nameOfPersonDiv.innerHTML= `Seja bem vindo, ${nome}! <br> Você tem ${idade} anos`;
        if(idade >= 60){
            imagemPerfil.setAttribute('src', '../img/idoso-homem.jpg')
        } else if(idade >= 20){
            imagemPerfil.setAttribute('src', '../img/adulto-homem.jpg')
        } else if(idade >= 12){
            imagemPerfil.setAttribute('src', '../img/adolescente-homem.jpg')
        } else{
            imagemPerfil.setAttribute('src', '../img/criança-menino.jpg')
        }
    }

    if(inputGenero[1].checked){
        nameOfPersonDiv.innerHTML= `Seja bem vinda, ${nome}! <br> Você tem ${idade} anos`;
        if(idade >= 60){
            imagemPerfil.setAttribute('src', '../img/idosa-mulher.jpg')
        } else if(idade >= 20){
            imagemPerfil.setAttribute('src', '../img/adulta-mulher.jpg')
        } else if(idade >= 12){
            imagemPerfil.setAttribute('src', '../img/adolescente-mulher.jpg')
        } else{
            imagemPerfil.setAttribute('src', '../img/criança-menina.jpg')
        }
    }
}

btnGerarPefil.addEventListener('click', dataChecker);

const btnModal = document.querySelector('.btnModal');
btnModal.addEventListener('click', () => {
    modal.classList.remove('abreModal');
})