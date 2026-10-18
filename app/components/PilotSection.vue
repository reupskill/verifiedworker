<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<section class="sec on-navy pilot" id="pilot" aria-labelledby="pilot-h">
  <div class="wrap">
    <div class="rv">
      <span class="eyebrow" data-i18n="pl_eb">Complimentary pilot</span>
      <h2 id="pilot-h" style="margin-top:14px" data-i18n="pl_h">Start with <b>20 workers</b> from your next intake.</h2>
      <p class="lede" data-i18n="pl_p">Free, no obligation, and live within five working days. Philippines or India intakes.</p>
      <div class="give">
        <div><b data-i18n="pl_y1">You provide</b><p data-i18n="pl_y1p">Up to 20 consenting workers and one named contact.</p></div>
        <div><b data-i18n="pl_y2">You receive</b><p data-i18n="pl_y2p">A report per worker within 10 working days, and a day-30 readout.</p></div>
      </div>
      <ol class="tl">
        <li><b data-i18n="tl1">Day 0</b><span data-i18n="tl1s">Submit this form</span></li>
        <li><b data-i18n="tl2">Within 5 days</b><span data-i18n="tl2s">Workers receive their link</span></li>
        <li><b data-i18n="tl3">Weeks 1 to 3</b><span data-i18n="tl3s">Reports as each completes</span></li>
        <li><b data-i18n="tl4">Day 30</b><span data-i18n="tl4s">Readout and next steps</span></li>
      </ol>
      <div class="contact">
        <span class="k" data-i18n="ct_k">The Vetted Worker team</span>
        <div class="line"><span class="v" id="ctEmail">vw@youverify.co</span><button class="copy" type="button" data-copy="vw@youverify.co" data-i18n="copy">Copy</button></div>
        <div class="line"><span class="v" id="ctPhone">+966 55 538 6898</span><button class="copy" type="button" data-copy="+966555386898" data-i18n="copy">Copy</button></div>
      </div>
    </div>

    <div class="form rv" id="formWrap">
      <form id="pilotForm" novalidate>
        <div class="form-h"><b data-i18n="f_h">Your details</b><span data-i18n="f_hs">We reply within one working day.</span></div>
        <div class="hp" aria-hidden="true"><label for="f_web">Website</label><input id="f_web" name="website" tabindex="-1" autocomplete="off"></div>
        <div class="fgrid">
          <div class="f"><label for="f_co" data-i18n="f_co">Company</label><input id="f_co" name="company" required autocomplete="organization"></div>
          <div class="f"><label for="f_name" data-i18n="f_name">Contact name</label><input id="f_name" name="name" required autocomplete="name"></div>
          <div class="f"><label for="f_role" data-i18n="f_role">Role</label><input id="f_role" name="role" autocomplete="organization-title"></div>
          <div class="f"><label for="f_mail" data-i18n="f_mail">Work email</label><input id="f_mail" name="email" type="email" required autocomplete="email" dir="ltr"></div>
          <div class="f"><label for="f_tel" data-i18n="f_tel">Mobile</label><input id="f_tel" name="mobile" type="tel" autocomplete="tel" dir="ltr" placeholder="+966"></div>
          <div class="f"><label for="f_n" data-i18n="f_n">Number of workers (up to 20)</label><input id="f_n" name="workers" type="number" min="1" max="20" value="20" inputmode="numeric"></div>
          <fieldset class="f full"><legend data-i18n="f_cor">Corridor</legend>
            <div class="chips">
              <label><input type="radio" name="corridor" id="cor_ph" value="Philippines" checked><span data-i18n="ph">Philippines</span></label>
              <label><input type="radio" name="corridor" id="cor_in" value="India"><span data-i18n="in">India</span></label>
            </div>
          </fieldset>
          <fieldset class="f full"><legend data-i18n="f_roles">Roles</legend>
            <div class="chips">
              <label><input type="checkbox" name="roles" id="ro_1" value="Driver" checked><span data-i18n="ro1">Driver</span></label>
              <label><input type="checkbox" name="roles" id="ro_2" value="Technician"><span data-i18n="ro2">Technician</span></label>
              <label><input type="checkbox" name="roles" id="ro_3" value="Cleaning and facilities"><span data-i18n="ro3">Cleaning and facilities</span></label>
              <label><input type="checkbox" name="roles" id="ro_4" value="Hospitality"><span data-i18n="ro4">Hospitality</span></label>
              <label><input type="checkbox" name="roles" id="ro_5" value="Construction"><span data-i18n="ro5">Construction</span></label>
              <label><input type="checkbox" name="roles" id="ro_6" value="Other"><span data-i18n="ro6">Other</span></label>
            </div>
          </fieldset>
          <div class="f full"><label for="f_date" data-i18n="f_date">Preferred start date</label><input id="f_date" name="start" type="date"></div>
          <label class="consent f full" for="f_ok"><input type="checkbox" id="f_ok" name="consent" required><span data-i18n="f_ok">I confirm workers will be asked for consent before any check runs, in line with Saudi Arabia's Personal Data Protection Law.</span></label>
          <p class="err f full" id="f_err" role="alert" hidden></p>
        </div>
        <button class="btn" type="submit"><span data-i18n="f_sub">Request my pilot</span><svg class="arrow" aria-hidden="true"><use href="#arrow"/></svg></button>
        <p class="fine" data-i18n="f_fine">Worker data is used only for this pilot and deleted at your request after the readout.</p>
      </form>
      <div class="done-panel" id="donePanel" hidden>
        <span class="pill ok" data-i18n="dn_pill">Request ready</span>
        <h3 data-i18n="dn_h">Your pilot request is ready to send.</h3>
        <p data-i18n="dn_p">Your email app has opened with this request addressed to vw@youverify.co. If it didn't, copy the summary below and send it there, or call +966 55 538 6898. The team replies within one working day.</p>
        <textarea id="dnText" readonly aria-label="Pilot request summary"></textarea>
        <div class="row"><button class="btn" type="button" id="dnCopy" data-i18n="dn_copy">Copy summary</button><button class="btn outline" type="button" id="dnBack" data-i18n="dn_back">Edit details</button></div>
      </div>
    </div>
  </div>
</section>
</template>
