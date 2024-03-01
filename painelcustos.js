let custoProduto = document.getElementById("custoproduto")
let tbodyCusto = document.querySelector("#tabela-margens tbody")
let porcentagemdaMargem = document.getElementById("porcentagemmargem")
let valorDaMargem = document.getElementById("margemavulsa")


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

valorDaMargem.addEventListener("input",()=>{
    calcularPorcentagemMargem()

})

function calcularPorcentagemMargem(){

    porcentagemdaMargem.innerHTML = `${((( valorDaMargem.value - custoProduto.value)/custoProduto.value)*100).toFixed(0)}%`
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
