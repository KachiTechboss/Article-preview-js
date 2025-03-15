$(document).ready(function () {
    $(".author-social-icon").hide();
    $(".share-icon").click(function () {
      $(".author-social-icon").toggle();
    });
    $(".share-icon2").click(function () {
      $(".author-description").hide();
      $(".author-social-icon").show();
    });
    $(".share img").click(function () {
      $(".author-social-icon").hide();
      $(".author-description").show();
    });
  });