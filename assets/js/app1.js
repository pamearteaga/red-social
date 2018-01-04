$(document).ready(function() {


  /*
   * función para crear nuevo comentario
   */

  $("#publicar").click(function() {
    var comment = $("#comentario").val();
    $("#comentario").val('');
    var title = $("#titulo").val();
    $("#titulo").val('');
    var category = $("#categoria").val();


    //var media = $("#foto-video");

    if (comment.length == 0 || comment == null) {
      $("#publicar").attr("class", "nulo")
      return false;
    }
    $("#publicar").removeAttr("class")
    $("#publicar").attr("class", "activo")
    $("#comentario-nuevo").prepend('<div class="contenido" id="newComent">' + '<h3>' + title + '</h3>' +
      '<em>' + category + '</em>' +
      '<p>' + comment + '</p>' + '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span></div>');
  }); // funcion publicar


  $("#comentario").keydown(function() {
    $("#publicar").removeAttr("class")
    $("#publicar").attr("class", "activo")
  }); // boton para comentar activo/nulo



  $("#publicaciones").click(function() {
    $('#comentario-nuevo, .input').removeClass('hidden');
    $('#trab, #tut').addClass('hidden');
  }); // boton categoria publicaciones


  $("#trabajos").click(function() {
    $('#trab').removeClass('hidden');
    $('#comentario-nuevo, .input, #tut').addClass('hidden');
  }); // boton categoria trabajos


  $("#tutoriales").click(function() {
    $('#tut').removeClass('hidden');
    $('#comentario-nuevo, .input, #trab').addClass('hidden');
  }); // boton categoria tutoriales



  //evento que al hacer click le agrega color rojo al corazón
  /*heart.addEventListener('click', function(){
      heart.classList.toggle('red');
  })*/



}); //document ready
