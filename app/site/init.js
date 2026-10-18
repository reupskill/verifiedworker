// Page behaviour for the Vetted Worker site (from the vetted-worker-site handoff's
// app.js): language switch, hero animation, stepper, report toggle, coverage map
// and tabs, sources marquee, calculator, copy buttons and the pilot form.
// Runs once against the server-rendered DOM; called from app.vue on mount.
export function initSite() {
'use strict';
if (window.__vwSiteInit) return;
window.__vwSiteInit = true;
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Arabic copy (for native review by Elm before go-live) ---------- */
var AR = {
brand_sub:'التحقق من القوى العاملة', nav_how:'آلية العمل', nav_report:'التقرير', nav_levels:'الباقات', nav_cov:'مصادر البيانات', nav_pilot:'التجربة المجانية', nav_faq:'الأسئلة', cta_short:'ابدأ تجربة مجانية',
hero_eyebrow:'Vetted Worker من علم', hero_h1:'اعرف من توظّفه <b>قبل التأشيرة</b>.',
hero_lede:'نتحقق من هوية كل عامل تستقدمه وسجله الجنائي وشهاداته ووظائفه السابقة مع الجهات التي أصدرتها، قبل أن تدفع تكاليف التأشيرة.',
cta_pilot:'ابدأ تجربة مجانية', cta_how:'تعرّف على آلية العمل',
as_1:'الموافقة أولًا', as_3:'متوافق مع نظام حماية البيانات الشخصية', as_4:'تقارير بالعربية والإنجليزية',
juan:'خوان ديلا كروز', juan_meta:'مانيلا ← الرياض · سائق مركبات ثقيلة', of7:'من 7 سليمة',
c1:'تطابق الجواز وسجل PhilSys', c2:'المستند أصلي، 7 من 7 خصائص', c3:'شخص حقيقي، تطابق الوجه 96%', c4:'لا هوية مكررة', c5:'لا تطابق في أكثر من 500 قائمة مراقبة', c6:'الفحص الطبي (وافد): لائق', c7:'ترخيص وكالة الاستقدام ساري',
st1v:'5 دقائق', st1:'من وقت العامل', st3v:'10 أيام', st3:'لتقرير كامل، الهند والفلبين', st4:'قائمة عقوبات ومراقبة',
gap_eb:'الفجوة', gap_h:'الوظائف الأعلى عددًا هي <b>الأقل تحققًا</b>.',
gap_p:'تستقدم شركات القوى العاملة السائقين والفنيين وعمال النظافة والضيافة وأطقم البناء إلى المملكة بأعداد كبيرة. صُمّم الفحص الخلفي وسُعّر لكبار الموظفين، لذا تُقبل معظم مستندات العمالة الحرفية كما هي.',
g1h:'مستندات ليست كما تبدو', g1p:'هويات مستعارة وشهادات حسن سيرة مزوّرة وشهادات مهنية مشتراة تمر عبر سلاسل الاستقدام. وبعد إصدار التأشيرة وسفر العامل، تكون التكلفة قد وقعت.',
g2h:'ادعاءات لم يؤكدها أحد', g2p:'أصحاب العمل السابقون وسنوات الخبرة وأسباب ترك العمل تُؤخذ عادةً بكلمة العامل أو الوكيل.',
g3h:'تاريخ يعبر الحدود', g3p:'العامل الذي غادر صاحب عمل خليجيًا سابقًا بشكل سيئ، أو يعود بهوية جديدة، يبدو جديدًا على الورق.',
how_eb:'آلية العمل', how_h:'خمس دقائق من العامل. <b>قرار واحد</b> لك.',
how_p:'تابع خوان، سائق من مانيلا، وآصف، كهربائي من لاهور. كلاهما افتراضي.',
s1k:'الدعوة', s1t:'اليوم 1 · 09:12', s1h:'خمس دقائق على هاتفه.',
s1p:'يصل إلى خوان رابط آمن عبر رسالة نصية أو واتساب، أو تلتقط الوكالة بياناته في موقعها. يقرأ بالضبط ما سيُفحص، ويوافق، ويصوّر جوازه وهويته الوطنية، ويلتقط صورة ذاتية حيّة. دون تطبيق، ودون وكيل في الغرفة.',
ph_msg:'دعاك صاحب العمل المستقبلي في الرياض للتحقق من مستنداتك. يستغرق ذلك نحو 5 دقائق.',
ph1:'تمت الموافقة', ph2:'تصوير الجواز', ph3:'تصوير الهوية الوطنية', ph4:'صورة ذاتية حيّة', ph_fine:'يمكنك معرفة من يطّلع على ملفك وسحب موافقتك في أي وقت.',
s2k:'الهوية', s2t:'اليوم 1 · 09:17', s2h:'الشخص يطابق الجواز.',
s2p:'قبل أن يضع خوان هاتفه، تعود سبعة فحوصات. وفي الساعة 14:41 تُجرى الفحوصات نفسها لآصف في لاهور، فإذا بصورته الذاتية لا تطابق صورة جوازه.',
s2m1:'فحوصات في ثوانٍ', s2m2:'قائمة مراقبة', s2ph:'خوان ديلا كروز · الفحوصات الفورية', s2ab:'آصف رضا · عدم تطابق الوجه', s2ap:'الصورة الذاتية لا تطابق صورة الجواز. أُحيل للمراجعة.',
s3k:'المصدر', s3t:'الأيام 2 إلى 7', s3h:'مؤكَّد مع الجهة التي أصدرته.',
s3p:'قيمة الشهادة من قيمة مُصدِرها. تُوثَّق شهادة حسن سيرة خوان مع المكتب الوطني للتحقيقات. أما شهادة آصف فتعود إلى المكتب الذي يحمل ختمه، ولا يوجد لديه أي سجل لها. وحين لا يكون السجل متاحًا إلكترونيًا، يتحقق منه شركاء محليون معتمدون ميدانيًا.',
s3m1v:'5–10', s3m1:'أيام عمل', s3m2:'جهة في 6 دول',
d2:'اليوم 2', d4:'اليوم 4', d6:'اليوم 6', d7:'اليوم 7', juan_s:'خوان', asif_s:'آصف',
t1b:'وكالة الاستقدام', t1s:'الترخيص ساري في سجل وزارة العمال المهاجرين', t2b:'شهادة حسن السيرة', t2s:'لا يوجد سجل لهذه الشهادة لدى الجهة المُصدِرة',
t3b:'شهادة حسن السيرة', t3s:'لا سجل سلبي · شهادة NBI أصلية', t4b:'الشهادة المهنية', t4s:'شهادة القيادة NC II سارية في سجل TESDA',
r_dig:'رقمي', r_fail:'فشل', r_aut:'موثَّق', r_conf:'مؤكَّد', r_rev:'مراجعة', r_proceed:'متابعة', r_stop:'إيقاف', r_ver:'متحقَّق', r_clear:'سليم', r_na:'لا ينطبق', r_1d:'اختلاف واحد', r_9d:'9 أيام عمل',
s4k:'السجل', s4t:'اليوم 9', s4h:'ما قاله هو، وما قالوه هم.',
s4p:'صرّح خوان بأربع سنوات لدى آخر صاحب عمل. ويؤكد فريق الموارد البشرية لديهم ثمانية عشر شهرًا، بسجل جيد وأهلية لإعادة التوظيف. ليس ذلك سببًا لخسارة سائق جيد، لكنه يستحق سؤالًا في المقابلة.',
s4ph:'آخر صاحب عمل · مانيلا', decl:'ما صرّح به العامل عند الدعوة', decl_v:'48 شهرًا', conf:'ما أكدته الموارد البشرية، هاتفيًا وبالبريد', conf_v:'18 شهرًا',
gulf_b:'صاحب العمل الخليجي السابق · الإمارات', gulf_s:'من 2021 إلى 2023 مؤكَّد، مؤهل لإعادة التوظيف',
s5k:'القرار', s5t:'اليوم 4 · اليوم 9', s5h:'هذا ما يصل إلى مكتبك.',
s5p:'يوضح كل سطر ما فُحص وأين وما النتيجة، مع حزمة الأدلة وسجل الموافقة. عبر لوحة التحكم أو مباشرة إلى نظام الاستقدام لديك عبر واجهة برمجية، بالعربية والإنجليزية.',
asif:'آصف رضا', stop4:'إيقاف · اليوم 4', dec_a:'أُوقف في اليوم 4، قبل الالتزام بتأشيرة أو رحلة أو رسوم استقدام. عدم تطابق الوجه وشهادة حسن سيرة يتعذّر التحقق منها، مع الأدلة مرفقة.',
rev9:'مراجعة · اليوم 9', dec_j:'التقرير في اليوم 9. سليم من حيث الهوية والسجل والترخيص. اختلاف واحد في مدة الخدمة. الإجراء الموصى به: تأكيد خبرة القيادة في المقابلة.',
dec_ph:'حين يتطابق كل شيء', dec_p:'كل ما قاله العامل صحيح. احجز الرحلة.',
rep_eb:'ما يصل إلى فريقك', rep_h:'<b>تقرير موثوقية العامل</b>.', rep_p:'يوضح كل سطر ما فُحص وأين وما النتيجة. بيانات نموذجية.',
rep_t:'تقرير موثوقية العامل · نموذج', rep_ts:'Vetted Worker · المستوى القياسي', rep_who:'الفلبين · سائق مركبات ثقيلة',
k_id:'الهوية', k_rec:'السجل', k_hist:'التاريخ الوظيفي', k_done:'مدة الإنجاز',
th_chk:'الفحص', th_res:'النتيجة', th_src:'المصدر', th_st:'الحالة',
rl1c:'الهوية', rl1r:'تطابق سجل الجواز والهوية الوطنية', rl1s:'شريحة الجواز · PhilSys',
rl2c:'المستند', rl2r:'7 من 7 خصائص أمنية موجودة', rl2s:'تحليل المستندات',
rl3c:'الوجه والحيوية', rl3r:'شخص حقيقي · تطابق 96% مع صورة الجواز', rl3s:'فحص بيومتري',
rl4c:'الهوية المكررة', rl4r:'لا هوية أخرى مرتبطة بهذا الوجه أو المستند', rl4s:'سجلات Vetted Worker',
rl5c:'العقوبات وقوائم المراقبة', rl5r:'لا تطابق في أكثر من 500 مصدر', rl5s:'قوائم عالمية وإقليمية',
rl6c:'اللياقة الطبية', rl6r:'لائق · تقرير بتاريخ 20 أغسطس 2026', rl6s:'وافد (مجلس الصحة الخليجي)',
rl7c:'وكالة الاستقدام', rl7r:'الترخيص ساري، دون عقوبات', rl7s:'سجل الوكالات المرخّصة لدى وزارة العمال المهاجرين',
rl8c:'شهادة حسن السيرة', rl8r:'لا سجل سلبي · الشهادة أصلية', rl8s:'NBI، تم التحقق مع الجهة المُصدِرة',
rl9c:'آخر صاحب عمل', rl9r:'تأكيد الدور والسجل الجيد. مدة الخدمة 18 شهرًا، وليست 4 سنوات كما صُرّح', rl9s:'الموارد البشرية لدى صاحب العمل، هاتفيًا وبالبريد',
rl10c:'الشهادة المهنية', rl10r:'شهادة القيادة NC II، سارية', rl10s:'سجل TESDA',
rl11c:'صاحب العمل الخليجي السابق', rl11r:'تأكيد العمل من 2021 إلى 2023، مؤهل لإعادة التوظيف', rl11s:'مرجع صاحب العمل، الإمارات',
rl12c:'نتيجة الفحص المهني SVP', rl12r:'غير مطلوب لهذه المهنة', rl12s:'برنامج الفحص المهني السعودي',
ra_k:'الإجراء الموصى به', ra_p:'تأكيد خبرة القيادة في المقابلة. العامل سليم فيما عدا ذلك ومناسب للوظائف التي تتطلب أقل من سنتين من الخبرة في المركبات الثقيلة.',
ra_ev:'يتضمن كل تقرير حزمة الأدلة (تأكيدات المصادر والمستندات الموثَّقة) وسجل موافقة العامل وطابعًا زمنيًا لكل فحص. متاح بالعربية والإنجليزية.',
oc1:'كل ما فُحص يطابق مستندات العامل وادعاءاته. استقدم بثقة.', oc2:'اختلاف يستحق نقاشًا، مثل المبالغة في الخبرة، مع الأدلة مرفقة.', oc3:'فشل التحقق من الهوية أو المستند أو السجل. يُحسم القرار قبل الالتزام بأي تكلفة تأشيرة أو سفر.',
lv_eb:'ثلاثة مستويات', lv_h:'طابق عمق الفحص <b>مع طبيعة الوظيفة</b>.', lv_p:'الأساسي لكل عامل. أضف العمق حسب الوظيفة.',
lv_what:'ما يُفحص', lv_e:'الأساسي', lv_e_s:'لكل عامل', lv_e_t:'ساعات', lv_s:'القياسي', lv_s_s:'معظم الوظائف الحرفية', lv_s_t:'5–10 أيام', lv_p2:'الاحترافي', lv_p_s:'الوظائف الماهرة والمكتبية', lv_p_t:'10–25 يومًا',
lvg1:'الهوية والنزاهة', lv1:'الهوية مقابل الجواز والهوية الوطنية', lv2:'أصالة المستند وكشف التزوير', lv3:'مطابقة الوجه وكشف الحيوية', lv4:'كشف الهويات المكررة', lv5:'العقوبات والأشخاص المعرّضون سياسيًا وقوائم المراقبة', lv6:'حالة اللياقة الطبية (وافد)', lv7:'حالة ترخيص وكالة الاستقدام',
lvg2:'السجل والتاريخ', lv8:'شهادة حسن السيرة، موثَّقة من المصدر', lv9:'آخر صاحب عمل: التواريخ والدور وسبب الترك وإعادة التوظيف', lv10:'الشهادة المهنية ونتيجة الفحص المهني SVP', lv11:'مرجع صاحب العمل الخليجي السابق',
lvg3:'العمق الاحترافي', lv12:'التاريخ الوظيفي الكامل ومقابلات المراجع', lv13:'الشهادة الجامعية والترخيص المهني من المصدر', lv14:'الأخبار السلبية بالعربية والإنجليزية',
ln1:'مشمول', ln2:'متاح كإضافة', ln3:'قد يستغرق المستوى القياسي حتى 14 يومًا حين يتأخر رد صاحب العمل.',
cov_eb:'من أين تأتي الأدلة', cov_h:'التحقق من المصدر، في <b>بلد العامل</b>.', cov_p:'يُجرى كل فحص مقابل أقوى مصدر في بلد العامل.',
riyadh:'الرياض', map_cap1:'اختر سوقًا لعرض مصادره', map_cap2:'التالي: نيبال وإندونيسيا وسريلانكا وكينيا وإثيوبيا وأوغندا',
lg1:'مطابقة فورية مع مصدر رسمي.', lg2:'شهادة متحقَّق منها مع جهة إصدارها.', lg3:'مؤكَّد مع صاحب العمل أو المؤسسة.',
cov_note:'حين لا يتوفر مصدر فوري بعد، يتحقق شركاء محليون معتمدون من السجل ميدانيًا، ويذكر التقرير ذلك. وحين لا تُصدر الدولة السجل إلا لصاحبه، يطلبه العامل ويُتحقق منه مع الجهة المُصدِرة.',
elm_eb:'من علم', elm_h:'من الشركة التي تقف وراء <b>الخدمات الرقمية في المملكة</b>.',
elm_p:'تبني علم الخدمات الرقمية في المملكة منذ أكثر من 30 عامًا. ويحمل Vetted Worker المعيار ذاته إلى من تستقدمهم.',
en1:'مليار عملية', en2:'مليون مستخدم', en3:'ألف عميل', en4:'خدمة إلكترونية', en_src:'أرقام منشورة من علم على elm.sa.',
pr_eb:'لماذا ينجح', pr_h:'أقل تكلفة من استقدام فاشل. <b>منصف</b> للعامل.',
pr1h:'يغطي تكلفته', pr1p:'يكلّف الاستقدام الفاشل رسوم الاستقدام والتأشيرة والطيران والرسوم الحكومية وبديلًا. يعمل Vetted Worker قبل الالتزام بأي منها، بجزء يسير من تكلفتها.',
pr2h:'منصف للعامل', pr2p:'يرى العامل بالضبط ما سيُفحص، ويوافق قبل أي فحص. والملف الموثَّق يسرّع توظيف العامل الجيد.',
pr3h:'آمن ونظامي', pr3p:'يُعالج وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية، على منصة حاصلة على شهادات ISO 27001 وISO 27018 وISO 42001 وخاضعة لفحص مستقل وفق SOC 2 Type II. كل فحص مؤرَّخ وقابل للتدقيق.',
pl_eb:'تجربة مجانية', pl_h:'ابدأ بـ <b>20 عاملًا</b> من دفعتك القادمة.', pl_p:'مجانًا ودون التزام، وتبدأ خلال خمسة أيام عمل. لدفعات من الفلبين أو الهند.',
pl_y1:'ما تقدّمه', pl_y1p:'حتى 20 عاملًا موافقًا ومسؤول تواصل واحد.',
pl_y2:'ما تحصل عليه', pl_y2p:'تقرير لكل عامل خلال 10 أيام عمل، وعرض للنتائج في اليوم 30.',
tl1:'اليوم 0', tl1s:'أرسل هذا النموذج', tl2:'خلال 5 أيام', tl2s:'يتلقى العمال الرابط', tl3:'الأسابيع 1 إلى 3', tl3s:'التقارير فور اكتمال كل منها', tl4:'اليوم 30', tl4s:'عرض النتائج والخطوات التالية',
ct_k:'فريق Vetted Worker', copy:'نسخ',
f_h:'بياناتك', f_hs:'نرد خلال يوم عمل واحد.', f_co:'الشركة', f_name:'اسم مسؤول التواصل', f_role:'المسمى الوظيفي', f_mail:'البريد الإلكتروني للعمل', f_tel:'الجوال', f_n:'عدد العمال (حتى 20)',
f_cor:'الممر', ph:'الفلبين', 'in':'الهند', pk:'باكستان', bd:'بنغلاديش', eg:'مصر', f_roles:'الوظائف', ro1:'سائق', ro2:'فني', ro3:'النظافة والمرافق', ro4:'الضيافة', ro5:'البناء', ro6:'أخرى',
f_date:'تاريخ البدء المفضل', f_ok:'أؤكد أن العمال سيُطلب منهم الموافقة قبل أي فحص، وفقًا لنظام حماية البيانات الشخصية في المملكة.', f_sub:'اطلب تجربتي',
f_fine:'تُستخدم بيانات العمال لهذه التجربة فقط وتُحذف بناءً على طلبك بعد عرض النتائج.',
dn_pill:'الطلب جاهز', dn_h:'طلب التجربة جاهز للإرسال.', dn_p:'فتحنا تطبيق البريد لديك وفيه هذا الطلب موجّهًا إلى vw@youverify.co. إن لم يُفتح، انسخ الملخص أدناه وأرسله إلى العنوان نفسه، أو اتصل على ‎+966 55 538 6898. يرد الفريق خلال يوم عمل واحد.', dn_copy:'نسخ الملخص', dn_back:'تعديل البيانات',
ft_p:'تقدّم علم خدمة Vetted Worker لشركات القوى العاملة والاستقدام التي تستقدم العمال إلى المملكة العربية السعودية.', ft_h1:'Vetted Worker', ft_h2:'تواصل معنا', ft_loc:'الرياض، المملكة العربية السعودية',
ft_partner:'شريك البيانات والتحقق', sc_src:'السجل الجنائي · مؤكَّد مع الجهة المُصدِرة', w3b2:'الهوية متحقَّق منها مقابل السجلات الرسمية', mc2:'المحددة بخط: الأسواق التالية', mc1:'الأعمدة الأطول: ممرات التجربة المتاحة اليوم', ra_ev2:'يشمل حزمة الأدلة وسجل الموافقة والطوابع الزمنية. بالعربية والإنجليزية.', ra_p2:'تأكيد خبرة القيادة في المقابلة.', dec_j2:'سليم من حيث الهوية والسجل. تأكيد خبرة القيادة في المقابلة.', dec_a2:'عدم تطابق الوجه وشهادة حسن سيرة يتعذّر تتبعها. أُوقف قبل دفع أي رسوم.', l5:'إيقاف أو مراجعة أو متابعة، مع الأدلة مرفقة.', l4:'صرّح خوان بأربع سنوات. ويؤكد صاحب العمل ثمانية عشر شهرًا.', l3:'تأكيد الشهادات مع الجهات المُصدِرة. شهادة حسن سيرة آصف بلا سجل.', l2:'سبعة فحوصات فورية. صورة آصف الذاتية لا تطابق جوازه.', l1:'رابط آمن على هاتفه. الموافقة والجواز والهوية وصورة ذاتية حيّة في خمس دقائق.',
sc_k:'فحص الهوية', sc_match:'مطابقة الوجه الحيّة', sc_ok:'متحقَّق · جاهز للتأشيرة', riyadh_sa:'الرياض، السعودية',
st1h:'من وقت العامل، على هاتفه', stSv:'ثوانٍ', stS:'للهوية وقوائم المراقبة', stDv:'5–10 أيام', stD:'لتقرير كامل متحقَّق من المصدر', stA:'جهة مُصدِرة في 6 دول',
val_eb:'لماذا يهم ذلك', val_h:'معظم التعيينات الخاطئة تبدو <b>سليمة على الورق</b>.',
v1h:'أوقف التعيين الخاطئ مبكرًا', v1p:'تُكشف المستندات المزوّرة والهويات المستعارة قبل دفع أي رسوم.',
v2h:'انشر العمال الجيدين أسرع', v2p:'تنتقل الملفات السليمة مباشرة إلى التأشيرة، دون ملاحقة المستندات.',
v3h:'دافع عن كل قرار', v3p:'تحمل كل نتيجة مصدرها وسجل الموافقة، جاهزة للتدقيق.',
calc_eb:'تكلفة الاستقدام الفاشل', calc_h:'احسب أرقامك بنفسك.', calc_p:'الاستقدام الفاشل يعني دفع الرسوم والتأشيرة والطيران مرتين. أدخل أرقامك.',
calc_l1:'العمال المستقدمون سنويًا', calc_l2:'تكلفة الاستقدام للعامل (ريال)', calc_l3:'نسبة الاستقدام الفاشل (%)', calc_note:'أرقام توضيحية. أدخل أرقامك.',
calc_rk:'تكلفة التعيينات الخاطئة سنويًا', calc_rp:'نتحقق قبل أن تنفق. وتُظهر لك تجربة مجانية ما كنا سنكشفه.', calc_cta:'جرّبه على دفعتي القادمة',
ap_a:'أُوقف في اليوم 4، قبل دفع أي رسوم.', ap_j:'اجتاز في اليوم 9، مع سؤال واحد للمقابلة.', d1:'اليوم 1', sn5:'اليوم 4 · 9',
who_eb:'لمن صُمّم', who_h:'مصمَّم لكل من يستقدم <b>العمال إلى المملكة</b>.',
w1h:'أصحاب العمل', w1p:'وظّف بثقة وقلّل تكلفة البدلاء والحوادث وفشل فترة التجربة.', w1a:'تقرير قبل إصدار التأشيرة', w1b:'لوحة تحكم أو واجهة برمجية لنظام الموارد البشرية',
w2h:'وكالات الاستقدام', w2p:'قدّم مرشحين موثَّقين واكسب العقود بالدليل لا بالوعود.', w2a:'تقرير موثَّق لكل عميل', w2b:'حالات رفض أقل عند النشر', w2c:'تميّز في كل منافسة',
w3h:'الرعاية المنزلية والعمالة المنزلية', w3p:'اعرف بدقة من سيدخل منزل الأسرة قبل وصوله.', w3a:'السجل الجنائي متحقَّق منه من المصدر', w3b:'الهوية ومطابقة الوجه الحيّة', w3c:'تأكيد أصحاب العمل السابقين',
src_h:'الجهات التي نتحقق معها', src_p:'تذكر كل نتيجة في التقرير الجهة أو السجل الذي أكدها، وطريقة التأكيد.',
faq_h:'أسئلة يطرحها العملاء عادةً.',
q1:'ما سرعة ظهور النتائج؟', a1:'تعود نتائج الهوية ومطابقة الوجه وقوائم المراقبة خلال ثوانٍ. أما التحقق مع الشرطة والمؤسسات التعليمية وأصحاب العمل فيستغرق 5–10 أيام عمل.',
q2:'هل يتوافق مع الأنظمة السعودية؟', a2:'يتطلب كل فحص موافقة العامل ويُعالج وفقًا لنظام حماية البيانات الشخصية، على منصة حاصلة على شهادات ISO 27001 وISO 27018 وISO 42001 وخاضعة لفحص مستقل وفق SOC 2 Type II.',
q3:'ماذا لو لم يكن السجل متاحًا إلكترونيًا؟', a3:'يتحقق منه شركاء محليون معتمدون مع الجهة المُصدِرة ميدانيًا، ويوضح التقرير طريقة التحقق بالضبط.',
q4:'كيف يتكامل مع أنظمتنا؟', a4:'ابدأ عبر لوحة التحكم من اليوم الأول، أو اربطه عبر واجهة برمجية بنظام الموارد البشرية أو الاستقدام لديك.',
ft_copy:'© 2026 علم. جميع الحقوق محفوظة.',
lg_a:'<b>Vetted Worker</b> خدمة تقدّمها شركة علم ("علم") لشركات القوى العاملة والاستقدام في المملكة العربية السعودية. وتُقدَّم خدمات التحقق من الهوية والمستندات والخلفية، ومصادر البيانات، والمنصة التقنية من قِبل شركة Youverify Inc. ("يوفيرايفاي")، شريك علم في البيانات والتحقق وإحدى الشركات في محفظة علم الاستثمارية.',
lg_b:'<b>الأمن.</b> نظام إدارة أمن المعلومات لدى يوفيرايفاي حاصل على شهادة ISO/IEC 27001، وحماية البيانات الشخصية في البيئات السحابية العامة حاصلة على شهادة ISO/IEC 27018، ونظام إدارة الذكاء الاصطناعي حاصل على شهادة ISO/IEC 42001، وتخضع ضوابطها لفحص مستقل بموجب تقرير SOC 2 Type II. والشهادات والتقارير متاحة للعملاء عند الطلب.',
lg_c:'<b>حماية البيانات.</b> تُعالج البيانات الشخصية بموافقة العامل فقط، ولأغراض الفحوصات المطلوبة فقط، وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية والأنظمة المعمول بها في بلد العامل. ويمكن للعامل معرفة من اطّلع على ملفه وسحب موافقته في أي وقت.',
lg_d:'<b>التقارير.</b> تعكس تقارير موثوقية العامل المعلومات الواردة من الجهات المُصدِرة والسجلات وأصحاب العمل والشركاء المحليين المعتمدين وقت إجراء الفحص. وهي تدعم قرار التوظيف لدى صاحب العمل ولا تحلّ محله، ولا تُعد استشارة قانونية أو استشارة في شؤون الهجرة. وتختلف الفحوصات والتغطية ومدة الإنجاز بحسب الدولة ومدى توفر كل مصدر.',
lg_e:'علم وشعار علم علامتان تجاريتان لشركة علم، ويوفيرايفاي علامة تجارية لشركة Youverify Inc. وتُذكر أسماء الجهات والسجلات والبرامج لبيان مكان إجراء الفحص فقط، ولا يعني ذكرها تأييدها للخدمة. والأشخاص والنتائج المعروضة في هذا الموقع أمثلة افتراضية.', ft_note:'تستخدم الأمثلة عمالًا افتراضيين. تُعالج بيانات العمال بموافقتهم وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية.'
};
var MSG = {
  en:{copied:'Copied', copyFail:'Select and copy', errReq:'Please complete the highlighted fields and confirm worker consent.', errMail:'Enter a valid work email, for example name@company.sa.', pilotTag:'Pilot corridor · up to 10 working days', laterTag:'Up to 14 working days', title:'Vetted Worker by Elm', langBtn:'العربية', langAria:'Switch language to Arabic', sumHead:'Vetted Worker pilot request'},
  ar:{copied:'تم النسخ', copyFail:'حدّد النص وانسخه', errReq:'يرجى استكمال الحقول المحددة وتأكيد موافقة العمال.', errMail:'أدخل بريدًا إلكترونيًا صحيحًا للعمل، مثل name@company.sa.', pilotTag:'ممر التجربة · حتى 10 أيام عمل', laterTag:'حتى 14 يوم عمل', title:'Vetted Worker من علم', langBtn:'English', langAria:'التبديل إلى الإنجليزية', sumHead:'طلب تجربة Vetted Worker'}
};

/* ---------- Coverage data (Elm client overview v3) ---------- */
var CHECKS = [
  {en:'Identity', ar:'الهوية'},
  {en:'Police clearance', ar:'شهادة حسن السيرة'},
  {en:'Last employer', ar:'آخر صاحب عمل'},
  {en:'Trade and education', ar:'المؤهلات المهنية والتعليمية'},
  {en:'Agency and contract', ar:'الوكالة والعقد'},
  {en:'Medical, sanctions, SVP', ar:'الطبي والعقوبات وSVP'}
];
var MED = [['dig','Wafid · lists · SVP','وافد · القوائم · SVP']];
var COUNTRIES = [
  {k:'in', pilot:true, x:274.5, y:175, lx:0, ly:24, a:'middle', rows:[
    [['dig','Passport, Aadhaar via DigiLocker','الجواز، وآدهار عبر DigiLocker']],
    [['dig','Court records search','البحث في سجلات المحاكم'],['con','Police-station check','تحقق من مركز الشرطة']],
    [['con','Employer; EPFO where shared','صاحب العمل؛ وEPFO عند إتاحته']],
    [['dig','ITI and board certificates via DigiLocker','شهادات ITI والمجالس عبر DigiLocker']],
    [['dig','eMigrate register','سجل eMigrate']], MED]},
  {k:'pk', pilot:false, x:226.5, y:96.7, lx:0, ly:-14, a:'middle', rows:[
    [['dig','Passport, CNIC (NADRA)','الجواز، وبطاقة CNIC (نادرا)']],
    [['aut','Police character certificate','شهادة حسن السيرة من الشرطة']],
    [['con','Employer confirmation','تأكيد صاحب العمل']],
    [['con','NAVTTC, boards, HEC','NAVTTC والمجالس وHEC']],
    [['dig','Bureau of Emigration','مكتب الهجرة']], MED]},
  {k:'bd', pilot:false, x:331.5, y:152.5, lx:12, ly:4, a:'start', rows:[
    [['dig','e-Passport; NID match via authorised route','الجواز الإلكتروني؛ ومطابقة الهوية الوطنية عبر مسار معتمد']],
    [['aut','Online police clearance','شهادة حسن السيرة الإلكترونية']],
    [['con','Employer, via agency','صاحب العمل، عبر الوكالة']],
    [['con','BTEB, education boards','BTEB ومجالس التعليم']],
    [['dig','BMET','BMET']], MED]},
  {k:'ph', pilot:true, x:489, y:241.7, lx:-2, ly:-14, a:'end', rows:[
    [['dig','Passport, PhilSys QR and registry','الجواز، ورمز PhilSys والسجل']],
    [['aut','NBI clearance','شهادة NBI']],
    [['con','Employer; SSS where shared','صاحب العمل؛ وSSS عند إتاحته']],
    [['dig','TESDA certificates, PRC licences','شهادات TESDA وتراخيص PRC']],
    [['dig','DMW register, OFW Pass','سجل وزارة العمال المهاجرين وتصريح OFW']], MED]},
  {k:'eg', pilot:false, x:34, y:126.7, lx:-10, ly:24, a:'start', rows:[
    [['dig','Passport, national ID','الجواز والهوية الوطنية']],
    [['aut','Criminal record certificate','صحيفة الحالة الجنائية']],
    [['con','Employer; social insurance','صاحب العمل؛ والتأمينات الاجتماعية']],
    [['con','Awarding institution','الجهة المانحة']],
    [['con','Ministry of Labour','وزارة العمل']], MED]}
];
var NAMES = {in:{en:'India',ar:'الهند'}, pk:{en:'Pakistan',ar:'باكستان'}, bd:{en:'Bangladesh',ar:'بنغلاديش'}, ph:{en:'Philippines',ar:'الفلبين'}, eg:{en:'Egypt',ar:'مصر'}};
var ROUTE = {dig:{en:'Digital',ar:'رقمي'}, aut:{en:'Authenticated',ar:'موثَّق'}, con:{en:'Confirmed',ar:'مؤكَّد'}};
var RY = {x:113.5, y:144.2};
var state = {lang:'en', country:'ph'};

/* ---------- Isometric corridor map ---------- */
[].slice.call(document.querySelectorAll('#isomap .pillar')).forEach(function(g){
  g.addEventListener('click',function(){select(g.dataset.k,true)});
  g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();select(g.dataset.k,true)}});
});
function sizeLabels(){
  [].slice.call(document.querySelectorAll('#isomap .lbl')).forEach(function(l){
    var t=l.querySelector('text'), p=l.querySelector('.lb'); var w=0;
    try{w=t.getComputedTextLength();}catch(e){w=t.textContent.length*6.5;}
    var hw=w/2+9, h=11, c=5;
    p.setAttribute('points',[(-hw+c)+','+(-h),hw+','+(-h),hw+','+(h-c),(hw-c)+','+h,(-hw)+','+h,(-hw)+','+(-h+c)].join(' '));
  });
}
function mapLang(L){
  [].slice.call(document.querySelectorAll('#isomap [data-country]')).forEach(function(t){t.textContent=NAMES[t.getAttribute('data-country')][L];});
  [].slice.call(document.querySelectorAll('#isomap .ghost text')).forEach(function(t){t.textContent=t.getAttribute('data-'+L);});
  var ry=document.querySelector('#isomap [data-i18n-svg="riyadh"]'); if(ry) ry.textContent=L==='ar'?'الرياض':'Riyadh';
  sizeLabels();
}

function renderCoverage(){
  var L=state.lang, tabs=document.getElementById('tabs'), tbl=document.getElementById('ctable');
  tabs.innerHTML='';
  COUNTRIES.forEach(function(c){
    var b=document.createElement('button'); b.type='button'; b.className='tab'; b.setAttribute('role','tab');
    b.id='tab-'+c.k; b.setAttribute('aria-selected', String(c.k===state.country)); b.textContent=NAMES[c.k][L];
    b.addEventListener('click',function(){select(c.k,false)}); tabs.appendChild(b);
  });
  var c=COUNTRIES.filter(function(x){return x.k===state.country})[0];
  var html='<div class="crow" style="background:var(--mist)"><span class="ck">'+NAMES[c.k][L]+'</span><span class="src">'+(c.pilot?MSG[L].pilotTag:MSG[L].laterTag)+'</span><span></span></div>';
  c.rows.forEach(function(row,i){
    row.forEach(function(r,j){
      html+='<div class="crow"><span class="ck">'+(j===0?CHECKS[i][L]:'')+'</span><span class="src">'+(L==='ar'?r[2]:r[1])+'</span><span class="pill '+r[0]+'">'+ROUTE[r[0]][L]+'</span></div>';
    });
  });
  tbl.innerHTML=html; tbl.setAttribute('aria-labelledby','tab-'+c.k);
  document.querySelectorAll('#isomap .pillar').forEach(function(n){ var on=n.dataset.k===state.country; n.classList.toggle('on',on); n.setAttribute('aria-label',NAMES[n.dataset.k][L]); n.setAttribute('aria-pressed',String(on)); });
  document.querySelectorAll('#isomap .route,#isomap .pkt').forEach(function(a){a.classList.toggle('on', a.dataset.k===state.country)});
  mapLang(L);
}
function select(k,fromMap){state.country=k; renderCoverage(); if(fromMap){var t=document.getElementById('tab-'+k); if(t) t.focus({preventScroll:true});}}

/* ---------- i18n ---------- */
var EN={};
var i18nEls=[].slice.call(document.querySelectorAll('[data-i18n]'));
i18nEls.forEach(function(el){var k=el.dataset.i18n; if(!(k in EN)) EN[k]=el.innerHTML;});
function setLang(l){
  state.lang=l;
  var root=document.documentElement;
  root.lang=l==='ar'?'ar':'en-GB'; root.dir=l==='ar'?'rtl':'ltr';
  // Nuxt's head manager owns <html lang dir> and the title; app.vue keeps it in step.
  document.dispatchEvent(new CustomEvent('vw:lang',{detail:l}));
  i18nEls.forEach(function(el){var k=el.dataset.i18n; el.innerHTML=(l==='ar' && AR[k]!=null)?AR[k]:EN[k];});
  document.getElementById('langLabel').textContent=MSG[l].langBtn;
  document.getElementById('langLabel').className=l==='ar'?'':'ar';
  document.getElementById('langBtn').setAttribute('aria-label',MSG[l].langAria);
  document.title=MSG[l].title;
  renderCoverage(); renderSources(); calc(); rLabel();
  try{localStorage.setItem('vw-lang',l)}catch(e){}
}
document.getElementById('langBtn').addEventListener('click',function(){setLang(state.lang==='ar'?'en':'ar')});

/* ---------- Hero: live identity check over the illustration ---------- */
var scene=document.getElementById('scene'), scCount=document.getElementById('scCount'), scBar=document.getElementById('scBar'), scPct=document.getElementById('scPct')||{textContent:''};
var scItems=[].slice.call(document.querySelectorAll('#scList li')), scTime=document.getElementById('scTime');
function riyadhTime(){try{scTime.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Riyadh',hour:'2-digit',minute:'2-digit'}).format(new Date());}catch(e){}}
riyadhTime(); setInterval(riyadhTime,30000);
var heroVisible=true, running=false;
function cycle(){
  if(running||!heroVisible||document.hidden) return; running=true;
  scene.classList.remove('done'); scene.classList.add('scanning','reset'); setTimeout(function(){scene.classList.remove('reset')},650);
  scItems.forEach(function(li){li.classList.add('pending')});
  scCount.textContent='0'; scBar.style.width='0%'; scPct.textContent='0';
  var t0=performance.now();
  (function tick(now){var p=Math.min(1,(now-t0)/1500); scPct.textContent=String(Math.round(96*(1-Math.pow(1-p,3)))); if(p<1) requestAnimationFrame(tick);})(t0);
  for(var i=1;i<=7;i++){(function(i){setTimeout(function(){scCount.textContent=String(i); scBar.style.width=(i/7*100)+'%';}, 300+i*230);})(i);}
  scItems.forEach(function(li,i){setTimeout(function(){li.classList.remove('pending')}, 1100+i*380);});
  setTimeout(function(){scene.classList.remove('scanning'); scene.classList.add('done'); running=false;}, 2400);
}
if(!reduce){
  if('IntersectionObserver' in window){ new IntersectionObserver(function(es){heroVisible=es[0].isIntersecting}).observe(scene); }
  setTimeout(cycle, 2200); setInterval(cycle, 9000);
}

/* ---------- Cost calculator ---------- */
var cH=document.getElementById('cHires'), cC=document.getElementById('cCost'), cF=document.getElementById('cFail');
var cTotal=document.getElementById('cTotal'), cSub=document.getElementById('cSub'), cCap=document.getElementById('cCap'), cGrid=document.getElementById('cGrid');
for(var g=0; g<100; g++){cGrid.appendChild(document.createElement('i'));}
var cells=[].slice.call(cGrid.children);
function n(v){v=parseFloat(v); return isFinite(v)&&v>0?v:0;}
function fmt(v){return Math.round(v).toLocaleString('en-GB');}
function calc(){
  var h=n(cH.value), c=n(cC.value), f=Math.min(100,n(cF.value));
  var failed=Math.round(h*f/100), total=failed*c, L=state.lang;
  cTotal.textContent = L==='ar' ? fmt(total)+' ريال' : 'SAR '+fmt(total);
  cSub.textContent = L==='ar' ? fmt(failed)+' حالة استقدام فاشلة × '+fmt(c)+' ريال' : fmt(failed)+' failed placement'+(failed===1?'':'s')+' × SAR '+fmt(c);
  var per=Math.round(f);
  cCap.textContent = L==='ar' ? 'من كل 100 عامل، يفشل استقدام '+per : 'Out of every 100 hires, '+per+' fail';
  cells.forEach(function(el,i){el.classList.toggle('f', i<per)});
}
[cH,cC,cF].forEach(function(el){el.addEventListener('input',calc)});

/* ---------- Step nav follows the story ---------- */
var navLinks=[].slice.call(document.querySelectorAll('#stepnav a'));
if('IntersectionObserver' in window){
  var stIO=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ var idx=+e.target.id.slice(2)-1; navLinks.forEach(function(a,i){a.classList.toggle('on',i===idx); a.classList.toggle('past',i<idx);}); } })},{rootMargin:'-45% 0px -50% 0px'});
  for(var s=1;s<=5;s++){var el=document.getElementById('st'+s); if(el) stIO.observe(el);}
}

/* ---------- Sources marquee ---------- */
var SRC=[
 ['sa','Elm','علم','Saudi-side data exchange and platform','تبادل البيانات والمنصة على الجانب السعودي','dig'],
 ['sa','Absher, Ministry of Interior','أبشر، وزارة الداخلية','Saudi identity and residency history','الهوية وسجل الإقامة في المملكة','dig'],
 ['sa','Qiwa, Takamol','قوى، تكامل','SVP skills verification result','نتيجة الفحص المهني SVP','dig'],
 ['in','eMigrate, MEA','eMigrate، وزارة الشؤون الخارجية','Recruiting agent and emigration record','وكيل الاستقدام وسجل الهجرة','dig'],
 ['in','UIDAI, Aadhaar','UIDAI، آدهار','National identity','الهوية الوطنية','dig'],
 ['in','DigiLocker, MeitY','DigiLocker، وزارة الإلكترونيات وتقنية المعلومات','ITI and board certificates','شهادات ITI والمجالس','dig'],
 ['pk','NADRA','نادرا','CNIC national identity','بطاقة الهوية الوطنية CNIC','dig'],
 ['pk','Bureau of Emigration','مكتب الهجرة','Promoter licence and emigration','ترخيص وكيل التوظيف والهجرة','dig'],
 ['pk','NAVTTC','NAVTTC','Trade and skills certificates','الشهادات المهنية والمهارية','con'],
 ['bd','BMET','BMET','Recruiting agency and emigration','وكالة الاستقدام والهجرة','dig'],
 ['bd','Election Commission, NID Wing','لجنة الانتخابات، قسم الهوية الوطنية','National ID match','مطابقة الهوية الوطنية','dig'],
 ['bd','Bangladesh Police','شرطة بنغلاديش','Police clearance certificate','شهادة حسن السيرة','aut'],
 ['ph','Department of Migrant Workers','وزارة العمال المهاجرين','Agency licence and OFW record','ترخيص الوكالة وسجل العامل','dig'],
 ['ph','Professional Regulation Commission','هيئة التنظيم المهني','Professional licences','التراخيص المهنية','dig'],
 ['ph','National Bureau of Investigation','المكتب الوطني للتحقيقات','NBI police clearance','شهادة حسن السيرة NBI','aut'],
 ['eg','Ministry of Interior, Civil Status','وزارة الداخلية، الأحوال المدنية','National identity','الهوية الوطنية','dig'],
 ['eg','Ministry of Labour','وزارة العمل','Agency and contract','الوكالة والعقد','con'],
 ['eg','Supreme Council of Universities','المجلس الأعلى للجامعات','Degrees and diplomas','الشهادات الجامعية والدبلومات','con']
];
var SA={en:'Saudi Arabia',ar:'المملكة العربية السعودية'};
function renderSources(){
  var L=state.lang, tr=document.getElementById('mqTrack'), html='';
  function card(r,hidden){var cty=r[0]==='sa'?SA[L]:NAMES[r[0]][L];
    return '<div class="mq-card"'+(hidden?' aria-hidden="true"':'')+'><span class="cty">'+cty+'</span><b>'+(L==='ar'?r[2]:r[1])+'</b><span class="w">'+(L==='ar'?r[4]:r[3])+'</span><span class="pill '+r[5]+'">'+ROUTE[r[5]][L]+'</span></div>';}
  SRC.forEach(function(r){html+=card(r,false)}); if(!reduce){SRC.forEach(function(r){html+=card(r,true)});}
  tr.innerHTML=html;
}

/* ---------- Stepper ---------- */
var stTabs=[].slice.call(document.querySelectorAll('#stepper [role="tab"]')), stPanels=[].slice.call(document.querySelectorAll('#stepper [role="tabpanel"]'));
var stage=document.querySelector('#stepper .st-stage'), stIdx=0, stTimer=null, stAuto=!reduce, stVisible=false;
function showStep(i,user){
  stIdx=(i+stTabs.length)%stTabs.length;
  stTabs.forEach(function(b,j){b.setAttribute('aria-selected',String(j===stIdx)); b.tabIndex=j===stIdx?0:-1;});
  stPanels.forEach(function(p,j){p.hidden=j!==stIdx;});
  if(user){stAuto=false; stage.classList.remove('run');}
  if(stAuto&&stVisible){stage.classList.remove('run'); void stage.offsetWidth; stage.classList.add('run');}
}
stTabs.forEach(function(b,j){
  b.addEventListener('click',function(){showStep(j,true)});
  b.addEventListener('keydown',function(e){var k=e.key, rtl=document.documentElement.dir==='rtl';
    if(k==='ArrowDown'||k===(rtl?'ArrowLeft':'ArrowRight')){e.preventDefault();showStep(stIdx+1,true);stTabs[stIdx].focus();}
    if(k==='ArrowUp'||k===(rtl?'ArrowRight':'ArrowLeft')){e.preventDefault();showStep(stIdx-1,true);stTabs[stIdx].focus();}});
});
if(stAuto){
  setInterval(function(){ if(stAuto&&stVisible&&!document.hidden) showStep(stIdx+1,false); },6000);
  if('IntersectionObserver' in window){ new IntersectionObserver(function(es){stVisible=es[0].isIntersecting; if(stVisible&&stAuto){stage.classList.remove('run'); void stage.offsetWidth; stage.classList.add('run');}},{threshold:.4}).observe(stage); }
}
/* ---------- Report: show all lines ---------- */
var rtable=document.getElementById('rtable'), rMore=document.getElementById('rMore'), rMoreT=document.getElementById('rMoreT');
function rLabel(){var L=state.lang, col=rtable.classList.contains('collapsed'); rMoreT.textContent= col ? (L==='ar'?'عرض الفحوصات الاثني عشر':'Show all 12 checks') : (L==='ar'?'عرض أقل':'Show fewer'); rMore.setAttribute('aria-expanded',String(!col));}
rMore.addEventListener('click',function(){rtable.classList.toggle('collapsed'); rLabel();});

/* ---------- Reveal (content stays visible at rest) ---------- */
if(!reduce && 'IntersectionObserver' in window){
  var rvs=[].slice.call(document.querySelectorAll('.rv'));
  var vh=window.innerHeight||800;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre'); io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px'});
  rvs.forEach(function(el){ if(el.getBoundingClientRect().top>vh){el.classList.add('pre'); io.observe(el);} });
}

/* ---------- Copy helpers ---------- */
function flash(btn,txt){var o=btn.textContent; btn.textContent=txt; setTimeout(function(){btn.textContent=o},1600);}
function selectText(el){try{if(el.select){el.focus();el.select();return}var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);}catch(e){}}
function copy(text,btn,fallbackEl){
  var L=state.lang;
  try{
    navigator.clipboard.writeText(text).then(function(){flash(btn,MSG[L].copied)},function(){selectText(fallbackEl);flash(btn,MSG[L].copyFail)});
  }catch(e){selectText(fallbackEl);flash(btn,MSG[L].copyFail)}
}
document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){copy(b.dataset.copy,b,b.previousElementSibling)})});

/* ---------- Pilot form ----------
   There is no pilot endpoint yet, so a valid request opens the visitor's email app
   addressed to the team, with the summary as the body. The done panel keeps the
   summary to copy in case the email app doesn't open. To switch to a POST later,
   replace the mailto line below and keep the validation and honeypot check. */
var PILOT_TO='vw@youverify.co';
var form=document.getElementById('pilotForm'), err=document.getElementById('f_err'), done=document.getElementById('donePanel'), dnText=document.getElementById('dnText');
function lbl(id){var l=document.querySelector('label[for="'+id+'"]'); return l?l.textContent.trim():id;}
function legend(name){var i=form.querySelector('[name="'+name+'"]'); var fs=i&&i.closest('fieldset'); return fs?fs.querySelector('legend').textContent.trim():name;}
form.addEventListener('submit',function(e){
  e.preventDefault();
  if(form.website.value) return;
  var L=state.lang, bad=[];
  ['f_co','f_name','f_mail'].forEach(function(id){var el=document.getElementById(id); var ok=el.value.trim()!==''; el.setAttribute('aria-invalid',String(!ok)); if(!ok) bad.push(el);});
  var mail=document.getElementById('f_mail'), mailOk=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail.value.trim());
  if(mail.value.trim() && !mailOk){mail.setAttribute('aria-invalid','true'); bad.push(mail);}
  var consent=document.getElementById('f_ok').checked;
  if(bad.length||!consent){err.textContent=(mail.value.trim()&&!mailOk&&bad.length===1&&consent)?MSG[L].errMail:MSG[L].errReq; err.hidden=false; (bad[0]||document.getElementById('f_ok')).focus(); return;}
  err.hidden=true;
  var roles=[].slice.call(form.querySelectorAll('[name="roles"]:checked')).map(function(i){return i.nextElementSibling.textContent.trim()});
  var cor=form.querySelector('[name="corridor"]:checked');
  var lines=[MSG[L].sumHead,'',
    lbl('f_co')+': '+form.company.value.trim(),
    lbl('f_name')+': '+document.getElementById('f_name').value.trim(),
    lbl('f_role')+': '+(form.role.value.trim()||'-'),
    lbl('f_mail')+': '+form.email.value.trim(),
    lbl('f_tel')+': '+(form.mobile.value.trim()||'-'),
    legend('corridor')+': '+(cor?cor.nextElementSibling.textContent.trim():'-'),
    legend('roles')+': '+(roles.join(', ')||'-'),
    lbl('f_n')+': '+(form.workers.value||'-'),
    lbl('f_date')+': '+(form.start.value||'-'),
    '', document.querySelector('[data-i18n="f_ok"]').textContent.trim()];
  dnText.value=lines.join('\n');
  location.href='mailto:'+PILOT_TO+'?subject='+encodeURIComponent(MSG[L].sumHead+' · '+form.company.value.trim())+'&body='+encodeURIComponent(dnText.value);
  form.hidden=true; done.hidden=false; done.querySelector('h3').focus&&done.querySelector('h3').setAttribute('tabindex','-1'); done.querySelector('h3').focus();
});
document.getElementById('dnBack').addEventListener('click',function(){done.hidden=true; form.hidden=false; document.getElementById('f_co').focus();});
document.getElementById('dnCopy').addEventListener('click',function(){copy(dnText.value,this,dnText)});
form.querySelectorAll('input').forEach(function(i){i.addEventListener('input',function(){if(i.getAttribute('aria-invalid')==='true') i.setAttribute('aria-invalid','false')})});

/* ---------- Boot ---------- */
var saved='en'; try{saved=localStorage.getItem('vw-lang')||'en'}catch(e){}
if(location.hash==='#ar') saved='ar';
try{var q=new URLSearchParams(location.search).get('lang'); if(q==='ar'||q==='en') saved=q;}catch(e){}
setLang(saved==='ar'?'ar':'en');
}
