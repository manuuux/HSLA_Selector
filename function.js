var input;
var id;
var val;
var H=document.getElementById("H").value;
var S=document.getElementById("S").value;
var L=document.getElementById("L").value;
var A=document.getElementById("A").value/100;
var color=document.geElementById("color");
function mostrarvalor(input){
  id=input.id;
  val=input.value;
  if(id=="A"){val=input.value/100;A=val;}
  document.getElementById(id+'lab').innerHTML = val;
  if(id=="H"){H=val;}
  if(id=="S"){S=val;}
  if(id=="L"){L=val;}
  cambiacolor();
}
function cambiacolor(){
  document.getElementById("color").style.backgroundColor = "hsla("+H+", "+S+"%, "+L+"%, "+A+")";
  document.getElementById("hsla").value = "hsla("+H+", "+S+"%, "+L+"%, "+A+")"
}
function seleccionar(dato){
  dato.selectionStart = 0;
  dato.select();
  document.execCommand('copy'); 
}
