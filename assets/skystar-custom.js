/**
 * Skystar Tour and Travels — Custom JavaScript v2.0
 * Production-ready JS for Shopify Dawn theme
 * Features: sticky header, mobile menu, WhatsApp links, counter animation,
 *           lazy images, smooth scroll, scroll-to-top, image gallery zoom
 */

(function () {
  'use strict';

  /* ============================================================
     CONFIG
     ============================================================ */
  var SKYSTAR_PHONE = (window.skystarConfig && window.skystarConfig.whatsappNumber)
    || '919999999999';

  /* ============================================================
     WHATSAPP — Dynamic link builder
     ============================================================ */
  function buildWhatsAppLink(productTitle, productUrl) {
    var absoluteUrl = productUrl.startsWith('http')
      ? productUrl
      : window.location.origin + productUrl;

    var message =
      'Hi Skystar Tour and Travels! \u{1F44B}\n\n' +
      "I'm interested in the following tour package:\n" +
      '\u{1F4E6} *' + productTitle + '*\n' +
      '\u{1F517} ' + absoluteUrl + '\n\n' +
      'Please share more details about pricing and availability. Thank you!';

    return 'https://wa.me/' + SKYSTAR_PHONE + '?text=' + encodeURIComponent(message);
  }

  function initWhatsAppButtons() {
    var buttons = document.querySelectorAll('.skystar-whatsapp-btn[data-product-title]');
    buttons.forEach(function (btn) {
      var title = btn.getAttribute('data-product-title') || document.title;
      var url = btn.getAttribute('data-product-url') || window.location.pathname;
      btn.setAttribute('href', buildWhatsAppLink(title, url));
    });
  }

  /* ============================================================
     HIDE ECOMMERCE ELEMENTS — Catalog-only mode
     ============================================================ */
  function hideEcommerceElements() {
    var selectors = [
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
     STICKY HEADER
     ============================================================ */
  function initStickyHeader() {
    var header = document.getElementById('skystarHeader');
    if (!header) return;

    var scrollThreshold = 60;

    function onScroll() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  function initMobileMenu() {
    var toggle = document.getElementById('skystarMenuToggle');
    var menu = document.getElementById('skystarMobileMenu');
    var closeBtn = document.getElementById('skystarMenuClose');
    var backdrop = document.getElementById('skystarMenuBackdrop');

    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ============================================================
     ANNOUNCEMENT BAR — Already handled inline in Liquid,
     but we expose a hook if needed
     ============================================================ */

  /* ============================================================
     SMOOTH SCROLL for anchor links
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerHeight = document.getElementById('skystarHeader')
            ? document.getElementById('skystarHeader').offsetHeight
            : 0;
          var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ============================================================
     SCROLL TO TOP
     ============================================================ */
  function initScrollToTop() {
    var btn = document.getElementById('skystarScrollTop');
    if (!btn) return;

    function onScroll() {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    onScroll();
  }

  /* ============================================================
     LAZY LOAD IMAGE OBSERVER (IntersectionObserver)
     ============================================================ */
  function initLazyImages() {
    if (!('IntersectionObserver' in window)) return;

    var lazyImages = document.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
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
    }, { rootMargin: '200px 0px' });

    lazyImages.forEach(function (img) { observer.observe(img); });
  }

  /* ============================================================
     COUNTER ANIMATION for hero stats
     ============================================================ */
  function animateCounter(el, target, duration) {
    var startTime = null;
    var suffix = el.getAttribute('data-suffix') || '';

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounterAnimation() {
    if (!('IntersectionObserver' in window)) return;

    var counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-counter'), 10);
          if (!isNaN(target)) animateCounter(el, target, 1800);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ============================================================
     PRODUCT IMAGE GALLERY — thumbnail switcher
     Already inlined in main-product section, but also covered here.
     ============================================================ */
  function initProductGallery() {
    var section = document.querySelector('.skystar-product-page');
    if (!section) return;

    var thumbs = section.querySelectorAll('.skystar-product-gallery__thumb');
    var items = section.querySelectorAll('.skystar-product-gallery__item');

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var id = this.getAttribute('data-media-id');
        items.forEach(function (item) {
          item.classList.toggle('skystar-product-gallery__item--active', item.id === 'media-' + id);
        });
        thumbs.forEach(function (t) {
          t.classList.toggle('active', t.getAttribute('data-media-id') === id);
        });
      });
    });
  }

  /* ============================================================
     CARD HOVER — ensure tour cards load within their grids
     ============================================================ */
  function initCardAnimations() {
    if (!('IntersectionObserver' in window)) return;

    var cards = document.querySelectorAll('.tour-card, .skystar-feature-card, .skystar-testimonial-card');
    if (!cards.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    initWhatsAppButtons();
    hideEcommerceElements();
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initScrollToTop();
    initLazyImages();
    initCounterAnimation();
    initProductGallery();
    initCardAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
