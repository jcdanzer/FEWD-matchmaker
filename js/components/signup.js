
// CONTAINER OBJECT TO GATHER UP FORM INFO AND AVATAR IMAGE

var signupInfo = {}

// HANDLE IMAGE INGEST AND CONVERSION TO BASE_64

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function (ev) {
    preview.src = reader.result;
    signupInfo.avatar = { "image": reader.result }
  }
       reader.readAsDataURL(file);
 };

 function sendToApi(){
 var http = new xhrHandler();

   console.log("HELLO");
   var req = http.request('POST','http://vvvvvv.club/api/user', signupInfo);

  };


// GET VALUES FROM HTML FORM

function getFormValues(){
  console.log('in form');

signupInfo.email = document.getElementById('email').value;
signupInfo.username = document.getElementById('username').value;
signupInfo.password = document.getElementById('password').value;
signupInfo.firstName = document.getElementById('firstName').value;
signupInfo.lastName = document.getElementById('lastName').value;

console.log(signupInfo);
sendToApi ();
//window.location.href = '/views/team.html';
};
