document.getElementById("captcha_form").addEventListener("submit",function(evt)
  {

  var response = grecaptcha.getResponse();
  if(response.length == 0)
  {
    //reCaptcha not verified

    document.getElementById("recaptcha").style.display= "block" ;

    evt.preventDefault();
    return false;
  }
  //captcha verified
  //do the rest of your validations here

});

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const isHomePage = document.querySelector('.bgimage'); // Full height hero
  const isInnerPage = document.querySelector('.halfhead'); // Half height hero

  // Only add scroll effect on home page
  if (isHomePage) {
      function checkScroll() {
          if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
             
          } else {
              navbar.classList.remove('scrolled');
             
          }
      }
      
      // Initial check for navbar
      checkScroll();
      window.addEventListener('scroll', checkScroll);
  }

  // For inner pages, just keep the white background
  if (isInnerPage) {
      navbar.style.backgroundColor = 'white';
  }
  // Initialize carousel only if it exists (home page)
  const myCarousel = document.querySelector('#heroCarousel');
  if (myCarousel) {
      const carousel = new bootstrap.Carousel(myCarousel, {
          interval: false,  // No auto sliding
          wrap: true,      // Continuous loop
          keyboard: true,  // Keyboard controls
          touch: true      // Touch/swipe support
      });

      // Keyboard navigation for carousel
      document.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowLeft') {
              carousel.prev();
          }
          if (e.key === 'ArrowRight') {
              carousel.next();
          }
      });

      // Touch swipe support for carousel
      let touchstartX = 0;
      let touchendX = 0;
      
      myCarousel.addEventListener('touchstart', function(e) {
          touchstartX = e.changedTouches[0].screenX;
      });

      myCarousel.addEventListener('touchend', function(e) {
          touchendX = e.changedTouches[0].screenX;
          handleSwipe();
      });

      function handleSwipe() {
          if (touchendX < touchstartX) carousel.next();
          if (touchendX > touchstartX) carousel.prev();
      }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

  // Scroll indicator (only if it exists)
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
      scrollIndicator.addEventListener('click', function() {
          window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
          });
      });
  }

  // Form submission handling
  const form = document.querySelector('#captcha_form');
  if (form) {
      form.addEventListener('submit', function() {
          const button = this.querySelector('button[type="submit"]');
          if (button) {
              button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
              button.disabled = true;
          }
      });
  }

  // Optional: Handle dropdown hover on desktop
  const dropdowns = document.querySelectorAll('.dropdown');
  if (window.innerWidth > 768) {
      dropdowns.forEach(dropdown => {
          dropdown.addEventListener('mouseenter', function() {
              this.querySelector('.dropdown-menu').classList.add('show');
          });
          dropdown.addEventListener('mouseleave', function() {
              this.querySelector('.dropdown-menu').classList.remove('show');
          });
      });
  }

  const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('#year');
    if (copyrightElement) {
        copyrightElement.innerHTML = currentYear;
    }
});