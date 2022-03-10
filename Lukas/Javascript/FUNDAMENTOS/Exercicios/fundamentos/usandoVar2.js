let numero = 1;
{
  let numero = 2;
  console.log("dentro =", numero);
}

console.log("fora =", numero);

if (true) {
  var dentroif = 2;
}

console.log(dentroif);
