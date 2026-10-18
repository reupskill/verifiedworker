<!--
  Static markup from the vetted-worker-site handoff. Behaviour (language switch,
  animations, tabs, calculator, form) is wired up by app/site/init.js.
-->
<template>
<section class="hero" aria-labelledby="h1">
  <svg class="grid-bg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#iso)" mask="url(#isomask)"/></svg>
  <div class="wrap">
    <div class="hero-copy">
      <span class="eyebrow" data-i18n="hero_eyebrow">Vetted Worker, from Elm</span>
      <h1 id="h1" data-i18n="hero_h1">Know who you're hiring <b>before the visa</b>.</h1>
      <p class="lede" data-i18n="hero_lede">We verify every overseas hire's identity, police record, certificates and past jobs with the authorities that issued them, before you pay for the visa.</p>
      <div class="ctas">
        <a class="btn" href="#pilot"><span data-i18n="cta_pilot">Start a free pilot</span><svg class="arrow" aria-hidden="true"><use href="#arrow"/></svg></a>
        <a class="btn ghost" href="#how"><span data-i18n="cta_how">See how it works</span></a>
      </div>
      <div class="assure">
        <span data-i18n="as_1">Consent first</span>
        <span data-i18n="as_3">PDPL aligned</span>
        <span data-i18n="as_4">Arabic and English reports</span>
      </div>
    </div>
    <figure class="scene art done" id="scene">
      <svg class="iso-hero" viewBox="-279 -192 558 530" role="img" aria-label="Illustration: a worker's ID and phone feed checks into a verification cube in front of the Riyadh skyline">
<polygon points="-265.0,153.0 0.0,306.0 0.0,323.0 -265.0,170.0" fill="#0A1838"/>
<polygon points="265.0,153.0 0.0,306.0 0.0,323.0 265.0,170.0" fill="#08142F"/>
<polygon points="0.0,0.0 265.0,153.0 0.0,306.0 -265.0,153.0" fill="#16306A"/>
<line x1="29.4" y1="17.0" x2="-235.6" y2="170.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-29.4" y1="17.0" x2="235.6" y2="170.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="58.9" y1="34.0" x2="-206.1" y2="187.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-58.9" y1="34.0" x2="206.1" y2="187.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="88.3" y1="51.0" x2="-176.7" y2="204.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-88.3" y1="51.0" x2="176.7" y2="204.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="117.8" y1="68.0" x2="-147.2" y2="221.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-117.8" y1="68.0" x2="147.2" y2="221.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="147.2" y1="85.0" x2="-117.8" y2="238.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-147.2" y1="85.0" x2="117.8" y2="238.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="176.7" y1="102.0" x2="-88.3" y2="255.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-176.7" y1="102.0" x2="88.3" y2="255.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="206.1" y1="119.0" x2="-58.9" y2="272.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-206.1" y1="119.0" x2="58.9" y2="272.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="235.6" y1="136.0" x2="-29.4" y2="289.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<line x1="-235.6" y1="136.0" x2="29.4" y2="289.0" stroke="#2A4A8F" stroke-width=".8" opacity=".55"/>
<polygon points="-29.4,30.6 0.0,47.6 0.0,-95.2 -29.4,-112.2" fill="#1A3268" class="city"/>
<polygon points="29.4,30.6 0.0,47.6 0.0,-95.2 29.4,-112.2" fill="#14295A" class="city"/>
<polygon points="0.0,-129.2 29.4,-112.2 0.0,-95.2 -29.4,-112.2" fill="#22407F" class="city"/>
<line class="win" x1="-25.9" y1="13.9" x2="-3.5" y2="26.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="13.9" x2="3.5" y2="26.9" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-25.9" y1="-4.8" x2="-3.5" y2="8.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="-4.8" x2="3.5" y2="8.2" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-25.9" y1="-23.5" x2="-3.5" y2="-10.5" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="-23.5" x2="3.5" y2="-10.5" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-25.9" y1="-42.2" x2="-3.5" y2="-29.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="-42.2" x2="3.5" y2="-29.2" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-25.9" y1="-60.9" x2="-3.5" y2="-47.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="-60.9" x2="3.5" y2="-47.9" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-25.9" y1="-79.6" x2="-3.5" y2="-66.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="-79.6" x2="3.5" y2="-66.6" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-25.9" y1="-98.3" x2="-3.5" y2="-85.3" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="25.9" y1="-98.3" x2="3.5" y2="-85.3" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="20.6,49.3 44.2,62.9 44.2,-25.5 20.6,-39.1" fill="#1A3268" class="city"/>
<polygon points="67.7,49.3 44.2,62.9 44.2,-25.5 67.7,-39.1" fill="#14295A" class="city"/>
<polygon points="44.2,-52.7 67.7,-39.1 44.2,-25.5 20.6,-39.1" fill="#22407F" class="city"/>
<line class="win" x1="24.1" y1="32.6" x2="40.6" y2="42.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="64.2" y1="32.6" x2="47.7" y2="42.2" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="24.1" y1="13.9" x2="40.6" y2="23.5" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="64.2" y1="13.9" x2="47.7" y2="23.5" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="24.1" y1="-4.8" x2="40.6" y2="4.8" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="64.2" y1="-4.8" x2="47.7" y2="4.8" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="24.1" y1="-23.5" x2="40.6" y2="-13.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="64.2" y1="-23.5" x2="47.7" y2="-13.9" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="50.1,73.1 76.6,88.4 76.6,-115.6 50.1,-130.9" fill="#1A3268" class="city"/>
<polygon points="103.1,73.1 76.6,88.4 76.6,-115.6 103.1,-130.9" fill="#14295A" class="city"/>
<polygon points="76.6,-146.2 103.1,-130.9 76.6,-115.6 50.1,-130.9" fill="#6E43B5" class="city"/>
<line class="win" x1="53.6" y1="56.4" x2="73.0" y2="67.7" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="56.4" x2="80.1" y2="67.7" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="37.7" x2="73.0" y2="49.0" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="37.7" x2="80.1" y2="49.0" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="19.0" x2="73.0" y2="30.3" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="19.0" x2="80.1" y2="30.3" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="0.3" x2="73.0" y2="11.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="0.3" x2="80.1" y2="11.6" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="-18.4" x2="73.0" y2="-7.1" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="-18.4" x2="80.1" y2="-7.1" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="-37.1" x2="73.0" y2="-25.8" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="-37.1" x2="80.1" y2="-25.8" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="-55.8" x2="73.0" y2="-44.5" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="-55.8" x2="80.1" y2="-44.5" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="-74.5" x2="73.0" y2="-63.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="-74.5" x2="80.1" y2="-63.2" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="-93.2" x2="73.0" y2="-81.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="-93.2" x2="80.1" y2="-81.9" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="53.6" y1="-111.9" x2="73.0" y2="-100.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="99.5" y1="-111.9" x2="80.1" y2="-100.6" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="76.6,-178.5 73.0,-132.9 80.1,-128.9" fill="#C18FD6"/>
<polygon points="100.1,91.8 120.7,103.7 120.7,-5.1 100.1,-17.0" fill="#1A3268" class="city"/>
<polygon points="141.3,91.8 120.7,103.7 120.7,-5.1 141.3,-17.0" fill="#14295A" class="city"/>
<polygon points="120.7,-28.9 141.3,-17.0 120.7,-5.1 100.1,-17.0" fill="#22407F" class="city"/>
<line class="win" x1="103.6" y1="75.1" x2="117.2" y2="83.0" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="137.8" y1="75.1" x2="124.3" y2="83.0" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="103.6" y1="56.4" x2="117.2" y2="64.3" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="137.8" y1="56.4" x2="124.3" y2="64.3" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="103.6" y1="37.7" x2="117.2" y2="45.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="137.8" y1="37.7" x2="124.3" y2="45.6" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="103.6" y1="19.0" x2="117.2" y2="26.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="137.8" y1="19.0" x2="124.3" y2="26.9" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="103.6" y1="0.3" x2="117.2" y2="8.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="137.8" y1="0.3" x2="124.3" y2="8.2" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="123.7,119.0 153.1,136.0 153.1,-27.2 123.7,-44.2" fill="#1A3268" class="city"/>
<polygon points="182.6,119.0 153.1,136.0 153.1,-27.2 182.6,-44.2" fill="#14295A" class="city"/>
<polygon points="153.1,-61.2 182.6,-44.2 153.1,-27.2 123.7,-44.2" fill="#22407F" class="city"/>
<line class="win" x1="127.2" y1="102.3" x2="149.6" y2="115.3" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="102.3" x2="156.6" y2="115.3" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="83.6" x2="149.6" y2="96.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="83.6" x2="156.6" y2="96.6" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="64.9" x2="149.6" y2="77.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="64.9" x2="156.6" y2="77.9" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="46.2" x2="149.6" y2="59.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="46.2" x2="156.6" y2="59.2" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="27.5" x2="149.6" y2="40.5" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="27.5" x2="156.6" y2="40.5" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="8.8" x2="149.6" y2="21.8" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="8.8" x2="156.6" y2="21.8" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="-9.9" x2="149.6" y2="3.1" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="-9.9" x2="156.6" y2="3.1" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="127.2" y1="-28.6" x2="149.6" y2="-15.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="179.0" y1="-28.6" x2="156.6" y2="-15.6" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="179.6,141.1 203.2,154.7 203.2,79.9 179.6,66.3" fill="#1A3268" class="city"/>
<polygon points="226.7,141.1 203.2,154.7 203.2,79.9 226.7,66.3" fill="#14295A" class="city"/>
<polygon points="203.2,52.7 226.7,66.3 203.2,79.9 179.6,66.3" fill="#22407F" class="city"/>
<line class="win" x1="183.1" y1="124.4" x2="199.6" y2="134.0" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="223.2" y1="124.4" x2="206.7" y2="134.0" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="183.1" y1="105.7" x2="199.6" y2="115.3" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="223.2" y1="105.7" x2="206.7" y2="115.3" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="183.1" y1="87.0" x2="199.6" y2="96.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="223.2" y1="87.0" x2="206.7" y2="96.6" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="-73.6,52.7 -50.1,66.3 -50.1,-35.7 -73.6,-49.3" fill="#1A3268" class="city"/>
<polygon points="-26.5,52.7 -50.1,66.3 -50.1,-35.7 -26.5,-49.3" fill="#14295A" class="city"/>
<polygon points="-50.1,-62.9 -26.5,-49.3 -50.1,-35.7 -73.6,-49.3" fill="#22407F" class="city"/>
<line class="win" x1="-70.1" y1="36.0" x2="-53.6" y2="45.6" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-30.0" y1="36.0" x2="-46.5" y2="45.6" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-70.1" y1="17.3" x2="-53.6" y2="26.9" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-30.0" y1="17.3" x2="-46.5" y2="26.9" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-70.1" y1="-1.4" x2="-53.6" y2="8.2" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-30.0" y1="-1.4" x2="-46.5" y2="8.2" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-70.1" y1="-20.1" x2="-53.6" y2="-10.5" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-30.0" y1="-20.1" x2="-46.5" y2="-10.5" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="-114.8,79.9 -88.3,95.2 -88.3,27.2 -114.8,11.9" fill="#1A3268" class="city"/>
<polygon points="-61.8,79.9 -88.3,95.2 -88.3,27.2 -61.8,11.9" fill="#14295A" class="city"/>
<polygon points="-88.3,-3.4 -61.8,11.9 -88.3,27.2 -114.8,11.9" fill="#22407F" class="city"/>
<line class="win" x1="-111.3" y1="63.2" x2="-91.9" y2="74.5" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-65.4" y1="63.2" x2="-84.8" y2="74.5" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-111.3" y1="44.5" x2="-91.9" y2="55.8" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-65.4" y1="44.5" x2="-84.8" y2="55.8" stroke="#203E7E" stroke-width="1.4"/>
<line class="win" x1="-111.3" y1="25.8" x2="-91.9" y2="37.1" stroke="#2C4C92" stroke-width="1.4"/>
<line class="win" x1="-65.4" y1="25.8" x2="-84.8" y2="37.1" stroke="#203E7E" stroke-width="1.4"/>
<polygon points="5.9,125.8 106.0,183.6 5.9,241.4 -94.2,183.6" fill="#0A1838" opacity=".55"/>
<polygon points="63.0,152.0 37.1,166.9 37.1,137.0 63.0,122.1" fill="#6CC0EC" class="fc" style="--d:0;--dx:40px;--dy:-7px"/>
<polygon points="92.5,169.0 66.5,183.9 66.5,154.0 92.5,139.1" fill="#0070C7" class="fc" style="--d:1;--dx:66px;--dy:8px"/>
<polygon points="92.5,101.0 66.5,115.9 66.5,86.0 92.5,71.1" fill="#0070C7" class="fc" style="--d:2;--dx:66px;--dy:-53px"/>
<polygon points="92.5,135.0 66.5,149.9 66.5,120.0 92.5,105.1" fill="#1C88D2" class="fc" style="--d:3;--dx:66px;--dy:-22px"/>
<polygon points="63.0,186.0 37.1,200.9 37.1,171.0 63.0,156.1" fill="#2E9FDA" class="fc" style="--d:4;--dx:40px;--dy:24px"/>
<polygon points="-21.8,169.0 4.1,183.9 4.1,154.0 -21.8,139.1" fill="#F7A573" class="fc" style="--d:5;--dx:-13px;--dy:8px"/>
<polygon points="35.3,36.0 61.2,51.0 35.3,66.0 9.4,51.0" fill="#C18FD6" class="fc" style="--d:6;--dx:27px;--dy:-91px"/>
<polygon points="-80.7,135.0 -54.8,149.9 -54.8,120.0 -80.7,105.1" fill="#F7A573" class="fc" style="--d:7;--dx:-66px;--dy:-22px"/>
<polygon points="5.9,19.0 31.8,34.0 5.9,49.0 -20.0,34.0" fill="#6E43B5" class="fc" style="--d:8;--dx:0px;--dy:-106px"/>
<polygon points="5.9,87.0 31.8,102.0 5.9,117.0 -20.0,102.0" fill="#C18FD6" class="fc" style="--d:9;--dx:-0px;--dy:-45px"/>
<polygon points="-51.2,152.0 -25.3,166.9 -25.3,137.0 -51.2,122.1" fill="#F9BE96" class="fc" style="--d:10;--dx:-40px;--dy:-7px"/>
<polygon points="-53.0,53.0 -27.1,68.0 -53.0,83.0 -78.9,68.0" fill="#C18FD6" class="fc" style="--d:11;--dx:-53px;--dy:-76px"/>
<polygon points="5.9,53.0 31.8,68.0 5.9,83.0 -20.0,68.0" fill="#9468CF" class="fc" style="--d:12;--dx:-0px;--dy:-76px"/>
<polygon points="35.3,70.0 61.2,85.0 35.3,100.0 9.4,85.0" fill="#7E52C2" class="fc" style="--d:13;--dx:27px;--dy:-61px"/>
<polygon points="-23.6,36.0 2.4,51.0 -23.6,66.0 -49.5,51.0" fill="#7E52C2" class="fc" style="--d:14;--dx:-27px;--dy:-91px"/>
<polygon points="-80.7,101.0 -54.8,115.9 -54.8,86.0 -80.7,71.1" fill="#F48558" class="fc" style="--d:15;--dx:-66px;--dy:-53px"/>
<polygon points="33.6,203.0 7.7,217.9 7.7,188.0 33.6,173.1" fill="#1C88D2" class="fc" style="--d:16;--dx:13px;--dy:39px"/>
<polygon points="-51.2,186.0 -25.3,200.9 -25.3,171.0 -51.2,156.1" fill="#F48558" class="fc" style="--d:17;--dx:-40px;--dy:24px"/>
<polygon points="-23.6,70.0 2.4,85.0 -23.6,100.0 -49.5,85.0" fill="#6E43B5" class="fc" style="--d:18;--dx:-27px;--dy:-61px"/>
<polygon points="64.8,53.0 90.7,68.0 64.8,83.0 38.9,68.0" fill="#6E43B5" class="fc" style="--d:19;--dx:53px;--dy:-76px"/>
<polygon points="-80.7,169.0 -54.8,183.9 -54.8,154.0 -80.7,139.1" fill="#F16845" class="fc" style="--d:20;--dx:-66px;--dy:8px"/>
<polygon points="33.6,169.0 7.7,183.9 7.7,154.0 33.6,139.1" fill="#0070C7" class="fc" style="--d:21;--dx:13px;--dy:8px"/>
<polygon points="-51.2,118.0 -25.3,132.9 -25.3,103.0 -51.2,88.1" fill="#F16845" class="fc" style="--d:22;--dx:-40px;--dy:-38px"/>
<polygon points="-21.8,135.0 4.1,149.9 4.1,120.0 -21.8,105.1" fill="#F48558" class="fc" style="--d:23;--dx:-13px;--dy:-22px"/>
<polygon points="-21.8,203.0 4.1,217.9 4.1,188.0 -21.8,173.1" fill="#F16845" class="fc" style="--d:24;--dx:-13px;--dy:39px"/>
<polygon points="33.6,135.0 7.7,149.9 7.7,120.0 33.6,105.1" fill="#1C88D2" class="fc" style="--d:25;--dx:13px;--dy:-22px"/>
<polygon points="63.0,118.0 37.1,132.9 37.1,103.0 63.0,88.1" fill="#2E9FDA" class="fc" style="--d:26;--dx:40px;--dy:-38px"/>
<g class="tick" transform="translate(5.9 68.0)"><polygon points="0,-17 14.7,-8.5 14.7,8.5 0,17 -14.7,8.5 -14.7,-8.5" fill="#fff"/><path d="M-6 0l4 4 8-8.5" fill="none" stroke="#0C1D46" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></g>
<polygon points="0.0,15.3 8.8,20.4 0.0,25.5 -8.8,20.4" fill="#F7A573" class="spark" style="--i:0"/>
<polygon points="53.0,18.7 61.8,23.8 53.0,28.9 44.2,23.8" fill="#C18FD6" class="spark" style="--i:1"/>
<polygon points="-20.6,44.2 -11.8,49.3 -20.6,54.4 -29.4,49.3" fill="#6CC0EC" class="spark" style="--i:2"/>
<polygon points="23.6,35.7 32.4,40.8 23.6,45.9 14.7,40.8" fill="#F16845" class="spark" style="--i:3"/>
<polygon points="-197.3,134.3 -120.7,178.5 -134.0,186.1 -210.5,141.9" fill="#0A1838" opacity=".6"/>
<g class="idcard">
<polygon points="-203.2,100.3 -126.6,144.5 -126.6,86.7 -203.2,42.5" fill="#FFFFFF"/>
<polygon points="-203.2,53.4 -126.6,97.6 -126.6,86.7 -203.2,42.5" fill="#6E43B5"/>
<polygon points="-197.9,95.9 -176.7,108.1 -176.7,74.8 -197.9,62.6" fill="#E6DCF6"/>
<circle cx="-187.3" cy="80.2" r="7" fill="#6E43B5"/>
<ellipse cx="-187.3" cy="99.6" rx="11" ry="6" fill="#6E43B5"/>
<polygon points="-171.4,81.9 -132.2,104.6 -132.2,101.2 -171.4,78.5" fill="#BFC9E6"/>
<polygon points="-171.4,90.1 -140.5,108.0 -140.5,104.6 -171.4,86.7" fill="#BFC9E6"/>
<polygon points="-171.4,97.6 -135.3,118.4 -135.3,115.0 -171.4,94.2" fill="#BFC9E6"/>
<polygon points="-171.4,105.7 -146.6,120.0 -146.6,116.6 -171.4,102.3" fill="#BFC9E6"/>
<line class="cscan" x1="-203.2" y1="69.7" x2="-126.6" y2="113.9" stroke="#1FC08E" stroke-width="2.5"/>
</g>
<polygon points="194.3,149.6 207.6,157.2 163.4,182.8 150.2,175.1" fill="#0A1838" opacity=".6"/>
<g class="phone3d">
<polygon points="209.1,134.3 164.9,159.8 164.9,61.2 209.1,35.7" fill="#0C1D46"/>
<polygon points="159.6,156.7 164.9,159.8 164.9,61.2 159.6,58.1" fill="#060F26"/>
<polygon points="206.1,130.9 167.8,153.0 167.8,64.6 206.1,42.5" fill="#F4F6FB"/>
<polygon points="201.7,61.0 194.3,65.3 194.3,56.8 201.7,52.5" fill="#11815D" class="prow" style="--k:0"/>
<polygon points="190.8,65.3 173.7,75.1 173.7,71.7 190.8,61.9" fill="#BFC9E6"/>
<polygon points="201.7,81.4 194.3,85.7 194.3,77.2 201.7,72.9" fill="#11815D" class="prow" style="--k:1"/>
<polygon points="190.8,85.7 173.7,95.5 173.7,92.1 190.8,82.3" fill="#BFC9E6"/>
<polygon points="201.7,101.8 194.3,106.1 194.3,97.6 201.7,93.3" fill="#11815D" class="prow" style="--k:2"/>
<polygon points="190.8,106.1 173.7,115.9 173.7,112.5 190.8,102.7" fill="#BFC9E6"/>
<polygon points="201.7,126.6 172.3,143.6 172.3,134.5 201.7,117.5" fill="#6E43B5"/>
</g>
<path class="flow" d="M-126.6 117.3 L-82.4 122.4" stroke="#F7A573" stroke-width="1.6" stroke-dasharray="4 6" fill="none"/>
<path class="flow" d="M185.5 100.3 L82.4 102.0" stroke="#F7A573" stroke-width="1.6" stroke-dasharray="4 6" fill="none"/>
      </svg>
      <div class="t-id"><small data-i18n="sc_k">Identity check</small><b><span class="num" id="scCount">7</span> <span data-i18n="of7">of 7 clear</span></b><span class="bar"><i id="scBar" style="width:100%"></i></span></div>
      <div class="t-match"><span class="live" aria-hidden="true"></span><span data-i18n="sc_src">Police record · confirmed with the issuer</span></div>
      <div class="t-ok"><svg aria-hidden="true"><use href="#ck"/></svg><span data-i18n="sc_ok">Verified · ready for visa</span></div>
      <div class="t-loc"><span class="pin" aria-hidden="true"></span><span data-i18n="riyadh_sa">Riyadh, SA</span><span aria-hidden="true">·</span><span class="num" id="scTime">12:22</span></div>
    </figure>
  </div>
  <div class="hero-stats">
    <div class="wrap">
      <div class="st"><b class="num" data-i18n="st1v">5 min</b><span data-i18n="st1h">for the worker, on their own phone</span></div>
      <div class="st"><b class="num" data-i18n="stSv">Seconds</b><span data-i18n="stS">for identity and watchlists</span></div>
      <div class="st"><b class="num" data-i18n="stDv">5–10 days</b><span data-i18n="stD">for a full source-checked report</span></div>
      <div class="st"><b class="num">18</b><span data-i18n="stA">issuing authorities in 6 countries</span></div>
    </div>
  </div>
</section>
</template>
