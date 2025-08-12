var idade = 18;
var TemCarteira = true;
if (idade >= 18 && TemCarteira) {
    console.log("Pode dirigir");
}
else if (idade < 18) {
    console.log("Não pode dirigir, pois é menor de idade");
}
else if (idade >= 18 && !TemCarteira) {
    console.log("Não pode dirigir, mas é de maior de idade");
}
else {
    console.log("Não pode dirigir pois é menor de idade");
}
