//GET USERS FROM API


var xhr= new xhrHandler();

function getUsers(){
    var container = document.getElementById('welcome');

    xhr.request('GET', "http://vvvvvv.club/api/user","").then(function(res){
      console.log(res);
      var response = res.length;
      console.log(response);
      console.log(res[5].username);
      console.log("in between")
      console.log(res[32].username);

      for (var i=0, len = response; i<len; i++){
        console.log(res[i].username, res[i].lastName, res[i].email)}
    });
};

function login(){
xhr.request('POST',"http://vvvvvv.club/api/login", {"username": "admin", "password": "password"})
}

login();
setTimeout(getUsers(),2000);

//getElementById('welcome')
