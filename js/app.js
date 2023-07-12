/* 
 * Js file to animate on scroll
*/


function reveal() {
  var reveals = document.querySelectorAll(".reveal"); 

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; // Give the window height
    var elementTop = reveals[i].getBoundingClientRect().top; // Give the distance between the element and the top of the viewport
    var elementVisible = 100; // height at wich the element should be revealed

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active"); // Add the class 'active' to the element if on the window
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal); // Start 'reveal()' everytime the user scroll

reveal();
