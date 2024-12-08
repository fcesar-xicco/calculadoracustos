let custoProduto = document.getElementById("custoproduto")
let tbodyCusto = document.querySelector("#tabela-margens tbody")
let porcentagemdaMargem = document.getElementById("porcentagemmargem")// varialvel para saber porcentagem do valor
let valorDaMargem = document.getElementById("margemavulsa") //input do valor avulso

let valorPorcento = document.getElementById("valordamargem")//variavel para saber valora travéz do porcento
let valorDaPorcentagem = document.getElementById("porcentoavulso") // input da % avulsa

let baseMargens = [{margem:30},{ margem:33},{margem:35},{margem:37},{margem:40}]

custoProduto.addEventListener("input", ()=>{
    montarTabelaCustos()
 
})

function montarTabelaCustos(){
   
    while (tbodyCusto.rows.length > 1) {
        tbodyCusto.deleteRow(1);
    }

    baseMargens.forEach((itemM)=>{
        let trm = document.createElement('tr')
        trm.innerHTML = `
            <td>${itemM.margem}%</td>
            <td style="background-color: rgb(142, 255, 255);">${((custoProduto.value/100*itemM.margem)+Number(custoProduto.value)).toFixed(2)}</td>
            <td>-</td>`
        tbodyCusto.appendChild(trm);
      
    });
}

// -----------------------------------------CALCULAR PORCENTAGE DO VALOR-------------------------------------
valorDaMargem.addEventListener("input",()=>{
    calcularPorcentagemMargem()

})

function calcularPorcentagemMargem(){ //=(VALOR/total-1)*100  

    porcentagemdaMargem.innerHTML = `${((( valorDaMargem.value - custoProduto.value)/custoProduto.value)*100).toFixed(0)}%`
}

// -----------------------------------------CALCULAR VALOR DA PORCENTAGEM------------------------------------
valorDaPorcentagem.addEventListener("input",()=>{
    calcularValorPorcento()

})   
    function calcularValorPorcento(){ // =valor+((valor/100)*M1)

        valorPorcento.innerHTML = `${(((Number(custoProduto.value) / 100) * Number(valorDaPorcentagem.value)) + Number(custoProduto.value) ).toFixed(2)}`   
    }


window.onload = montarTabelaCustos();

































/*
let valorCustoCons = document.querySelector("input#valorcustocons")
let margemCons30 = document.querySelector("td#margemcons30")
let margemCons33 = document.querySelector("td#margemcons33")
let margemCons35 = document.querySelector("td#margemcons35")
let margemCons37 = document.querySelector("td#margemcons37")
let margemCons40 = document.querySelector("td#margemcons40")
let margemPorcentagem = document.querySelector("td#margemporcentagem")
let margemConsAvulso =  document.querySelector("input#margemconsavulso")



valorCustoCons.addEventListener('input',()=>{

    let valorCustoReal = Number(valorCustoCons.value)/2
    margemCons30.innerHTML = `${((Number(valorCustoReal))+(valorCustoReal*30)/100).toFixed(2)}`
    margemCons33.innerHTML = `${((Number(valorCustoReal)) +(valorCustoReal*33)/100).toFixed(2)}`
    margemCons35.innerHTML = `${((Number(valorCustoReal)) +(valorCustoReal*35)/100).toFixed(2)}`
    margemCons37.innerHTML = `${((Number(valorCustoReal)) +(valorCustoReal*37)/100).toFixed(2)}`
    margemCons40.innerHTML = `${((Number(valorCustoReal)) +(valorCustoReal*40)/100).toFixed(2)}`
})


margemConsAvulso.addEventListener("input",()=>{

    margemPorcentagem.innerHTML = `${((Number(margemConsAvulso.value)-
                                    (Number(valorCustoCons.value/2)))/
                                    (Number(valorCustoCons.value/2))*100).toFixed(0)}%`


//      ((M8-M4)/M4)*100;" ")
})

*/
