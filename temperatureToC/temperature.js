//función para pasar de Fhrenheit a Celsius

do {
	var numero=parseFloat(prompt("Dime una temperatura en Fahrenheit y te lo paso a Celsius"))
  } while (isNaN(numero));

function gradosF(f){
	var c=(f-32)*5/9;
	return c;
}

document.write("Una temperatura de "+numero+"° Fahrenheit equivale a "+gradosF(numero)+"° Celsius.");