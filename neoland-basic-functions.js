// EJERCICIO 1

function numeroMayor(numeroUno, numeroDos) {
    if (numeroUno > numeroDos) {
      return numeroUno;
    } else {
      return numeroDos;
    }
  }

  var resultado = numeroMayor(5, 10);
  console.log(resultado);
  

// EJERCICIO 2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let palabraMasLarga = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > palabraMasLarga.length) {
      palabraMasLarga = words[i];
    }
  }

  return palabraMasLarga;
}

const palabraMasLarga = findLongestWord(avengers);
console.log(palabraMasLarga); 


// EJERCICIO 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arrayDeNumeros) {
  let suma = 0;

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    suma += arrayDeNumeros[i];
  }
  return suma;
}

const resultadoSuma = sumAll(numbers);
console.log(resultadoSuma); 


// EJERCICIO 4

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(arrayDeNumeros2){
    if (arrayDeNumeros2 === 0){
    return null
    }

    let suma = 0

    for (let i = 0; i < arrayDeNumeros2.length; i++){
        suma += arrayDeNumeros2[i]
    }
    console.log(suma)
    let promedio = suma / arrayDeNumeros2.length

    return promedio
}

const resultadoPromedio = average(numbers2)
console.log(resultadoPromedio)


// EJERCICIO 5