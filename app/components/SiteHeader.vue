<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<header class="hdr">
  <div class="wrap">
    <a class="brand" href="#top" aria-label="Vetted Worker by Elm, home">
      <svg class="elm" viewBox="0 0 137.338 54.141" style="color:#0C1D46" role="img" aria-label="Elm"><use href="#elm-logo"/></svg>
      <span class="sep" aria-hidden="true"></span>
      <span class="prod"><b>Vetted Worker</b><span data-i18n="brand_sub">Workforce verification</span></span>
    </a>
    <nav class="nav" aria-label="Sections">
      <a href="#how" data-i18n="nav_how">How it works</a>
      <a href="#report" data-i18n="nav_report">The report</a>
      <a href="#levels" data-i18n="nav_levels">Packages</a>
      <a href="#coverage" data-i18n="nav_cov">Data sources</a>
      <a href="#faq" data-i18n="nav_faq">Questions</a>
    </nav>
    <div class="hdr-actions">
      <button class="lang" id="langBtn" type="button" aria-label="Switch language to Arabic"><span class="ar" id="langLabel">العربية</span></button>
      <a class="btn" href="#pilot"><span data-i18n="cta_short">Start a free pilot</span></a>
    </div>
  </div>
</header>
</template>
