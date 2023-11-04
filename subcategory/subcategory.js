var container = document.getElementsByClassName('container');
var image = document.querySelectorAll('.image img');
var description = document.getElementsByClassName('before');

for (var i = 0; i < container.length; i++) {
  (function (index) {
    container[index].addEventListener('mouseover', function () {
      description[index].classList.add("hoverone");
      image[index].classList.add("hoverPointOne");
    });
    
    container[index].addEventListener('mouseout', function () {
      description[index].classList.remove("hoverone");
      image[index].classList.remove("hoverPointOne");
    });
  })(i);
}