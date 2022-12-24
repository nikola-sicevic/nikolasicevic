const sliderAnimateOptions = {
  speed: 150,
  goLeft: "-=50%",
  staticLeft: "0",
  goRight: "+=50%",
  staticRight: "50%",
};

function toggleSlider(slider) {
  let currentPos = parseInt(slider.css("left"));

  let direction = sliderAnimateOptions.goRight;
  let staticValue = sliderAnimateOptions.staticRight;

  if (currentPos != 0) {
    direction = sliderAnimateOptions.goLeft;
    staticValue = sliderAnimateOptions.staticLeft;
  }

  slider.animate({ left: direction }, sliderAnimateOptions.speed, function () {
    $(this).css("left", staticValue);
  });
}

function toggleActivePill(static) {
  static.data("is-active", 1);

  static.siblings().data("is-active", 0);
}

$(document).ready(function () {
  let slider = $("#slider");

  // Make pill active by toogling the background
  $(".static").on("click", function () {
    let static = $(this);
    let isActive = static.data("is-active");

    // If the clicked element isn't active
    if (!isActive) {
      // Toggle slider
      toggleSlider(slider);

      // Toggle is-active value
      toggleActivePill(static);
    }
  });
});
