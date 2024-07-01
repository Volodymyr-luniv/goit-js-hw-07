const subForm = document.querySelector(".login-form");
subForm.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
	event.preventDefault();

	const email = event.currentTarget.elements.email.value.trim();
	const password = event.currentTarget.elements.password.value.trim();

	if (!email || !password) {
		alert("All form fields must be filled in");
		return;
	}

	const formData = {
		email: email,
		password: password,
	};

	console.log(formData);

	event.currentTarget.reset();
}
