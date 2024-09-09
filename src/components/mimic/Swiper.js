$(document).ready(function () {
  var visualSwiper = new Swiper(".visual-container", {
    speed: 800, // 800
    loop: true,
    effect: "slide",
    preventClicks: false,
    autoplay: {
      delay: 4100,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var cur_num = $(".progress_wrap .cur_num");
  var total_num = $(".progress_wrap .total_num");
  function visual_num() {
    cur_num.html(zero(visualSwiper.realIndex + 1));
    total_num.html(
      zero(
        Number(
          $(".visual-container .swiper-slide").not(".swiper-slide-duplicate")
            .length
        )
      )
    );
  }
  function zero(n) {
    var zero = "";
    n = n.toString();
    if (n.length < 2) {
      for (var i = 0; i < 2 - n.length; i++) zero += "0";
    }
    return zero + n;
  }
  visual_num();
  visualSwiper.on("transitionStart", function () {
    visual_num();
  });
});
