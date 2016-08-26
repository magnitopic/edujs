 function formatNmb(nNmb){   
   var sRes = "";   
   for (var j, i = nNmb.length - 1, j = 0; i >= 0; i--, j++)   
    sRes = nNmb.charAt(i) + ((j > 0) && (j % 3 == 0)? ".": "") + sRes;   
   return sRes;   
   }   
 document.write('<h1>'+'Generación de números primos hasta 1.111.111'+'</h1>');  
 var texto=2 + "<br>";  
 var primo  
 for (i=3;i<=1111111;i=i+2){  
     primo=true  
     for(j=3;j<Math.sqrt(i);j=j+2){  
         if (i%j===0){  
             primo=false;  
             break;  
         }  
     }  
     if (primo) {  
     texto += formatNmb(i.toString()) + "<br>";  
     }  
 }  
 document.write(texto);  