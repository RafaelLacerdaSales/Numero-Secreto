
function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>'Valor inválido'</div>`
        if (chuteForInvalido(numero)) {
            if (chute.toUpperCase() === "GAME OVER") {
    
                document.body.innerHTML =
                    `
                    <h2>Game Over!!!</h2>
                    <h3>Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                    `
                    document.body.style.backgroundColor = "black";
            } else {
    
                elementoChute.innerHTML += '<div>Valor Inválido</div>';
            }
        }
    
        return
    }

    if (numeroForMaiorOuMenorQueOValoPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
          <h2>você acertou!</h2>
          <h3>O número secreto era ${numeroSecreto}</h3> 
          
          <button id="jogar-novamente" class="btn-jogar">jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else{
        elementoChute.innerHTML +=`
        <div>o número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

    
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValoPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click' , e => {
    if (e.target.id ='jogar-novamente'){
        window.location.reload()
    }
})

