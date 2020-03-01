
function glugluLogin() {

    var provider = new firebase.auth.GoogleAuthProvider();
    

    firebase.auth().signInWithPopup( provider )
    .then( result => console.log( result.user.email +  ' ${result.user.email} ha iniciado sesión'))
    .catch( error => console.log( error.code + " / " + error.message + 'Error ${error.code}: ${error.message}') );

}

function logOut() {
    firebase.auth().signOut().then(function () {
        console.log("Sesión cerrada correctamente");
    }).catch(function (error) {
        console.log("Error al cerrar sesión");
    });
    document.location.href = "../HTML/login.html";
}

function logInEmail(){

    var email = document.getElementById("login-user").value;
    var password = document.getElementById("login-passw").value;

    console.log(email);

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log("Error al entrar como usuario por Email");
        var errorCode = error.code;
        var errorMessage = error.message;
      });
}
