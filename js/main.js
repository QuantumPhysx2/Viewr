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
var modal = document.querySelector("#modal");                   // Get ID Modal

var restaurantBtn = document.querySelector(".restaurantBtn");   // Get Class Button
restaurantBtn.addEventListener("click", function() {            // Assign Button with 'click' function
  modal.style.display = "block";                                // Set CSS property of Modal to 'block' display
});

var hotelBtn = document.querySelector(".hotelBtn");
hotelBtn.addEventListener("click", function() {
  modal.style.display = "block"
});

var landmarkBtn = document.querySelector(".landmarkBtn");
landmarkBtn.addEventListener("click", function() {
  modal.style.display = "block"
});

var rmCloseIcon = document.querySelector(".rmCloseIcon");              // Repeat same for different Class
rmCloseIcon.addEventListener("click", function() {
  modal.style.display = "none";                                        // This time, set CSS display style to 'none'
});

var hmCloseIcon = document.querySelector(".hmCloseIcon");
hmCloseIcon.addEventListener("click", function() {
  modal.style.display = "none";
});

var lmCloseIcon = document.querySelector(".lmCloseIcon");
lmCloseIcon.addEventListener("click", function() {
  modal.style.display = "none";
});

// Keydown events
document.onkeydown = function(evt) {
  // If corresponding key value is pressed...
  if (evt.keyCode == 27) {
    // ...Change CSS property
    modal.style.display = "none";
  }
};

// Onclick events
document.onclick = function(evt) {
  // If current event target IS modal...
  if (evt.target == modal) {
    // ...Change CSS property
    modal.style.display = "none";
  }
}
