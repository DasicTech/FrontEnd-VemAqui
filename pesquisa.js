function mostrarImagem(event) {
  var input = event.target;
  var reader = new FileReader();

  reader.onload = function(){
    var imagemPreview = document.getElementById("preview");
    imagemPreview.src = reader.result;
    
  };

  reader.readAsDataURL(input.files[0])
}
