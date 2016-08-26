 document.write('<h1>'+'Generación de números primos hasta 1.000.000'+'</h1>');  
 var texto=2 + "<br>";  
 var primo  
 for (i=3;i<=10000000;i=i+2){  
     primo=true  
     for(j=3;j<Math.sqrt(i);j=j+2){  
         if (i%j===0){  
             primo=false;  
             break;  
         }  
     }  
     if (primo) {texto += i + "<br>";}  
 }  
 document.write(texto);  