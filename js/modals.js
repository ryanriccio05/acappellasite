// Get all buttons that open modals
var buttons = document.querySelectorAll(".modalBtn");

// Loop through all buttons to add event listeners
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var modalId = this.getAttribute("data-modal");
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// Get all close buttons
var closeButtons = document.querySelectorAll(".close");

// Loop through all close buttons to add event listeners
closeButtons.forEach(function(close) {
  close.addEventListener("click", function() {
    this.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modals = document.querySelectorAll(".modal");
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
