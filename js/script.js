// Loader hide logic
window.addEventListener('load', function() {
  const loader = document.getElementById('ghorkhujo-loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.style.display = 'none', 600);
  }
});

// Drawer menu logic
function openDrawer() {
  document.getElementById('drawerMenu').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('show');
}
function closeDrawer() {
  document.getElementById('drawerMenu').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('show');
}
document.getElementById('drawerToggle')?.addEventListener('click', openDrawer);
document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);
document.getElementById('drawerBackdrop')?.addEventListener('click', closeDrawer);

// Bottom nav active state
const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
bottomNavLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    bottomNavLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Hero and header action buttons (scroll to sections or open modals in future)
document.getElementById('findHomeBtn')?.addEventListener('click', () => window.scrollTo({top: 600, behavior: 'smooth'}));
document.getElementById('postRentalBtn')?.addEventListener('click', () => window.scrollTo({top: 1200, behavior: 'smooth'}));
document.getElementById('heroFindHome')?.addEventListener('click', () => window.scrollTo({top: 600, behavior: 'smooth'}));
document.getElementById('heroPostRental')?.addEventListener('click', () => window.scrollTo({top: 1200, behavior: 'smooth'}));

// Microinteraction: quick action card ripple
const quickCards = document.querySelectorAll('.quick-action-card');
quickCards.forEach(card => {
  card.addEventListener('mousedown', function(e) {
    this.classList.add('active');
  });
  card.addEventListener('mouseup', function(e) {
    this.classList.remove('active');
  });
  card.addEventListener('mouseleave', function(e) {
    this.classList.remove('active');
  });
});

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
        allowTouchMove: true,
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 40,
        allowTouchMove: false,
      }
    }
  });

// Animated Counter for Stat Section
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.max(1, target / 120);
      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 18);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}
// Only animate when section is visible
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}
let statsAnimated = false;
window.addEventListener('scroll', function() {
  const statSection = document.querySelector('.stat-card');
  if (!statsAnimated && statSection && isElementInViewport(statSection)) {
    animateCounters();
    statsAnimated = true;
  }
});
// Fallback: animate if already in view on load
window.addEventListener('DOMContentLoaded', function() {
  const statSection = document.querySelector('.stat-card');
  if (statSection && isElementInViewport(statSection)) {
    animateCounters();
    statsAnimated = true;
  }
});


  // Highlight the correct bottom nav link based on current page
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.bottom-nav-link');
    const path = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (
        (path === '' || path === 'index.html') && link.getAttribute('href').includes('index.html')
      ) {
        link.classList.add('active');
      } else if (
        path === 'listings.html' && link.getAttribute('href').includes('listings.html')
      ) {
        link.classList.add('active');
      }
      // You can add more else ifs for other pages as needed
    });
  });



  