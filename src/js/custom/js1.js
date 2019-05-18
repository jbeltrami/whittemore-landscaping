$(() => {
  $('.owl-carousel').each(function(i, e) {
    $(e).owlCarousel({
      margin: 10,
      center: true,
      loop: true,
      autoWidth: true,
      items: 4,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 6000,
      navText: ['', '']
    });
  });
});

$(document).ready(function() {
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    } // End if
  });
});

$(() => {
  $('.nav-link').on('click', () => {
    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').removeClass('show');
    }
  });
});
