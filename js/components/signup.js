
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

 function sendToApi(){
 //console.log(signupInfo);
 var http = new xhrHandler();

   console.log("HELLO");

   var req = http.request('POST','http://vvvvvv.club/api/user', signupInfo);

   console.log("SENT TO API");


   window.location.href = '/views/team.html';

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
};
