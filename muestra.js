var Btn = document.getElementById("btnSuma");
var Input = document.getElementById("insertar").value;
var SegundoInput = document.getElementById("sumando").value;
var Formulario = document.getElementById("formulario");

Btn.addEventListener("click", suma(Input, SegundoInput));

function suma(Primero, Segundo){
    let resultado;
    resultado = Primero + Segundo;
    console.log(resultado);
}
