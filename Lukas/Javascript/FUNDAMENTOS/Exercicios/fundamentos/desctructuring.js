// novo recusro ES2015

const pessoa = {
  nome: "ana",
  idade: 5,
  edereco: {
    logradouro: "Rua BAC",
    numero: 20,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);
