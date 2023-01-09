let menu = document.getElementById("menu");
let downarrow = document.getElementById("down");

let sideBar = document.querySelector(".sidebar");
let pagecontent = document.querySelector(".page-content");
let down = document.querySelector(".down");

menu.onclick = function() {
  sideBar.classList.toggle("small-sidebar");
  pagecontent.classList.toggle("resize");
};
downarrow.onclick= function() {
  down.classList.toggle("show");
};


$(".carousel-container").slick({
  infinite: true,
  slidesToShow: 15,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: "<div><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow:"<div><i class='fa-solid fa-chevron-right'></i></div>"
});
