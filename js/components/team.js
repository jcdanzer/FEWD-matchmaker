var Menu = function(){
  this.list = [];
  //this.open = true;

  this.elem = document.createElement('div');
  this.addForm = document.createElement('div');
  this.ul = document.createElement('ul');

  this.elem.appendChild(this.addForm);
  this.elem.appendChild(this.ul);

  this.elem.classList.add('menu');
  this.addForm.classList.add('add-form');

  this.addForm.innerHTML = '<input type="text" placeholder="team name"><div class="add"></div>';


// select the element with a class 'add' and make it open the form and focus the input field
this.addForm.querySelectorAll('.add')[0].addEventListener('click', function(){

  var item = {
    content: this.addForm.querySelectorAll('input')[0].value
  };
  // add the item, reset the input, and close the form
  this.addItem(item);
  this.addForm.querySelectorAll('input')[0].value = '';

}.bind(this));

// listen for when the user types in the input
this.addForm.querySelectorAll('input')[0].addEventListener('keydown',function(ev){
  // if the user presses return
  if(ev.keyCode === 13) {
    // create a valid model for the data and set its content
    var item = {
      content: this.addForm.querySelectorAll('input')[0].value
    };
    // add the item, reset the input, and close the form
    this.addItem(item);
    this.addForm.querySelectorAll('input')[0].value = '';
  }
}.bind(this));

  document.getElementById('container').appendChild(this.elem);

};

// function that adds an item
Menu.prototype.addItem = function(item) {
  // push the item to the list
  this.list.push(item);
  // create a li
  var listItem = document.createElement('li');
  // set the content of the li
  listItem.innerHTML = '<span>'+item.content+'</span>';
  // select the checkbox and listen for clicks

  // add a class for styling
  listItem.classList.add('menu-item');
  // append the li
  this.ul.appendChild(listItem);

};


Menu.prototype.createList = function(list) {
    // we can loop through the array easily with forEach
    list.forEach(function(item, index){
        this.addItem(item);
    }.bind(this));

};
