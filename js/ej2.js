// Solicitar a una maestra que ingresa las calificaciones de sus alumnos
// pedir constantemente las notas hasta que la maestra ingrese un 0 como valor. En ese momento saldremos de nuestro bucle e imprimiremos el promedio del curso segun las notas ingresadas.

let nota=parseInt(prompt("ingrese la calificacion de notas"))
let cantidadnotas=0;
let acumuladonotas=0;


do{
    nota=parseInt(prompt("Ingrese la calificacion del alumno"))
    if(nota >0){
        cantidadnotas++;
        acumuladonotas+=nota;
    }

}


while(nota !==0)
{
    const promedio=acumuladonotas/cantidadnotas
}

