import $ from "jquery";

export default function accordionHandler() {
  $(function () {
    function handleAccordion() {
      if ($(window).width() <= 768) {
        $(".footer-links-wrapper h3")
          .off("click")
          .on("click", function () {
            const ul = $(this).next("ul");
            ul.slideToggle();
            $(this).toggleClass("iconToggleer");
          });
      } else {
        $(".footer-links-wrapper ul").show();
      }
    }

    handleAccordion();
    $(window).on("resize", handleAccordion);
  });
}
