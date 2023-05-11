let menu = document.getElementById("menu");
let downarrow = document.getElementById("down");
let shorts = document.querySelector(".shorts-wrapper");
let sideBar = document.querySelector(".sidebar");
let pagecontent = document.querySelector(".page-content");


menu.onclick = function() {
  sideBar.classList.toggle("small-sidebar");
  pagecontent.classList.toggle("resize");
};

$(".carousel-container").slick({
  infinite: false,
  slidesToShow: 10,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: "<div><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow: "<div><i class='fa-solid fa-chevron-right'></i></div>",
});


