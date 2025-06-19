document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar collapse element
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Add click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the click is outside the navbar collapse and toggle button
        const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        
        // If the click is outside and the menu is open, close it
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });

    // Handle toggle button state
    navbarToggler.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: '5',
    spaceBetween: 40,
    loop: true,
    allowTouchMove: false,
    speed: 6000, // very slow transition for continuous smooth movement
    autoplay: {
      delay: 0, // no delay between transitions
      disableOnInteraction: false,
    },
    loopedSlides: 20, // helps smoother loop with multiple duplicates

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 40,
      }
    }
  });
