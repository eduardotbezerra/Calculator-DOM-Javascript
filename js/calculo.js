

/* Código escrito por Eduardo Bezerra
Contato: (85) 998171611
Instagram: edu.t.bezerra */

function valida_calc (){
if(document.getElementById("n1"|| "n2").value == ""){
alert('Por favor, preencha o campo vazio');
document.getElementById("n1").focus();
return false
}
}

function Funcsomar() {
	valida_calc()
var n1 = parseInt(window.document.getElementById("n1").value);
var n2 = parseInt(window.document.getElementById("n2").value);
var result = n1+n2;


document.getElementById("paragrafo").innerText = result

}

function Funcsubtrair() {
		valida_calc()

var n1 = parseInt(window.document.getElementById("n1").value);
var n2 = parseInt(window.document.getElementById("n2").value);
var result = n1-n2;


document.getElementById("paragrafo").innerText = result

}
function Funcmultiplicar() {
		valida_calc()

var n1 = parseInt(window.document.getElementById("n1").value);
var n2 = parseInt(window.document.getElementById("n2").value);
var result = n1*n2;


document.getElementById("paragrafo").innerText = result

}
function Funcdividir() {
		valida_calc()

var n1 = parseInt(window.document.getElementById("n1").value);
var n2 = parseInt(window.document.getElementById("n2").value);
var result = n1/n2;

document.getElementById("paragrafo").innerText = result

}