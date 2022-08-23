doors = [0, 0, 0];
doors[parseInt(Math.random() * 3)] = 1;
console.log(doors);
round = undefined;

document.querySelectorAll(".doors").forEach((element, i) => {
	element.addEventListener("click", (e) => {
		console.log(i);
		console.log(round);
		if (i != round) {
			changeImages(i);
		}
	});
});

document.querySelector("#reset").addEventListener("click", (e) => {
	document.querySelectorAll(".doors").forEach((element) => {
		element.src = "imgs/door.png";
	});
	doors = [0, 0, 0];
	doors[parseInt(Math.random() * 3)] = 1;
	console.log(doors);
	round = undefined;
});

const changeImages = (clickedDoor) => {
	doorObjects = document.querySelectorAll(".doors");
	if (round === undefined) {
		do {
			rnd = parseInt(Math.random() * 3);
		} while (doors[rnd] || rnd === clickedDoor);
		doorObjects[rnd].src = "imgs/donky.png";
		round = rnd;
	} else {
		if (doors[clickedDoor]) {
			doorObjects[clickedDoor].src = "imgs/car.png";
		} else {
			doorObjects[clickedDoor].src = "imgs/donky.png";
		}
	}
};
