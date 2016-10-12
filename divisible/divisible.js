document.write("Calculo de los divisore de un número");
do{
    var n = prompt("Dime el número que quieras (de 1 a un millón)", 144);
}while(isNaN(n) || n>= 1000000 || n<= 1 || n%1!==0);
document.write("Los divisoresde "+n+" son:");
for (var i=1;i<=n;i++){
	if (n%i===0){
		document.write(i);
	}
}