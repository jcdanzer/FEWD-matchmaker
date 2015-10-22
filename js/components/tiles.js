var Tiles = function(users){

  this.elem = document.createElement('div');
  this.ul = document.createElement('ul');

  this.elem.appendChild(this.ul);

  this.elem.classList.add('tiles');

  // users.forEach(function(res){
  //  var li = document.createElement('li');
  //  this.ul.appendChild(li);
  //
  //  li.innerHTML = '<img src="'+"http://vvvvvv.club"+res.avatar'"><div class="email"><h2>'&#64;'+'+res.username+'</h2></div>';
  // 
  //
  // }.bind(this));

  document.getElementById('container').appendChild(this.elem);

};
