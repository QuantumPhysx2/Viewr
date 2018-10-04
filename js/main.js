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
// Set each variable to be Loosely Coupled so that future changes to object functions can be easily changed here
var modal = [document.querySelector(".restaurantModal"),
             document.querySelector(".hotelModal"),
             document.querySelector(".landmarkModal")];

var mapButton = [document.querySelector(".restaurantBtn"),
                 document.querySelector(".hotelBtn"),
                 document.querySelector(".landmarkBtn")];

var closeIcon = [document.querySelector(".rmCloseIcon"),
                 document.querySelector(".hmCloseIcon"),
                 document.querySelector(".lmCloseIcon")];

mapButton[0].addEventListener("click", function() {              // Assign Button with 'click' function
  modal[0].style.display = "block";                              // Call first index of modal property and change style
});

mapButton[1].addEventListener("click", function() {
  modal[1].style.display = "block"
});

mapButton[2].addEventListener("click", function() {
  modal[2].style.display = "block"
});

closeIcon[0].addEventListener("click", function() {
  modal[0].style.display = "none";                                        // This time, set CSS display style to 'none'
});

closeIcon[1].addEventListener("click", function() {
  modal[1].style.display = "none";
});

closeIcon[2].addEventListener("click", function() {
  modal[2].style.display = "none";
});

// Keydown events
document.onkeydown = function(evt) {
  // If corresponding key value is pressed...
  if (evt.keyCode == 27) {
    // ...Change CSS property
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
  }
};

// Onclick events
document.onclick = function(evt) {
  // If current event target IS modal...
  if (evt.target == modal[0]) {
    // ...Change CSS property
    modal[0].style.display = "none";
  } else if (evt.target == modal[1]) {
    modal[1].style.display = "none";
  } else if (evt.target == modal[2]) {
    modal[2].style.display = "none";
  }
}
