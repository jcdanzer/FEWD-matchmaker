
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
   var req = http.request('POST','http://vvvvvv.club/api/user', signupInfo).then(function(res){
     if(res.status === 200){
      window.location.pathname = '/index.html';}
   });

  };


// GET VALUES FROM HTML FORM

function getFormValues(){

signupInfo.email = document.getElementById('email').value;
signupInfo.username = document.getElementById('username').value;
signupInfo.password = document.getElementById('password').value;
signupInfo.firstName = document.getElementById('firstName').value;
signupInfo.lastName = document.getElementById('lastName').value;

sendToApi ();
};
