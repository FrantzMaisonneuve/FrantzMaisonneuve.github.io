var bonjour = document.getElementById("bonjour");
var contenu = document.getElementById("contenu2");
var input = document.getElementById("input-nom");

function handleInput(event) {
	if (event.key === "Enter") {
		var nom = input.value;

		var text = `Bonjour ${nom}!`
		bonjour.innerHTML = text;
		contenu.innerHTML = "";
	}
}

input.addEventListener("keyup", handleInput);