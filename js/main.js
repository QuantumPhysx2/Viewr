// Mouse over script
function mouseOver() {
  // FIX this
  // gimble == Retrieve svg 'title' property
  var gimble = this.title;
  // Change current element with title
  document.getElementById("name").innerHTML = "["+ gimble +"]";
}

function mouseOut() {
  document.getElementById("name").innerHTML = "[Country Name]" ;
}

// Drop down script
document.addEventListener("click", function() {
  // Retrieve element by #id and override the 'show' .class properties
  document.getElementById("drop-category").classList.toggle("show-menu");

  window.onclick = function(evt) {
    // If the click event is applied to the .class 'drop-btn'...
    if (!evt.target.matches(".drop-btn")) {
      // Retrieve .class 'drop-content'
      var dropdowns = document.getElementsByClassName("drop-content");
      var i;
      // ...For every iterable object in the .class...
      for (i = 0; i < dropdowns.length; i++) {
        // Define variable which appends the iterable object until max amount
        var openDropDown = dropdowns[i];

        if (openDropDown.classList.contains("show-menu")) {
          openDropDown.classList.remove("show-menu");
        }
      }
    }
  }
});
