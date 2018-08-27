function openDropMenu() {
  document.getElementById("drop-category").classList.toggle("show");
}

window.onclick = function(evt) {
  if (!evt.target.matches(".drop-btn")) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropDown = dropdowns[i];

      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
}
