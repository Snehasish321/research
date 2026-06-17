/*!
 * header-footer.js — Rekhi Centre sub-pages
 * Injects the full modern header (top-bar + navbar + mobile drawer)
 * and footer into every rekhi/ page. All pages need only include:
 *   <script src="header-footer.js"></script>
 * in their <head>.
 */
(function () {

  /* ─────────────────────────────────────────────────────────────
     1. Inject external dependencies into <head>
     ───────────────────────────────────────────────────────────── */
  function addLink(rel, href, extra) {
    var el = document.createElement('link');
    el.rel = rel; el.href = href;
    if (extra) Object.assign(el, extra);
    document.head.appendChild(el);
  }
  function addScript(src) {
    var el = document.createElement('script');
    el.src = src; document.head.appendChild(el);
  }

  /* Favicon */
  addLink('icon', 'https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/17163552/cropped-au-footer-logo.png', { sizes: '32x32' });

  /* Google Fonts preconnect */
  addLink('preconnect', 'https://fonts.googleapis.com');
  var gc = document.createElement('link');
  gc.rel = 'preconnect'; gc.href = 'https://fonts.gstatic.com'; gc.crossOrigin = 'anonymous';
  document.head.appendChild(gc);

  /* Google Fonts */
  addLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@600&display=swap');

  /* Font Awesome 6 */
  addLink('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

  /* Tailwind CSS */
  var tw = document.createElement('script');
  tw.src = 'https://cdn.tailwindcss.com';
  document.head.appendChild(tw);

  /* Root stylesheet (navbar/footer CSS) — one level up */
  addLink('stylesheet', '../styles.css');

  /* Rekhi-specific stylesheet */
  addLink('stylesheet', 'styles.css');

  /* ─────────────────────────────────────────────────────────────
     2. Header HTML
     ───────────────────────────────────────────────────────────── */
  var HEADER_HTML = `
<!-- ── TOP BAR ── -->
<div id="top-bar" role="navigation" aria-label="Secondary navigation">
  <div class="top-bar-inner">
    <nav class="top-bar-links" aria-label="Top links">
      <a href="https://research.adamasuniversity.ac.in/anveshan/" class="top-bar-link">News &amp; Events <i class="fa-solid fa-chevron-down tb-arrow"></i></a>
      <a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/" class="top-bar-link">Career</a>
      <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="top-bar-link">Central Instrumentation Facility</a>
    </nav>
    <form role="search" method="get" action="https://research.adamasuniversity.ac.in/" class="top-bar-search">
      <label for="top-search" class="sr-only">Search</label>
      <i class="fa-solid fa-magnifying-glass" style="font-size:12px;"></i>
      <input id="top-search" type="text" name="s" placeholder="Search"
        class="bg-transparent border-none outline-none text-white placeholder-white/60 text-sm w-28 focus:w-40 transition-all duration-300" />
    </form>
  </div>
</div>

<!-- ── NAVBAR ── -->
<nav id="navbar" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="https://research.adamasuniversity.ac.in/" aria-label="Research — Adamas University home" class="shrink-0 flex items-center">
      <img class="h-11 w-auto" src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/20063958/logo_601.png" alt="Research – Adamas University" width="200" height="60" />
    </a>

    <ul id="nav-desktop" role="menubar" aria-label="Primary navigation">

      <!-- Research mega -->
      <li class="has-dropdown has-mega" role="none">
        <a href="https://research.adamasuniversity.ac.in/" class="nav-link nav-trigger" role="menuitem" aria-haspopup="true" aria-expanded="false">
          Research <i class="fa-solid fa-chevron-down chevron"></i>
        </a>
        <div class="mega-panel" role="region" aria-label="Research submenu">
          <div class="grid grid-cols-3 gap-8">
            <div>
              <div class="mega-col-title">Research</div>
              <a href="https://research.adamasuniversity.ac.in/policy/" class="mega-link">Policy</a>
              <a href="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2022/06/07052324/Policy-on-Promotion-of-Academic-Integrity-and-Prevention-of-Plagiarism.pdf" class="mega-link" target="_blank" rel="noopener">Code of Ethics for Research</a>
              <a href="#" class="mega-link">Collaboration</a>
              <a href="https://auaicoe.in/other-centres-of-excellence/" class="mega-link" target="_blank" rel="noopener">Centres of Excellence</a>
              <div class="mega-col-title mt-5">Engineering Depts.</div>
              <a href="https://engineering.adamasuniversity.ac.in/department-of-civil-engineering/" class="mega-link">Civil Engineering</a>
              <a href="https://engineering.adamasuniversity.ac.in/department-of-computer-science-and-engineering/" class="mega-link">Computer Science &amp; Engg.</a>
              <a href="https://engineering.adamasuniversity.ac.in/department-of-electrical-electronics-engineering/" class="mega-link">Electrical Engineering</a>
              <a href="#" class="mega-link">Electronics &amp; Comm. Engg.</a>
              <a href="https://engineering.adamasuniversity.ac.in/department-of-mechanical-engineering/" class="mega-link">Mechanical Engineering</a>
              <a href="#" class="mega-link">Biomedical Engineering</a>
            </div>
            <div>
              <div class="mega-col-title">Schools</div>
              <a href="https://science.adamasuniversity.ac.in/chemistry/" class="mega-link">School of Basic &amp; Applied Sciences (SOBAS)</a>
              <a href="https://business.adamasuniversity.ac.in/department-of-commerce/" class="mega-link">School of Business &amp; Economics (SOBE)</a>
              <a href="https://education.adamasuniversity.ac.in/department-of-education/" class="mega-link">School of Education (SOE)</a>
              <a href="https://engineering.adamasuniversity.ac.in/department-of-civil-engineering/" class="mega-link">School of Engineering &amp; Technology (SOET)</a>
              <a href="https://law.adamasuniversity.ac.in/department-of-law/" class="mega-link">School of Law &amp; Justice (SOLJ)</a>
              <a href="https://social-sciences.adamasuniversity.ac.in/bengali-language-and-literature/" class="mega-link">School of Liberal Arts &amp; Culture Studies (SOLACS)</a>
              <a href="https://biotechnology.adamasuniversity.ac.in/department-of-biotechnology/" class="mega-link">School of Life Science &amp; Biotechnology (SOLB)</a>
              <a href="https://media.adamasuniversity.ac.in/department-of-journalism-and-mass-communication/" class="mega-link">School of Media &amp; Communication (SOMC)</a>
              <a href="https://medical-studies.adamasuniversity.ac.in/department-of-pharmaceutical-technology/" class="mega-link">School of Medical Sciences</a>
              <a href="https://smart-agriculture.adamasuniversity.ac.in/agriculture/" class="mega-link">School of Smart Agriculture (SOSA)</a>
            </div>
            <div>
              <div class="mega-col-title">Science Departments</div>
              <a href="https://science.adamasuniversity.ac.in/chemistry/" class="mega-link">Chemistry</a>
              <a href="https://science.adamasuniversity.ac.in/environmental-science/" class="mega-link">Environmental Science</a>
              <a href="https://science.adamasuniversity.ac.in/department-of-forensic-science/" class="mega-link">Forensic Science</a>
              <a href="https://science.adamasuniversity.ac.in/geography/" class="mega-link">Geography</a>
              <a href="https://science.adamasuniversity.ac.in/mathematics/" class="mega-link">Mathematics</a>
              <a href="https://science.adamasuniversity.ac.in/physics/" class="mega-link">Physics</a>
              <div class="mega-col-title mt-5">Social Sciences</div>
              <a href="https://social-sciences.adamasuniversity.ac.in/bengali-language-and-literature/" class="mega-link">Bengali Language &amp; Literature</a>
              <a href="https://social-sciences.adamasuniversity.ac.in/department-of-english-language-and-literature/" class="mega-link">English Language &amp; Literature</a>
              <a href="https://social-sciences.adamasuniversity.ac.in/department-of-history/" class="mega-link">History</a>
              <a href="https://social-sciences.adamasuniversity.ac.in/department-of-political-science/" class="mega-link">Political Science</a>
              <a href="#" class="mega-link">Psychology</a>
              <a href="https://social-sciences.adamasuniversity.ac.in/department-of-sociology/" class="mega-link">Sociology</a>
              <a href="#" class="mega-link">Creative Arts &amp; Culture Studies</a>
            </div>
          </div>
        </div>
      </li>

      <!-- Infrastructure -->
      <li class="has-dropdown" role="none">
        <a href="#" class="nav-link nav-trigger" role="menuitem" aria-haspopup="true">Infrastructure <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown-panel align-left" role="region">
          <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="dd-item">Central Instrumentation Facility</a>
        </div>
      </li>

      <!-- Publication & Patent -->
      <li class="has-dropdown" role="none">
        <a href="#" class="nav-link nav-trigger" role="menuitem" aria-haspopup="true">Publication &amp; Patent <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown-panel align-left" style="min-width:240px;" role="region">
          <a href="https://research.adamasuniversity.ac.in/published-research-papers/" class="dd-item">Published Research Papers</a>
          <a href="https://research.adamasuniversity.ac.in/publications/" class="dd-item">Journals</a>
          <a href="https://research.adamasuniversity.ac.in/book/" class="dd-item">Books / Chapters</a>
          <a href="https://research.adamasuniversity.ac.in/patents/" class="dd-item">Patents</a>
          <div class="has-sub">
            <span class="dd-item cursor-default">Adamas Technical Review <i class="fa-solid fa-chevron-right dd-arrow"></i></span>
            <div class="sub-panel" role="region">
              <a href="https://research.adamasuniversity.ac.in/volume-2-issue-2/" class="dd-item">Volume 2 Issue 2</a>
              <a href="https://research.adamasuniversity.ac.in/volume-2-issue-1/" class="dd-item">Volume 2 Issue 1</a>
            </div>
          </div>
        </div>
      </li>

      <!-- Funded Projects -->
      <li class="has-dropdown" role="none">
        <a href="#" class="nav-link nav-trigger" role="menuitem" aria-haspopup="true">Funded Projects <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown-panel align-left" role="region">
          <a href="https://research.adamasuniversity.ac.in/extramural/" class="dd-item">Extramural</a>
        </div>
      </li>

      <!-- Research Program -->
      <li class="has-dropdown" role="none">
        <a href="#" class="nav-link nav-trigger" role="menuitem" aria-haspopup="true">Research Program <i class="fa-solid fa-chevron-down chevron"></i></a>
        <div class="dropdown-panel align-left" style="min-width:270px;" role="region">
          <div class="has-sub">
            <span class="dd-item cursor-default">Ph.D. Program <i class="fa-solid fa-chevron-right dd-arrow"></i></span>
            <div class="sub-panel" role="region">
              <a href="https://research.adamasuniversity.ac.in/empaneled-supervisor/" class="dd-item">Empaneled Supervisor</a>
              <a href="https://research.adamasuniversity.ac.in/phd-active-students-list-2015-2024/" class="dd-item">Ph.D Enrolled Scholars</a>
              <a href="https://research.adamasuniversity.ac.in/ph-d-award-letters/" class="dd-item">Ph.D. Award Letters</a>
              <a href="https://research.adamasuniversity.ac.in/ph-d-regulations/" class="dd-item">Ph.D Regulation</a>
              <a href="https://research.adamasuniversity.ac.in/phd-notification/" class="dd-item">Ph.D. Notification</a>
            </div>
          </div>
          <div class="has-sub">
            <span class="dd-item cursor-default">Postdoctoral Program (by Research) <i class="fa-solid fa-chevron-right dd-arrow"></i></span>
            <div class="sub-panel" role="region">
              <a href="https://research.adamasuniversity.ac.in/regulations/" class="dd-item">Regulations</a>
              <a href="#" class="dd-item">Award Letters</a>
              <a href="https://research.adamasuniversity.ac.in/notification/" class="dd-item">Notification</a>
            </div>
          </div>
        </div>
      </li>

      <!-- Research Center (active — all rekhi pages) -->
      <li class="has-dropdown" role="none">
        <a href="#" class="nav-link nav-trigger nav-active" role="menuitem" aria-haspopup="true" aria-current="page">
          Research Center <i class="fa-solid fa-chevron-down chevron"></i>
        </a>
        <div class="dropdown-panel align-right" style="min-width:290px;" role="region">
          <div class="has-sub">
            <span class="dd-item cursor-default">Centre for Incubation <i class="fa-solid fa-chevron-right dd-arrow"></i></span>
            <div class="sub-panel left-side" role="region">
              <a href="https://research.adamasuniversity.ac.in/innosprout-private-ltd/" class="dd-item">INNOSPROUT PRIVATE LTD</a>
            </div>
          </div>
          <div class="has-sub">
            <span class="dd-item cursor-default">Centre for Research &amp; Innovation (CRI) <i class="fa-solid fa-chevron-right dd-arrow"></i></span>
            <div class="sub-panel left-side" style="min-width:300px;" role="region">
              <a href="#" class="dd-item">Centre for High-End Computing and Research</a>
              <a href="https://research.adamasuniversity.ac.in/maharshi-krishna-deb/" class="dd-item">Subhash Mukhopadhyay Centre for Stem Cell Biology</a>
              <a href="https://research.adamasuniversity.ac.in/dr-debarun-roy-roy-lab/" class="dd-item">Dr. Debarun Roy (Roy Lab)</a>
              <a href="https://research.adamasuniversity.ac.in/msc-in-clinical-embryology/" class="dd-item">MSc in Clinical Embryology</a>
              <a href="#" class="dd-item">Centre for Research in Business Analytics</a>
              <a href="#" class="dd-item">Centre for Education, Research and Development</a>
              <a href="#" class="dd-item">Centre for Material Research</a>
              <a href="#" class="dd-item">Centre for Water and Air Analysis</a>
            </div>
          </div>
          <a href="#" class="dd-item">Intellectual Property Right Cell</a>
          <a href="#" class="dd-item">Outreach and Consultancy Cell</a>
          <div class="has-sub">
            <span class="dd-item cursor-default">AIU Academic Administrative Dev. Centre <i class="fa-solid fa-chevron-right dd-arrow"></i></span>
            <div class="sub-panel left-side" role="region">
              <a href="https://research.adamasuniversity.ac.in/aadc/" class="dd-item">AADC</a>
            </div>
          </div>
          <a href="#" class="dd-item">Centre for Study of Contemporary Theory and Research</a>
          <a href="#" class="dd-item">Centre of Excellence on Agro-Technology and Rural Dev.</a>
          <a href="excellence.html" class="dd-item dd-item-active">Rekhi Centre of Excellence for the Science of Happiness</a>
        </div>
      </li>

    </ul><!-- /nav-desktop -->

    <div class="flex items-center gap-3 shrink-0">
      <button id="mob-toggle" class="nav-link flex lg:hidden items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Open navigation menu" aria-expanded="false" aria-controls="mob-drawer">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>
  </div>
</nav>

<!-- ── MOBILE DRAWER ── -->
<div id="mob-overlay" aria-hidden="true"></div>
<div id="mob-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
  <div class="flex items-center justify-between p-4 bg-[#005aab]">
    <a href="https://research.adamasuniversity.ac.in/" tabindex="0">
      <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/16141918/logo1.png" alt="Adamas University" class="h-10 w-auto" />
    </a>
    <button id="drawer-close" class="text-white/80 hover:text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" aria-label="Close navigation menu">
      <i class="fa-solid fa-xmark text-xl"></i>
    </button>
  </div>
  <div class="p-4 border-b border-gray-100">
    <form role="search" method="get" action="https://research.adamasuniversity.ac.in/" class="flex border border-gray-200 rounded-lg overflow-hidden">
      <label for="mob-search" class="sr-only">Search</label>
      <input id="mob-search" type="text" name="s" placeholder="Search…" class="flex-1 px-4 py-2 text-sm outline-none" />
      <button type="submit" class="px-4 py-2 bg-[#005aab] text-white" aria-label="Submit search"><i class="fa-solid fa-magnifying-glass text-sm"></i></button>
    </form>
  </div>
  <nav aria-label="Mobile navigation">
    <button class="mob-acc-btn" data-acc="m-research" aria-expanded="false">Research <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
    <div class="mob-acc-panel" id="m-research">
      <a href="https://research.adamasuniversity.ac.in/policy/" class="mob-link">Policy</a>
      <a href="#" class="mob-link">Collaboration</a>
      <a href="https://auaicoe.in/other-centres-of-excellence/" class="mob-link" target="_blank" rel="noopener">Centres of Excellence</a>
    </div>
    <button class="mob-acc-btn" data-acc="m-infra" aria-expanded="false">Infrastructure <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
    <div class="mob-acc-panel" id="m-infra">
      <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="mob-link">Central Instrumentation Facility</a>
    </div>
    <button class="mob-acc-btn" data-acc="m-pub" aria-expanded="false">Publication &amp; Patent <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
    <div class="mob-acc-panel" id="m-pub">
      <a href="https://research.adamasuniversity.ac.in/published-research-papers/" class="mob-link">Published Research Papers</a>
      <a href="https://research.adamasuniversity.ac.in/publications/" class="mob-link">Journals</a>
      <a href="https://research.adamasuniversity.ac.in/book/" class="mob-link">Books / Chapters</a>
      <a href="https://research.adamasuniversity.ac.in/patents/" class="mob-link">Patents</a>
    </div>
    <button class="mob-acc-btn" data-acc="m-funded" aria-expanded="false">Funded Projects <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
    <div class="mob-acc-panel" id="m-funded">
      <a href="https://research.adamasuniversity.ac.in/extramural/" class="mob-link">Extramural</a>
    </div>
    <button class="mob-acc-btn" data-acc="m-prog" aria-expanded="false">Research Program <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
    <div class="mob-acc-panel" id="m-prog">
      <div class="mob-link section-head">Ph.D. Program</div>
      <a href="https://research.adamasuniversity.ac.in/empaneled-supervisor/" class="mob-link l2">Empaneled Supervisor</a>
      <a href="https://research.adamasuniversity.ac.in/phd-active-students-list-2015-2024/" class="mob-link l2">Ph.D Enrolled Scholars</a>
      <a href="https://research.adamasuniversity.ac.in/ph-d-award-letters/" class="mob-link l2">Ph.D. Award Letters</a>
      <a href="https://research.adamasuniversity.ac.in/ph-d-regulations/" class="mob-link l2">Ph.D Regulation</a>
      <a href="https://research.adamasuniversity.ac.in/phd-notification/" class="mob-link l2">Ph.D. Notification</a>
    </div>
    <button class="mob-acc-btn mob-acc-btn--active" data-acc="m-center" aria-expanded="false">Research Center <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
    <div class="mob-acc-panel" id="m-center">
      <a href="https://incubation.adamasuniversity.ac.in" class="mob-link">Centre for Incubation</a>
      <a href="#" class="mob-link">Centre for Research &amp; Innovation (CRI)</a>
      <a href="#" class="mob-link">Intellectual Property Right Cell</a>
      <a href="#" class="mob-link">Outreach and Consultancy Cell</a>
      <a href="https://research.adamasuniversity.ac.in/aadc/" class="mob-link">AIU Academic Administrative Dev. Centre (AADC)</a>
      <a href="#" class="mob-link">Centre for Study of Contemporary Theory and Research</a>
      <a href="#" class="mob-link">Centre of Excellence on Agro-Technology and Rural Development</a>
      <a href="excellence.html" class="mob-link mob-link-active">Rekhi Centre of Excellence for the Science of Happiness</a>
    </div>
    <div class="border-t border-gray-200 mt-1">
      <button class="mob-acc-btn" data-acc="m-news" aria-expanded="false">News &amp; Events <i class="fa-solid fa-chevron-down mob-acc-icon"></i></button>
      <div class="mob-acc-panel" id="m-news">
        <a href="https://research.adamasuniversity.ac.in/anveshan/" class="mob-link">Anveshan</a>
        <a href="https://research.adamasuniversity.ac.in/circular-and-notifications/" class="mob-link">Circular and Notifications</a>
        <a href="https://research.adamasuniversity.ac.in/seminars-webinar-fdp/" class="mob-link">Seminars / Webinar / FDP</a>
      </div>
      <a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/" class="mob-acc-btn" style="text-decoration:none;">Career</a>
      <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="mob-acc-btn" style="text-decoration:none;">Central Instrumentation Facility</a>
    </div>
  </nav>
  <div class="p-5 mt-2 border-t border-gray-100 flex flex-col gap-3">
    <a href="https://adamasuniversity.nopaperforms.com" class="block w-full text-center bg-[#005aab] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#003d73] transition-colors">Apply for Admission</a>
    <a href="https://adamasuniversity.ac.in/enquire-now/" class="block w-full text-center border border-[#005aab] text-[#005aab] font-semibold text-sm py-3 rounded-xl hover:bg-[#f0f7ff] transition-colors">Enquire Now</a>
  </div>
</div>`;

  /* ─────────────────────────────────────────────────────────────
     3. Footer HTML
     ───────────────────────────────────────────────────────────── */
  var FOOTER_HTML = `
<footer id="footer" role="contentinfo" aria-label="Site footer">
  <div class="py-16">
    <div class="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Col 1 -->
      <div>
        <a href="https://research.adamasuniversity.ac.in/" aria-label="Home">
          <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/17141932/au-footer-logo.png"
               alt="Adamas University" class="h-[72px] w-auto mb-6" loading="lazy" width="200" height="187" />
        </a>
        <div class="space-y-3 text-sm text-white/65 leading-relaxed">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-location-dot mt-0.5 text-[#1f7ae0] shrink-0 text-base"></i>
            <span>Barasat-Barrackpore Road, Barbaria, P.O Jagannathpur, District-24 Parganas (North), Kolkata-700 126, West Bengal, India</span>
          </div>
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-phone text-[#1f7ae0] shrink-0 text-base"></i>
            <a href="tel:18004197423" class="hover:text-white transition-colors">1800 419 7423</a>
          </div>
        </div>
        <p class="text-white/30 text-xs mt-6">&copy; 2021 Adamas University. All rights reserved.</p>
      </div>
      <!-- Col 2 -->
      <div>
        <h2 class="ft-head">Top Menu</h2>
        <div class="flex flex-col">
          <a href="https://research.adamasuniversity.ac.in/anveshan/" class="ft-link">News &amp; Events</a>
          <a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/" class="ft-link">Career</a>
          <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="ft-link">Central Instrumentation Facility</a>
        </div>
      </div>
      <!-- Col 3 -->
      <div>
        <h2 class="ft-head">Research</h2>
        <div class="flex flex-col">
          <a href="https://research.adamasuniversity.ac.in/published-research-papers/" class="ft-link">Publications</a>
          <a href="https://research.adamasuniversity.ac.in/patents/" class="ft-link">Patents</a>
          <a href="https://research.adamasuniversity.ac.in/extramural/" class="ft-link">Funded Projects</a>
          <a href="https://research.adamasuniversity.ac.in/empaneled-supervisor/" class="ft-link">Ph.D. Program</a>
          <a href="excellence.html" class="ft-link">Rekhi Centre</a>
        </div>
      </div>
      <!-- Col 4 -->
      <div>
        <h2 class="ft-head">Important Links</h2>
        <div class="flex flex-col">
          <a href="https://adamasuniversity.nopaperforms.com" class="ft-link">Apply for Admission</a>
          <a href="https://adamasuniversity.ac.in/enquire-now/" class="ft-link">Enquire Now</a>
          <a href="https://aulibrary.adamasuniversity.ac.in/" class="ft-link">Library</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Bottom bar -->
  <div class="border-t border-white/10 py-5">
    <div class="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="https://research.adamasuniversity.ac.in/" aria-label="Home">
        <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/16141918/logo1.png"
             alt="Adamas University" class="h-10 w-auto" loading="lazy" />
      </a>
      <div class="flex gap-6 text-sm text-white/50">
        <a href="https://research.adamasuniversity.ac.in/anveshan/" class="hover:text-white transition-colors">News &amp; Events</a>
        <a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/" class="hover:text-white transition-colors">Career</a>
        <a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/" class="hover:text-white transition-colors">Central Instrumentation Facility</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ─────────────────────────────────────────────────────────────
     4. Inject on DOM ready
     ───────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Set body font & overflow */
    document.body.style.fontFamily = "'Inter', system-ui, sans-serif";
    document.body.style.overflowX  = 'hidden';

    /* Inject header before first child of <body> */
    document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);

    /* Push page content down so it clears fixed top-bar(38px)+navbar(64px) */
    var page = document.getElementById('page');
    if (page) { page.style.marginTop = '102px'; }

    /* Inject footer at end of <body> */
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

    /* ── Navbar scroll shadow ── */
    var navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
      }, { passive: true });
    }

    /* ── Mobile Drawer ── */
    var overlay   = document.getElementById('mob-overlay');
    var drawer    = document.getElementById('mob-drawer');
    var toggleBtn = document.getElementById('mob-toggle');
    var closeBtn  = document.getElementById('drawer-close');

    function openDrawer() {
      if (!drawer || !overlay || !toggleBtn) return;
      drawer.classList.add('open');
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }
    function closeDrawer() {
      if (!drawer || !overlay || !toggleBtn) return;
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn)  closeBtn.addEventListener('click', closeDrawer);
    if (overlay)   overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

    /* ── Mobile Accordion ── */
    document.querySelectorAll('.mob-acc-btn[data-acc]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-acc');
        var panel    = document.getElementById(targetId);
        if (!panel) return;
        var isOpen   = panel.classList.contains('open');
        document.querySelectorAll('.mob-acc-panel').forEach(function (p) { p.classList.remove('open'); });
        document.querySelectorAll('.mob-acc-btn[data-acc]').forEach(function (b) {
          b.classList.remove('open');
          b.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          panel.classList.add('open');
          btn.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

  });

})();
