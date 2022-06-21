var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elList = document.querySelector('.js-list');
var elBtn = document.querySelector('.btn');
var record = new webkitSpeechRecognition();
var todos = [];

elForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  elInputVal = elInput.value
  elInput.value = '';
  elList.innerHTML = ''
  todos.push ({
    value:elInputVal,
  });

  for (var i = 0 ; i < todos.length; i++){
    var newItem = document.createElement('li');
    newItem.textContent = todos[i].value;
    elList.appendChild(newItem);

  }
  
});

elBtn.addEventListener('click', function(){
  record.start();
})
  record.onresult = function(evt){
    todos.push ({
      value: evt.results[0][0].transcript,
    });
    var newItem = document.createElement('li');
    newItem.textContent  = evt.results[0][0].transcript;
    elList.appendChild(newItem);
  }
  record.onerror = function(){
    var newItem = document.createElement('li');
    newItem.textContent  = evt.results[0][0].transcript;
    elList.appendChild(newItem);
  }

	

