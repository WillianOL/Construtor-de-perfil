const nome = document.getElementById('idNome');
const anoNasc = document.getElementById('idAnoNas');
const btnGerarPefil = document.querySelector('#btn_JS');
const date = new Date();
const ano = date.getFullYear()

function perfilConstructor() {
    const nomeValor = nome.value;
    const anoValor = Number(anoNasc.value);
    
    if(nomeValor && anoValor === ){
        alert('erro')
    }
}

btnGerarPefil.addEventListener('click', perfilConstructor);