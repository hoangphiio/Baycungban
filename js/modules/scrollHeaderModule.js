export default function scrollHeaderModule() {
  // Scroll header add class
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
      $(".header").addClass("in");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("in");
    }
  });
}
