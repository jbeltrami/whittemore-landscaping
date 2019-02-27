$(() => {
  $('.owl-carousel').each(function(i, e) {
    $(e).owlCarousel({
      margin: 10,
      center: true,
      loop: true,
      autoWidth: true,
      items: 4,
      nav: true,
      autoplay: true,
      autoplayTimeout: 4000,
    });
  });
});
