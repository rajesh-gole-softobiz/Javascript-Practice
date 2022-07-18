// creating html element

var heading3 = document.createElement('h3');
var txt = document.createTextNode('This is h3');
heading3.appendChild(txt);

var myDiv = document.getElementById('my-div');
myDiv.appendChild(heading3);

//removing html element
var heading2 =document.getElementsByTagName('h1')[0];
myDiv.removeChild(heading2)