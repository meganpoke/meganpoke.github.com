(function(){
    'use strict';
var myForm = document.querySelector('#myform');
var madlib = document.querySelector('#madlib');

myForm.addEventListener('submit', function(event){
    event.preventDefault();
    var formData = document.querySelectorAll("input[type=text]");
    processData(formData);

});

function processData(formData) {
    var emptyFields = 0;
    var words = [];

    for (var eachWord of formData){
        if (eachWord.value) {
        words.push(eachWord.value);
         eachWord.value="";
     } else { emptyFields++; }
     }
     if ( emptyFields > 0 ) {
         madlib.innerHTML ='Please fill out the fields';
     } else {makeMadlib(words); }

    }
function makeMadlib(wordsArray){
    
    var myText = `Here are the words: ${wordsArray[0]},${wordsArray[1]},${wordsArray[2]},${wordsArray[3]},${wordsArray[4]}`;

    madlib.innerHTML = myText;
    }
}());



