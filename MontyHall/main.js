doors = [0, 0, 0];
doors[parseInt(Math.random() * 3)] = 1;
console.log(doors);
round = 0;

document.querySelectorAll(".doors").forEach((element, i) => {
	element.addEventListener("click", (e) => {
		changeImages(i);
	});
});

document.querySelector("#reset").addEventListener("click", (e) => {
	document.querySelectorAll(".doors").forEach((element) => {
		element.src = "imgs/door.png";
		round = 0;
	});
});

const changeImages = (clickedDoor) => {
	doorObjects = document.querySelectorAll(".doors");
	if (!round) {
		do {
			rnd = parseInt(Math.random() * 3);
		} while (doors[rnd] || rnd === clickedDoor);
		doorObjects[rnd].src = "imgs/donky.png";
	} else if (round < 2) {
		if (doors[clickedDoor]) {
			doorObjects[clickedDoor].src = "imgs/car.png";
		} else {
			doorObjects[clickedDoor].src = "imgs/donky.png";
		}
	}
	round++;
};
