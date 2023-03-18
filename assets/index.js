const modal = document.querySelector('.conteinerModal');
const btnGerarPefil = document.querySelector('#btn_JS');
const inputName = document.getElementById('idNome');
const inputAnoNascimento = document.getElementById('idAnoNas');
const nameOfPersonDiv = document.querySelector('.nome');

function perfilConstructor() {
    const nome = inputName.value;
    const anoNascimento = inputAnoNascimento.value;

    if(anoNascimento.length === 0 || anoNascimento <= 0 || nome.length === 0){
        modal.classList.add('abreModal');
    } else{
        let anoAtual = new Date().getFullYear();
        const resultadoIdade = date - anoNascimento;
        const imagemPerfil = document.querySelector('.fotoPerfil img');
        const inputGenero = document.querySelectorAll('.sexDado input');

        if(inputGenero[0].checked){
            nameOfPersonDiv.innerHTML= `Seja bem vindo, ${nome}! <br> Você tem ${resultadoIdade} anos`;
        }

        if(inputGenero[1].checked){
            
        }
    }
}

btnGerarPefil.addEventListener('click', perfilConstructor);

const btnModal = document.querySelector('.btnModal');
btnModal.addEventListener('click', () => {
    modal.classList.remove('abreModal');
})