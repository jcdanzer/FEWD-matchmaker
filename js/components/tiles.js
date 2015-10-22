var Tiles = function(users){


  this.elem = document.createElement('div');
  this.ul = document.createElement('ul');

  this.elem.appendChild(this.ul);

  this.elem.classList.add('tiles');


users.forEach(function(users){
   var li = document.createElement('li');

   li.innerHTML = '<div class="avatar"><img src=http://vvvvvv.club'+users.avatar.image+'></div><div class="email"><h2>&#64;'+users.username+'</h2></div>';

   this.ul.appendChild(li);


 }.bind(this));


  document.getElementById('container').appendChild(this.elem);

};
