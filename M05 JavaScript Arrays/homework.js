/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array.shift();
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array.pop();
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  return array.map((element) => element + 1);
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // elem2
  // Retorna el arreglo.
  // Tu código:

  array[array.length] = elemento;
  return array;

  array.push(elemento);
  return array;
}
// console.log(agregarItemAlFinalDelArray([1, 2, 3], 5));
// [1,2,3,5]

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  // unshift
  array.unshift(elemento);
  return array;
}
// console.log(agregarItemAlComienzoDelArray([1, 2, 3], 5));
// [5,1,2,3]

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(" ");
}
// console.log(dePalabrasAFrase(["Hello", "world!"]));
// 'Hello world!'

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:

  // array = [1,2,3]
  // elem = 5

  return array.includes(elemento);
}
// console.log(arrayContiene([1, 2, 3], 5));

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  // solucion 1.
  /* var suma = 0;
  for (var i = 0; i < arrayOfNums.length; i++) {
    suma = suma + arrayOfNums[i];
  }
  return suma; */

  // [1,2,3,4]
  //  ^
  // acum = 10

  return arrayOfNums.reduce(function (acum, next) {
    return acum + next;
  });
}
// console.log(agregarNumeros([1, 2, 3, 4]));
// 10
function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  // como iterar -> metodo de bucle -> for, map
  // que es un promedio -> suma total de los elem / cantidad de elem

  // resultadosTest = [1,2,3,4,5]
  // agregarNumeros(resultadosTest) // 15
  // resultadosTest.length // 5
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}
// console.log(promedioResultadosTest([1,2,3,4,5]))

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:

  var max = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > max) max = arrayOfNums[i];
  }
  return max;
}
// console.log(numeroMasGrande([1, 3, 7, 2, 4, 9, 1, 10]))
// 7

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // arguments -> { 0: 1, 1: 2}
  if (arguments.length === 0) return 0;
  var producto = 1;
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}
// console.log(multiplicarArgumentos(7));

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  // solucion 1
  var mayor18 = array.filter((num) => num > 18);
  return mayor18.length;
  // solucion 2
  var count = 0;
  array.forEach((element) => {
    if (element > 18) count++;
  });
  return count;
}
// console.log(cuentoElementos([1, 2, 43, 5, 21]));

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:

  // numeroDeDia => 5
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  return "Es dia laboral";
}
// console.log(diaDeLaSemana(1))

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
  return num.toString()[0] === "9";
}
// console.log(empiezaConNueve(969));

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
  var aux = array[0];
  // aux -> 3
  // [3,2,3,3]
  //   ^
  for (const elem of array) {
    if (elem !== aux) return false;
  }
  return true;
}
// console.log(todosIguales([3,2,3,3]))

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArray = [];
  // ["Enero","Marzo", "Marzo", "Noviembre"]

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      newArray.push(array[i]);
    }
  }

  if (newArray.length === 3) return newArray;
  return "No se encontraron los meses pedidos";
}
// console.log(mesesDelAño(["Enero", "Febrero", "Marzo", "Marzo", "Noviembre"]));
// console.log(mesesDelAño(["Enero", "Febrero", "Marzo"]));

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  var resultado = [];
  for (let i = 0; i <= 10; i++) {
    resultado.push(6 * i);
  }
  return resultado;
}
// console.log(tablaDelSeis());
//[0,6,12,18,...,60]
function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  return array.filter((elemento) => elemento > 100);
}
// console.log(mayorACien([101, 104, 99, 30, 150]));
// [101,104,150]
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
