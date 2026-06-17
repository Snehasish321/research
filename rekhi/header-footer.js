/* ===================================================================
   header-footer.js  —  Rekhi Centre sub-pages
   Injects the full original Adamas University header + footer HTML
   so every page looks exactly like the live research portal.
   =================================================================== */

(function () {

  /* ---- HEADER HTML ---- */
  var HEADER_HTML = `
<div class="masthead inline-header right widgets full-height full-width shadow-decoration small-mobile-menu-icon dt-parent-menu-clickable show-mobile-logo" role="banner">
  <div class="top-bar full-width-line top-bar-line-hide">
    <div class="top-bar-bg"></div>
    <div class="left-widgets mini-widgets">
      <div class="mini-nav show-on-desktop in-top-bar-left in-menu-second-switch list-type-menu list-type-menu-first-switch list-type-menu-second-switch">
        <ul id="top-menu">
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-469 first has-children">
            <a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">News &amp; Events</span></span></a>
            <ul class="mini-sub-nav">
              <li class="menu-item first"><a href='https://research.adamasuniversity.ac.in/anveshan/' data-level='2'><span class="menu-item-text"><span class="menu-text">Anveshan</span></span></a></li>
              <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/circular-and-notifications/' data-level='2'><span class="menu-item-text"><span class="menu-text">Circular and Notifications</span></span></a></li>
              <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/seminars-webinar-fdp/' data-level='2'><span class="menu-item-text"><span class="menu-text">Seminars/Webinar/FDP</span></span></a></li>
            </ul>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-356">
            <a href='https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/' data-level='1'><span class="menu-item-text"><span class="menu-text">Career</span></span></a>
          </li>
          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2196">
            <a href='https://research.adamasuniversity.ac.in/central-instrumentation-facility/' data-level='1'><span class="menu-item-text"><span class="menu-text">Central Instrumentation Facility</span></span></a>
          </li>
        </ul>
        <div class="menu-select"><span class="customSelect1"><span class="customSelectInner"><i class=" the7-mw-icon-dropdown-menu-bold"></i>top-menu</span></span></div>
      </div>
    </div>
    <div class="right-widgets mini-widgets">
      <div class="mini-search show-on-desktop near-logo-first-switch near-logo-second-switch popup-search custom-icon">
        <form class="searchform mini-widget-searchform" role="search" method="get" action="https://research.adamasuniversity.ac.in/">
          <label for="the7-micro-widget-search" class="screen-reader-text">Search:</label>
          <a href="#go" class="submit"><i class=" mw-icon the7-mw-icon-search-bold"></i><span>Search</span></a>
          <div class="popup-search-wrap">
            <input type="text" id="the7-micro-widget-search" class="field searchform-s" name="s" value="" placeholder="Type and hit enter …"/>
            <a href="#go" class="search-icon"><i class="the7-mw-icon-search"></i></a>
          </div>
          <input type="submit" class="assistive-text searchsubmit" value="Go!"/>
        </form>
      </div>
    </div>
  </div>

  <header class="header-bar">
    <div class="branding">
      <div id="site-title" class="assistive-text">Research &ndash; Adamas University </div>
      <div id="site-description" class="assistive-text">Just another Network site</div>
      <a class="" href="https://research.adamasuniversity.ac.in/">
        <img class=" preload-me" src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/20063958/logo_601.png" srcset="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/20063958/logo_601.png 200w" width="200" height="60" sizes="200px" alt="Research - Adamas University " />
        <img class="mobile-logo preload-me" src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/16141918/logo1.png" width="200" height="70" sizes="200px" alt="Research - Adamas University " />
      </a>
    </div>

    <ul id="primary-menu" class="main-nav underline-decoration l-to-r-line outside-item-remove-margin" role="navigation">
      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-33 first has-children">
        <a href='https://research.adamasuniversity.ac.in/' data-level='1'><span class="menu-item-text"><span class="menu-text">Research</span></span></a>
      </li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-456 has-children">
        <a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Infrastructure</span></span></a>
        <ul class="sub-nav hover-style-bg level-arrows-on">
          <li class="menu-item first"><a href='https://research.adamasuniversity.ac.in/central-instrumentation-facility/' data-level='2'><span class="menu-item-text"><span class="menu-text">Central Instrumentation Facility</span></span></a></li>
        </ul>
      </li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44 has-children">
        <a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Publication &amp; Patent</span></span></a>
        <ul class="sub-nav hover-style-bg level-arrows-on">
          <li class="menu-item first"><a href='https://research.adamasuniversity.ac.in/published-research-papers/' data-level='2'><span class="menu-item-text"><span class="menu-text">Published Research Papers</span></span></a></li>
          <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/publications/' data-level='2'><span class="menu-item-text"><span class="menu-text">Journals</span></span></a></li>
          <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/book/' data-level='2'><span class="menu-item-text"><span class="menu-text">Books/Chapters</span></span></a></li>
          <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/patents/' data-level='2'><span class="menu-item-text"><span class="menu-text">Patents</span></span></a></li>
        </ul>
      </li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-46 has-children">
        <a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Funded Projects</span></span></a>
        <ul class="sub-nav hover-style-bg level-arrows-on">
          <li class="menu-item first"><a href='https://research.adamasuniversity.ac.in/extramural/' data-level='2'><span class="menu-item-text"><span class="menu-text">Extramural</span></span></a></li>
        </ul>
      </li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-50 has-children">
        <a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Research Program</span></span></a>
        <ul class="sub-nav hover-style-bg level-arrows-on">
          <li class="menu-item first"><a href='https://research.adamasuniversity.ac.in/empaneled-supervisor/' data-level='2'><span class="menu-item-text"><span class="menu-text">Ph.D. Program</span></span></a></li>
        </ul>
      </li>
      <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-37 act has-children">
        <a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Research Center</span></span></a>
        <ul class="sub-nav hover-style-bg level-arrows-on">
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-42 first">
            <a href='https://incubation.adamasuniversity.ac.in' data-level='2'><span class="menu-item-text"><span class="menu-text">Centre for Incubation</span></span></a>
          </li>
          <li class="menu-item">
            <a href='#' data-level='2'><span class="menu-item-text"><span class="menu-text">Centre for Research &amp; Innovation (CRI)</span></span></a>
          </li>
          <li class="menu-item">
            <a href='#' data-level='2'><span class="menu-item-text"><span class="menu-text">Intellectual Property Right Cell</span></span></a>
          </li>
          <li class="menu-item">
            <a href='#' data-level='2'><span class="menu-item-text"><span class="menu-text">Outreach and Consultancy Cell</span></span></a>
          </li>
          <li class="menu-item">
            <a href='https://research.adamasuniversity.ac.in/aadc/' data-level='2'><span class="menu-item-text"><span class="menu-text">AIU Academic Administrative Development Centre</span></span></a>
          </li>
          <li class="menu-item">
            <a href='#' data-level='2'><span class="menu-item-text"><span class="menu-text">Centre for Study of Contemporary Theory and Research</span></span></a>
          </li>
          <li class="menu-item">
            <a href='#' data-level='2'><span class="menu-item-text"><span class="menu-text">Centre of Excellence on Agro- Technology and Rural Development</span></span></a>
          </li>
          <li class="menu-item menu-item-type-post_type page_item page-item-2318 current_page_item menu-item-2365 act">
            <a href='https://research.adamasuniversity.ac.in/rekhi-centre-of-excellence-for-the-science-of-happiness/' data-level='2'><span class="menu-item-text"><span class="menu-text">Rekhi Centre of Excellence for the Science of Happiness</span></span></a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</div>
<div class='dt-close-mobile-menu-icon'><span></span></div>
<div class='dt-mobile-header'>
  <ul id="mobile-menu" class="mobile-main-nav" role="navigation">
    <li class="menu-item first has-children"><a href='https://research.adamasuniversity.ac.in/' data-level='1'><span class="menu-item-text"><span class="menu-text">Research</span></span></a></li>
    <li class="menu-item has-children"><a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Infrastructure</span></span></a></li>
    <li class="menu-item has-children"><a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Publication &amp; Patent</span></span></a></li>
    <li class="menu-item has-children"><a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Funded Projects</span></span></a></li>
    <li class="menu-item has-children"><a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Research Program</span></span></a></li>
    <li class="menu-item act has-children"><a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">Research Center</span></span></a>
      <ul class="sub-nav">
        <li class="menu-item act"><a href='https://research.adamasuniversity.ac.in/rekhi-centre-of-excellence-for-the-science-of-happiness/' data-level='2'><span class="menu-item-text"><span class="menu-text">Rekhi Centre of Excellence for the Science of Happiness</span></span></a></li>
      </ul>
    </li>
  </ul>
</div>`;

  /* ---- FOOTER HTML ---- */
  var FOOTER_HTML = `
<!-- !Footer -->
<footer id="footer" class="footer solid-bg">
  <div class="wf-wrap">
    <div class="wf-container-footer">
      <div class="wf-container">
        <section id="text-3" class="widget widget_text wf-cell wf-1-4">
          <div class="textwidget">
            <p><img loading="lazy" decoding="async" src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/17141932/au-footer-logo.png" alt="" width="200" height="187" /></p>
          </div>
        </section>
        <section id="text-2" class="widget widget_text wf-cell wf-1-4">
          <div class="widget-title">Adamas University</div>
          <div class="textwidget">
            <ul>
              <li class="address" style="color:white"><i class="fa fa-fw fa-map-marker" aria-hidden="true"></i><b>Address: </b> Barasat-Barrackpore Road, Barbaria, P.O Jagannathpur, District-24 Parganas (North), Kolkata-700 126, West Bengal, India</li>
              <li class="phone-number" style="color:white"><i class="fa fa-phone" aria-hidden="true"></i> <b>Phone No: </b>1800 419 7423</li>
              <li style="color:white">© 2021 Adamas University. All rights reserved.</li>
            </ul>
          </div>
        </section>
        <section class="widget widget_presscore-custom-menu-two wf-cell wf-1-4">
          <div class="widget-title">Top Menu</div>
          <ul class="custom-nav">
            <li class="menu-item first has-children"><a href="#"><span>News &amp; Events</span></a>
              <ul class="custom-menu">
                <li class="menu-item first"><a href="https://research.adamasuniversity.ac.in/anveshan/"><span>Anveshan</span></a></li>
                <li class="menu-item"><a href="https://research.adamasuniversity.ac.in/circular-and-notifications/"><span>Circular and Notifications</span></a></li>
                <li class="menu-item"><a href="https://research.adamasuniversity.ac.in/seminars-webinar-fdp/"><span>Seminars/Webinar/FDP</span></a></li>
              </ul>
            </li>
            <li class="menu-item"><a href="https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/"><span>Career</span></a></li>
            <li class="menu-item"><a href="https://research.adamasuniversity.ac.in/central-instrumentation-facility/"><span>Central Instrumentation Facility</span></a></li>
          </ul>
        </section>
        <section class="widget widget_custom_html wf-cell wf-1-4">
          <div class="widget-title">Important Links</div>
          <div class="textwidget custom-html-widget">
            <ul class="link">
              <li><a href="https://adamasuniversity.nopaperforms.com"> Apply for Admission</a></li>
              <li><a href="https://adamasuniversity.ac.in/enquire-now/">Enquire Now</a></li>
              <li><a href="https://aulibrary.adamasuniversity.ac.in/">Library</a></li>
            </ul>
          </div>
        </section>
      </div><!-- .wf-container -->
    </div><!-- .wf-container-footer -->
  </div><!-- .wf-wrap -->

  <!-- !Bottom-bar -->
  <div id="bottom-bar" class="logo-left" role="contentinfo">
    <div class="wf-wrap">
      <div class="wf-container-bottom">
        <div id="branding-bottom">
          <a class="" href="https://research.adamasuniversity.ac.in/">
            <img class=" preload-me" src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/45/2021/05/16141918/logo1.png" width="200" height="70" sizes="200px" alt="Research - Adamas University " />
          </a>
        </div>
        <div class="wf-float-right">
          <div class="mini-nav">
            <ul id="bottom-menu">
              <li class="menu-item first has-children"><a href='#' data-level='1'><span class="menu-item-text"><span class="menu-text">News &amp; Events</span></span></a>
                <ul class="footer-sub-nav hover-style-bg level-arrows-on">
                  <li class="menu-item first"><a href='https://research.adamasuniversity.ac.in/anveshan/' data-level='2'><span class="menu-item-text"><span class="menu-text">Anveshan</span></span></a></li>
                  <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/circular-and-notifications/' data-level='2'><span class="menu-item-text"><span class="menu-text">Circular and Notifications</span></span></a></li>
                  <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/seminars-webinar-fdp/' data-level='2'><span class="menu-item-text"><span class="menu-text">Seminars/Webinar/FDP</span></span></a></li>
                </ul>
              </li>
              <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/advertisement-for-recruitment-through-re-entry-fellowships/' data-level='1'><span class="menu-item-text"><span class="menu-text">Career</span></span></a></li>
              <li class="menu-item"><a href='https://research.adamasuniversity.ac.in/central-instrumentation-facility/' data-level='1'><span class="menu-item-text"><span class="menu-text">Central Instrumentation Facility</span></span></a></li>
            </ul>
            <div class="menu-select"><span class="customSelect1"><span class="customSelectInner">top-menu</span></span></div>
          </div>
        </div>
      </div><!-- .wf-container-bottom -->
    </div><!-- .wf-wrap -->
  </div><!-- #bottom-bar -->
</footer><!-- #footer -->
<a href="#" class="scroll-top"><span class="screen-reader-text">Go to Top</span></a>`;

  /* ---- INJECT ---- */
  document.addEventListener('DOMContentLoaded', function () {

    // 1. Insert header before #rekhi-page-start sentinel
    var pageDiv = document.getElementById('page');
    if (pageDiv) {
      pageDiv.insertAdjacentHTML('afterbegin', HEADER_HTML);
    }

    // 2. Insert footer before closing #page div
    var footerTarget = document.getElementById('rekhi-footer-target');
    if (footerTarget) {
      footerTarget.insertAdjacentHTML('beforebegin', FOOTER_HTML);
    }

    // 3. Re-init the7 navigation after injection
    if (typeof window.dtLocal !== 'undefined' && window.jQuery) {
      // Let the7 main.min.js handle the menu init via its own DOMContentLoaded
    }
  });

})();
