function Coche (){
  cantPuertas = 0;
  addPuerta(num){
    cantPuertas = cantPuertas + num;
  }
}

function main (){
  var miCoche = new Coche;
  miCoche.addPuerta(1);
  console.log(miCoche.cantPuertas);
}
