function calcular() {
  var base = parseInt(document.getElementById("PBase").value);
  var Porcentaje=document.getElementById("porcentaje").value;
  var IVA=Math.round((base*Porcentaje)*100)/100;
  document.getElementById("iva").value =IVA;
  document.getElementById("PIVA").value =base+IVA;
}