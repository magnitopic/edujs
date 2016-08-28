//funciones que convierten grados de temperatura

function gradosC(c){
	var f=32+9*c/5;
	return f;
}

function gradosF(f){
	var c=(f-32)*5/9;
	return c;
}

var celsius=0;
var fahrenheit=100;

console.log("Una temperatura de "+celsius+"° Celsius equivale a "+gradosC(celsius)+"° Fahrenheit.");
console.log("Una temperatura de "+fahrenheit+"° Fahrenheit equivale a "+gradosF(fahrenheit)+"° Celsius.");
