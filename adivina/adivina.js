document.write("Este es el juego del numero secreto"+'<br>');
document.write ("Piensa un numero del 1-100"+'<br>');
var secreto = Math.floor(Math.random()*100)+1;
var jugando=true; //si jugando es TRUE quiere decir que aún no hemos adiviando el nº
var x ;
do {
  x = prompt ("Dime un número del 1 al 100");
  if (secreto >x )
  {
  document.write("Es mayor que "+x+'<br>');
  }
  else if (secreto <x )
  {
  document.write("Es menor que "+x+'<br>');
  }
  else
  {
  jugando=false;
  }
} while (jugando);
document.write("Felicidades. Has adivinado el número "+secreto+'<br>');