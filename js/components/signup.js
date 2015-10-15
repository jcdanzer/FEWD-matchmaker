// javascript page

function postit(){

console.log("passed to .js!")

  var email = document.getElementById("email").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;

  var options = {
    email: email,

  };

  var http = new xhrHandler();

  var req = http.request(function("POST", "URL", );

  req(function success(){

  }, function error(){

  })

}
