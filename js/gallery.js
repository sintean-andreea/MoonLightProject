const galleryImg = [
  {
    category: "food",
    src: "img/photo1.jpg",
  },
  { category: "sunset", src: "img/photo13.jpg" },
  { category: "things", src: "img/photo18.jpg" },
  { category: "food", src: "img/photo4.jpg" },
  { category: "sunset", src: "img/photo10.jpg" },
  { category: "things", src: "img/photo24.jpg" },
  { category: "food", src: "img/photo3.jpg" },
  { category: "sunset", src: "img/photo16.jpg" },
  { category: "things", src: "img/photo21.jpg" },
  { category: "sunset", src: "img/photo17.jpg" },
  { category: "food", src: "img/photo2.jpg" },
  { category: "sunset", src: "img/photo15.jpg" },
  { category: "sunset", src: "img/photo11.jpg" },
  { category: "things", src: "img/photo23.jpg" },
  { category: "food", src: "img/photo8.jpg" },
  { category: "sunset", src: "img/photo12.jpg" },
  { category: "food", src: "img/photo7.jpg" },
  { category: "sunset", src: "img/photo14.jpg" },
  { category: "things", src: "img/photo19.jpg" },
  { category: "food", src: "img/photo5.jpg" },
  { category: "things", src: "img/photo22.jpg" },
  { category: "food", src: "img/photo6.jpg" },
  { category: "things", src: "img/photo20.jpg" },
  { category: "sunset", src: "img/photo9.jpg" },
  { category: "things", src: "img/photo25.jpg" },
];

$(document).ready(() => {
  let continutHtml = "";

  galleryImg.forEach((element) => {
    continutHtml += `
    <div class="tile scale-anm ${element.category} all portfolio-img">
        <a href="${element.src}">
            <img src="${element.src}" alt="" />
        </a>
    </div>`;
  });

  const portfolio = document.querySelector("#portfolio");
  portfolio.innerHTML = continutHtml;

  const portfolioImg = $("#portfolio > .portfolio-img");

  portfolioImg.lightGallery({
    download: false,
    share: false,
    zoom: false,
  });
});
