$(() => {
  $('.owl-carousel').each(function(i, e) {
    $(e).owlCarousel({
      margin: 10,
      loop: true,
      autoWidth: true,
      items: 4,
      nav: true,
    });
  });
});
