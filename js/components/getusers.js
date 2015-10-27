//GET USERS FROM API

var xhr= new xhrHandler();

function getUsers(){

    xhr.request('GET', "http://vvvvvv.club/api/user").then(function(res){
    //  console.log(res.status);
      console.log(res);
        if(res.status === 200){

        }
        new Tiles(res)
    });
};

getUsers();






// // random tests of function to see if I can manipulate "res" object
//
//       var response = res.length;
//       console.log(response);
//       console.log(res[5].username);
//       console.log("in between")
//
//
//       for (var i=0, len = response; i<len; i++){
//         console.log(res[i].username, res[i].firstName, res[i].lastName, res[i].email, "http://vvvvvv.club/",res[i].avatar)}



//getElementById('welcome')
