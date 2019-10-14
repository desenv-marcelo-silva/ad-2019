
const listaAmigos = [
	{id: 1, nome: 'Marcelo' },
	{id: 2, nome: 'Aline'},
	{id: 3, nome: 'Jade'},
	{id: 4, nome: 'Pipoca'},
	{id: 5, nome: 'Kiara'},
];

var listaAmigosSorteio = [
	{id: 1, nome: 'Marcelo' },
	{id: 2, nome: 'Aline'},
	{id: 3, nome: 'Jade'},
	{id: 4, nome: 'Pipoca'},
	{id: 5, nome: 'Kiara'},
];

console.log("\n========== lista amigos ===========");
console.log(listaAmigos);

console.log("\n========== lista amigos sorteio ===========");
shuffleArray(listaAmigosSorteio);

var tamanhoMaximo = listaAmigos.length;
var listaSorteada = [];

for(var x = 0; x<tamanhoMaximo-1;x++) {
	listaSorteada.push({id: listaAmigosSorteio[x].id, nome: listaAmigosSorteio[x].nome, amigo: listaAmigosSorteio[x+1].nome});
}
listaSorteada.push({id: listaAmigosSorteio[x].id, nome: listaAmigosSorteio[x].nome, amigo: listaAmigosSorteio[0].nome});

console.log("\n========== lista sorteada ===========");
console.log(listaSorteada);


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	console.log(array);
}