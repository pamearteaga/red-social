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
  //observa los cambios de estado de usuario
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usario activo');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(email);
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

function aparece(){
  var logOut = document.getElementById('sesionClose');
  console.log('hola');
  logOut.innerHTML = 'solo lo ve usuairo activo';
};

//añadir evento a boton oculto
var btnLogOut = document.getElementById('btnLogOut');
btnLogOut.addEventListener('click', e => {
  firebase.auth().signOut();
});

//añadir evento en tiempo real para comprobar cambios en el estado de usuario
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogOut.classList.remove('hide');
  } else {
    console.log('no loggueado');
    btnLogOut.classList.add('hide');
  }
});
};

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
function registrar(){
  var emailSignUp = document.getElementById('txtEmailSignUp').value;
  var passwordSignUp = document.getElementById('txtPasswordSignUp').value;

  firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch(function(error) {//si no resulta la creacion de usuario, se captura el error que produce
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  console.log(errorCode);
  console.log(errorMessage);
  });

};