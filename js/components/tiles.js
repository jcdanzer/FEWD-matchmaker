var Tiles = function(users){

  this.elem = document.createElement('div');
  this.ul = document.createElement('ul');
  this.header = document.createElement('header');

  this.elem.appendChild(this.header);
  this.elem.appendChild(this.ul);

  this.elem.classList.add('tiles');

  document.getElementById('container').appendChild(this.elem);

}
