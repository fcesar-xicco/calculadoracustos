let tbodyConsumidor = document.querySelector("#tabela-margens-consumidor tbody")
let custoCons = document.getElementById("custoconsumidor")
let consumidorPorcentagemAvulsa = document.getElementById("porcentagemmargemconsumidor")
let margemAvulsaCons = document.getElementById("valormargemconsumidor")
let calculoDoConsumidor = document.getElementById("custodoconsumidor")

let baseMargensConsumidor = [{margem:30},{ margem:33},{margem:35},{margem:37},{margem:40}]

custoCons.addEventListener("input", ()=>{
    calculoDoConsumidor.innerHTML = `Custo: ${custoCons.value/2}`
    montarTabelaConsumidor()
})

function montarTabelaConsumidor(){

    while (tbodyConsumidor.rows.length > 1) {
        tbodyConsumidor.deleteRow(1);
    }

    baseMargensConsumidor.forEach((itemC)=>{
        let trCons =  document.createElement('tr')
        let novocusto = Number(custoCons.value)/2

        trCons.innerHTML = `
            <td>${itemC.margem}%</td>
            <td style="background-color: rgb(142, 255, 255);">${((novocusto+(novocusto/100* itemC.margem))).toFixed(2)}</td>
            <td> - </td>
        
        `
        tbodyConsumidor.appendChild(trCons)
    })
}

/*--------------------------------------------------------------------------------------------------------------------*/
margemAvulsaCons.addEventListener("input",()=>{
    calcularPorcentagemConsumidor()

})

function calcularPorcentagemConsumidor(){
    let novocusto = Number(custoCons.value)/2
    consumidorPorcentagemAvulsa.innerHTML = `${((( margemAvulsaCons.value - novocusto)/novocusto)*100).toFixed(0)}%`
}






window.onload = montarTabelaConsumidor();