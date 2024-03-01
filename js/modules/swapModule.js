export default function swapModule() {
  $("#switch").click(function () {
    // Cache jQuery objects
    var $fromFilled = $("#form-from");
    var $toFilled = $("#form-to");

    // Swap content with animation
    $fromFilled.add($toFilled).hide().fadeIn(500);

    var fromHtml = $fromFilled.html();
    $fromFilled.html($toFilled.html());
    $toFilled.html(fromHtml);

    // Toggle animation class
    $(".square").toggleClass("toggle-up toggle-down");
  });
}
