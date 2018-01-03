$(document).ready(function(){


    /*
    * función para crear nuevo comentario
    */

    $("#publicar").click(function(){
      var comment = $("#comentario").val();
      $("#comentario").val('');
      if (comment.length == 0 || comment == null) {
         $("#publicar").attr("class","nulo")
        return false;
      }
      $("#publicar").removeAttr("class")
      $("#publicar").attr("class","activo")
      $("#comentario-nuevo").prepend('<div class="texto">' + '<p>' + comment + '</p>' + '</div>');
        
    });// funcion publicar

    $("#comentario").keydown(function(){
      $("#publicar").removeAttr("class")
      $("#publicar").attr("class","activo")
    });// boton activo/nulo





}); //document ready

