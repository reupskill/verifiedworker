// Bilingual copy for the Verified Worker landing page.
// The Arabic was drafted alongside the design; have a native speaker review it
// (job levels and government authority names especially) before launch.

export type Lang = 'en' | 'ar'
export type Method = 'DIGITAL' | 'AUTHENTICATED' | 'CONFIRMED'

const en = {
  "navCta": "Request a pilot",
  "heroE": "ELM × YOUVERIFY · VERIFIED WORKER",
  "h1a": "Every worker arrives with a ",
  "h1b": "story",
  "h1c": ".",
  "heroP": "Juan applies from Manila at 09:12 as a caregiver for Al Rawda Home Care in Riyadh. Asif applies from Lahore the same afternoon. Identity, police record, employers and a decision — all settled before the visa. Scroll to follow both.",
  "cta1": "Request a free pilot",
  "certT": "Certified",
  "mapRiyadh": "Riyadh",
  "mapLahore": "Lahore",
  "mapManila": "Manila",
  "juan": "Juan Dela Cruz",
  "juanMeta": "Manila → Riyadh · Caregiver",
  "asif": "Asif Raza",
  "asifMeta": "Lahore → Riyadh · Electrician",
  "reviewD9": "Review · Day 9",
  "stopD4": "Stop · Day 4",
  "proceed": "Proceed",
  "bar": [
    "Invite",
    "Identity",
    "Source",
    "History",
    "Decision"
  ],
  "fict": "Fictitious workers. Real checks.",
  "gapE": "WHY IT MATTERS",
  "gapH": "The highest-volume roles are the least checked.",
  "gap": [
    {
      "h": "Documents that aren't what they seem",
      "b": "Borrowed identities, forged police certificates and bought trade certificates move through recruitment chains."
    },
    {
      "h": "Claims nobody has confirmed",
      "b": "Past employers and years of experience are usually taken on the worker's or the agent's word."
    }
  ],
  "c1l": "INVITE",
  "c1t": "Day 1 · 09:12",
  "c1a": "Five minutes on ",
  "c1b": "his own phone",
  "c1c": ".",
  "c1p": "At 09:12 Juan gets a secure link on WhatsApp. He reads exactly what will be checked, consents, photographs his passport and national ID, and takes a live selfie. No app, no agent in the room, nothing to pay.",
  "c1s1": "of the worker's time",
  "c1s2": "paid by the worker",
  "c1msg": "Al Rawda Home Care has invited you to verify your documents. It takes about 5 minutes and costs you nothing.",
  "c1steps": [
    {
      "n": "Consent given",
      "w": "09:12"
    },
    {
      "n": "Passport captured",
      "w": "09:14"
    },
    {
      "n": "National ID captured",
      "w": "09:15"
    },
    {
      "n": "Live selfie",
      "w": "09:16"
    }
  ],
  "c1note": "You can see who opens your file and withdraw consent at any time.",
  "c2l": "IDENTITY",
  "c2t": "Day 1 · 09:17",
  "c2a": "The person matches ",
  "c2b": "the passport",
  "c2c": ".",
  "c2p": "Before Juan puts his phone down, seven checks are back. At 14:41 the same checks run for Asif in Lahore — and his selfie does not match his passport photo.",
  "c2s1": "checks in seconds",
  "c2s2": "watchlists screened",
  "c2mockT": "instant checks",
  "c2done": "7 of 7 clear",
  "instant": [
    {
      "n": "Passport and PhilSys record match",
      "w": "09:16"
    },
    {
      "n": "Document authentic, 7 of 7 features",
      "w": "09:16"
    },
    {
      "n": "Live person, 96% face match",
      "w": "09:16"
    },
    {
      "n": "No duplicate identity",
      "w": "09:17"
    },
    {
      "n": "No match across 500+ watchlists",
      "w": "09:17"
    },
    {
      "n": "Wafid medical: fit",
      "w": "09:17"
    },
    {
      "n": "Agency licence active",
      "w": "09:17"
    }
  ],
  "c2alertT": "Asif Raza · face mismatch",
  "c2alertB": "Selfie does not match the passport photo. Flagged for review.",
  "c3l": "SOURCE",
  "c3t": "Days 2–6",
  "c3a": "Confirmed by ",
  "c3b": "whoever issued it",
  "c3c": ".",
  "c3p": "A certificate is only as good as its issuer. Juan's police clearance is authenticated with the NBI. Asif's police character certificate goes back to the office whose stamp it carries — and they have no record of it.",
  "c3s1": "working days",
  "c3s2": "authorities across 6 countries",
  "c3r1w": "Day 2 · Juan",
  "c3r1n": "Recruitment agency",
  "c3r1r": "Licence active on the DMW register",
  "c3r2w": "Day 4 · Asif",
  "c3r2n": "Police character certificate",
  "c3r2r": "Issuing office has no record of this certificate",
  "c3r3w": "Day 6 · Juan",
  "c3r3n": "Police clearance",
  "c3r3r": "No derogatory record · NBI certificate authentic",
  "c3r4w": "Day 7 · Juan",
  "c3r4n": "Trade certificate",
  "c3r4r": "Caregiving NC II valid on the TESDA registry",
  "mDig": "Digital",
  "mAuth": "Authenticated",
  "mConf": "Confirmed",
  "mFail": "Failed",
  "c4l": "HISTORY",
  "c4t": "Day 9",
  "c4a": "What he said, ",
  "c4b": "and what they said",
  "c4c": ".",
  "c4p": "Juan declared four years at his last employer. Their HR confirms eighteen months, in good standing and eligible for rehire. Not a reason to lose a good caregiver — but worth one question at interview.",
  "c4mockT": "Last employer · Manila",
  "c4decl": "DECLARED",
  "c4declV": "4 years",
  "c4declS": "By the worker, at invite",
  "c4conf": "CONFIRMED",
  "c4confV": "18 months",
  "c4confS": "Employer HR, by phone and email",
  "c4gulfN": "Previous Gulf employer · UAE",
  "c4gulfR": "2021–2023 confirmed, eligible for rehire",
  "c5l": "DECISION",
  "c5t": "Day 4 · Day 9",
  "c5a": "One report. ",
  "c5b": "Three outcomes",
  "c5c": ".",
  "c5p": "Every line shows what was checked, where and what came back, with the evidence pack and consent record attached. In a dashboard or by API, in Arabic and English.",
  "c5asif": "Stopped on day 4 — before a visa, a flight or a recruitment fee was committed. Face mismatch and an unverifiable police certificate, with the evidence attached.",
  "c5juan": "Report on day 9. Clear on identity, record and licence. One discrepancy on tenure. Recommended action: confirm caregiving experience at interview.",
  "c5okT": "When everything matches",
  "c5ok": "Every check agrees with the worker's documents and claims. Mobilise with confidence.",
  "lvE": "THE PLATFORM BEHIND THE STORY",
  "lvH": "Match the depth of the check to the role.",
  "levels": [
    {
      "n": "Essential",
      "time": "Hours",
      "who": "EVERY WORKER",
      "items": [
        "Identity, documents, face and liveness",
        "Duplicate identity and watchlists",
        "Wafid medical status",
        "Recruitment agency licence"
      ]
    },
    {
      "n": "Standard",
      "time": "5–10 days",
      "who": "MOST BLUE-COLLAR ROLES",
      "items": [
        "Everything in Essential",
        "Police clearance at source",
        "Last employer and Gulf employer",
        "Trade certificate and SVP"
      ]
    },
    {
      "n": "Professional",
      "time": "10–25 days",
      "who": "SKILLED AND WHITE-COLLAR",
      "items": [
        "Everything in Standard",
        "Full employment history",
        "Degree and licence at source",
        "Adverse media, Arabic and English"
      ]
    }
  ],
  "srcE": "CREDIBILITY OF THE DATA SOURCES",
  "srcH": "Where the evidence comes from.",
  "srcP": "Every line in a Worker Trust Report traces back to a named authority, registry or accredited programme — and says how it was checked.",
  "srcPanelSub": "3 authorities",
  "srcFoot": "Where a record isn't online, accredited local partners verify it on the ground, and the report says so.",
  "countries": [
    "Saudi Arabia",
    "India",
    "Pakistan",
    "Bangladesh",
    "Philippines",
    "Egypt"
  ],
  "auth": [
    [
      {
        "n": "Elm",
        "v": "Saudi-side data exchange and platform",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Absher, Ministry of Interior",
        "v": "Saudi identity and residency history",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Qiwa, Takamol",
        "v": "SVP skills verification result",
        "m": "DIGITAL" as Method
      }
    ],
    [
      {
        "n": "eMigrate, MEA",
        "v": "Recruiting agent and emigration record",
        "m": "DIGITAL" as Method
      },
      {
        "n": "UIDAI, Aadhaar",
        "v": "National identity",
        "m": "DIGITAL" as Method
      },
      {
        "n": "DigiLocker, MeitY",
        "v": "ITI and board certificates",
        "m": "DIGITAL" as Method
      }
    ],
    [
      {
        "n": "NADRA",
        "v": "CNIC national identity",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Bureau of Emigration",
        "v": "Promoter licence and emigration",
        "m": "DIGITAL" as Method
      },
      {
        "n": "NAVTTC",
        "v": "Trade and skills certificates",
        "m": "CONFIRMED" as Method
      }
    ],
    [
      {
        "n": "BMET",
        "v": "Recruiting agency and emigration",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Election Commission, NID Wing",
        "v": "National ID match",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Bangladesh Police",
        "v": "Police clearance certificate",
        "m": "AUTHENTICATED" as Method
      }
    ],
    [
      {
        "n": "Department of Migrant Workers",
        "v": "Agency licence and OFW record",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Professional Regulation Commission",
        "v": "Professional licences",
        "m": "DIGITAL" as Method
      },
      {
        "n": "National Bureau of Investigation",
        "v": "NBI police clearance",
        "m": "AUTHENTICATED" as Method
      }
    ],
    [
      {
        "n": "Ministry of Interior, Civil Status",
        "v": "National identity",
        "m": "DIGITAL" as Method
      },
      {
        "n": "Ministry of Labour",
        "v": "Agency and contract",
        "m": "CONFIRMED" as Method
      },
      {
        "n": "Supreme Council of Universities",
        "v": "Degrees and diplomas",
        "m": "CONFIRMED" as Method
      }
    ]
  ],
  "trust": [
    {
      "h": "Pays for itself",
      "b": "Runs before the recruitment fee, visa, flights and a replacement are committed."
    },
    {
      "h": "Fair to the worker",
      "b": "Workers see what is checked, consent first and pay nothing."
    },
    {
      "h": "Secure and lawful",
      "b": "Saudi PDPL aligned, on a platform certified to SOC 2 Type II, ISO 27001 and ISO 27018."
    }
  ],
  "pilotE": "PROOF OF CONCEPT",
  "pilotH": "Confirm your pilot.",
  "pilotP": "Free of charge, no obligation to buy, and live within five working days of sign-off.",
  "provH": "You provide",
  "provB": "Up to 20 workers from your next intake from the Philippines or India, each of whom agrees to be checked. A named contact in your recruitment team or agency.",
  "recvH": "You receive",
  "recvB": "A Worker Trust Report for every worker within 10 working days of capture, with its evidence pack. A readout at day 30 showing what we found and which hiring decisions it changed.",
  "timeline": [
    {
      "k": "Day 0",
      "v": "Submit this form"
    },
    {
      "k": "Within 5 days",
      "v": "Workers receive their link"
    },
    {
      "k": "Weeks 1–3",
      "v": "Reports as each completes"
    },
    {
      "k": "Day 30",
      "v": "Readout and next steps"
    }
  ],
  "formH": "Your details",
  "formS": "We reply within one working day.",
  "f_company": "Company",
  "f_name": "Contact name",
  "f_role": "Role",
  "f_email": "Work email",
  "f_mobile": "Mobile",
  "f_corridor": "Corridor",
  "f_roles": "Roles",
  "f_count": "Number of workers (up to 20)",
  "f_start": "Preferred start date",
  "corridors": [
    "Philippines",
    "India"
  ],
  "roles": [
    "Driver",
    "Technician",
    "Cleaning and facilities",
    "Hospitality",
    "Construction",
    "Other"
  ],
  "f_agree": "I confirm workers will be asked for consent before any check runs, in line with Saudi Arabia's Personal Data Protection Law.",
  "f_submit": "Request my pilot",
  "f_privacy": "Worker data is used only for this pilot and deleted at your request after the readout.",
  "errReq": "Please complete company, contact name, a valid email, a corridor and the consent confirmation.",
  "errCount": "Number of workers must be between 1 and 20.",
  "okH": "Pilot request received",
  "okBody": "Thank you, {name}. Your email app has opened with your request to vw@youverify.co. Send it, and your Elm and Youverify team will reply to {email} within one working day to confirm your start date.",
  "okAgain": "Submit another request",
  "contactE": "CONTACT US",
  "footTag": "Fraud and AML compliance for every market.",
  "footCols": [
    {
      "h": "Solution",
      "links": [
        {
          "l": "Customer onboarding",
          "href": "https://youverify.co/en/solution/customer-onboarding"
        },
        {
          "l": "Fraud insights",
          "href": "https://youverify.co/en/solution/fraud-insights"
        },
        {
          "l": "Transaction monitoring",
          "href": "https://youverify.co/en/solution/transaction-monitoring"
        }
      ]
    },
    {
      "h": "Company",
      "links": [
        {
          "l": "About us",
          "href": "https://youverify.co/en/company/about-us"
        },
        {
          "l": "Compliance certifications",
          "href": "https://youverify.co/en/company/compliance-certifications"
        },
        {
          "l": "Contact us",
          "href": "https://youverify.co/en/company/contact-us"
        }
      ]
    },
    {
      "h": "Legal",
      "links": [
        {
          "l": "Privacy policy",
          "href": "https://youverify.co/en/privacy-policy"
        },
        {
          "l": "Terms of use",
          "href": "https://youverify.co/en/terms-of-use"
        },
        {
          "l": "Information security",
          "href": "https://youverify.co/en/information-security-policy"
        }
      ]
    }
  ],
  "copy": "©2026 Youverify. All rights reserved.",
  "partner": "Verified Worker is delivered by Elm and Youverify.",
  "mailFallback": "Email app didn't open?",
  "mailFallbackLink": "Send it to vw@youverify.co",
  "mailSubject": "Verified Worker pilot request · {company}",
  "f_sending": "Opening your email app…",
  "langLabel": "Language"
}

export type Copy = typeof en

const ar: Copy = {
  "navCta": "اطلب تجربة",
  "heroE": "علم × يوفيرايفاي · Verified Worker",
  "h1a": "لكل عامل ",
  "h1b": "قصة",
  "h1c": ".",
  "heroP": "يتقدّم خوان من مانيلا الساعة 09:12 للعمل مقدّم رعاية لدى الروضة للرعاية المنزلية في الرياض. ويتقدّم آصف من لاهور بعد الظهر. الهوية والسجل الجنائي وأصحاب العمل والقرار — كل ذلك يُحسم قبل التأشيرة. مرّر لتتابع القصتين.",
  "cta1": "اطلب تجربة مجانية",
  "certT": "معتمد",
  "mapRiyadh": "الرياض",
  "mapLahore": "لاهور",
  "mapManila": "مانيلا",
  "juan": "خوان ديلا كروز",
  "juanMeta": "مانيلا ← الرياض · مقدّم رعاية",
  "asif": "آصف رضا",
  "asifMeta": "لاهور ← الرياض · كهربائي",
  "reviewD9": "مراجعة · اليوم 9",
  "stopD4": "إيقاف · اليوم 4",
  "proceed": "متابعة",
  "bar": [
    "الدعوة",
    "الهوية",
    "المصدر",
    "السجل",
    "القرار"
  ],
  "fict": "عمال افتراضيون. فحوصات حقيقية.",
  "gapE": "لماذا يهم ذلك",
  "gapH": "الوظائف الأعلى عددًا هي الأقل تحققًا.",
  "gap": [
    {
      "h": "مستندات ليست كما تبدو",
      "b": "هويات مستعارة وشهادات حسن سيرة مزوّرة وشهادات مهنية مشتراة تمر عبر سلاسل الاستقدام."
    },
    {
      "h": "ادعاءات لم يؤكدها أحد",
      "b": "أصحاب العمل السابقون وسنوات الخبرة تُؤخذ عادةً بكلمة العامل أو الوكيل."
    }
  ],
  "c1l": "الدعوة",
  "c1t": "اليوم 1 · 09:12",
  "c1a": "خمس دقائق على ",
  "c1b": "هاتفه",
  "c1c": ".",
  "c1p": "في الساعة 09:12 يصل إلى خوان رابط آمن عبر واتساب. يقرأ بالضبط ما سيُفحص، ويوافق، ويصوّر جوازه وهويته الوطنية، ويلتقط صورة ذاتية حيّة. دون تطبيق، ودون وكيل في الغرفة، ودون أي رسوم.",
  "c1s1": "من وقت العامل",
  "c1s2": "يدفعها العامل",
  "c1msg": "دعتك الروضة للرعاية المنزلية للتحقق من مستنداتك. يستغرق ذلك نحو 5 دقائق ولا يكلّفك شيئًا.",
  "c1steps": [
    {
      "n": "تمت الموافقة",
      "w": "09:12"
    },
    {
      "n": "تصوير الجواز",
      "w": "09:14"
    },
    {
      "n": "تصوير الهوية الوطنية",
      "w": "09:15"
    },
    {
      "n": "صورة ذاتية حيّة",
      "w": "09:16"
    }
  ],
  "c1note": "يمكنك معرفة من يطّلع على ملفك وسحب موافقتك في أي وقت.",
  "c2l": "الهوية",
  "c2t": "اليوم 1 · 09:17",
  "c2a": "الشخص يطابق ",
  "c2b": "الجواز",
  "c2c": ".",
  "c2p": "قبل أن يضع خوان هاتفه، تعود سبعة فحوصات. وفي الساعة 14:41 تُجرى الفحوصات نفسها لآصف في لاهور — فإذا بصورته الذاتية لا تطابق صورة جوازه.",
  "c2s1": "فحوصات في ثوانٍ",
  "c2s2": "قائمة مراقبة",
  "c2mockT": "الفحوصات الفورية",
  "c2done": "7 من 7 سليمة",
  "instant": [
    {
      "n": "تطابق الجواز وسجل PhilSys",
      "w": "09:16"
    },
    {
      "n": "المستند أصلي، 7 من 7 خصائص",
      "w": "09:16"
    },
    {
      "n": "شخص حقيقي، تطابق الوجه 96%",
      "w": "09:16"
    },
    {
      "n": "لا هوية مكررة",
      "w": "09:17"
    },
    {
      "n": "لا تطابق في أكثر من 500 قائمة",
      "w": "09:17"
    },
    {
      "n": "الفحص الطبي (وافد): لائق",
      "w": "09:17"
    },
    {
      "n": "ترخيص الوكالة ساري",
      "w": "09:17"
    }
  ],
  "c2alertT": "آصف رضا · عدم تطابق الوجه",
  "c2alertB": "الصورة الذاتية لا تطابق صورة الجواز. أُحيل للمراجعة.",
  "c3l": "المصدر",
  "c3t": "الأيام 2–6",
  "c3a": "مؤكَّد مع ",
  "c3b": "الجهة التي أصدرته",
  "c3c": ".",
  "c3p": "قيمة الشهادة من قيمة مُصدِرها. تُوثَّق شهادة حسن سيرة خوان مع المكتب الوطني للتحقيقات. أما شهادة آصف فتعود إلى المكتب الذي يحمل ختمه — ولا يوجد لديه أي سجل لها.",
  "c3s1": "أيام عمل",
  "c3s2": "جهة في 6 دول",
  "c3r1w": "اليوم 2 · خوان",
  "c3r1n": "وكالة الاستقدام",
  "c3r1r": "الترخيص ساري في سجل وزارة العمال المهاجرين",
  "c3r2w": "اليوم 4 · آصف",
  "c3r2n": "شهادة حسن السيرة",
  "c3r2r": "لا يوجد سجل لهذه الشهادة لدى الجهة المُصدِرة",
  "c3r3w": "اليوم 6 · خوان",
  "c3r3n": "شهادة حسن السيرة",
  "c3r3r": "لا سجل سلبي · شهادة NBI أصلية",
  "c3r4w": "اليوم 7 · خوان",
  "c3r4n": "الشهادة المهنية",
  "c3r4r": "شهادة الرعاية NC II سارية في سجل TESDA",
  "mDig": "رقمي",
  "mAuth": "موثَّق",
  "mConf": "مؤكَّد",
  "mFail": "فشل",
  "c4l": "السجل",
  "c4t": "اليوم 9",
  "c4a": "ما قاله هو، ",
  "c4b": "وما قالوه هم",
  "c4c": ".",
  "c4p": "صرّح خوان بأربع سنوات لدى آخر صاحب عمل. وتؤكد الموارد البشرية لديهم ثمانية عشر شهرًا، بسجل جيد وأهلية لإعادة التوظيف. ليس سببًا لخسارة مقدّم رعاية جيد — لكنه يستحق سؤالًا في المقابلة.",
  "c4mockT": "آخر صاحب عمل · مانيلا",
  "c4decl": "المُصرَّح به",
  "c4declV": "4 سنوات",
  "c4declS": "من العامل عند الدعوة",
  "c4conf": "المؤكَّد",
  "c4confV": "18 شهرًا",
  "c4confS": "الموارد البشرية، هاتفيًا وبالبريد",
  "c4gulfN": "صاحب العمل الخليجي السابق · الإمارات",
  "c4gulfR": "2021–2023 مؤكَّد، مؤهل لإعادة التوظيف",
  "c5l": "القرار",
  "c5t": "اليوم 4 · اليوم 9",
  "c5a": "تقرير واحد. ",
  "c5b": "ثلاث نتائج",
  "c5c": ".",
  "c5p": "يوضح كل سطر ما فُحص وأين وما النتيجة، مع حزمة الأدلة وسجل الموافقة. عبر لوحة التحكم أو واجهة برمجية، بالعربية والإنجليزية.",
  "c5asif": "أُوقف في اليوم 4 — قبل الالتزام بتأشيرة أو رحلة أو رسوم استقدام. عدم تطابق الوجه وشهادة حسن سيرة يتعذّر التحقق منها، مع الأدلة مرفقة.",
  "c5juan": "التقرير في اليوم 9. سليم من حيث الهوية والسجل والترخيص. اختلاف واحد في مدة الخدمة. الإجراء الموصى به: تأكيد خبرة الرعاية في المقابلة.",
  "c5okT": "حين يتطابق كل شيء",
  "c5ok": "كل الفحوصات تتفق مع مستندات العامل وادعاءاته. استقدم بثقة.",
  "lvE": "المنصة وراء القصة",
  "lvH": "طابق عمق الفحص مع طبيعة الوظيفة.",
  "levels": [
    {
      "n": "الأساسي",
      "time": "ساعات",
      "who": "لكل عامل",
      "items": [
        "الهوية والمستندات والوجه وكشف الحيوية",
        "الهويات المكررة وقوائم المراقبة",
        "حالة الفحص الطبي (وافد)",
        "ترخيص وكالة الاستقدام"
      ]
    },
    {
      "n": "القياسي",
      "time": "5–10 أيام",
      "who": "معظم الوظائف الحرفية",
      "items": [
        "كل ما في المستوى الأساسي",
        "شهادة حسن السيرة من المصدر",
        "آخر صاحب عمل وصاحب العمل الخليجي",
        "الشهادة المهنية واختبار SVP"
      ]
    },
    {
      "n": "الاحترافي",
      "time": "10–25 يومًا",
      "who": "الوظائف الماهرة والمكتبية",
      "items": [
        "كل ما في المستوى القياسي",
        "التاريخ الوظيفي الكامل",
        "الشهادة الجامعية والترخيص من المصدر",
        "الأخبار السلبية بالعربية والإنجليزية"
      ]
    }
  ],
  "srcE": "موثوقية مصادر البيانات",
  "srcH": "من أين تأتي الأدلة.",
  "srcP": "كل سطر في تقرير موثوقية العامل يعود إلى جهة أو سجل أو برنامج معتمد محدد — ويوضح طريقة التحقق.",
  "srcPanelSub": "3 جهات",
  "srcFoot": "حين لا يكون السجل متاحًا إلكترونيًا، يتحقق منه شركاء محليون معتمدون ميدانيًا، ويذكر التقرير ذلك.",
  "countries": [
    "المملكة العربية السعودية",
    "الهند",
    "باكستان",
    "بنغلاديش",
    "الفلبين",
    "مصر"
  ],
  "auth": [
    [
      {
        "n": "علم",
        "v": "تبادل البيانات والمنصة في المملكة",
        "m": "DIGITAL" as Method
      },
      {
        "n": "أبشر، وزارة الداخلية",
        "v": "سجل الهوية والإقامة في المملكة",
        "m": "DIGITAL" as Method
      },
      {
        "n": "قوى، تكامل",
        "v": "نتيجة اختبار المهارات SVP",
        "m": "DIGITAL" as Method
      }
    ],
    [
      {
        "n": "eMigrate، وزارة الخارجية",
        "v": "وكيل الاستقدام وسجل الهجرة",
        "m": "DIGITAL" as Method
      },
      {
        "n": "UIDAI، آدهار",
        "v": "الهوية الوطنية",
        "m": "DIGITAL" as Method
      },
      {
        "n": "DigiLocker",
        "v": "شهادات ITI والمجالس التعليمية",
        "m": "DIGITAL" as Method
      }
    ],
    [
      {
        "n": "نادرا",
        "v": "الهوية الوطنية CNIC",
        "m": "DIGITAL" as Method
      },
      {
        "n": "مكتب الهجرة والتوظيف الخارجي",
        "v": "ترخيص المكاتب والهجرة",
        "m": "DIGITAL" as Method
      },
      {
        "n": "NAVTTC",
        "v": "الشهادات المهنية والمهارات",
        "m": "CONFIRMED" as Method
      }
    ],
    [
      {
        "n": "BMET",
        "v": "وكالة الاستقدام والهجرة",
        "m": "DIGITAL" as Method
      },
      {
        "n": "لجنة الانتخابات، قسم الهوية",
        "v": "مطابقة الهوية الوطنية",
        "m": "DIGITAL" as Method
      },
      {
        "n": "شرطة بنغلاديش",
        "v": "شهادة حسن السيرة",
        "m": "AUTHENTICATED" as Method
      }
    ],
    [
      {
        "n": "وزارة العمال المهاجرين",
        "v": "ترخيص الوكالة وسجل العامل",
        "m": "DIGITAL" as Method
      },
      {
        "n": "هيئة التنظيم المهني",
        "v": "التراخيص المهنية",
        "m": "DIGITAL" as Method
      },
      {
        "n": "المكتب الوطني للتحقيقات",
        "v": "شهادة حسن السيرة NBI",
        "m": "AUTHENTICATED" as Method
      }
    ],
    [
      {
        "n": "وزارة الداخلية، الأحوال المدنية",
        "v": "الهوية الوطنية",
        "m": "DIGITAL" as Method
      },
      {
        "n": "وزارة العمل",
        "v": "الوكالة والعقد",
        "m": "CONFIRMED" as Method
      },
      {
        "n": "المجلس الأعلى للجامعات",
        "v": "الشهادات الجامعية",
        "m": "CONFIRMED" as Method
      }
    ]
  ],
  "trust": [
    {
      "h": "يغطي تكلفته",
      "b": "يعمل قبل الالتزام برسوم الاستقدام والتأشيرة والطيران والبديل."
    },
    {
      "h": "منصف للعامل",
      "b": "يرى العامل ما سيُفحص، ويوافق أولًا، ولا يدفع شيئًا."
    },
    {
      "h": "آمن ونظامي",
      "b": "متوافق مع نظام حماية البيانات الشخصية، على منصة حاصلة على SOC 2 Type II وISO 27001 وISO 27018."
    }
  ],
  "pilotE": "إثبات المفهوم",
  "pilotH": "أكّد تجربتك.",
  "pilotP": "مجانًا، دون أي التزام بالشراء، وتبدأ خلال خمسة أيام عمل من الموافقة.",
  "provH": "ما تقدّمه",
  "provB": "ما يصل إلى 20 عاملًا من دفعتك القادمة من الفلبين أو الهند، يوافق كل منهم على الفحص. ومسؤول تواصل محدد في فريق الاستقدام أو الوكالة.",
  "recvH": "ما تحصل عليه",
  "recvB": "تقرير موثوقية لكل عامل خلال 10 أيام عمل من الالتقاط، مع حزمة الأدلة. وعرض للنتائج في اليوم 30 يوضح ما وجدناه وأي قرارات توظيف غيّرها.",
  "timeline": [
    {
      "k": "اليوم 0",
      "v": "أرسل هذا النموذج"
    },
    {
      "k": "خلال 5 أيام",
      "v": "يتلقى العمال الرابط"
    },
    {
      "k": "الأسابيع 1–3",
      "v": "التقارير فور اكتمال كل منها"
    },
    {
      "k": "اليوم 30",
      "v": "عرض النتائج والخطوات التالية"
    }
  ],
  "formH": "بياناتك",
  "formS": "نرد خلال يوم عمل واحد.",
  "f_company": "الشركة",
  "f_name": "اسم مسؤول التواصل",
  "f_role": "المسمى الوظيفي",
  "f_email": "البريد الإلكتروني للعمل",
  "f_mobile": "الجوال",
  "f_corridor": "الممر",
  "f_roles": "الوظائف",
  "f_count": "عدد العمال (حتى 20)",
  "f_start": "تاريخ البدء المفضل",
  "corridors": [
    "الفلبين",
    "الهند"
  ],
  "roles": [
    "سائق",
    "فني",
    "النظافة والمرافق",
    "الضيافة",
    "البناء",
    "أخرى"
  ],
  "f_agree": "أؤكد أن العمال سيُطلب منهم الموافقة قبل أي فحص، وفقًا لنظام حماية البيانات الشخصية في المملكة.",
  "f_submit": "اطلب تجربتي",
  "f_privacy": "تُستخدم بيانات العمال لهذه التجربة فقط وتُحذف بناءً على طلبك بعد عرض النتائج.",
  "errReq": "يرجى إكمال اسم الشركة واسم مسؤول التواصل وبريد إلكتروني صحيح والممر وتأكيد الموافقة.",
  "errCount": "يجب أن يكون عدد العمال بين 1 و20.",
  "okH": "تم استلام طلب التجربة",
  "okBody": "شكرًا {name}. فتحنا تطبيق البريد لديك وفيه طلبك إلى vw@youverify.co. أرسله، وسيتواصل معك فريق علم ويوفيرايفاي على {email} خلال يوم عمل واحد لتأكيد تاريخ البدء.",
  "okAgain": "إرسال طلب آخر",
  "contactE": "تواصل معنا",
  "footTag": "الامتثال لمكافحة الاحتيال وغسل الأموال لكل سوق.",
  "footCols": [
    {
      "h": "الحلول",
      "links": [
        {
          "l": "تأهيل العملاء",
          "href": "https://youverify.co/ar/solution/customer-onboarding"
        },
        {
          "l": "رؤى الاحتيال",
          "href": "https://youverify.co/ar/solution/fraud-insights"
        },
        {
          "l": "مراقبة المعاملات",
          "href": "https://youverify.co/ar/solution/transaction-monitoring"
        }
      ]
    },
    {
      "h": "الشركة",
      "links": [
        {
          "l": "من نحن",
          "href": "https://youverify.co/ar/company/about-us"
        },
        {
          "l": "شهادات الامتثال",
          "href": "https://youverify.co/ar/company/compliance-certifications"
        },
        {
          "l": "اتصل بنا",
          "href": "https://youverify.co/ar/company/contact-us"
        }
      ]
    },
    {
      "h": "القانونية",
      "links": [
        {
          "l": "سياسة الخصوصية",
          "href": "https://youverify.co/ar/privacy-policy"
        },
        {
          "l": "شروط الاستخدام",
          "href": "https://youverify.co/ar/terms-of-use"
        },
        {
          "l": "سياسة أمن المعلومات",
          "href": "https://youverify.co/ar/information-security-policy"
        }
      ]
    }
  ],
  "copy": "©2026 يوفيرايفاي. جميع الحقوق محفوظة.",
  "partner": "يُقدَّم Verified Worker من علم ويوفيرايفاي.",
  "mailFallback": "لم يُفتح تطبيق البريد؟",
  "mailFallbackLink": "أرسله إلى vw@youverify.co",
  "mailSubject": "طلب تجربة Verified Worker · {company}",
  "f_sending": "جارٍ فتح تطبيق البريد…",
  "langLabel": "اللغة"
}

export const copy: Record<Lang, Copy> = { en, ar }
