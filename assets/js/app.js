$(document).ready(function(){


    /*
    * función para crear nuevo comentario
    */

    $("#publicar").click(function(){
      var comment = $("#comentario").val();
      $("#comentario").val('');
      var media = $("#foto-video");

      if (comment.length == 0 || comment == null) {
         $("#publicar").attr("class","nulo")
        return false;
      }
      $("#publicar").removeAttr("class")
      $("#publicar").attr("class","activo")
      $("#comentario-nuevo").prepend('<div class="contenido">' + '<p>' + comment + '</p>' + 
        '<img class="img-thumbnail img-responsive img-comentario" src="https://t1.uc.ltmcdn.com/images/6/1/6/img_por_que_mi_gato_maulla_mucho_26616_600.jpg">' + '</div>');
        //'<img class="img-thumbnail img-responsive img-comentario" src="' + media + '">'
    });// funcion publicar

    $("#comentario").keydown(function(){
      $("#publicar").removeAttr("class")
      $("#publicar").attr("class","activo")
    });// boton para comentar activo/nulo

 //evento que al hacer click le agrega color rojo al corazón
    /*heart.addEventListener('click', function(){
        heart.classList.toggle('red');
    })*/



}); //document ready

