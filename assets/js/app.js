$(document).ready(function(){
      /*
      * función para crear nuevo comentario
      */

    $("#publicar").click(function(){
        var comment = $("#comentario").val();
        $("#comentario").val('');

        $("#comentario-nuevo").append('<div class="texto">' + '<p>' + comment + '</p>' + '</div>');

        if (comment == "") {
          $("#publicar").attr("disabled","disabled")
        }
        
    });
});