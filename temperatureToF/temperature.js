//función para pasar de Celsius a Fahrenheit

do {
	var numero=parseFloat(prompt("Dime una temperatura en Celsius y te lo paso a Fahrenheit"))
  } while (isNaN(numero));

function gradosC(c){
	var f=32+9*c/5;
	return f;
}

document.write("Una temperatura de "+numero+"° Celsius equivale a "+gradosC(numero)+"° Fahrenheit.<br>");