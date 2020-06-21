/*const navSlide = () => {
  const mmore = document.querySelector(".second-more");
  const nav = document.querySelector(".second-links");

  if (mmore) {
    mmore.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      console.log("hii");
    });
  }
};

navSlide();

$(document).ready(function () {
  $(".option-contact").on("click", function () {
    console.log("branch");
    $(".subtext-contact").toggleClass("subtext-active");
  });

  $(".option-branch").on("click", function () {
    console.log("branch");
    $(".subtext-branch").toggleClass("subtext-active");
  });

  $(".second-more").on("click", function () {
    console.log("branch");
    $(".second-links").toggleClass("nav-active");
  });
});*/

$(window).resize(function () {
  var width = $(window).width();
  if (width <= 993) {
    $("#third").removeClass("container").addClass("container-fluid");
  } else {
    $("#third").removeClass("container-fluid").addClass("container");
  }
});

$(document).ready(function () {
  resize();
});
