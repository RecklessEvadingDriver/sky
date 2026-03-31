/**
 * Skystar Tour and Travels — Custom JavaScript
 * Dawn Theme Customization
 */

(function () {
  'use strict';

  /* ============================================================
     WHATSAPP BUTTON — Dynamic link builder
     ============================================================ */
  const SKYSTAR_PHONE = window.skystarConfig?.whatsappNumber || '919999999999'; // Replace with actual number

  /**
   * Build a WhatsApp wa.me link with a pre-filled message
   * including the tour package title and URL.
   */
  function buildWhatsAppLink(productTitle, productUrl) {
    const absoluteUrl = productUrl.startsWith('http')
      ? productUrl
      : window.location.origin + productUrl;

    const message =
      `Hi Skystar Tour and Travels! 👋\n\n` +
      `I'm interested in the following tour package:\n` +
      `📦 *${productTitle}*\n` +
      `🔗 ${absoluteUrl}\n\n` +
      `Please share more details about pricing and availability. Thank you!`;

    return `https://wa.me/${SKYSTAR_PHONE}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Initialize all WhatsApp buttons on the page that use
   * data-product-title and data-product-url attributes.
   */
  function initWhatsAppButtons() {
    const buttons = document.querySelectorAll('.skystar-whatsapp-btn[data-product-title]');
    buttons.forEach(function (btn) {
      const title = btn.getAttribute('data-product-title') || document.title;
      const url = btn.getAttribute('data-product-url') || window.location.pathname;
      btn.setAttribute('href', buildWhatsAppLink(title, url));
    });
  }

  /* ============================================================
     HIDE ECOMMERCE ELEMENTS — Ensure catalog-only mode
     ============================================================ */
  function hideEcommerceElements() {
    const selectors = [
      '.product-form__buttons',
      '.product-form__quantity',
      '.quantity',
      '.cart-notification',
      '#cart-icon-bubble',
      '.header__icon--cart',
      '.cart-count-bubble',
      'form[action="/cart/add"]',
      '.shopify-payment-button',
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.style.display = 'none';
      });
    });
  }

  /* ============================================================
     SMOOTH SCROLL for hero CTA → collections
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ============================================================
     LAZY LOAD IMAGE OBSERVER (IntersectionObserver)
     ============================================================ */
  function initLazyImages() {
    if (!('IntersectionObserver' in window)) return;

    const lazyImages = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
              img.removeAttribute('data-srcset');
            }
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    lazyImages.forEach(function (img) {
      observer.observe(img);
    });
  }

  /* ============================================================
     COUNTER ANIMATION for hero stats
     ============================================================ */
  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;
    var suffix = el.getAttribute('data-suffix') || '';

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  function initCounterAnimation() {
    if (!('IntersectionObserver' in window)) return;

    var counters = document.querySelectorAll('[data-counter]');
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute('data-counter'), 10);
            if (!isNaN(target)) {
              animateCounter(el, target, 1800);
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    initWhatsAppButtons();
    hideEcommerceElements();
    initSmoothScroll();
    initLazyImages();
    initCounterAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
