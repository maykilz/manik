import "../scss/styles.scss";

var menu = document.querySelector("#menu");
$(document).ready(function () {
  $("#menuopen").click(function () {
    $(this).toggleClass("open");
    $("#menu").toggleClass("open");
  });
});
