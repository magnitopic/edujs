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
	if (!round) {
		e.target.src = "imgs/donky.png";
		do {
			rnd = parseInt(Math.random() * 3);
		} while (doors[rnd] || rnd === clickedDoor);
		document.querySelectorAll(".doors")[rnd].src = "imgs/donky.png";
	} else if (round < 2) {
		e.target.src = "imgs/car.png";
	}
	round++;
};
