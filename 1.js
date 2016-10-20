// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. TACOS!!!!!)
  var yell = function(string) {
    // change this so it works
    // .toUpperCase() is a built-in function
    //string = string.toUpperCase();
    return string.toUpperCase()+"!!!!";
  }

  var theMostAwesomeFood = "donuts"

  window.alert(yell(theMostAwesomeFood))
})
