var Tiles = function(users){


console.log("THIS IS THE TILE FUNCTION")
console.log(users)

  this.elem = document.createElement('div');
  this.ul = document.createElement('ul');

  this.elem.appendChild(this.ul);

  this.elem.classList.add('tiles');

 users.forEach(function(users){
   var li = document.createElement('li');
   this.ul.appendChild(li);

   li.innerHTML = '<img src="'+card.avatar.image+'"><div class="email"><h2>'+object.email+'</h2></div>';


 }.bind(this));

  document.getElementById('container').appendChild(this.elem);

};
