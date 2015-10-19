
// LOGIN INFO

var loginInfo = {}

// GET VALUES FROM HTML FORM

function getLoginValues(form){

loginInfo.username = form.username.value;
loginInfo.password = form.password.value;

if (form.username.value != "null" &&  form.password.value != "null")
{ console.log("here we go")
// sendToApi ();
}
 console.log(loginInfo);
}


//SEND TO API

function sendToApi(loginInfo){

var http = new xhrHandler();
console.log(loginInfo);

  var req = http.request(function('POST','http://vvvvvv.club/login', loginInfo);

  req(function success(){
 console.log("yep, its in");
  }, function error(){
  console.log("well, that didnt work");
 })

 };
