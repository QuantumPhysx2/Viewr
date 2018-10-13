// Use this JS file for self-made functions

// Pop-up Information Box (Modal Box)
// Set each variable to be Loosely Coupled so that future changes to object functions can be easily changed here
var modal = [document.querySelector(".restaurantModal"),
             document.querySelector(".hotelModal"),
             document.querySelector(".landmarkModal"),
             document.querySelector(".descriptionModal")];

var mapButton = [document.querySelector(".restaurantBtn"),
                 document.querySelector(".hotelBtn"),
                 document.querySelector(".landmarkBtn"),
                 document.querySelector(".descriptionBtn")];

var closeIcon = [document.querySelector(".rmCloseIcon"),
                 document.querySelector(".hmCloseIcon"),
                 document.querySelector(".lmCloseIcon"),
                 document.querySelector(".dscCloseIcon")];

mapButton[0].addEventListener("click", function() {              // Assign Button with 'click' function
  modal[0].style.display = "block";                              // Call first index of modal property and change style
});

mapButton[1].addEventListener("click", function() {
  modal[1].style.display = "block";
});

mapButton[2].addEventListener("click", function() {
  modal[2].style.display = "block";
});

mapButton[3].addEventListener("click", function() {
  modal[3].style.display = "block";
})

closeIcon[0].addEventListener("click", function() {
  modal[0].style.display = "none";                                        // This time, set CSS display style to 'none'
});

closeIcon[1].addEventListener("click", function() {
  modal[1].style.display = "none";
});

closeIcon[2].addEventListener("click", function() {
  modal[2].style.display = "none";
});

closeIcon[3].addEventListener("click", function() {
  modal[3].style.display = "none";
});

// Keydown events
document.onkeydown = function(evt) {
  // If corresponding key value is pressed...
  if (evt.keyCode == 27) {
    // ...Change CSS property
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
  }
};

// Onclick events
document.onclick = function(evt) {
  // If current event target IS active on any of the listed modals...
  if (evt.target == modal[0] || evt.target == modal[1] || evt.target == modal[2] || evt.target == modal[3]) {
    // ...Change CSS property
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
  }
}

// Check if browser supports service workers
if ("serviceWorker" in navigator) {
  // If so, add the LOAD event listener
	window.addEventListener("load", function() {
		navigator.serviceWorker
    // Register the assigned file as the service worker file
    .register("js/sw.js")
    .then(function(registration) {
      // If correct, log the result as a success
			console.log("[Service Worker] Success", registration.scope);
		}, function(err) {
			console.log("[Service Worker] Fail", err);
		})
	})
};
