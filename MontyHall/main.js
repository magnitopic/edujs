// Doors
var doors = [0, 0, 0];
doors[parseInt(Math.random() * 3)] = 1;
console.log(doors);
// Dom objects
const doorObjects = document.querySelectorAll(".doors");
const info = document.querySelector("#info");
const results = document.querySelector("#results");
// Global vars and initial text
round = undefined;
info.innerText = "Choose a door.";

document.querySelectorAll(".doors").forEach((element, i) => {
	element.addEventListener("click", (e) => {
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
	info.innerText = "Choose a door.";
});

const changeImages = (clickedDoor) => {
	if (round === undefined) {
		do {
			rnd = parseInt(Math.random() * 3);
		} while (doors[rnd] || rnd === clickedDoor);
		doorObjects[rnd].src = "imgs/donky.png";
		round = rnd;
		info.innerText = `You chose door ${
			clickedDoor + 1
		}. A donkey appears in door ${rnd + 1}.\n You can now stick with door ${
			clickedDoor + 1
		} or pick another one.`;
	} else if (round != "finish") {
		if (doors[clickedDoor]) {
			doorObjects[clickedDoor].src = "imgs/car.png";
			info.innerText = `Good choice! You found the price.`;
		} else {
			doorObjects[clickedDoor].src = "imgs/donky.png";
			info.innerText = `Sorry... You picked the wrong door.`;
		}
		round = "finish";
	}
};
