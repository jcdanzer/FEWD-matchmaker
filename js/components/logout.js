
//LOGOUT

function LogOut(){

var xhr = new xhrHandler();

  console.log("LOGGING OUT");

  xhr.request('POST','http://vvvvvv.club/api/logout',"").then(function(res){
    console.log(res)
    if(res.status === 200){
      console.log(res)
    }
       window.location.pathname = '/index.html';
  });

  console.log("SENT TO API");

 };
