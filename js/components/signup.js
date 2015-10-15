// javascript page

function getFormValues(form){

var avatar = form.avatar.value;
var email = form.email.value;
var username = form.username.value;
var password = form.password.value;
var firstName = form.firstName.value;
var lastName = form.lastName.value;

console.log(avatar, email, username, password, firstName, lastName);


  var newuser = {
    avatar: {
      image:null
    },
    email: email,
<<<<<<< HEAD

  };
=======
    username: username,
    password: password,
    lastName: lastName,
    firstName: firstName
 };
>>>>>>> master

 console.log(newuser);

}
  // var avatar = document.getElementById("avatar").value;
  // var email = document.getElementById("email").value;
  // var user = document.getElementById("username").value;
  // var pass = document.getElementById("password").value;
  // var first = document.getElementById("firstName").value;
  // var last = document.getElementById("lastName").value;


// SEND TO API

var http = new xhrHandler();

 var req = http.request(function("POST", "http://vvvvvv.club/api", newuser));

 req(function success(){

  }, function error(){

 })
