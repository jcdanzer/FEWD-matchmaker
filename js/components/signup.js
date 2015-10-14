// javascript page

function postit(){

console.log("passed to .js!")

  var avatar = document.getElementById("avatar").object;
  var email = document.getElementById("email").value;
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var first = document.getElementById("firstName").value;
  var last = document.getElementById("lastName").value;

  var options = {
    avatar: avatar,
    email: email,
    username: username,
    password: password,
    lastName: lastname,
    firstName: firstname

  };

  var http = new xhrHandler();

  var req = http.request(function("POST", "http://vvvvvv.club/api", options);

  req(function success(){

  }, function error(){

  })

}
