/*
 Se desea mostrar los productos que se van a comprar
 */

console.log("Primer ejercicio");
let listaDeCompras = [
  [3, "leches"],
  [5, "manzanas"],
  [2, "gaseosas"],
];
for (let i = 0; i < listaDeCompras.length; i++) {
  console.log(
    `Tengo que comprar ${listaDeCompras[i][0]} ${listaDeCompras[i][1]}`
  );
}
console.log("");

/*
Define una functon proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función proximoEnLaFila debe  retornar el elemento que fue removido.
*/

console.log("Segundo ejercicio");
function proximoEnLaFila(array, element) {
  array.push(element);
  return array.shift();
}
let queue = [1, 2, 3, 4];
console.log(`Antes: ${JSON.stringify(queue)}`);
let elementDeleted = proximoEnLaFila(queue, 5);
console.log(`Después: ${JSON.stringify(queue)}`);
console.log(`Elemento borrado: ${elementDeleted}`);
console.log("");

/*
En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par y golpes.
Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad:
Golpes          Retornar
------------------------------
1               "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2         "Double Bogey"
>= par + 3      "Go Home!"

par y golpes siempre serán numéricos y positivos.
*/

console.log("Tercer ejercicio");
function returnGolfResult(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home";
  }
}
console.log(returnGolfResult(4, 2));
console.log("");

/*
Four exercise
*/
