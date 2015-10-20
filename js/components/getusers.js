//GET USERS FROM API


var xhr= new xhrHandler();

function getUsers(){
    var container = document.getElementById('welcome');
    xhr.request('GET', "http://vvvvvv.club/api/user","").then(function(res){
      console.log(res);
    });
};

function login(){
xhr.request('POST',"http://vvvvvv.club/api/login", {"username": "admin", "password": "password"})
}

login();
getUsers();
