function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector('input[type="number"]');
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

const boxesElement = document.createDocumentFragment();

function createBoxes() {
	const amount = parseInt(input.value, 10);

	if (Number.isNaN(amount) || amount < 1 || amount > 100) {
		input.value = "";
		return;
	}

	boxes.innerHTML = "";

	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxesElement.appendChild(box);
	}

	boxes.appendChild(boxesElement);

	input.value = "";
}

function destroyBoxes() {
	boxes.innerHTML = "";
}
