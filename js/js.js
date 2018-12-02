'use strict';


console.log("Javascript is running.");

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "300px";
    }
  });
}


// Initializing variables
var parents = document.getElementsByClassName(" w3-display-container");
var slideIndex = 1;
var galleryId = 0;

//Adds to slide index when arrow is clicked
function plusDivs(n) {
  slideIndex = slideIndex + n;
  showImage();
}

//selects correct gallery
function gallerySelector(n){
  galleryId=n;
}

function showImage(){
  for (i=0; i<parents.length; i++){
    var parent = parents[galleryId];
    var x = parent.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    if (slideIndex > x.length) {slideIndex = 1};
    if (slideIndex < 1) {slideIndex = x.length-1} ;
    x[slideIndex-1].style.display = "block";
    console.log("slideIndex"+(slideIndex-1));
    console.log(x[slideIndex-1]);
    console.log("length"+x.length);

  }
}




var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});
