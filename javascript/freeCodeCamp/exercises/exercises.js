/*
 Se desea mostrar los productos que se van a comprar
 */

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

/*
Define una functon proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función proximoEnLaFila debe  retornar el elemento que fue removido.
*/

function proximoEnLaFila(array, element) {
  array.push(element);
  return array.shift();
}

let firstElement = proximoEnLaFila([1, 2, 3, 4], 5);
console.log(firstElement);
