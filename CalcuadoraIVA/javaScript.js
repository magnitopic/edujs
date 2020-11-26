function calcular() {
  var base = parseInt(document.getElementById("PBase").value);
  var Porcentaje=document.getElementById("porcentaje").value;

  
  var IVA=base*Porcentaje;
  document.getElementById("iva").value =importeIVA;
  document.getElementById("PIVA").value =base+importeIVA;
}