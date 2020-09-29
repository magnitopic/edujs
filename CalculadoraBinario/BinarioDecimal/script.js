$(function(){
    $("#boton").click( function() {
        var nbin= $("input").val();
        $("#output").text(parseInt(nbin,2));
    });

    
});


