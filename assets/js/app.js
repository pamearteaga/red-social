window.onload = function (){


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjfxMyEz04kBFLW7__40QIxdaLUyJGE5M",
    authDomain: "red-social-f3ce5.firebaseapp.com",
    databaseURL: "https://red-social-f3ce5.firebaseio.com",
    projectId: "red-social-f3ce5",
    storageBucket: "red-social-f3ce5.appspot.com",
    messagingSenderId: "1041010720298"
  };
  firebase.initializeApp(config);



function observador(){
  //observa los cambios de estado de usuario en la página
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usario activo');
      window.location.href= 'perfil.html';
      aparece(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log('****************');
      console.log(user.emailVerified);
      console.log('****************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
    // User is signed out.
    console.log('no existe usuario activo');
    // ...
    }
  });
} observador();

function aparece(user){
  var user = user;
  var logOut = document.getElementById('sesionClose');
  if(user.emailVerified){
    logOut.innerHTML = `
    <button class="btn" id="btnLogOut" onclick="cerrar()">Cerrar Sesión</button>
    `;
  }
};


}
function ingreso() {
  var email = document.getElementById('txtEmail').value;
  var password = document.getElementById('txtPassword').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {//si no funciona el ingreso de usuario, arroja error existente

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  
  });
};
function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log('saliendo...')
  })
  .catch(function(error){
    console.log(error)
  })
};

function registrar() {
  var emailSignUp = document.getElementById('txtEmailSignUp').value;
  var passwordSignUp = document.getElementById('txtPasswordSignUp').value;

  firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
  .then(function(){
    verificar();
  })
  .catch(function(error) {//si no resulta la creacion de usuario, se captura el error que produce
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  });
};

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
    // Email sent.
    console.log('enviando correo...');
  }).catch(function(error) {
  // An error happened.
  console.log(error);
  });
};
