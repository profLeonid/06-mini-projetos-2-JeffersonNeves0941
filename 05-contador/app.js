'use strict'
function criarListaNumero(quantidade) {
    let listaNumeros = []
    for (let cont = 1; cont <= quantidade; cont++) {
        listaNumeros.push(cont)

    }
    return listaNumeros

}

function criarListaPares(quantidade) {
    let listaPares = []

    for (let par = 2; par <= quantidade; par += 2) {
        listaPares.push(par)

    }
    return listaPares
}


function criarListaImpares(quantidade) {
    let listaImpares = []

    for (let impar = 2; impar <= quantidade; impar +=2) {
        listaImpares.push(impar -1)
    }
    return listaImpares
}



function criarMultiplosDeCinco(quantidade) {
    let multiplo = []

    for (let mult = 5; mult <= quantidade * 5; mult += 5) {
        multiplo.push(mult)
    }
    return multiplo
}

function criarPotencia(quantidade){
    let potencia = []

    for (let i = 0; i < quantidade; i++){
        potencia.push(2**i)
    }
    return potencia
}

function criarLinha(){
    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr")

    const tdNum = document.createElement("tdNum")
    tdNum.textContent = num

    const tdPar = document.createElement("tdPar")
    tdPar.textContent
    
}

function handleClick() {
    const quantidade = Number(document.getElementById("quantidade").value)

    const listaNumero = criarListaNumero(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImares = criarListaImares(quantidade)
    const multiplo = criarMultiplosDeCinco(quantidade)
    const potencia = criarPotencia(quantidade)

    document.getElementById("tbody").replaceChildren




}

/*






