// --- On Mouse Over ---
// Mouse over script
var elements = document.getElementsById("hidden");

for (var i = 0; i < elements.length; i++) {
  elements[i].onmouseover = mouseOver;
  elements[i].onmouseout = mouseOut;
}

function mouseOver(element) {
  element.style.color = "red";
  document.getElementById("hidden").innerHTML = "Over";
}

function mouseOut(element) {
  element.style.color = "blue";
  document.getElementById("hidden").innerHTML = "Out";
}

// --- On Click Events ---
// Drop down script
function openDropMenu() {
  // Retrieve element by #id and override the 'show' .class properties
  document.getElementById("drop-category").classList.toggle("show");
}

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

      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
}
