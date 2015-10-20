
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
  {alert("Please enter login and password.")}
}
}


//SEND TO API


function sendToApi(){

var xhr = new xhrHandler();

  console.log("HELLO");

  xhr.request('POST','http://vvvvvv.club/api/login',loginInfo);

  console.log("SENT TO API");
  console.log(loginInfo);

  //window.location.href = '/views/team.html';

 };
