var Tiles = function(users){


  this.elem = document.createElement('div');
  this.ul = document.createElement('ul');

  this.elem.appendChild(this.ul);

  this.elem.classList.add('tiles');

<<<<<<< HEAD
  users.forEach(function(res){
   var li = document.createElement('li');

=======
 users.forEach(function(users){
   var li = document.createElement('li');
   this.ul.appendChild(li);

   li.innerHTML = '<img src="'+card.avatar.image+'"><div class="email"><h2>'+object.email+'</h2></div>';
>>>>>>> master

   li.innerHTML = '<img src="'+"http://vvvvvv.club"+res.avatar'"><div class="email"><h2>'&#64;'+'+res.username+'</h2></div>';
   this.ul.appendChild(li);

<<<<<<< HEAD
  }.bind(this));
=======
 }.bind(this));
>>>>>>> master

  document.getElementById('container').appendChild(this.elem);

};
