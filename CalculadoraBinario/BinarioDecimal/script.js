$(function(){
    function operaciones(){
        var nbin= $("input").val();    //Cojemos el valor del cuadro de texto con jQuery usando la función .val() y lo metemos el la var nbin
        if(nbin % 1 != 0){
            $("#desarrollo").html("El numero no puede tener decimales");
            $("#output").text("");
        }else if (Math.sign(nbin)==-1){
            $("#desarrollo").html("El numero no puede ser negativo");   
            $("#output").text("");
        }else{
            var nbin_array = Array.from(String(nbin), Number); //convertimos ese valor en un array de digitos
            console.log(nbin_array);
            //inicializamos la variable que luego se mostrará en pantalla con el desarrollo completo de las potencias
            var texto='';
            var decimal=0;

            var i=nbin_array.length-1; //i inicialmente vale 6-1=5, ya que el primer 1 dará 1*2^5
            // creamos un bucle que recorre los elementos del array
            nbin_array.forEach(function(cifra) {
                console.log(cifra);
                //calculamos el valor decimal
                decimal += cifra*Math.pow(2,i);
                //creamos el texto que se mostrará y que explica cómo calcular el valor en decimal
                texto += cifra + "×2" + "<sup>" + i + "</sup>"+ "+"
                i--
            });
            texto = texto.slice(0, -1); //esto quita el último caracter del string

            $("#desarrollo").html("La forma de calcular el número Decimal es la siguente: "+texto+" = "+decimal).css("padding-left","10px");
            $("#output").html(decimal);
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
