const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = '31 Dec 2023'

function countDown(){
    
    const dateLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dateLanc-hoje)/1000;

    const finalDias =  Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(`${finalDias}D`)
    hora.innerHTML = formatoTempo(`${finalHoras}H`)
    minuto.innerHTML = formatoTempo(`${finalMinutos}M`)
    segundo.innerHTML = formatoTempo(`${finalSegundos}S`)
}

function formatoTempo(tempo){
    return tempo <=10? `${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)

function addRedBorder (id){
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

addRedBorder('quinta')