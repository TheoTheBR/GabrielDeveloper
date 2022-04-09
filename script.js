var dialogo = document.querySelector('div#dialogo')
var tabuada = document.querySelector('div#tabuada')
function clicou(){
var a = document.querySelector("input#numero")
var numentrada = Number(a.value)
var resultado1 = numentrada * 1
var resultado2 = numentrada * 2
var resultado3 = numentrada * 3
var resultado4 = numentrada * 4
var resultado5 = numentrada * 5
var resultado6 = numentrada * 6
var resultado7 = numentrada * 7
var resultado8 = numentrada * 8
var resultado9 = numentrada * 9
var resultado10 = numentrada * 10
tabuada.innerHTML=`<strong>${numentrada} * 1 = ${resultado1}</br>${numentrada} * 2 = ${resultado2}</br>${numentrada} * 3 = ${resultado3}</br>${numentrada} * 4 = ${resultado4}</br>${numentrada} * 5 = ${resultado5}</br>${numentrada} * 6 = ${resultado6}</br>${numentrada} * 7 = ${resultado7}</br>${numentrada} * 8 = ${resultado8}</br>${numentrada} * 9 = ${resultado9}</br>${numentrada} * 10 = ${resultado10}</strong>`
dialogo.innerHTML = `<strong>A tabuada do número ${numentrada} é:</strong>`
if(numentrada>=100){tabuada.style.width="40%"}
}
function limpar(){
    tabuada.innerHTML=" "
    dialogo.innerHTML="Digite um número e receba a tabuada deste."



}





