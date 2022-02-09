//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);

//Função com retorno
function retorno(a, b = 2) {
  return a + b;
}

console.log(retorno(2, 3));
console.log(retorno());
