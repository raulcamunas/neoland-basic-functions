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

