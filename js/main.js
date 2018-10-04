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
// Self Note: Try and find a way to remove this redundant mess in future Sprint -- placeholder
var rmBox = document.querySelector("#RMBox");                   // Get ID Modal
var restaurantBtn = document.querySelector(".restaurantBtn");   // Get Class Button
restaurantBtn.addEventListener("click", function() {            // Assign Button with 'click' function
  rmBox.style.display = "block";                                // Set CSS property of Modal to 'block' display
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

var rmCloseIcon = document.querySelector(".rmCloseIcon");              // Repeat same for different Class
rmCloseIcon.addEventListener("click", function() {
  rmBox.style.display = "none";                                        // This time, set CSS display style to 'none'
});

var hmCloseIcon = document.querySelector(".hmCloseIcon");
hmCloseIcon.addEventListener("click", function() {
  hmBox.style.display = "none";
});

var lmCloseIcon = document.querySelector(".lmCloseIcon");
lmCloseIcon.addEventListener("click", function() {
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

document.onclick = function(evt) {
  var restaurantModal = document.querySelector(".restaurantModal");
  var hotelModal = document.querySelector(".hotelModal");
  var landmarkModal = document.querySelector(".landmarkModal");

  if (evt.target == restaurantModal) {
    restaurantModal.style.display = "none";
  } else if (evt.target == hotelModal) {
    hotelModal.style.display = "none";
  } else if (evt.target == landmarkModal) {
    landmarkModal.style.display = "none";
  }
}
