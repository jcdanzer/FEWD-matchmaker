
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
}


//SEND TO API

// var http = new xhrHandler();
//  console.log(signupInfo)
//   var req = http.request(function("POST", "http://vvvvvv.club/api", signupInfo));
//
//   req(function success(){
//  console.log("yep, its in")
//   }, function error(){
//   console.log("well, that didnt work")
//  })
