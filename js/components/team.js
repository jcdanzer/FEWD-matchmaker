var Menu = function(data){
  //this.list = [];
//this.addForm = title;
  //this.open = true;

  this.elem = document.createElement('div');
  this.addForm = document.createElement('div');
  this.menu = document.createElement('menu');

  this.elem.appendChild(this.menu);
  this.elem.appendChild(this.addForm);

  this.elem.classList.add('menu');
  this.addForm.classList.add('add-form');

  this.addForm.innerHTML = '<input type="text"><div class="plus"></div>';

  document.getElementById('container').appendChild(this.elem);
}

//{
  //}.bind(this));
