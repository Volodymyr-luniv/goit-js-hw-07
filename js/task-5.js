function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const clickBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

clickBtn.addEventListener("click", handelClick);

function handelClick() {
	const clickColor = getRandomHexColor();

	document.body.style.backgroundColor = clickColor;
	colorSpan.textContent = clickColor;
}
