//GET USERS FROM API


var xhr= new xhrHandler();

function getUsers(){
    var container = document.getElementById('welcome');
    xhr.request('GET', "http://vvvvvv.club/api/user","").then(function(res){
      console.log(res);
      res.forEach(function(card){
          var div = document.createElement('div');
          div.classList.add('card');
          var img = new Image();
          img.src = card.avatar.image;
          img.classList.add('photo');
          div.appendChild(img);
          var h3 = document.createElement('h3');
          h3.innerHTML = card.firstName+' '+card.lastName;
          div.appendChild(h3);
          container.appendChild(div);
      });
    });
};

function login(){
xhr.request('POST',"http://vvvvvv.club/api/login", {"username": "admin", "password": "password"})
}

login();
getUsers();
