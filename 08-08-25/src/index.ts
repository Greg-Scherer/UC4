const prompt = require("prompt-sync");


let controlador = true

while (controlador) {
  console.log("=== Menu Principal ===");
  console.log("1. Ola");
  console.log("2. Sobre");
  console.log("3. Sair");
  const opcao = prompt("Escolha uma opção: ");
  switch (opcao) {
    case "1":
      console.log("Olá, bem-vindo ao nosso programa!");
      break;
    case "2":
      console.log("Este é um programa de exemplo para demonstrar o uso de um menu.");
      break;
    case "3":
      console.log("Saindo do programa...");
      controlador = false;
      break;
    default:
      console.log("Opção inválida, por favor tente novamente.");
  }
}