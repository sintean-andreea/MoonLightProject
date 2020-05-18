const flowersImgs = [
  { src: "img/albumflower1.jpg" },
  { src: "img/albumflower2.jpg" },
  { src: "img/albumflower3.jpg" },
  { src: "img/albumflower4.jpg" },
  { src: "img/albumflower5.jpg" },
];

const spaceImgs = [
  { src: "img/albumspace1.jpg" },
  { src: "img/albumspace2.jpg" },
  { src: "img/albumspace3.jpg" },
  { src: "img/albumspace4.jpg" },
  { src: "img/albumspace5.jpg" },
  { src: "img/albumspace6.jpg" },
];

const forestImgs = [
  { src: "img/albumforest1.jpg" },
  { src: "img/albumforest2.jpg" },
  { src: "img/albumforest3.jpg" },
  { src: "img/albumforest4.jpg" },
  { src: "img/albumforest5.jpg" },
];

const coffeeImgs = [
  { src: "img/albumcoffee1.jpg" },
  { src: "img/albumcoffee2.jpg" },
  { src: "img/albumcoffee3.jpg" },
  { src: "img/albumcoffee4.jpg" },
  { src: "img/albumcoffee5.jpg" },
  { src: "img/albumcoffee6.jpg" },
  { src: "img/albumcoffee7.jpg" },
  { src: "img/albumcoffee8.jpg" },
];

const vintageImgs = [
  { src: "img/albumvintage1.jpg" },
  { src: "img/albumvintage2.jpg" },
  { src: "img/albumvintage3.jpg" },
  { src: "img/albumvintage4.jpg" },
  { src: "img/albumvintage5.jpg" },
  { src: "img/albumvintage6.jpg" },
  { src: "img/albumvintage7.jpg" },
  { src: "img/albumvintage8.jpg" },
];

const constructionImgs = [
  { src: "img/albumconstruction1.jpg" },
  { src: "img/albumconstruction2.jpg" },
  { src: "img/albumconstruction3.jpg" },
  { src: "img/albumconstruction4.jpg" },
  { src: "img/albumconstruction5.jpg" },
  { src: "img/albumconstruction6.jpg" },
  { src: "img/albumconstruction7.jpg" },
  { src: "img/albumconstruction8.jpg" },
  { src: "img/albumconstruction9.jpg" },
];

function initLightbox(element, imgs) {
  element.click(() => {
    element.lightGallery({
      dynamic: true,
      dynamicEl: imgs,
      thumbnail: false,
    });
  });
}

$(document).ready(() => {
  $(".album-lightbox").lightGallery({
    showThumbByDefault: false,
  });

  initLightbox($("#forest-carousel-img"), forestImgs);
  initLightbox($("#flowers-carousel-img"), flowersImgs);
  initLightbox($("#space-carousel-img"), spaceImgs);
  initLightbox($("#coffee-carousel-img"), coffeeImgs);
  initLightbox($("#vintage-carousel-img"), vintageImgs);
  initLightbox($("#construction-carousel-img"), constructionImgs);
});
