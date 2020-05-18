// Carousel Home
$(document).ready(() => {
  $(".carousel").carousel({
    interval: 2000,
  });

  initAlbumsCarousel();
  galleryPhotos();
});

// function carousel albums
function initAlbumsCarousel() {
  $(".albums-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
}

// function gallery
function galleryPhotos() {
  let selectedClass = "";
  const scaleAnimationClass = "scale-anm";

  const categoryBtn = $(".fil-cat");
  const portfolio = $("#portfolio");

  categoryBtn.click((event) => {
    const self = event.currentTarget;

    selectedClass = $(self).attr("data-rel");
    categoryBtn.removeClass("active");
    $(self).addClass("active");

    portfolio.fadeTo(100, 0.1);

    portfolio
      .find("div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass(scaleAnimationClass);

    setTimeout(() => {
      $("." + selectedClass)
        .fadeIn()
        .addClass(scaleAnimationClass);
      portfolio.fadeTo(300, 1);
    }, 300);
  });
}
