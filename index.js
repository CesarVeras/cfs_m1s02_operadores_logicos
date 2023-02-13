let pessoa = {
	idade: 26,
	genero: "m",
	nome: "Eduardo",
	isEstudanteLab365: true
}

let { idade, isEstudanteLab365, genero } = pessoa;

if (idade > 60 || isEstudanteLab365) {
	console.log("Entrada gratuita.");
} else if (idade < 18 && !isEstudanteLab365) {
	console.log("Entrada proibida.");
} else {
	if (genero === "m") {
		console.log("Valor da entrada é de R$80,00");
	} else if (genero === "f") {
		console.log("Valor da entrada é de R$50,00");
	} 
}