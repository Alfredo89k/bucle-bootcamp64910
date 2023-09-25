// Solicitar al usuario un numero a traves de un prompt
// empezando desde 1 e ir incrementando este valor de a 1
// 123
// 1 2 3 4 ...121,122
// a medida que veoms todos los numeros enteros anterior incluidos el ingresado por el ususario

// el log debe ser el siguiente
// -el numero x es multiple de 7

var numero = parseInt(prompt("Ingrese nuevo un numero"));
let counter = 1;
while (counter <= numero) {
    if (counter % 7 === 0) {
        console.log('El $ es multiple de 7', { counter });
    }
    counter = counter + 1;
}
