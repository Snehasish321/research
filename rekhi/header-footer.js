/*!
 * header-footer.js — Rekhi Centre of Excellence v2.0
 * ─────────────────────────────────────────────────────────
 * Injects:
 *   • Floating glassmorphic Rekhi-scoped navigation
 *   • Enterprise footer (pure CSS, no Tailwind)
 *   • Scroll-to-top button
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
    if (document.querySelector('link[href="' + href + '"]')) return;
    var el = document.createElement('link');
    el.rel  = rel;
    el.href = href;
    if (attrs) {
      Object.keys(attrs).forEach(function (k) { el[k] = attrs[k]; });
    }
    document.head.appendChild(el);
  }


  /* ═══════════════════════════════════════════════════════
     2. HEAD DEPENDENCIES (Fallback if not in HTML head)
     ═══════════════════════════════════════════════════════ */

  /* Favicon */
  addLink('icon', 'https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/17163552/cropped-au-footer-logo.png', { sizes: '32x32' });

  /* Google Fonts preconnect */
  addLink('preconnect', 'https://fonts.googleapis.com');
  if (!document.querySelector('link[href="https://fonts.gstatic.com"]')) {
    var _gc = document.createElement('link');
    _gc.rel = 'preconnect';
    _gc.href = 'https://fonts.gstatic.com';
    _gc.crossOrigin = 'anonymous';
    document.head.appendChild(_gc);
  }

  /* Inter + Cinzel typography */
  addLink('stylesheet',
    'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Cinzel:wght@600&display=swap'
  );

  /* Font Awesome 6 icons */
  addLink('stylesheet',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
  );

  /* Rekhi-specific stylesheet */
  addLink('stylesheet', 'styles.css');


  /* ═══════════════════════════════════════════════════════
     3. HEADER HTML — Rekhi Floating Navigation
     ═══════════════════════════════════════════════════════ */
  var HEADER_HTML = [
    '<!-- ── REKHI FLOATING NAV ── -->',
    '<nav id="rekhi-nav" role="navigation" aria-label="Rekhi Centre navigation">',
    '  <div class="rn-inner">',

    '    <!-- Brand -->',
    '    <a href="index.html" class="rn-brand" aria-label="Rekhi Centre of Excellence — Home">',
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
    '        <a href="index.html" class="rn-link" role="menuitem"',
    '           data-id="home">Home</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="our-team.html" class="rn-link" role="menuitem"',
    '           data-id="team">Our Team</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="activities.html#infrastructure" class="rn-link" role="menuitem"',
    '           data-id="infrastructure">Infrastructure and Lab</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="courses.html" class="rn-link" role="menuitem"',
    '           data-id="courses">Courses and Programs</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="activities.html#events" class="rn-link" role="menuitem"',
    '           data-id="activities">Activities</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="announcements.html" class="rn-link" role="menuitem"',
    '           data-id="announcements">Announcements</a>',
    '      </li>',
    '      <li role="none">',
    '        <a href="contact.html" class="rn-link rn-cta" role="menuitem"',
    '           data-id="contact">Contact Us</a>',
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
    '    <a href="index.html" class="rn-drawer-brand" tabindex="0">',
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
    '    <a href="index.html" class="rn-drawer-link" data-id="home">Home</a>',
    '    <a href="our-team.html"   class="rn-drawer-link" data-id="team">Our Team</a>',
    '    <a href="activities.html#infrastructure" class="rn-drawer-link" data-id="infrastructure">Infrastructure and Lab</a>',
    '    <a href="courses.html"    class="rn-drawer-link" data-id="courses">Courses and Programs</a>',
    '    <a href="activities.html#events" class="rn-drawer-link" data-id="activities">Activities</a>',
    '    <a href="announcements.html" class="rn-drawer-link" data-id="announcements">Announcements</a>',
    '  </nav>',

    '  <a href="contact.html" class="rn-drawer-cta" data-id="contact">Contact Us</a>',

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
    '            <a href="index.html" class="ft-link">Rekhi Centre</a>',
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
  function initHeaderFooter() {
    if (document.getElementById('rekhi-nav')) return;

    /* Inject header at the very top */
    if (document.body) {
      document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
      document.body.insertAdjacentHTML('beforeend', STT_HTML);
    }

    /* ── Active link detection ── */
    var _pathname    = window.location.pathname;
    var _currentPage = _pathname.split('/').pop() || 'index.html';
    if (_currentPage === '') _currentPage = 'index.html';

    function updateActiveLinks() {
      var hash = window.location.hash;
      var activeId = null;

      if (_currentPage === 'index.html' || _currentPage === '') {
        activeId = 'home';
      } else if (_currentPage === 'our-team.html') {
        activeId = 'team';
      } else if (_currentPage === 'courses.html') {
        activeId = 'courses';
      } else if (_currentPage === 'announcements.html') {
        activeId = 'announcements';
      } else if (_currentPage === 'contact.html') {
        activeId = 'contact';
      } else if (_currentPage === 'activities.html') {
        if (hash === '#infrastructure') {
          activeId = 'infrastructure';
        } else {
          activeId = 'activities';
        }
      }

      document.querySelectorAll('.rn-link, .rn-drawer-link, .rn-drawer-cta').forEach(function (link) {
        if (link.getAttribute('data-id') === activeId) {
          link.classList.add('rn-active');
        } else {
          link.classList.remove('rn-active');
        }
      });
    }

    updateActiveLinks();
    window.addEventListener('hashchange', updateActiveLinks);


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

  } // end initHeaderFooter

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderFooter);
  } else {
    initHeaderFooter();
  }

})();
