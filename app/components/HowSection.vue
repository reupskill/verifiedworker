<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<section class="sec" id="how" aria-labelledby="how-h">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow" data-i18n="how_eb">How it works</span>
      <h2 id="how-h" data-i18n="how_h">Five minutes for the worker. <b>One decision</b> for you.</h2>
      <p data-i18n="how_p">Follow Juan, a driver from Manila, and Asif, an electrician from Lahore. Both are fictitious.</p>
    </div>

    <div class="stepper rv" id="stepper">
      <ol class="st-list" role="tablist" aria-label="Steps">
        <li><button type="button" role="tab" id="tb1" aria-controls="pn1" aria-selected="true" data-i="0"><span class="n">01</span><span class="tx"><span class="d mono" data-i18n="d1">Day 1</span><b data-i18n="s1k">Invite</b><span class="l" data-i18n="l1">A secure link on his phone. Consent, passport, ID and a live selfie in five minutes.</span></span></button></li>
        <li><button type="button" role="tab" id="tb2" aria-controls="pn2" aria-selected="false" data-i="1"><span class="n">02</span><span class="tx"><span class="d mono" data-i18n="d1">Day 1</span><b data-i18n="s2k">Identity</b><span class="l" data-i18n="l2">Seven instant checks. Asif's selfie does not match his passport.</span></span></button></li>
        <li><button type="button" role="tab" id="tb3" aria-controls="pn3" aria-selected="false" data-i="2"><span class="n">03</span><span class="tx"><span class="d mono" data-i18n="s3t">Days 2 to 7</span><b data-i18n="s3k">Source</b><span class="l" data-i18n="l3">Certificates confirmed with their issuers. Asif's police certificate has no record.</span></span></button></li>
        <li><button type="button" role="tab" id="tb4" aria-controls="pn4" aria-selected="false" data-i="3"><span class="n">04</span><span class="tx"><span class="d mono" data-i18n="s4t">Day 9</span><b data-i18n="s4k">History</b><span class="l" data-i18n="l4">Juan declared four years. His employer confirms eighteen months.</span></span></button></li>
        <li><button type="button" role="tab" id="tb5" aria-controls="pn5" aria-selected="false" data-i="4"><span class="n">05</span><span class="tx"><span class="d mono" data-i18n="sn5">Day 4 · 9</span><b data-i18n="s5k">Decision</b><span class="l" data-i18n="l5">Stop, Review or Proceed, with the evidence attached.</span></span></button></li>
      </ol>

      <div class="st-stage">
        <div class="st-prog" aria-hidden="true"><i id="stProg"></i></div>

        <div class="pn" role="tabpanel" id="pn1" aria-labelledby="tb1">
          <div class="screen">
            <div class="scr-top"><span class="mono">09:12</span><b>Vetted Worker</b></div>
            <p class="scr-msg" data-i18n="ph_msg">Your future employer in Riyadh has invited you to verify your documents. It takes about 5 minutes.</p>
            <ul class="rows">
              <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="ph1">Consent given</span><span class="t">09:12</span></li>
              <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="ph2">Passport captured</span><span class="t">09:14</span></li>
              <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="ph3">National ID captured</span><span class="t">09:15</span></li>
              <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="ph4">Live selfie</span><span class="t">09:16</span></li>
            </ul>
          </div>
        </div>

        <div class="pn" role="tabpanel" id="pn2" aria-labelledby="tb2" hidden>
          <div class="panel-h"><b data-i18n="s2ph">Juan Dela Cruz · instant checks</b><span class="pill ok"><span class="num">7</span>&nbsp;<span data-i18n="of7">of 7 clear</span></span></div>
          <ul class="rows">
            <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="c1">Passport and PhilSys record match</span><span class="t">09:16</span></li>
            <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="c3">Live person, 96% face match</span><span class="t">09:16</span></li>
            <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="c5">No match across 500+ watchlists</span><span class="t">09:17</span></li>
            <li><span class="dot"><svg><use href="#ck"/></svg></span><span data-i18n="c6">Wafid medical: fit</span><span class="t">09:17</span></li>
          </ul>
          <div class="alert" role="note">
            <svg width="22" height="24" viewBox="-11 -12 22 24" aria-hidden="true"><polygon points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5" fill="#C93C24"/><path d="M0 -5v5M0 4v.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>
            <div><b data-i18n="s2ab">Asif Raza · face mismatch</b><span data-i18n="s2ap">Selfie does not match the passport photo. Flagged for review.</span></div>
            <span class="t">14:41</span>
          </div>
        </div>

        <div class="pn" role="tabpanel" id="pn3" aria-labelledby="tb3" hidden>
          <ol class="timeline">
            <li><span class="day"><b data-i18n="d2">Day 2</b><span data-i18n="juan_s">Juan</span></span><span class="what"><b data-i18n="t1b">Recruitment agency</b><span data-i18n="t1s">Licence active on the DMW register</span></span><span class="pill dig" data-i18n="r_dig">Digital</span></li>
            <li class="fail"><span class="day"><b data-i18n="d4">Day 4</b><span data-i18n="asif_s">Asif</span></span><span class="what"><b data-i18n="t2b">Police character certificate</b><span data-i18n="t2s">Issuing office has no record of this certificate</span></span><span class="pill stop" data-i18n="r_fail">Failed</span></li>
            <li><span class="day"><b data-i18n="d6">Day 6</b><span data-i18n="juan_s">Juan</span></span><span class="what"><b data-i18n="t3b">Police clearance</b><span data-i18n="t3s">No derogatory record · NBI certificate authentic</span></span><span class="pill aut" data-i18n="r_aut">Authenticated</span></li>
            <li><span class="day"><b data-i18n="d7">Day 7</b><span data-i18n="juan_s">Juan</span></span><span class="what"><b data-i18n="t4b">Trade certificate</b><span data-i18n="t4s">Driving NC II valid on the TESDA registry</span></span><span class="pill dig" data-i18n="r_dig">Digital</span></li>
          </ol>
        </div>

        <div class="pn" role="tabpanel" id="pn4" aria-labelledby="tb4" hidden>
          <div class="panel-h"><b data-i18n="s4ph">Last employer · Manila</b><span class="pill warn" data-i18n="r_rev">Review</span></div>
          <div class="cmp">
            <div class="cmp-row"><div class="lab"><span data-i18n="decl">Declared by the worker, at invite</span><b data-i18n="decl_v">48 months</b></div><div class="bar-track"><div class="bar-fill" style="width:100%"></div></div></div>
            <div class="cmp-row"><div class="lab"><span data-i18n="conf">Confirmed by employer HR, by phone and email</span><b data-i18n="conf_v">18 months</b></div><div class="bar-track"><div class="bar-fill conf" style="width:37.5%"></div></div></div>
            <div class="scale mono" aria-hidden="true"><span>0</span><span>12</span><span>24</span><span>36</span><span>48</span></div>
          </div>
        </div>

        <div class="pn" role="tabpanel" id="pn5" aria-labelledby="tb5" hidden>
          <div class="dec">
            <div class="dec-card" style="--c:var(--stop)"><div class="top"><b data-i18n="asif">Asif Raza</b><span class="pill stop" data-i18n="stop4">Stop · Day 4</span></div><p data-i18n="dec_a2">Face mismatch and an untraceable police certificate. Stopped before any fees were paid.</p></div>
            <div class="dec-card" style="--c:var(--warn)"><div class="top"><b data-i18n="juan">Juan Dela Cruz</b><span class="pill warn" data-i18n="rev9">Review · Day 9</span></div><p data-i18n="dec_j2">Clear on identity and record. Confirm driving experience at interview.</p></div>
            <div class="dec-card" style="--c:var(--ok)"><div class="top"><b data-i18n="dec_ph">When everything matches</b><span class="pill ok" data-i18n="r_proceed">Proceed</span></div><p data-i18n="dec_p">Everything the worker told you checks out. Book the flight.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
