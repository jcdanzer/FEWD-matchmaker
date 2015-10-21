

var loginInfo = {}

// SEND TO API

function sendToApi(){

var xhr = new xhrHandler();

  console.log("HELLO");

  xhr.request('POST','http://vvvvvv.club/api/login',loginInfo);

  console.log("SENT TO API");
  console.log(loginInfo);



 };

// GET VALUES FROM HTML FORM

function getLoginValues(form){

  loginInfo.username = document.getElementById('username').value;
  loginInfo.password = document.getElementById('password').value;

sendToApi ();

//window.location.href = '/views/team.html';
};
