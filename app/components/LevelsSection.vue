<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<section class="sec mist" id="levels" aria-labelledby="lv-h">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow" data-i18n="lv_eb">Three levels</span>
      <h2 id="lv-h" data-i18n="lv_h">Match the depth of the check <b>to the role</b>.</h2>
      <p data-i18n="lv_p">Essential for every worker. Add depth by role.</p>
    </div>
    <div class="tscroll rv" role="region" aria-label="Levels comparison" tabindex="0">
      <table class="levels">
        <thead>
          <tr>
            <th scope="col"><span class="sr" data-i18n="lv_what">What is checked</span></th>
            <th scope="col"><div class="lv"><b data-i18n="lv_e">Essential</b><span data-i18n="lv_e_s">Every worker</span><i data-i18n="lv_e_t">Hours</i></div></th>
            <th scope="col" class="feat"><div class="lv"><b data-i18n="lv_s">Standard</b><span data-i18n="lv_s_s">Most blue-collar roles</span><i data-i18n="lv_s_t">5–10 days</i></div></th>
            <th scope="col"><div class="lv"><b data-i18n="lv_p2">Professional</b><span data-i18n="lv_p_s">Skilled and white-collar</span><i data-i18n="lv_p_t">10–25 days</i></div></th>
          </tr>
        </thead>
        <tbody>
          <tr><th colspan="4" scope="colgroup" data-i18n="lvg1">Identity and integrity</th></tr>
          <tr><td data-i18n="lv1">Identity against passport and national ID</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv2">Document authenticity and forgery detection</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv3">Face match and liveness</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv4">Duplicate-identity detection</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv5">Sanctions, PEP and watchlists</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv6">Wafid medical fitness status</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv7">Recruitment agency licence status</td><td><span class="yes"><svg><use href="#ck"/></svg></span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><th colspan="4" scope="colgroup" data-i18n="lvg2">Record and history</th></tr>
          <tr><td data-i18n="lv8">Police clearance, authenticated at source</td><td><span class="add" title="Add-on">+</span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv9">Last employer: dates, role, reason for leaving, rehire</td><td><span class="add" title="Add-on">+</span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv10">Trade certificate and SVP skills result</td><td><span class="add" title="Add-on">+</span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv11">Previous Gulf employer reference</td><td><span class="add" title="Add-on">+</span></td><td class="feat"><span class="yes"><svg><use href="#ck"/></svg></span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><th colspan="4" scope="colgroup" data-i18n="lvg3">Professional depth</th></tr>
          <tr><td data-i18n="lv12">Full employment history and reference interviews</td><td><span class="no">·</span></td><td class="feat"><span class="add" title="Add-on">+</span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv13">Degree and professional licence at source</td><td><span class="no">·</span></td><td class="feat"><span class="add" title="Add-on">+</span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
          <tr><td data-i18n="lv14">Adverse media, Arabic and English</td><td><span class="no">·</span></td><td class="feat"><span class="add" title="Add-on">+</span></td><td><span class="yes"><svg><use href="#ck"/></svg></span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="levels-note">
      <span><span class="yes"><svg><use href="#ck"/></svg></span><span data-i18n="ln1">Included</span></span>
      <span><span class="add">+</span><span data-i18n="ln2">Available as an add-on</span></span>
      <span data-i18n="ln3">Standard can take up to 14 days where an employer is slow to respond.</span>
    </div>
  </div>
</section>
</template>
