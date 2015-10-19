
// LOGIN INFO

var loginInfo = {}

// GET VALUES FROM HTML FORM

function getLoginValues(form){

loginInfo.username = form.username.value;
loginInfo.password = form.password.value;

if (form.username.value != "username" &&  form.password.value != "password")
{ console.log("here we go")
sendToApi ();
}
else {
  alert("Uh, login and password please!")
}
}


//SEND TO API

function sendToApi(loginInfo){

var http = new xhrHandler();

  console.log("HELLO");

  var req = http.request('POST','http://vvvvvv.club/api/login', loginInfo);

  console.log("SENT TO API");
   console.log(loginInfo);

//window.location.href = '/views/team.html';

 };
