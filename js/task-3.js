const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handelName);

function handelName() {
	const currentName = nameInput.value.trim();
	if (currentName) {
		nameOutput.textContent = currentName;
	} else {
		nameOutput.textContent = "Anonymous";
	}
}
