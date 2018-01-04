// Inicializa Firebase
  var config = {
    apiKey: "AIzaSyCjfxMyEz04kBFLW7__40QIxdaLUyJGE5M",
    authDomain: "red-social-f3ce5.firebaseapp.com",
    databaseURL: "https://red-social-f3ce5.firebaseio.com",
    projectId: "red-social-f3ce5",
    storageBucket: "red-social-f3ce5.appspot.com",
    messagingSenderId: "1041010720298"
  };
  firebase.initializeApp(config);

//para que la función se ejecute cuando la web se carge completamente
window.onload = inicializar;

//para que la variable sea global
var fichero;
var storageRef;
var imagenesFBRef;

function inicializar() {
  fichero = document.getElementById("fichero");
  fichero.addEventListener("change", subirImagenAFirebase, false);

  storageRef = firebase.storage().ref();

  imagenesFBRef = firebase.database().ref().child("imagenesFB")

  mostrarImagenesDeFirebase();
}

function mostrarImagenesDeFirebase() {
  imagenesFBRef.on("value", function(snapshot) {
    var datos = snapshot.val();
    var result = "";
    for(var key in datos){
      result += '<div id="newComent"><img  width="200" class="img-thumbnail" src="' + datos[key].url + '"/></div>';
    }
    document.getElementById('comentario-nuevo').innerHTML = result;
  })
}

function subirImagenAFirebase() {
  var imagenASubir = fichero.files[0];

  var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

  uploadTask.on('state_changed',
  function(snapshot) {
 //se muestra el progreso de la subida de la imagen
  }, function(error) {
    //gestionar el error si se produce
    alert("hubo un error")
  }, function() {
    //cuando se ha subido exitosamente la imagen
    var downloadURL = uploadTask.snapshot.downloadURL;
    crearNodoEnBDFirebase(imagenASubir.name, downloadURL);
  });
}

function crearNodoEnBDFirebase(nombreImagen, downloadURL) {
imagenesFBRef.push({ nombre: nombreImagen, url: downloadURL});
}
