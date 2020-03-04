document.querySelector("form").onkeypress = function(e) {
  let key = e.charCode || e.keyCode; // using charCode or keyCode for cross-browser support
  if (key == 13) {
    e.preventDefault();
  }
};
