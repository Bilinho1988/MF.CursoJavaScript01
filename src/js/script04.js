var nome = "João"; // podem ser usadas aspas duplas
var sobrenome = "Gomes"; // ou aspas simples
var cpf = "111.111.111-11";
var telefone = "998887655";
var ddd = "21";
var email = "joao@gmail.com";
var biografia =
    "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);
console.log("CPF: " + cpf);
console.log("Telefone: " + telefone);
console.log("DDD: " + ddd);
console.log("Email: " + email);
console.log("Biografia: " + biografia);

var nome_completo = nome + " " + sobrenome;
console.log("Nome completo: " + nome_completo); // O resultado passado no console será "João Gomes", pois juntamos o nome, um espaço vazio e o sobrenome.

console.log("nome.length: " + nome.length); // O resultado passado no console será 4
console.log("nome[0]: " + nome[0]); // O resultado passado no console será 'J'
