

function glugluLogin() {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(function (result) {

            console.log(result.user.email + ' ${result.user.email} ha iniciado sesión');
            location.href = "./HTML/champs.html";

        }).catch(function (error) {
            console.log(error.code + " / " + error.message + 'Error ${error.code}: ${error.message}');
        });

}


function logTwitter() {

    var provider = new firebase.auth.TwitterAuthProvider();

    provider.setCustomParameters({
        'lang': 'es'
    });

    firebase.auth().signInWithPopup(provider).then(function (result) {
        location.href = "./HTML/champs.html";
    }).catch(function (error) {

    });
}

function logInEmail() {


    var email = document.getElementById("login-user").value;
    var password = document.getElementById("login-passw").value;

    console.log(email + " / " + password);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (result) {

            location.href = "./HTML/champs.html";
            console.log(email + " / " + password);
        }).catch(function (error) {

            console.log("Error al entrar como usuario por Email");

        });

}


function loginGitHub() {

    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');

    firebase.auth().signInWithPopup(provider).then(function (result) {
        location.href = "./HTML/champs.html";
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha', {
    'size': 'invisible',
    'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    }
});

function signInWithPhoneNumber() {

    var phoneNumber = $('#login-numero').val();
    var appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)

        .then(function (confirmationResult) {

            window.confirmationResult = confirmationResult;

            $('#login-numberconf-div').show();
            $('#login-button').attr('onclick', 'checkPhoneCode()');

        }).catch(function (error) {

            grecaptcha.reset(window.recaptchaWidgetId);
            console.log("ERRROR" + error);

        });
}


function checkPhoneCode() {

    var code = $('#login-numeroconf').val();

    confirmationResult.confirm(code).then(function (result) {

        console.log(result);
        location.href = "./HTML/champs.html";

    }).catch(function (error) {

        console.log("ERRROR" + error);


    });

}

function logMovil() {

    if ($('#movilinit').hasClass('default')) {

        $('#login-number-div').show();
        $('#login-passw-div').hide();
        $('#login-user-div').hide();
        $('#movilinit').html("Inciar con Usuario");
        $('#movilinit').removeClass('default');

        $('#login-button').attr('onclick', 'signInWithPhoneNumber()');

    } else {

        $('#login-number-div').hide();
        $('#login-passw-div').show();
        $('#login-user-div').show();
        $('#login-numberconf-div').hide();
        $('#movilinit').html("Inciar con Movil");
        $('#movilinit').addClass('default');
        $('#login-button').attr('onclick', 'logInEmail()');
    }

}