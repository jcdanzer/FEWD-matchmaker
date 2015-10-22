//GET USERS FROM API

var xhr= new xhrHandler();

xhr.request('POST',"http://vvvvvv.club/api/login", {"username": "admin", "password": "password"}).then(function(data){
  console.log('hey i"m logged in!');
  getUsers();  
});




function getUsers(){

    xhr.request('GET', "http://vvvvvv.club/api/user","").then(function(res){
      console.log(res);


new Tiles(res)


// random tests of function to see if I can manipulate "res" object

      var response = res.length;
      console.log(response);
      console.log(res[5].username);
      console.log("in between")


      for (var i=0, len = response; i<len; i++){
        console.log(res[i].username, res[i].firstName, res[i].lastName, res[i].email, "http://vvvvvv.club/",res[i].avatar)}

    });
};








//getElementById('welcome')
