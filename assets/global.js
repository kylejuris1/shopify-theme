(function () {
  'use strict';

  // FAQ accordion
  document.querySelectorAll('.faq-accordion__trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-accordion__item');
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-accordion__item').forEach(function (i) { i.classList.remove('is-open'); });
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // Product gallery thumbnails
  document.querySelectorAll('.product-hero-unikor__thumbs button').forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      var container = this.closest('.product-hero-unikor__media');
      var mainImg = container.querySelector('.product-hero-unikor__main-img');
      var src = this.querySelector('img') && this.querySelector('img').dataset.fullSize;
      if (mainImg && src) mainImg.src = src;
      this.closest('.product-hero-unikor__thumbs').querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
      this.classList.add('is-active');
    });
    if (i === 0) btn.classList.add('is-active');
  });
})();
