$(function() {

  $(".toggle").click(function(e) {
    e.preventDefault();
    $(".menu").toggleClass("showMenu");
    if ($(".dropdown").is(":visible")) {
      $(".dropdown").removeClass("showDropdown");
    }
  });

  $(".dropdownStart").click(function(e) {
    $(".dropdown").toggleClass("showDropdown");
  });
});
