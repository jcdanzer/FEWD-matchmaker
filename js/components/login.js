

var loginInfo = {}

// SEND TO API

function sendToApi(){

var xhr = new xhrHandler();

  console.log("HELLO LOGIN STARTING");

  xhr.request('POST','http://vvvvvv.club/api/login',loginInfo).then(function(res){
    console.log(res);
    if(res.status === 200){
      console.log("IM READY TO GO TO TEAM PAGE!")
    }
      //window.location.pathname = '/views/team.html';
  });
 };

// GET VALUES FROM HTML FORM

function getLoginValues(form){

  loginInfo.username = document.getElementById('username').value;
  loginInfo.password = document.getElementById('password').value;

sendToApi ();


};
