// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    // Do something
    $("#unicorn").show();
    event.preventDefault();
  });

})
