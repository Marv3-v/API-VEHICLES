
function bring() {
  // var hola = "affenpinscher";
  // var url = "";
  fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(res => res.json())
  .then(data => {
      for(var i =1; i<=data.length;i++) {
        console.log(data[i].nome);
        console.log(data[i].codigo);
        document.querySelector(".carros").innerHTML += "<p class='button is-outlined is-fullwidth' onClick='writeBrand("+ data[i].codigo + ")'>" + data[i].nome + "</p>"
      }
  })

}
function  writeBrand(c) {
  console.log(c);
  document.querySelector(".marca").innerHTML = "Modelo según la Marca";
  fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/' + c + '/modelos')
  .then(res => res.json())
  .then(dat => {
    console.log(dat.modelos[0].nome)
    document.querySelector(".models").innerHTML = dat.modelos[0].nome;
    })
}
