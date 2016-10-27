"use strict";

var signUpForm = document.getElementById("signup-form");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var displayNameInput = document.getElementById("display-name-input");

signUpForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    //use Firebase to create a new user
    //with the email and password
    //after the account is created, then use
    //the .updateProfile() method to set the display name

    // var promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);


    //happens when the function successfully finishes. In this case, we register the user. 
    // promise.then(function(use){
    //     return user.updateProfil({
    //         displayName: displayNameInput.value
    //     });
    // }).then(function(){
    //     // navigate to another page. 
    //     window.location = "secure.html";
    // });
    // promise.catch(function(err){
    //     alert(err.message);
    // });


    firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function(user){
            return user.updateProfile({
                displayName: displayNameInput.value
            });
        })
        .then(function(){
            // navigate to another page. 
            console.log("Success!")
            window.location = "secure.html";
        })
        .catch(function(err){
            alert(err.message);
        });



    return false;
});