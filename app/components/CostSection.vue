<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<section class="sec calc" id="cost" aria-labelledby="calc-h">
  <div class="wrap">
    <div class="calc-in rv">
      <span class="eyebrow" data-i18n="calc_eb">The cost of a failed placement</span>
      <h2 id="calc-h" data-i18n="calc_h">Run your own numbers.</h2>
      <p class="calc-p" data-i18n="calc_p">A failed placement means paying the fee, visa and flights twice. Enter your figures.</p>
      <div class="calc-f">
        <label for="cHires" data-i18n="calc_l1">Overseas hires per year</label><input id="cHires" type="number" min="0" step="10" value="200" inputmode="numeric">
        <label for="cCost" data-i18n="calc_l2">Cost per hire (SAR)</label><input id="cCost" type="number" min="0" step="500" value="15000" inputmode="numeric">
        <label for="cFail" data-i18n="calc_l3">Placements that fail (%)</label><input id="cFail" type="number" min="0" max="100" step="1" value="5" inputmode="numeric">
      </div>
      <p class="calc-note" data-i18n="calc_note">Example figures. Enter your own.</p>
    </div>
    <div class="calc-out rv" aria-live="polite">
      <span class="k" data-i18n="calc_rk">What wrong hires cost you a year</span>
      <b class="big num" id="cTotal">SAR 150,000</b>
      <span class="sub num" id="cSub">10 failed placements × SAR 15,000</span>
      <div class="hexgrid" id="cGrid" aria-hidden="true"></div>
      <span class="cap" id="cCap">Out of every 100 hires, 5 fail</span>
      <p data-i18n="calc_rp">We check before you spend. A free pilot shows what we would have caught.</p>
      <a class="btn light" href="#pilot"><span data-i18n="calc_cta">Test it on my next intake</span><svg class="arrow" aria-hidden="true"><use href="#arrow"/></svg></a>
    </div>
  </div>
</section>
</template>
