window.addEventListener('scroll', function() {
  var scrollBtn = document.querySelector('.scroll-to-top-btn');
  if (scrollBtn && window.pageYOffset > 300) {
    scrollBtn.style.display = 'block';
  } else if (scrollBtn) {
    scrollBtn.style.display = 'none';
  }
});

var scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}