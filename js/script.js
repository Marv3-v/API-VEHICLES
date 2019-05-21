// function par() {
//   var valor = document.querySelector("#input-par");
//
//
//  console.log(valor.value);
//    // if(valor.value%2 == 0) {
//    //   document.querySelector("#par").val = valor + " si es par";
//    // }
// }


function par() {
 var valor = document.querySelector("#input-par").value;
   if(valor%2 == 0) {
     console.log(valor + " si es par");
     document.querySelector("#par").innerHTML = valor + " si es par";
   } else {

     console.log(valor + " no es par");
     document.querySelector("#par").innerHTML = valor + " no es par";
   }

}


edad() {
  var anio = document.querySelector("#input-date").value;
  
}


function multiplicacion() {
  var div = document.querySelector("#tabla");
    for (var i = 1;  i<=10 ; i++) {
      console.log("tabla del " + i);
      div.innerHTML += "tabla del " + i + "<br>";
        for (var a = 0; a<=10; a++) {
            var result = i * a;
            div.innerHTML += i + " * " + a + " = " + result + "<br>";
            console.log(result);
      }
    }
};
