const modal = document.querySelector('.conteinerModal')
const date = new Date();
const ano = date.getFullYear()
const btnGerarPefil = document.querySelector('#btn_JS'); 

function perfilConstructor() {
    const nome = document.getElementById('idNome').value;
    const anoNasc = document.getElementById('idAnoNas').value;
    
    if(anoNasc.length === 0 || anoNasc <= 0 || nome.length === 0){
        modal.classList.add('modalAtivo')
    } else{

    }
}

btnGerarPefil.addEventListener('click', perfilConstructor);

const btnModal = document.querySelector('.btnModal')
btnModal.addEventListener('click', () => {
    modal.classList.remove('modalAtivo')
})