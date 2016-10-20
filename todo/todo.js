// This code runs when the page loads
$(function() {

  $("button.btn.btn-danger").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    // remove the element
    elementThatWasClicked.parent().remove();
  })

})
