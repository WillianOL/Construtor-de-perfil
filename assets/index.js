const nome = document.getElementById('idNome');
const anoNasc = document.getElementById('idAnoNas');
const btnGerarPefil = document.querySelector('#btn_JS');
const date = new Date();
const ano = date.getFullYear()

function perfilConstructor() {
    const nomeV = nome.value;
    const anoV = anoNasc.value;

    if(anoV.length === 0 || anoV <= 0 || nomeV.length === 0){
        
    }
}

btnGerarPefil.addEventListener('click', perfilConstructor);