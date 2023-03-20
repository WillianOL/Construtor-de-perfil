const modal = document.querySelector('.conteinerModal');
const btnGerarPefil = document.querySelector('#btn_JS');
const inputName = document.getElementById('idNome');
const inputAnoNascimento = document.getElementById('idAnoNas');
const nameOfPersonDiv = document.querySelector('.nome');

function dataChecker() { // Faz a validação dos dados.
    const nomeCaracters = inputName.value.length;
    const anoNascimentoCaracters = inputAnoNascimento.value.length;

    if(anoNascimentoCaracters != 4 || nomeCaracters === 0){
        modal.classList.add('abreModal');
    } else{
        perfilConstructor();
    }
}
btnGerarPefil.addEventListener("click", dataChecker);

function perfilConstructor() { // Altera a foto de perfil, de acordo com gênero e idade
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - inputAnoNascimento.value;
    const nome = inputName.value
    const imagemPerfil = document.querySelector('.fotoPerfil img');
    const inputGenero = document.querySelectorAll('.sexDado input');

    const divDadosPefil = document.querySelector('.infoLeft')
    const divResultadoPerfil = document.querySelector('.perfilResult')
    
    divDadosPefil.classList.add('showInfoLeft')
    setInterval(() =>{
        divDadosPefil.classList.add('showLeft')
        divResultadoPerfil.classList.add('perfilResultShow')
    }, 1000)

    if(inputGenero[0].checked){
        nameOfPersonDiv.innerHTML = `Seja bem vindo, ${nome}! <br> Você tem ${idade} anos`;
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

const yearElement = document.querySelector('.dadoAno-js');
function inputDataVerification() {
    const anoLenth = yearElement.value.length
    const spanInYearDate = document.querySelector('.dado span')

    if(anoLenth < 4 || anoLenth > 4){
        yearElement.classList.add('anoErro')
        spanInYearDate.classList.add('spanShow')
    }

    if(anoLenth === 4){
        yearElement.classList.remove('anoErro')
        spanInYearDate.classList.remove('spanShow')
    }
}
yearElement.addEventListener('input', inputDataVerification);

const btnModal = document.querySelector('.btnModal');
btnModal.addEventListener('click', () => {
    modal.classList.remove('abreModal');
})