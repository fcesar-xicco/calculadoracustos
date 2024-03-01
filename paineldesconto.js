let valorproduto =  document.querySelector("input#valorproduto")
let tbody = document.querySelector("#tabela-descontos tbody")
let porcentagemDesc = document.getElementById("porcentagemdesconto")
let valorAvulso = document.querySelector("input#valoravulso")

let baseDescontos = [{desconto:5 },{desconto:7 },{desconto:9 },{desconto:10 },{desconto:11 }]

valorproduto.addEventListener("input", ()=>{
    montarTabela()
    porcentagemAvulsa()
 
})

function montarTabela(){
    
    while (tbody.rows.length > 1) {
        tbody.deleteRow(1);
    }

    baseDescontos.forEach((item)=>{
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${item.desconto}%</td>
            <td style="background-color:  rgb(233, 146, 146);">${(Number(valorproduto.value) - Number(valorproduto.value/100)*item.desconto).toFixed(2)} </td>
            <td>${Number(valorproduto.value - (Number(valorproduto.value)-Number(valorproduto.value/100)*item.desconto)).toFixed(2)}</td>`;
        tbody.appendChild(tr);

    });
}

//=(100-((F12*100)/F4))&"%"

valorAvulso.addEventListener("input",()=>{
   porcentagemAvulsa()
})

function porcentagemAvulsa(){

        if(valorproduto.value == '0'){
            porcentagemDesc.innerHTML =  `22`
        }
        porcentagemDesc.innerHTML = `${100-((valorAvulso.value * 100)/valorproduto.value).toFixed(0)}%`

}
window.onload = montarTabela();






















/*



let valorproduto = document.querySelector("input#valorproduto")
let desconto5 = document.querySelector("td#desconto5")
let desconto7 = document.querySelector("td#desconto7")
let desconto9 = document.getElementById("desconto9")
let desconto10 = document.getElementById("desconto10")
let desconto11 = document.getElementById("desconto11")
let valorDesconto = document.getElementsByClassName("valordesconto")
let descontoAvulso = document.querySelector("input#descontoavulso")
let descontoPorcentagem = document.querySelector("td.desconto-porcentagem")


valorproduto.addEventListener("input",()=>{

    desconto5.innerHTML = `${(valorproduto.value-(valorproduto.value/100*5)).toFixed(2)}`
    valorDesconto[0].innerHTML = `${(valorproduto.value/100*5).toFixed(2)}`
    desconto7.innerHTML = `${(valorproduto.value-(valorproduto.value/100*7)).toFixed(2)}`
    valorDesconto[1].innerHTML = `${(valorproduto.value/100*7).toFixed(2)}`
    desconto9.innerText = `${(valorproduto.value-(valorproduto.value/100*9)).toFixed(2)}`
    valorDesconto[2].innerHTML = `${(valorproduto.value/100*9).toFixed(2)}`
    desconto10.innerText = `${(valorproduto.value-(valorproduto.value/100*10)).toFixed(2)}`
    valorDesconto[3].innerHTML = `${(valorproduto.value/100*10).toFixed(2)}`
    desconto11.innerText = `${(valorproduto.value-(valorproduto.value/100*11)).toFixed(2)}`
    valorDesconto[4].innerHTML = `${(valorproduto.value/100*11).toFixed(2)}`
    

})

descontoAvulso.addEventListener("input",()=>{

    descontoPorcentagem.innerHTML = `${(100-(((descontoAvulso.value)*100)/valorproduto.value)).toFixed(1)}%`
    valorDesconto[5].innerHTML = `${(valorproduto.value-descontoAvulso.value).toFixed(2)}`


})

*/