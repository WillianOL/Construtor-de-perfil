const modal = document.querySelector('.conteinerModal');
const btnGerarPefil = document.querySelector('#btn_JS');
const inputName = document.getElementById('idNome');
const inputAnoNascimento = document.getElementById('idAnoNas');
const nameOfPersonDiv = document.querySelector('.nome');

function dataCheck() { // Faz a validação dos dados.
    const nomeCaracters = inputName.value.length;
    const anoNascimentoCaracters = inputAnoNascimento.value.length;

    if(anoNascimentoCaracters != 4 || nomeCaracters === 0){
        modal.classList.add('abreModal');
    } else{
        perfilConstructor();
    }
}
btnGerarPefil.addEventListener("click", dataCheck);

function perfilConstructor() { // ALtera a imagem de perfil, calcula a idade e mostra o nome e idade calculada.
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - inputAnoNascimento.value;
    const nome = inputName.value
    const imagemPerfil = document.querySelector('.fotoPerfil img');
    const inputGenero = document.querySelectorAll('.sexDado input');

    let sexHomem = inputGenero[0].checked
    let sexMulher = inputGenero[1].checked
    if(sexHomem){
        sexHomem = "Homem";
        nameOfPersonDiv.innerHTML = `Seja bem-vindo, ${nome}! <br> Você tem ${idade} anos`;
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

    if(sexMulher){
        sexMulher = "mulher"
        nameOfPersonDiv.innerHTML = `Seja bem-vinda, ${nome}! <br> Você tem ${idade} anos`;
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

    alteraTelaComResultado();
}

function alteraTelaComResultado() { // Faz a mudança de tela com o resuldado do perfil
    const divResultadoPerfil = document.querySelector('.perfilResult')
    const divDadosPefil = document.querySelector('.infoLeft')
    
    divDadosPefil.classList.add('showInfoLeft')
    setInterval(() =>{
        divDadosPefil.classList.add('showLeft')
        divResultadoPerfil.classList.add('perfilResultShow')
    }, 1000)
}

const yearElement = document.querySelector('.dadoAno-js');
function inputDataVerification() { // Faz a validação do input ano de nascimento
    const anoLenth = yearElement.value.length
    const spanInYearDate = document.querySelector('.dado span')

    if(anoLenth < 4 || anoLenth > 4){
        yearElement.classList.add('inputAnoErro')
        spanInYearDate.classList.add('spanErro')
    }

    if(anoLenth === 4){
        yearElement.classList.remove('inputAnoErro')
        spanInYearDate.classList.remove('spanErro')
    }
}
yearElement.addEventListener('input', inputDataVerification);

const btnModal = document.querySelector('.btnModal'); // Botão para fechar o modal
btnModal.addEventListener('click', () => {
    modal.classList.remove('abreModal');
})