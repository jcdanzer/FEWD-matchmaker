var Tiles = function(users){


// CREATE STUCTURE AND ADD CLASS

  this.elem = document.createElement('div');
  this.ul = document.createElement('ul');

  this.elem.appendChild(this.ul);

  this.elem.classList.add('tiles');

// CREATE EACH TILE WITH IMAGE AND username

users.forEach(function(users, index){
   var li = document.createElement('li');


   li.innerHTML = '<div class="avatar"><img id="drag'+index+'" src=http://vvvvvv.club'+users.avatar.image+' draggable="true"  ondragstart="drag(event)"></div><div class="email"><h2>&#64;'+users.username+'</h2></div>';

   li.addEventListener('dragstart', function(){
     console.log('Im Starting to Drag!')
   });

   this.ul.appendChild(li);
}.bind(this));

//POST ELEMENTS TO PAGE
  document.getElementById('container').appendChild(this.elem);
};


// ondragstart="event.dataTransfer.setData(\"text/plain\",null)"
