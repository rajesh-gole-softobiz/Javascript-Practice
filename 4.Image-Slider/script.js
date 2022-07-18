const photos = ["images/1.jpg","images/2.jpg","images/3.jpg"];
var imgTag = document.querySelector("img");

var c=0;
function next(){
    c++;
    if(c>=photos.length){
        c=0;
        imgTag.src = photos[c];
    }else{
    imgTag.src = photos[c];
    }
}

function prev(){
    c--;
    if(c < 0 ){
        c=photos.length-1;
        imgTag.src = photos[c];
    }else{
        imgTag.src = photos[c];
    }
}