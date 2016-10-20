// get a random integer between 1 and 6 - getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  // make magic happen
  // some jQuery functions you'll need:
  // - click
  // - attr

  $("#roll").on("click", function(event) {
    // Do something
    event.preventDefault();
  });

})
