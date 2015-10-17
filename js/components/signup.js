
// CONTAINER OBJECT TO SEND TO API

var signupInfo = {}

// GET VALUES FROM HTML

function getFormValues(form){

signupInfo.email = form.email.value;
signupInfo.username = form.username.value;
signupInfo.password = form.password.value;
signupInfo.firstName = form.firstName.value;
signupInfo.lastName = form.lastName.value;

console.log(signupInfo);

}

// HANDLE IMAGE INGEST AND CONVERSION TO STRING

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function (ev) {
    preview.src = reader.result;
    signupInfo.avatar = reader.result;
    console.log(reader.result);
  }
    // if (file) {
       reader.readAsDataURL(file);
    // } else {
      preview.src = "";
  //  }

 };

//SEND TO API

 //  var http = new xhrHandler();
 // console.log(signupInfo)
 //  var req = http.request(function("POST", "http://vvvvvv.club/api", signupInfo));
 //
 //  req(function success(){
 // console.log("yep, its in")
 //  }, function error(){
 //  console.log("well, that didnt work")
 // })
