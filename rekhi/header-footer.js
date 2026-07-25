/*!
 * header-footer.js — Rekhi Centre of Excellence v2.0
 * ─────────────────────────────────────────────────────────
 * Injects:
 *   • Floating glassmorphic Rekhi-scoped navigation
 *   • Enterprise footer (pure CSS, no Tailwind)
 *   • Scroll-to-top button
 *   • GSAP entrance + ScrollTrigger reveal animations
 *
 * Each rekhi/ page only needs:
 *   <script src="header-footer.js"></script>
 * ─────────────────────────────────────────────────────────
 */
(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════
     1. DOM UTILITY HELPERS
     ═══════════════════════════════════════════════════════ */
  function addLink(rel, href, attrs) {
    var el = document.createElement('link');
    el.rel  = rel;
    el.href = href;
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { el[k] = attrs[k]; });
    }
    document.head.appendChild(el);
  }

  function loadScript(src, cb) {
    var el = document.createElement('script');
    el.src = src;
    if (cb) el.onload = cb;
    el.onerror = function () {
      console.warn('[Rekhi] Failed to load script: ' + src);
    };
    document.head.appendChild(el);
    return el;
  }

  /* ═══════════════════════════════════════════════════════
     2. HEAD DEPENDENCIES
     ═══════════════════════════════════════════════════════ */

  /* Favicon */
  addLink('icon', 'https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/17163552/cropped-au-footer-logo.png', { sizes: '32x32' });

  /* Google Fonts preconnect */
  addLink('preconnect', 'https://fonts.googleapis.com');
  var _gc = document.createElement('link');
  _gc.rel = 'preconnect';
  _gc.href = 'https://fonts.gstatic.com';
  _gc.crossOrigin = 'anonymous';
  document.head.appendChild(_gc);

  /* Inter + Cinzel typography */
  addLink('stylesheet',
    'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Cinzel:wght@600&display=swap'
  );

  /* Font Awesome 6 icons */
  addLink('stylesheet',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
  );

  /* Parent research site CSS (kept for compatibility) */
  addLink('stylesheet', '../styles.css');

  /* Rekhi-specific premium stylesheet */
  addLink('stylesheet', 'styles.css');


  /* ═══════════════════════════════════════════════════════
     3. HEADER HTML — Rekhi Floating Navigation
     ═══════════════════════════════════════════════════════ */
  var HEADER_HTML = [
    '<!-- ── REKHI FLOATING NAV ── -->',
    '<nav id="rekhi-nav" role="navigation" aria-label="Rekhi Centre navigation">',
    '  <div class="rn-inner">',

    '    <!-- Brand -->',
    '    <a href="excellence.html" class="rn-brand" aria-label="Rekhi Centre of Excellence — Home">',
    '      <img class="rn-brand-logo"',
    '           src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/20063958/logo_601.png"',
    '           alt="Adamas University" width="40" height="40" loading="eager">',
    '      <div class="rn-brand-text">',
    '        <span class="rn-brand-name">Rekhi Centre</span>',
    '        <span class="rn-brand-sub">Science of Happiness &middot; Adamas University</span>',
    '      </div>',
    '    </a>',

    '    <!-- Desktop navigation links -->',
    '    <ul id="rn-desktop-links" class="rn-links" role="menubar" aria-label="Primary navigation">',
    '      <li role="none">',
    '        <a href="excellence.html" class="rn-link" role="menuitem"',
    '           data-page="excellence.html">Home</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="our-team.html" class="rn-link" role="menuitem"',
    '           data-page="our-team.html">Our Team</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="activities.html" class="rn-link" role="menuitem"',
    '           data-page="activities.html" data-section="infrastructure">Infrastructure and Lab</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="courses.html" class="rn-link" role="menuitem"',
    '           data-page="courses.html">Courses and Programs</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="activities.html" class="rn-link" role="menuitem"',
    '           data-page="activities.html" data-section="events">Activities</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="announcements.html" class="rn-link" role="menuitem"',
    '           data-page="announcements.html">Announcements</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="contact.html" class="rn-link rn-cta" role="menuitem"',
    '           data-page="contact.html">Contact Us</a>',
    '      </li>',
    '    </ul>',

    '    <!-- Mobile hamburger -->',
    '    <button id="rn-hamburger" class="rn-hamburger"',
    '            aria-label="Open navigation menu"',
    '            aria-expanded="false"',
    '            aria-controls="rekhi-drawer">',
    '      <span></span><span></span><span></span>',
    '    </button>',

    '  </div>',
    '</nav>',

    '<!-- ── MOBILE OVERLAY ── -->',
    '<div id="rekhi-overlay" aria-hidden="true"></div>',

    '<!-- ── MOBILE DRAWER ── -->',
    '<div id="rekhi-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">',

    '  <div class="rn-drawer-header">',
    '    <a href="excellence.html" class="rn-drawer-brand" tabindex="0">',
    '      <img class="rn-drawer-logo"',
    '           src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/16141918/logo1.png"',
    '           alt="Adamas University" width="34" height="34">',
    '      <span class="rn-drawer-name">Rekhi Centre</span>',
    '    </a>',
    '    <button id="rn-drawer-close" class="rn-drawer-close" aria-label="Close navigation menu">',
    '      <i class="fa-solid fa-xmark" aria-hidden="true"></i>',
    '    </button>',
    '  </div>',

    '  <nav class="rn-drawer-nav" aria-label="Mobile navigation">',
    '    <a href="excellence.html" class="rn-drawer-link" data-page="excellence.html">Home</a>',
    '    <a href="our-team.html"   class="rn-drawer-link" data-page="our-team.html">Our Team</a>',
    '    <a href="activities.html" class="rn-drawer-link" data-page="activities.html">Infrastructure and Lab</a>',
    '    <a href="courses.html"    class="rn-drawer-link" data-page="courses.html">Courses and Programs</a>',
    '    <a href="activities.html" class="rn-drawer-link" data-page="activities.html">Activities</a>',
    '    <a href="announcements.html" class="rn-drawer-link" data-page="announcements.html">Announcements</a>',
    '  </nav>',

    '  <a href="contact.html" class="rn-drawer-cta" data-page="contact.html">Contact Us</a>',

    '</div>'
  ].join('\n');


  /* ═══════════════════════════════════════════════════════
     4. FOOTER HTML — Enterprise layout, pure CSS
     ═══════════════════════════════════════════════════════ */
  var FOOTER_HTML = [
    '<footer id="footer" role="contentinfo" aria-label="Site footer">',

    '  <!-- Main footer body -->',
    '  <div class="rk-ft-body">',
    '    <div class="rk-ft-container">',
    '      <div class="rk-ft-grid">',

    '        <!-- Column 1: Brand & Address -->',
    '        <div>',
    '          <a href="https://research.adamasuniversity.ac.in/" aria-label="Research — Adamas University home">',
    '            <img class="rk-ft-logo"',
    '                 src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/17141932/au-footer-logo.png"',
    '                 alt="Adamas University" loading="lazy" width="200" height="187">',
    '          </a>',
    '          <div class="rk-ft-address">',
    '            <div class="rk-ft-address-row">',
    '              <i class="fa-solid fa-location-dot rk-ft-icon" aria-hidden="true"></i>',
    '              <span>Barasat-Barrackpore Road, Barbaria, P.O Jagannathpur, District-24 Parganas (North), Kolkata-700&nbsp;126, West Bengal, India</span>',
    '            </div>',
    '            <div class="rk-ft-address-row">',
    '              <i class="fa-solid fa-phone rk-ft-icon" aria-hidden="true"></i>',
    '              <a href="tel:18004197423" class="rk-ft-phone-link">1800 419 7423</a>',
    '            </div>',
    '          </div>',
    '          <p class="rk-ft-copyright">&copy; 2021 Adamas University. All rights reserved.</p>',
    '        </div>',

    '        <!-- Column 2: Top Menu -->',
    '        <div>',
    '          <h2 class="ft-head">Top Menu</h2>',
    '          <div class="rk-ft-links">',
    '            <a href="https://research.adamasuniversity.ac.in/anveshan/" class="ft-link">News &amp; Events</a>',
    '            <a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/" class="ft-link">Career</a>',
    '            <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="ft-link">Central Instrumentation Facility</a>',
    '          </div>',
    '        </div>',

    '        <!-- Column 3: Research -->',
    '        <div>',
    '          <h2 class="ft-head">Research</h2>',
    '          <div class="rk-ft-links">',
    '            <a href="https://research.adamasuniversity.ac.in/published-research-papers/" class="ft-link">Publications</a>',
    '            <a href="https://research.adamasuniversity.ac.in/patents/" class="ft-link">Patents</a>',
    '            <a href="https://research.adamasuniversity.ac.in/extramural/" class="ft-link">Funded Projects</a>',
    '            <a href="https://research.adamasuniversity.ac.in/empaneled-supervisor/" class="ft-link">Ph.D. Program</a>',
    '            <a href="excellence.html" class="ft-link">Rekhi Centre</a>',
    '          </div>',
    '        </div>',

    '        <!-- Column 4: Important Links -->',
    '        <div>',
    '          <h2 class="ft-head">Important Links</h2>',
    '          <div class="rk-ft-links">',
    '            <a href="https://adamasuniversity.nopaperforms.com" class="ft-link">Apply for Admission</a>',
    '            <a href="https://adamasuniversity.ac.in/enquire-now/" class="ft-link">Enquire Now</a>',
    '            <a href="https://aulibrary.adamasuniversity.ac.in/" class="ft-link">Library</a>',
    '          </div>',
    '        </div>',

    '      </div>',
    '    </div>',
    '  </div>',

    '  <!-- Bottom bar -->',
    '  <div class="rk-ft-bottom">',
    '    <div class="rk-ft-bottom-inner">',
    '      <a href="https://research.adamasuniversity.ac.in/" aria-label="Research — Adamas University home">',
    '        <img class="rk-ft-bottom-logo"',
    '             src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/16141918/logo1.png"',
    '             alt="Adamas University" loading="lazy">',
    '      </a>',
    '      <nav class="rk-ft-bottom-nav" aria-label="Footer quick links">',
    '        <a href="https://research.adamasuniversity.ac.in/anveshan/" class="rk-ft-bottom-link">News &amp; Events</a>',
    '        <a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/" class="rk-ft-bottom-link">Career</a>',
    '        <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="rk-ft-bottom-link">Central Instrumentation Facility</a>',
    '      </nav>',
    '    </div>',
    '  </div>',

    '</footer>'
  ].join('\n');


  /* ═══════════════════════════════════════════════════════
     5. SCROLL-TO-TOP BUTTON
     ═══════════════════════════════════════════════════════ */
  var STT_HTML = '<a href="#" id="rk-scroll-top" class="rekhi-scroll-top" aria-label="Back to top" title="Back to top"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i></a>';


  /* ═══════════════════════════════════════════════════════
     6. DOM READY — inject & initialise
     ═══════════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {

    /* Body base styles */
    document.body.style.fontFamily   = "'Inter', system-ui, sans-serif";
    document.body.style.overflowX    = 'hidden';

    /* Inject header at the very top */
    document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);

    /* Adjust page margin to clear new nav (68px) */
    var page = document.getElementById('page');
    if (page) page.style.marginTop = '68px';

    /* Inject footer */
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

    /* Inject scroll-to-top */
    document.body.insertAdjacentHTML('beforeend', STT_HTML);

    /* ── Active link detection ── */
    var _pathname    = window.location.pathname;
    var _currentPage = _pathname.split('/').pop() || 'excellence.html';
    if (_currentPage === '') _currentPage = 'excellence.html';

    function markActive(selector) {
      document.querySelectorAll(selector + '[data-page]').forEach(function (link) {
        if (link.getAttribute('data-page') === _currentPage) {
          link.classList.add('rn-active');
        }
      });
    }
    markActive('.rn-link');
    markActive('.rn-drawer-link');

    /* Mark drawer CTA active if on contact page */
    var drawerCta = document.querySelector('.rn-drawer-cta');
    if (drawerCta && drawerCta.getAttribute('data-page') === _currentPage) {
      drawerCta.style.outline = '2px solid rgba(255,255,255,0.35)';
    }

    /* ── Hero modifier for excellence.html ── */
    if (_currentPage === 'excellence.html' || _currentPage === '') {
      var _hero = document.querySelector('.rekhi-hero');
      if (_hero) _hero.classList.add('rekhi-hero-home');
    }

    /* ── Nav scroll effect ── */
    var _nav = document.getElementById('rekhi-nav');
    if (_nav) {
      window.addEventListener('scroll', function () {
        _nav.classList.toggle('rn-scrolled', window.scrollY > 20);
      }, { passive: true });
    }

    /* ── Mobile drawer ── */
    var _overlay   = document.getElementById('rekhi-overlay');
    var _drawer    = document.getElementById('rekhi-drawer');
    var _hamburger = document.getElementById('rn-hamburger');
    var _closeBtn  = document.getElementById('rn-drawer-close');

    function openDrawer() {
      if (!_drawer || !_overlay) return;
      _drawer.classList.add('rn-open');
      _overlay.classList.add('rn-open');
      _overlay.setAttribute('aria-hidden', 'false');
      if (_hamburger) {
        _hamburger.setAttribute('aria-expanded', 'true');
        _hamburger.classList.add('rn-open');
      }
      document.body.style.overflow = 'hidden';
      if (_closeBtn) _closeBtn.focus();
    }

    function closeDrawer() {
      if (!_drawer || !_overlay) return;
      _drawer.classList.remove('rn-open');
      _overlay.classList.remove('rn-open');
      _overlay.setAttribute('aria-hidden', 'true');
      if (_hamburger) {
        _hamburger.setAttribute('aria-expanded', 'false');
        _hamburger.classList.remove('rn-open');
      }
      document.body.style.overflow = '';
      if (_hamburger) _hamburger.focus();
    }

    if (_hamburger) _hamburger.addEventListener('click', openDrawer);
    if (_closeBtn)  _closeBtn.addEventListener('click', closeDrawer);
    if (_overlay)   _overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    /* Close drawer when a drawer link is clicked */
    document.querySelectorAll('.rn-drawer-link, .rn-drawer-cta').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 992) closeDrawer();
      });
    });

    /* ── Scroll-to-top button ── */
    var _stt = document.getElementById('rk-scroll-top');
    if (_stt) {
      window.addEventListener('scroll', function () {
        _stt.classList.toggle('visible', window.scrollY > 300);
      }, { passive: true });
      _stt.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ── GSAP: load then initialise ── */
    loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
      function () {
        loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
          function () {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
            gsap.registerPlugin(ScrollTrigger);
            _initGSAP();
          }
        );
      }
    );

    /* ════════════════════════════════════════════════════
       GSAP ANIMATIONS
       ════════════════════════════════════════════════════ */
    function _initGSAP() {

      /* ── Nav slide-down entrance ── */
      gsap.from('#rekhi-nav', {
        y: -80,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      });

      /* ── Hero section entrance ── */
      var _heroLogo  = document.querySelector('.rekhi-hero-logo');
      var _heroTitle = document.querySelector('.rekhi-hero-title');
      var _heroSub   = document.querySelector('.rekhi-hero-sub');
      var _heroBadge = document.querySelector('.rekhi-hero-badge');

      if (_heroTitle) {
        var _heroTl = gsap.timeline({ delay: 0.25 });

        if (_heroLogo) {
          _heroTl.from(_heroLogo, {
            opacity: 0,
            x: -36,
            duration: 0.85,
            ease: 'power3.out'
          });
        }

        _heroTl.from(_heroTitle, {
          opacity: 0,
          y: 28,
          duration: 0.75,
          ease: 'power2.out'
        }, _heroLogo ? '-=0.55' : 0);

        if (_heroSub) {
          _heroTl.from(_heroSub, {
            opacity: 0,
            y: 18,
            duration: 0.65,
            ease: 'power2.out'
          }, '-=0.45');
        }

        if (_heroBadge) {
          _heroTl.from(_heroBadge, {
            opacity: 0,
            scale: 0.75,
            duration: 0.55,
            ease: 'back.out(1.7)'
          }, '-=0.35');
        }
      }

      /* ── Helper: ScrollTrigger reveal ── */
      function revealOnScroll(selector, vars) {
        gsap.utils.toArray(selector).forEach(function (el) {
          gsap.from(el, Object.assign({}, {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true
            }
          }, vars));
        });
      }

      /* ── Helper: stagger batch reveal ── */
      function staggerReveal(selector, vars, triggerSelector) {
        var els = gsap.utils.toArray(selector);
        if (!els.length) return;
        gsap.from(els, Object.assign({}, vars, {
          scrollTrigger: {
            trigger: triggerSelector || els[0],
            start: 'top 85%',
            once: true
          }
        }));
      }

      /* ── Section headings ── */
      revealOnScroll('.section-heading', {
        opacity: 0, y: 22,
        duration: 0.65, ease: 'power2.out'
      });

      /* ── About block ── */
      revealOnScroll('.about-block', {
        opacity: 0, y: 32,
        duration: 0.80, ease: 'power2.out'
      });

      /* ── Feature cards — staggered ── */
      staggerReveal('.feature-card', {
        opacity: 0, y: 36,
        stagger: 0.13, duration: 0.72, ease: 'power2.out'
      });

      /* ── Blue panels ── */
      revealOnScroll('.panel-blue', {
        opacity: 0, y: 28,
        duration: 0.80, ease: 'power2.out'
      });

      /* ── Person cards — individual triggers ── */
      gsap.utils.toArray('.person-card').forEach(function (card, i) {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.70,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true
          }
        });
      });

      /* ── Avatar cards — staggered ── */
      staggerReveal('.avatar-card', {
        opacity: 0, y: 24, scale: 0.96,
        stagger: 0.07, duration: 0.60, ease: 'power2.out'
      });

      /* ── Programme cards — staggered ── */
      staggerReveal('.prog-card', {
        opacity: 0, y: 28,
        stagger: 0.12, duration: 0.70, ease: 'power2.out'
      });

      /* ── Generic cards ── */
      revealOnScroll('.card', {
        opacity: 0, y: 22,
        duration: 0.60, ease: 'power2.out'
      });

      /* ── Engage items — slide from left ── */
      staggerReveal('.engage-item', {
        opacity: 0, x: -22,
        stagger: 0.09, duration: 0.55, ease: 'power2.out'
      });

      /* ── Photo grid images — scale in ── */
      gsap.utils.toArray('.photo-grid img').forEach(function (img, i) {
        gsap.from(img, {
          opacity: 0,
          scale: 0.94,
          duration: 0.80,
          delay: i * 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 88%',
            once: true
          }
        });
      });

      /* ── Announcements table ── */
      revealOnScroll('.announce-table', {
        opacity: 0, y: 24,
        duration: 0.70, ease: 'power2.out'
      });

      /* ── Contact cards ── */
      gsap.utils.toArray(
        '.contact-hero-card, .contact-person-card, .contact-addr-card'
      ).forEach(function (el, i) {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.60,
          delay: i * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true
          }
        });
      });

      /* ── Activity items — staggered list ── */
      staggerReveal('.activity-item', {
        opacity: 0, x: -16,
        stagger: 0.08, duration: 0.50, ease: 'power2.out'
      });

      /* ── Prog items inside cards ── */
      revealOnScroll('.prog-item', {
        opacity: 0, x: -12,
        duration: 0.45, ease: 'power2.out'
      });

      /* ── Footer columns fade in ── */
      gsap.utils.toArray('#footer .rk-ft-grid > div').forEach(function (col, i) {
        gsap.from(col, {
          opacity: 0,
          y: 20,
          duration: 0.65,
          delay: i * 0.10,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#footer',
            start: 'top 92%',
            once: true
          }
        });
      });

    } // end _initGSAP

  }); // end DOMContentLoaded

})();
