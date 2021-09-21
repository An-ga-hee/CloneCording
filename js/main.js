$(".h1_edam")
  .delay(0)
  .animate({ opacity: 0.8, top: 400 }, 600, "swing", function () {
    $(".h1_enter").delay(0).animate({ opacity: 0.8, top: 510 }, 600);
  });

$(".lang").on("click", function () {
  $(this).children("ul").toggleClass("drop");
});

// 배경 이미지 전환
const bgPath1 = `./images/main_visual_1.jpg`;
const bgPath2 = `./images/main_visual_2.jpg`;

setInterval(() => {
  $("#changeImg")
    .delay(3000)
    .animate({ opacity: 0 }, 1000, function () {
      $(this).attr("src", bgPath2);
    })
    .animate({ opacity: 1 }, 1000)
    .delay(3000)
    .animate({ opacity: 0 }, 1000, function () {
      $(this).attr("src", bgPath1);
    })
    .animate({ opacity: 1 }, 1000);
});

$("#toggle").on("click", () => {
  $("nav").fadeToggle();
});
