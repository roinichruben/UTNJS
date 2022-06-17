function cambiarFondoRojo(){
    document.body.style.backgroundColor = 'red'

}
function cambiarFondoVerde(){
    document.body.style.backgroundColor = 'green'

}
function cambiarFondoAzul(){
    document.body.style.backgroundColor = 'blue'

}
/* Ejercicio 2*/

var caracteres = document.getElementById('caracteres');
var contador = document.getElementById('contador');

caracteres.addEventListener('keyup',function(){
    contador.innerText = caracteres.value.length;
})

/* Ejercicio 3*/


