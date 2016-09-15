 document.write('<h1>'+'Generación de números primos hasta 1.000.000'+'</h1>');  
 var texto=2 + "<br>";              //el 2 es primo, y todos los demás pares no lo son
 for (var i=3;i<=1000000;i=i+2){   //tratamos solo los impares 
     var primo=true;                //inicialmente un número es primo hasta que no se demuestre lo contrario  
     for(j=3;j<=Math.sqrt(i);j=j+2){ //probamos hasta llegar a la raiz cuadrada de i 
         if (i%j==0){               //si el módulo es cero es que es divisible y por tanto no es primo
             primo=false;  
             break;  
         }  
     }  
     if (primo) {texto += i + "<br>";}  
 }  
 document.write(texto);
