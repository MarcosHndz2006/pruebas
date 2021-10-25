var Btn = document.getElementById("btnSuma");
var Input = document.getElementById("insertar").value;
var SegundoInput = parseInt(document.getElementById("sumando").value);
var Formulario = document.getElementById("formulario");



const suma = (Input, SegundoInput) => {
    let resultado = Input + SegundoInput;
    console.log(resultado);
}

Btn.addEventListener('click', suma);