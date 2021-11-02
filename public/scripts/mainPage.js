window.onload = function () {
  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  var page = 1;
  var lastPage = $(".page").length;
  // scrollinit();

  var $html = $("html");
  $html.animate({ scrollTop: 0 }, { duration: 10, queue: true });

  fadeInTextArea("1", "29vh");
  fadeInImg("1", "190px");

  $(window).on("wheel", function (e) {
    if ($html.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
      if (page == lastPage) return;
      page++;
      if (page == 2) {
        fadeInImg("2", "300px");
        fadeInTextArea("2", "45px");
      } else if (page == 3) {
        fadeInTextArea("3", "39vh");
        fadeInImg("3", "20vh");
      } else if (page == 4) {
        fadeInImg("4", "300px");
        fadeInTextArea("4", "45px");
      } else if (page == 5) {
        fadeInTextArea("5", "30vh");
      }
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) {
        return;
      }
      page--;
    }
    var posTop = (page - 1) * $(window).height();
    $html.animate({ scrollTop: posTop });
  });
};

function fadeInTextArea(className, position) {
  $(".temp-" + className + " .text-area")
    .fadeIn(1500)
    .animate(
      {
        top: position,
      },
      { duration: 1000, queue: false }
    );
}

function fadeInImg(className, position) {
  $(".temp-" + className + " .img-area")
    .fadeIn(1500)
    .animate(
      {
        top: position,
      },
      { duration: 1300, queue: false }
    );
}
