const L1 = document.getElementById("L1");
const L2 = document.getElementById("L2");
const L3 = document.getElementById("L3");
const T1 = document.getElementById("T1");
const T2 = document.getElementById("T2");
const T3 = document.getElementById("T3");
const decimal = document.getElementById("VDecimal");

//sleep function taken for this wonderfull article by James Hibbard: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting() {
    let contador = -1;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                await sleep(1000);
                contador++;
                decimal.innerText = contador
                T1.innerText = i;
                T2.innerText = j;
                T3.innerText = k;
                console.log(i)
                console.log(j)
                console.log(k)
                console.log("======")
                if (i) {
                    L1.style.backgroundColor = "rgb(177, 241, 250)"
                } else {
                    L1.style.backgroundColor = "rgb(0, 0, 190)"
                }
                if (j) {
                    L2.style.backgroundColor = "rgb(177, 241, 250)"
                } else {
                    L2.style.backgroundColor = "rgb(0, 0, 190)"
                }
                if (k) {
                    L3.style.backgroundColor = "rgb(177, 241, 250)"
                } else {
                    L3.style.backgroundColor = "rgb(0, 0, 190)"
                }
            }
        }
    }
}
delayedGreeting();