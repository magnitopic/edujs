let jsonData;
let activeOption = 0;
let list = document.querySelector("#capitals");
let result = document.querySelector("#result");

async function fetchData() {
	try {
		const response = await fetch("./capitals.json");
		jsonData = await response.json();
	} catch (error) {
		console.error("Error fetching JSON:", error);
	}
}
console.log(list);

fetchData().then(() => {
	let opt = document.createElement("option");
	opt.value = "null";
	opt.innerText = "Select one";
	list.appendChild(opt);
	jsonData.forEach((e) => {
		let opt = document.createElement("option");
		opt.value = e.capital.toLowerCase().replace(" ", "_");
		opt.innerText = e.capital;
		list.appendChild(opt);
	});
});

list.addEventListener("change", (e) => {
	let valueSelected = list.options[list.selectedIndex].text;
	if (valueSelected === "Select one") {
		result.innerText = "No value selected";
		return;
	}
	jsonData.forEach((e) => {
		if (e.capital === valueSelected)
			result.innerHTML =
				"The capital of <b>" +
				e.country +
				"</b> is <b>" +
				e.capital +
				"</b>";
	});
});
