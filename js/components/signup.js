
// CONTAINER OBJECT TO GATHER UP FORM INFO AND AVATAR IMAGE

var signupInfo = {}

// HANDLE IMAGE INGEST AND CONVERSION TO BASE_64

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function (ev) {
    preview.src = reader.result;
    signupInfo.avatar = reader.result;
  }
    // if (file) {
       reader.readAsDataURL(file);
    // } else {
    //  preview.src = "";
  //  }
 };

// GET VALUES FROM HTML FORM

function getFormValues(form){

signupInfo.email = form.email.value;
signupInfo.username = form.username.value;
signupInfo.password = form.password.value;
signupInfo.firstName = form.firstName.value;
signupInfo.lastName = form.lastName.value;

console.log(signupInfo);

if (form.username.value != "username" &&  form.password.value != "password" && form.email.value != "email address" && form.firstName.value != "first name" && form.lastName.value != "last name")
{ console.log("here we go")
sendToApi ();
}
else {
alert ("Please fill out form completely, dork.")
}
};


function sendToApi(){
//console.log(signupInfo);
var http = new xhrHandler();

  console.log("HELLO");

  var req = http.request('POST','http://vvvvvv.club/api/user', signupInfo);

  console.log("SENT TO API");


  //window.location.href = '/views/team.html';

 };
