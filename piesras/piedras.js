function maquina(n){
	m=(n-1)%4 //número de piedas que quita la máquina
	if (m==0){
		m=(Math.floor(Math.random()*3)+1);
	}
	return m;
}

document.write('<h1>'+"Este es el juego de"+'</h1>');
document.write('<h1>'+"LA ÚLTIMA PIEDRA"+'</h1>');
document.write("Usted dispone de un conjunto de piedras iniciales."+'<br>');
document.write("Juega contra la máquina"+'<br>');
document.write("En cada tirada, tanto usted como la máquina,"+'<br>');
document.write("pueden quirar una piedra, dos piedras o tres piedras."+'<br>');
document.write("Es obligatorio quitar como mínimo 1 pieda y como máximo 3."+'<br>');
document.write("Comienza jugando usted y el último que quita pierde."+'<br>');
var n=Math.floor(Math.random()*12)+10 //número inicial de piedras
document.write("Número inicial de piedras: "+n+'<br>');
var x,m,juega=true;
do {
	do {
		x = prompt ("Quedan "+n+"\nDime cuantas piedas quitas: 1, 2 o 3");
	}
	while (x<1 || x>3)
	n=n-x;
	document.write("Usted ha quitado "+x+" piedas. Quedan "+n+'<br>');
	if (n<=0){
		juega=false;
		document.write('<h2>'+"La máquina gana."+'</h2>');
	} else {
		m=maquina(n);
		n=n-m;
		document.write("La máquina ha quitado "+m+" piedas. Quedan "+n+'<br>');
		if (n<=0){
			juega=false;
			document.write('<h2>'+"Usted gana."+'</h2>');
		}
	}
}
while (juega);

//file:///C:/Users/apa/Documents/Dropbox/js/piedras.htm
