doors = [0, 0, 0];
doors[parseInt(Math.random() * 3)] = 1;
console.log(doors);
round = undefined;
doorObjects = document.querySelectorAll(".doors");
info = document.querySelector("#info");
results = document.querySelector("#results");

info.innerText = "Choose a door";

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
	info.innerText = "Choose a door";
});

const changeImages = (clickedDoor) => {
	if (round === undefined) {
		do {
			rnd = parseInt(Math.random() * 3);
		} while (doors[rnd] || rnd === clickedDoor);
		doorObjects[rnd].src = "imgs/donky.png";
		round = rnd;
		info.innerText = `You choose door ${
			clickedDoor + 1
		}. A donkey appears in door ${rnd + 1}. You can now stick with door ${
			clickedDoor + 1
		} or change your choice.`;
	} else {
		if (doors[clickedDoor]) {
			doorObjects[clickedDoor].src = "imgs/car.png";
			info.innerText = `Good choice! You found the price.`;
		} else {
			doorObjects[clickedDoor].src = "imgs/donky.png";
			info.innerText = `Sorry... You picked the wrong door.`;
		}
	}
	changeText();
};
