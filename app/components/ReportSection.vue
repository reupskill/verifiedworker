<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<section class="sec on-navy" id="report" aria-labelledby="rep-h">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow" data-i18n="rep_eb">What your team receives</span>
      <h2 id="rep-h" data-i18n="rep_h">The <b>Worker Trust Report</b>.</h2>
      <p data-i18n="rep_p">Every line shows what was checked, where, and what came back. Sample data.</p>
    </div>
    <div class="report rv">
      <div class="report-h">
        <div class="l">
          <svg viewBox="0 0 137.338 54.141" style="color:#0C1D46" role="img" aria-label="Elm"><use href="#elm-logo"/></svg>
          <div class="ttl"><b data-i18n="rep_t">Worker Trust Report · Sample</b><span data-i18n="rep_ts">Vetted Worker · Standard level</span></div>
        </div>
        <span class="report-id">VW-PH-000123</span>
      </div>
      <div class="report-sub">
        <div class="who"><b data-i18n="juan">Juan Dela Cruz</b><span data-i18n="rep_who">Philippines · Heavy vehicle driver</span></div>
        <div><span class="k" data-i18n="k_id">Identity</span><span class="v" style="color:var(--ok)" data-i18n="r_ver">Verified</span></div>
        <div><span class="k" data-i18n="k_rec">Record</span><span class="v" style="color:var(--ok)" data-i18n="r_clear">Clear</span></div>
        <div><span class="k" data-i18n="k_hist">History</span><span class="v" style="color:var(--warn)" data-i18n="r_1d">1 discrepancy</span></div>
        <div><span class="k" data-i18n="k_done">Completed</span><span class="v num" data-i18n="r_9d">9 working days</span></div>
      </div>
      <div class="tscroll" role="region" aria-label="Report lines" tabindex="0">
        <table class="rtable collapsed" id="rtable">
          <thead><tr><th>#</th><th data-i18n="th_chk">Check</th><th data-i18n="th_res">Result</th><th data-i18n="th_src">Source</th><th data-i18n="th_st">Status</th></tr></thead>
          <tbody>
            <tr><td>01</td><td class="c" data-i18n="rl1c">Identity</td><td data-i18n="rl1r">Passport and national ID record match</td><td class="s" data-i18n="rl1s">Passport chip · PhilSys</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr class="more"><td>02</td><td class="c" data-i18n="rl2c">Document</td><td data-i18n="rl2r">7 of 7 security features present</td><td class="s" data-i18n="rl2s">Document forensics</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr><td>03</td><td class="c" data-i18n="rl3c">Face and liveness</td><td data-i18n="rl3r">Live person · 96% match to passport photo</td><td class="s" data-i18n="rl3s">Biometric check</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr class="more"><td>04</td><td class="c" data-i18n="rl4c">Duplicate identity</td><td data-i18n="rl4r">No other identity linked to this face or document</td><td class="s" data-i18n="rl4s">Vetted Worker records</td><td><span class="pill ok" data-i18n="r_clear">Clear</span></td></tr>
            <tr><td>05</td><td class="c" data-i18n="rl5c">Sanctions and watchlists</td><td data-i18n="rl5r">No match across 500+ sources</td><td class="s" data-i18n="rl5s">Global and regional lists</td><td><span class="pill ok" data-i18n="r_clear">Clear</span></td></tr>
            <tr class="more"><td>06</td><td class="c" data-i18n="rl6c">Medical fitness</td><td data-i18n="rl6r">Fit · report dated 20 Aug 2026</td><td class="s" data-i18n="rl6s">Wafid (GCC Health Council)</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr class="more"><td>07</td><td class="c" data-i18n="rl7c">Recruitment agency</td><td data-i18n="rl7r">Licence active, no sanctions</td><td class="s" data-i18n="rl7s">DMW licensed agency register</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr><td>08</td><td class="c" data-i18n="rl8c">Police clearance</td><td data-i18n="rl8r">No derogatory record · certificate authentic</td><td class="s" data-i18n="rl8s">NBI, verified with the issuer</td><td><span class="pill ok" data-i18n="r_clear">Clear</span></td></tr>
            <tr class="flag"><td>09</td><td class="c" data-i18n="rl9c">Last employer</td><td data-i18n="rl9r">Role and good standing confirmed. Tenure 18 months, not 4 years as declared</td><td class="s" data-i18n="rl9s">Employer HR, phone and email</td><td><span class="pill warn" data-i18n="r_rev">Review</span></td></tr>
            <tr><td>10</td><td class="c" data-i18n="rl10c">Trade certificate</td><td data-i18n="rl10r">Driving NC II, valid</td><td class="s" data-i18n="rl10s">TESDA registry</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr class="more"><td>11</td><td class="c" data-i18n="rl11c">Previous Gulf employer</td><td data-i18n="rl11r">2021 to 2023 employment confirmed, eligible for rehire</td><td class="s" data-i18n="rl11s">Employer reference, UAE</td><td><span class="pill ok" data-i18n="r_ver">Verified</span></td></tr>
            <tr class="more"><td>12</td><td class="c" data-i18n="rl12c">SVP skills result</td><td data-i18n="rl12r">Not required for this occupation</td><td class="s" data-i18n="rl12s">Saudi SVP</td><td><span class="pill na" data-i18n="r_na">N/A</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="report-f">
        <div class="act"><b data-i18n="ra_k">Recommended action</b><p data-i18n="ra_p2">Confirm driving experience at interview.</p></div>
        <div class="rf-r"><p data-i18n="ra_ev2">Includes the evidence pack, consent record and timestamps. Arabic and English.</p><button type="button" class="btn outline sm" id="rMore"><span id="rMoreT">Show all 12 checks</span></button></div>
      </div>
    </div>
  </div>
</section>
</template>
