// Variables
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// HTML has set to index[0]. JS to start cycling through 1-11
var index = 1;

// Modal box
var modal = document.getElementById("modal");
var activator = document.getElementById("activator");
var span = document.getElementsByClassName("close")[0];

// Mouse over script
// FIX this
function mouseOver() {
  // CODE: Find a way to dynamically retrieve the "title" property from svg
  var state = ["Australia", "USA"];
  // Change current element with title
  document.getElementById("name").innerHTML = "["+ "The country/state name" +"]";
}

function mouseOut() {
  document.getElementById("name").innerHTML = "[Country Name]" ;
}

function nextMonth() {
  // If iterable object is less than the amount of attributes in list...
  if (index < months.length) {
    // ...Change CLASS "month-header" HTML to current index attribute in list
    document.getElementById("month-header").innerHTML = months[index];
    // ...Add index by +1
    index++;
  // Elif the index reaches December...
  } else if (index == months.length) {
    // ...Reset index to zero to repeat cycle
    index = 0;
  }
}

// Drop down script (credit to StackOverflow and Codepen)
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
  /* Current iteration causes drop menu to open too
  window.onclick = function(evt) {
    if (evt.target == modal) {
      modal.style.display = "none";
    }
  }
  */
});

function triggerPopUp() {
  modal.style.display = "block";
}

function closePopUp() {
  modal.style.display = "none";
}

// Map movement controls logic
// Get current pointer coordinates (X and Y)
// If pointer.X is moving RIGHT (positive)...
// ...then change transform: translateX(+x) where x is the pixel value
// ...elif moving LEFT (negative)...
// ...then change transform: translateX(-x)
// If pointer.Y is moving DOWN...
// ...then change transform: translateY(+Y)
// ...elif pointer is moving UP...
// ...then change transform: translateY(-Y)
