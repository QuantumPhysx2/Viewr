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
};

// Pop-up Information Box (Modal Box)
var rmBox = document.querySelector("#RMBox");
var restaurantBtn = document.querySelector(".restaurantBtn");
restaurantBtn.addEventListener("click", function() {
  rmBox.style.display = "block";
});

var hmBox = document.querySelector("#HMBox");
var hotelBtn = document.querySelector(".hotelBtn");
hotelBtn.addEventListener("click", function() {
  hmBox.style.display = "block"
});

var lmBox = document.querySelector("#LMBox");
var landmarkBtn = document.querySelector(".landmarkBtn");
landmarkBtn.addEventListener("click", function() {
  lmBox.style.display = "block"
});

var closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", function() {
  rmBox.style.display = "none";
  hmBox.style.display = "none";
  lmBox.style.display = "none";
});

// Keydown events
document.onkeydown = function(evt) {
  // If corresponding key value is pressed...
  if (evt.keyCode == 27) {
    // ...Change css property
    rmBox.style.display = "none";
    hmBox.style.display = "none";
    lmBox.style.display = "none";
  }
};
