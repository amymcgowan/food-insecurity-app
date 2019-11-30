$(document).ready(function() {

  // Close mobile menu
  // SOLVED BELOW --> Adds a click handler to the element with the classname .collapse and hides the element
  // with the classname .collapse on click.

  $(document).on("click", function () {
    $(".collapse").collapse("hide");
  })

});