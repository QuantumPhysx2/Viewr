var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = ["2018"];

var index = 1;

// Modal box
var modal = document.querySelector("#modal");
var activator = document.querySelector("#activator");
var span = document.getElementsByClassName("close")[0];

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
    document.getElementById("year").innerHTML = year++;   // FIX ME -- Currently changing on second year
    index = 0;
  }
}

document.onkeydown = function(evt) {
  // If corresponding key value is pressed...
  if (evt.keyCode == 27) {
    // ...Change css property
    modal.style.display = "none";
  }
}

// Drop down script (credit to StackOverflow and Codepen)
document.addEventListener("click", function() {
  var dropBtn = document.getElementById("drop-category");
  // Retrieve element by #id and override the 'show' .class properties
  dropBtn.classList.toggle("show-menu");

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

function triggerPopUp() {
  modal.style.display = "block";
}

function closePopUp() {
  modal.style.display = "none";
}
