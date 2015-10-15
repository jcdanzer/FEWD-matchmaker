// THIS IS THE NEWEST VERSION AT 9:03

function getFormValues(form){

var email = form.email.value;
var username = form.username.value;
var password = form.password.value;
var firstName = form.firstName.value;
var lastName = form.lastName.value;

console.log(email, username, password, firstName, lastName);


}

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function (ev) {
    preview.src = reader.result;
    console.log(reader.result);

  }

    if (file) {
    //  var avatarimage = reader.readAsDataURL(file);
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }


// var newuser = {
//   avatar: {
//     image:reader.result
//   },
//   email: email,
//   username: username,
//   password: password,
//   lastName: lastName,
//   firstName: firstName
// }
// console.log(newuser);
};



  // var avatar = document.getElementById("avatar").value;
  // var email = document.getElementById("email").value;
  // var user = document.getElementById("username").value;
  // var pass = document.getElementById("password").value;
  // var first = document.getElementById("firstName").value;
  // var last = document.getElementById("lastName").value;


// SEND TO API

 //  var http = new xhrHandler();
 //
 //  var req = http.request(function("POST", "http://vvvvvv.club/api", newuser));
 //
 //  req(function success(){
 //
 //  }, function error(){
 //
 // })
