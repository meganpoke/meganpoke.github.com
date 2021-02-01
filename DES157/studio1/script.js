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
    
   /*  var myText = `Here are the words: ${wordsArray[0]},${wordsArray[1]},${wordsArray[2]},${wordsArray[3]},${wordsArray[4]}`;

     */

     var myText = `First you need to know that a dragon egg is extremely rare and hard to find. A dragon needs approximately ${wordsArray[0]}
     days to hatch, and it can weigh from ${wordsArray[1]}
     to ${wordsArray[2]}
     kilogram. A dragon requires ${wordsArray[3]}
    ${wordsArray[4]}
     to survive in an egg, and it likes to be surrounded by ${wordsArray[5]}
    . Good luck on hatching your dragon! `;

    document.getElementsByTagName("h1")[0].style.display = "none";
    document.getElementsByTagName("footer")[0].style.display = "none";
    madlib.innerHTML = myText;

 document.getElementById('madlib').style.marginTop='320px';
    document.getElementById('madlib').style.marginLeft='60px';
    document.getElementById('madlib').style.marginRight='200px'; 

    var url = 'images/dragon.png';
 
var image = new Image();
image.src = url;
document.getElementById('img').appendChild(image);
    }
}());



