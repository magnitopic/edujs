$(function(){
  //vamos ha meter el grueso de nuestro codigo en una función para poder llamarlo cuando lo necesitemos
  function operaciones(){
    var ndec=$("input").val();           //nos dan un número decimal
    var texto='';                        //inicializamos la variable texto como cadena vacía
    var entero                          //definimos la variable entero que será el resultado
    console.clear();                    //borramos la consola para que no se mezclen los resultados de diferentes conversiones

    if(ndec % 1 != 0){
      $("#desarrollo").html("El numero no puede tener decimales");
      $("#output").text("");
    }else if (Math.sign(ndec)==-1){
      $("#desarrollo").html("El numero no puede ser negativo");   
      $("#output").text("");
    }else{
      //creamos un texto que diga con que numero estamos trabajando. Usamos .html() en lugar de .append() como el resto para que se borre el contenido de #desarrollo cada vez que imprimimos los valores
      $("#desarrollo").html("<div id='titulo1'>Partiendo del decimal: "+ndec+"</div>");     
      
      //
      $("#desarrollo").append("<div id='fila'><div id='columna1'><div class='categorias'>ndecimal</div></div><div id='columna2'><div class='categorias'>entero</div></div><div id='columna3'><div class='categorias'>resto</div></div></div>");
      
      while (ndec!=0){                 //el bucle se repite mientras el ndec no sea cero
        console.log('ndec=',ndec); 
        $("#columna1").append("<div class='tabla'>"+ndec+"</div>");
        entero=Math.trunc(ndec/2);     //tomamos la parte entera de dividir ndec entre 2
        console.log('entero=',entero);
        $("#columna2").append("<div class='tabla'>"+entero+"</div>");
        resto=ndec%2                   //calculamos el resto de dividir ndec entre 2
        console.log('resto=',resto);
        $("#columna3").append("<div class='tabla'>"+resto+"<br></div>");
        texto += resto;                    //creamos el string texto con el resto  
        ndec=entero                    //para el próximo loop ndec será en entero actual
        console.log('=================');
      }
      $("#desarrollo").append("<div id='titulo2'>El binario equivalente es: "+texto+"</div>");
      $("#output").text(texto);

      texto=texto.split('').reverse().join('');
      console.log(texto)
    }
  }

    

  $("#boton").click( function() {
    operaciones()
  });
  $('body').keyup(function(e){
    if(e.keyCode == 13){
      operaciones()
  }
  });
});