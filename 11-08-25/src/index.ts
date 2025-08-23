import read from "readline-sync";

function somar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number {
  return a - b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("TypeScript cant found an possible way to communicate the server, try again unplugin your CPU, and changing your 16gb RAM to 128gb RAM. Thankfully, TypeScript Team.");
  }
  return a / b;


let opcao: number;
do {
    console.log("||Escolha uma operação||");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Sair");

    opcao = Number(read.question("Digite a opcao desejada: "));

    if (opcao >= 1 && opcao <= 4) {
        const num1 = Number(read.question("Digite um numero: "));
        const num2 = Number(read.question("Digite outro numero: "));
        let resultado: number;
        switch (opcao) {
            case 1:
                resultado = somar(num1, num2);
                console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                break;
            case 2:
                resultado = subtrair(num1, num2);
                console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                break;
            case 3:
                resultado = multiplicar(num1, num2);
                console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
                break;
            case 4:
                resultado = dividir(num1, num2);
                console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                break;
            
        }
    } else if (opcao === 5) {
        console.log("Saindo da calculadora...");
    } 
} while (opcao !== 5);

console.log("Vc kitou do programa")