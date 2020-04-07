import ClasseUsuario, { minhaIdade as IdadeUsuario } from "./functions";
import axios from "axios";

//módulo 2: webpack -------------------------------
ClasseUsuario.info();
console.log(IdadeUsuario);

// módulo 1: conceitos -----------------------------
// exercício 1 -----------------------------
class User {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new User("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1);
console.log(Adm1);
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

// exercício 2 -----------------------------

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

// 2.1 map
const idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);

// 2.2 filter
const maioresIdadeRocket = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa === "Rocketseat";
});
console.log(maioresIdadeRocket);

// 2.3 find
const isGoogle = usuarios.find(function (item) {
  return item.empresa === "Google";
});
console.log(isGoogle);

// 2.4 unindo operações
/* Multiplique a idade de todos usuários por dois e depois realize 
um filtro nos usuários que possuem no máximo 50 anos */

const menorQue50 = usuarios.filter(function (item) {
  item.idade = item.idade * 2;
  return item.idade <= 50;
});
console.log(menorQue50);

// exercício 3 -----------------------------
//Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1
const arr = [1, 2, 3, 4, 5];
const mais10 = arr.map(function (item) {
  return item + 10;
});

const mais10Arrow = arr.map((item) => item + 10);

console.log(mais10);
console.log(mais10Arrow);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}

const mostraIdadeArrow = (usuario) => usuario.idade;

console.log(mostraIdade(usuario));
console.log(mostraIdadeArrow(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = "Diego", idade = 18) {
  return { nome, idade };
}

const mostraUsuarioArrow = (nome = "Diego", idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log(mostraUsuarioArrow(nome, idade));
console.log(mostraUsuarioArrow(nome));

// 3.4
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve(console.log("Funcionou!"));
  });
};

const arrowPromise = () =>
  new Promise((resolve, reject) => resolve(console.log("Funcionou!")));

console.log(promise);
console.log(arrowPromise);

// exercício 4 -----------------------------
// 4.1 Desestruturação simples

const empresa = {
  empresaNome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const {
  empresaNome, // mudei porque estava dando conflito com outra variável "nome"
  endereco: { cidade, estado },
} = empresa;

console.log(empresaNome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 Desestruturação em parâmetros

function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

function mostraInfoParametro({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfoParametro({ nome: "Diego", idade: 23 }));

// exercício 5 -----------------------------
// 5.1 Rest

const numeros = [1, 2, 3, 4, 5, 6];

const [r, ...s] = numeros;

console.log(r); // 1
console.log(s); // [2, 3, 4, 5, 6]

function somaRest(...newNumbers) {
  return newNumbers.reduce((total, next) => total + next);
}

console.log(somaRest(1, 2, 3, 4, 5, 6)); // 21
console.log(somaRest(1, 2)); // 3

// 5.2 Spread

const novoUsuario = {
  nomeUser: "Diego",
  idadeUser: 23,
  enderecoUser: {
    cidadeUser: "Rio do Sul",
    ufUser: "SC",
    paisUser: "Brasil",
  },
};

const usuario2 = { ...novoUsuario, nomeUser: "Gabriel" };
const usuario3 = {
  ...novoUsuario,
  enderecoUser: { ...novoUsuario.enderecoUser, cidadeUser: "Lontras" },
};

console.log(usuario2);
console.log(usuario3);

// exercício 6 -----------------------------
const usuario6 = "Diego";
const idade6 = 23;
console.log("O usuário " + usuario6 + " possui " + idade6 + " anos");
console.log(`O usuário ${usuario6} possui ${idade6} anos`);

// exercício 7 -----------------------------

const nome7 = "Diego";
const idade7 = 23;
const usuario7 = {
  nome7,
  idade7,
  cidade7: "Rio do Sul",
};

console.log(usuario7);

// módulo 3: async/await ------------------------
//1.1 função delay aciona o .then após 1s
function delay(seconds) {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(seconds), 1000);
  });
}

const umPorSegundo = async () => {
  console.log(await delay("1s"));
  console.log(await delay("2s"));
  console.log(await delay("3s"));
};

umPorSegundo();

//1.2

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
}
getUserFromGithub("rebsoo");
getUserFromGithub("rebsoo124123");
