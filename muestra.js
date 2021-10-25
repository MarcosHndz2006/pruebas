var Btn = document.getElementById("btnSuma");
<<<<<<< HEAD
var Input = document.getElementById("insertar").value;
var SegundoInput = parseInt(document.getElementById("sumando").value);
var Formulario = document.getElementById("formulario");



const suma = (Input, SegundoInput) => {
    let resultado = Input + SegundoInput;
    console.log(resultado);
}

Btn.addEventListener('click', suma);
=======
var Primero = document.getElementById("insertar");
var Segundo = document.getElementById("sumando");

Btn.addEventListener("click", (e)=>{
    
    e.preventDefault(); // Evita que el formulario recargue la pogina

    let primerValor = Number(Primero.value);
    let segundoValor = Number(Segundo.value);

    let resultado = primerValor+segundoValor;

    if(isNaN(resultado))
        console.log("El resultado no es un numero") // Si el resultado no es un mumero, es decir si algun input tiene letras o caracteres especiales
    else //Logica para mostrar la suma
        console.log(resultado);
        alert(`El resultado es ${resultado}`)
});
>>>>>>> 0556bedda8a97695c2e6db42a530388052a32f35
