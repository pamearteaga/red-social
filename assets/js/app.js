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
} ingreso() ;

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

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log('saliendo...')
  })
  .catch(function(error){
    console.log(error);
  })
};

/*(function(){

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

//obtener elementos
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogIn = document.getElementById('btnLogIn');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogOut = document.getElementById('btnLogOut');

//añadir evento a boton log in
btnLogIn.addEventListener('click', e => {
	//obtener los valores de email y password
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();

  //sign in
  var promise = auth.signInWithEmailAndPassword(email, pass);
  //en caso de que no se pueda loggear, mostrar en consola
  promise.catch(e => console.log(e.message));
});

//añadir evento a boton sing up
btnSignUp.addEventListener('click', e => {
  //obtener los valores email y password
  //asegurarse de que sea Real
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  //sign in
  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

//añadir evento a boton oculto
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
})

//inicio con facebook
function ingresoFacebook(){
  if(!firebase.auth().currentUser){
    
  }
};


//inicio con google
function ingresoGoogle(){
  //pregunto si el usuario a realizado conexion
  if(!firebase.auth().currentUser){
    //si no esta conectado creo de instancia de un nuevo objeto
    //y pido permiso de autenticacion de google (api)
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().signInWithPopup(provider).then(function(result){
      //obtener valor de credencial
      var token = result.credential.accessToken;
      //obtener informacion de usuario
      var user = result.user;
      //si no se puede conectar, tengo que capturar el error que produce
      console.log(user);
    }).catch(function(error){
        //error de codigo
        var errorCode = error.code;
        //error de mensaje
        var errorMessage = error.message;
        //error de email
        var email = error.email;
        //error de credenciales
        var credential = error.credential;
        //error ocurrido
        if(errorCode === 'auth/account-exists-with-different-credential'){//ya existe la cuenta
          alert('es el mismo usuario');
        }
      });
    } else {
      firebase.auth().signOut();
    }
  }document.getElementById('btnGoogle').addEventListener('click', ingresoGoogle,false);
} ());*/