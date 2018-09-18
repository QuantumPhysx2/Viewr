var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = ["2018"];

var index = 1;

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
    modalBox.style.display = "none";
  }
}

// Modal box
var modalBox = document.querySelector("#modal");
var btn = document.querySelector(".restaurantBtn");
btn.addEventListener("click", function() {
  modalBox.style.display = "block";
});

var closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", function() {
  modalBox.style.display = "none";
})
