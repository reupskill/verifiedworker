// Bilingual copy for the Vetted Worker landing page (design: Landing v3).
// The Arabic was drafted alongside the design; have a native speaker review it
// (job levels and government authority names especially) before launch.

export type Lang = 'en' | 'ar'
export type Method = 'DIGITAL' | 'AUTHENTICATED' | 'CONFIRMED'

const en = {
  "proof": [
    {
      "v": "5 min",
      "l": "for the worker, on their own phone"
    },
    {
      "v": "Seconds",
      "l": "for identity and watchlists"
    },
    {
      "v": "5–10 days",
      "l": "for a full source-checked report"
    },
    {
      "v": "18",
      "l": "issuing authorities in 6 countries"
    }
  ],
  "valE": "WHAT YOU GET",
  "valH": "Fewer wrong hires. Faster deployment. Decisions you can defend.",
  "val": [
    {
      "k": "01",
      "h": "Stop the wrong hire early",
      "b": "Forged certificates and borrowed identities are caught before the recruitment fee, visa and flights are paid for."
    },
    {
      "k": "02",
      "h": "Deploy good workers faster",
      "b": "Clean files move straight to visa. No chasing documents, no waiting on agents, no guesswork."
    },
    {
      "k": "03",
      "h": "Defend every decision",
      "b": "Every result carries its source, method and consent record — ready for an auditor, a client or a dispute."
    }
  ],
  "calcE": "THE COST OF GETTING IT WRONG",
  "calcH": "What wrong hires cost you every year.",
  "calcP": "Every failed placement is paid for twice: the recruitment fee, visa and flights, then a replacement and the weeks the role sits empty.",
  "calcHires": "Overseas hires per year",
  "calcCost": "Cost per hire (SAR)",
  "calcRate": "Placements that fail (%)",
  "calcEx": "Example figures. Enter your own.",
  "calcOutL": "SPENT ON WRONG HIRES EACH YEAR",
  "calcSub": "{n} failed placements × SAR {c}",
  "calcNote": "Vetted Worker runs before any of this money is committed. A free pilot shows what it finds in your own intake.",
  "calcCta": "Test it on my next intake",
  "howE": "HOW IT WORKS",
  "howH": "Two applicants. Nine days. One clear answer.",
  "howP": "One link to the worker's phone. Every claim checked with the authority that issued it. A clear decision for your team before a riyal is spent on visas or flights.",
  "howSteps": [
    {
      "d": "Day 1",
      "n": "Invite",
      "href": "#invite"
    },
    {
      "d": "Day 1",
      "n": "Identity",
      "href": "#identity"
    },
    {
      "d": "Days 2–7",
      "n": "Source",
      "href": "#source"
    },
    {
      "d": "Day 9",
      "n": "History",
      "href": "#history"
    },
    {
      "d": "Day 4 · 9",
      "n": "Decision",
      "href": "#decision"
    }
  ],
  "howAsifR": "Lahore · electrician. Stopped before the visa — no fees lost.",
  "howJuanR": "Manila · caregiver. Cleared, with one question for interview.",
  "audE": "WHO IT'S FOR",
  "audH": "Built for everyone whose name is on the hire.",
  "aud": [
    {
      "h": "Employers",
      "b": "Hire with confidence and cut the cost of replacements, incidents and failed probation.",
      "pts": [
        "Report before the visa is issued",
        "Dashboard or API into your HR system",
        "Arabic and English reports"
      ]
    },
    {
      "h": "Recruitment agencies",
      "b": "Deliver verified candidates and win contracts on proof, not promises.",
      "pts": [
        "A verified report for every client",
        "Fewer rejected deployments",
        "Stand out in every tender"
      ]
    },
    {
      "h": "Home-care and domestic services",
      "b": "Know exactly who is entering a family's home before they arrive.",
      "pts": [
        "Police record checked at source",
        "Identity and live face match",
        "Past employers confirmed"
      ]
    }
  ],
  "faqE": "BEFORE YOU START",
  "faqH": "Questions buyers ask.",
  "faq": [
    {
      "q": "Does the worker pay anything?",
      "a": "No. The worker uses a free, secure link on their own phone and sees exactly what will be checked before giving consent."
    },
    {
      "q": "How fast are results?",
      "a": "Identity, face match and watchlists come back in seconds. Checks with police, schools and employers take 5–10 working days."
    },
    {
      "q": "Is it compliant with Saudi law?",
      "a": "Yes. Every check needs the worker's consent, in line with the Personal Data Protection Law, on a platform certified to SOC 2 Type II, ISO 27001 and ISO 27018."
    },
    {
      "q": "What if a record isn't online?",
      "a": "Accredited local partners verify it with the issuer on the ground, and the report says exactly how it was checked."
    },
    {
      "q": "How does it fit our systems?",
      "a": "Start in the dashboard on day one, or connect by API to your HR or recruitment system."
    }
  ],
  "inPartner": "in partnership with",
  "navCta": "Start a free pilot",
  "heroE": "VETTED WORKER · AN ELM SERVICE",
  "h1a": "Know who you're hiring ",
  "h1b": "before the visa",
  "h1c": ".",
  "heroP": "Vetted Worker confirms every overseas hire's identity, police record, qualifications and work history with the authorities that issued them — so the wrong hire is stopped on day 4, not after arrival.",
  "cta1": "Start a free pilot",
  "cta2": "See how it works",
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
  "srcP": "Every line in a Worker Trust Report traces back to a named authority, registry or accredited programme and says how it was checked.",
  "srcPanelSub": "3 authorities",
  "srcS1": "issuing authorities",
  "srcS2": "source countries",
  "srcS3": "of results name their source",
  "mDigD": " · direct registry link",
  "mAuthD": " · confirmed by issuer",
  "mConfD": " · verified by accredited partner",
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
  "pilotE": "",
  "pilotH": "See it on your next 20 hires.",
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
  "copy": "©2026 Elm. All rights reserved.",
  "partner": "Vetted Worker by Elm, in partnership with Youverify.",
  "mailFallback": "Email app didn't open?",
  "mailFallbackLink": "Send it to vw@youverify.co",
  "mailSubject": "Vetted Worker pilot request · {company}",
  "f_sending": "Opening your email app…",
  "langLabel": "Language"
}

export type Copy = typeof en

const ar: Copy = {
  "proof": [
    {
      "v": "5 دقائق",
      "l": "من وقت العامل، على هاتفه"
    },
    {
      "v": "ثوانٍ",
      "l": "للهوية وقوائم المراقبة"
    },
    {
      "v": "5–10 أيام",
      "l": "لتقرير كامل من المصادر"
    },
    {
      "v": "18",
      "l": "جهة مُصدِرة في 6 دول"
    }
  ],
  "valE": "ما تحصل عليه",
  "valH": "توظيف خاطئ أقل. استقدام أسرع. قرارات يمكنك الدفاع عنها.",
  "val": [
    {
      "k": "01",
      "h": "أوقف التوظيف الخاطئ مبكرًا",
      "b": "تُكتشف الشهادات المزوّرة والهويات المستعارة قبل دفع رسوم الاستقدام والتأشيرة والطيران."
    },
    {
      "k": "02",
      "h": "استقدم العمال الجيدين أسرع",
      "b": "الملفات السليمة تنتقل مباشرة إلى التأشيرة. دون ملاحقة مستندات أو انتظار وكلاء."
    },
    {
      "k": "03",
      "h": "دافع عن كل قرار",
      "b": "كل نتيجة تحمل مصدرها وطريقتها وسجل الموافقة — جاهزة لمدقق أو عميل أو نزاع."
    }
  ],
  "calcE": "تكلفة الخطأ",
  "calcH": "ما يكلّفك التوظيف الخاطئ كل عام.",
  "calcP": "كل استقدام فاشل يُدفع ثمنه مرتين: رسوم الاستقدام والتأشيرة والطيران، ثم البديل والأسابيع التي تبقى فيها الوظيفة شاغرة.",
  "calcHires": "عدد العمال المستقدمين سنويًا",
  "calcCost": "تكلفة الاستقدام للعامل (ريال)",
  "calcRate": "نسبة الاستقدام الفاشل (%)",
  "calcEx": "أرقام توضيحية. أدخل أرقامك.",
  "calcOutL": "يُنفق على التوظيف الخاطئ سنويًا",
  "calcSub": "{n} استقدام فاشل × {c} ريال",
  "calcNote": "يعمل Vetted Worker قبل الالتزام بأي من هذه المبالغ. وتُظهر التجربة المجانية ما يكتشفه في دفعتك القادمة.",
  "calcCta": "جرّبه على دفعتي القادمة",
  "howE": "كيف يعمل",
  "howH": "متقدّمان. تسعة أيام. إجابة واضحة.",
  "howP": "رابط واحد إلى هاتف العامل. كل ادعاء يُتحقق منه مع الجهة التي أصدرته. وقرار واضح لفريقك — قبل إنفاق ريال واحد على التأشيرات أو الطيران.",
  "howSteps": [
    {
      "d": "اليوم 1",
      "n": "الدعوة",
      "href": "#invite"
    },
    {
      "d": "اليوم 1",
      "n": "الهوية",
      "href": "#identity"
    },
    {
      "d": "الأيام 2–7",
      "n": "المصدر",
      "href": "#source"
    },
    {
      "d": "اليوم 9",
      "n": "السجل",
      "href": "#history"
    },
    {
      "d": "اليوم 4 · 9",
      "n": "القرار",
      "href": "#decision"
    }
  ],
  "howAsifR": "لاهور · كهربائي. أُوقف قبل التأشيرة — دون خسارة أي رسوم.",
  "howJuanR": "مانيلا · مقدّم رعاية. سليم، مع سؤال واحد للمقابلة.",
  "audE": "لمن هذه الخدمة",
  "audH": "لكل من يتحمّل مسؤولية التوظيف.",
  "aud": [
    {
      "h": "أصحاب العمل",
      "b": "وظّف بثقة وخفّض تكلفة البدائل والحوادث وفشل فترة التجربة.",
      "pts": [
        "التقرير قبل إصدار التأشيرة",
        "لوحة تحكم أو ربط مع نظام الموارد البشرية",
        "تقارير بالعربية والإنجليزية"
      ]
    },
    {
      "h": "مكاتب الاستقدام",
      "b": "قدّم مرشحين موثَّقين واكسب العقود بالدليل لا بالوعود.",
      "pts": [
        "تقرير موثَّق لكل عميل",
        "رفض أقل عند الاستقدام",
        "تميّز في كل منافسة"
      ]
    },
    {
      "h": "الرعاية المنزلية والعمالة المنزلية",
      "b": "اعرف بالضبط من سيدخل منزل الأسرة قبل وصوله.",
      "pts": [
        "السجل الجنائي من المصدر",
        "الهوية ومطابقة الوجه الحيّة",
        "تأكيد أصحاب العمل السابقين"
      ]
    }
  ],
  "faqE": "قبل أن تبدأ",
  "faqH": "أسئلة يطرحها العملاء.",
  "faq": [
    {
      "q": "هل يدفع العامل أي شيء؟",
      "a": "لا. يستخدم العامل رابطًا آمنًا ومجانيًا على هاتفه، ويرى ما سيُفحص قبل أن يوافق."
    },
    {
      "q": "ما سرعة النتائج؟",
      "a": "الهوية ومطابقة الوجه وقوائم المراقبة خلال ثوانٍ. والتحقق مع الشرطة والجهات التعليمية وأصحاب العمل خلال 5–10 أيام عمل."
    },
    {
      "q": "هل الخدمة متوافقة مع الأنظمة السعودية؟",
      "a": "نعم. كل فحص يتطلب موافقة العامل وفق نظام حماية البيانات الشخصية، على منصة حاصلة على SOC 2 Type II وISO 27001 وISO 27018."
    },
    {
      "q": "ماذا لو لم يكن السجل متاحًا إلكترونيًا؟",
      "a": "يتحقق منه شركاء محليون معتمدون مع الجهة المُصدِرة ميدانيًا، ويذكر التقرير طريقة التحقق بدقة."
    },
    {
      "q": "كيف تتكامل مع أنظمتنا؟",
      "a": "ابدأ من لوحة التحكم من اليوم الأول، أو اربطها عبر واجهة برمجية بنظام الموارد البشرية أو الاستقدام."
    }
  ],
  "inPartner": "بالشراكة مع",
  "navCta": "ابدأ تجربة مجانية",
  "heroE": "Vetted Worker · خدمة من علم",
  "h1a": "اعرف من توظّف ",
  "h1b": "قبل التأشيرة",
  "h1c": ".",
  "heroP": "يؤكد Vetted Worker هوية كل عامل مستقدم وسجله الجنائي ومؤهلاته وتاريخه الوظيفي مع الجهات التي أصدرتها — ليُوقف التوظيف الخاطئ في اليوم الرابع، لا بعد الوصول.",
  "cta1": "ابدأ تجربة مجانية",
  "cta2": "كيف يعمل",
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
  "srcS1": "جهة مُصدِرة",
  "srcS2": "دول المصدر",
  "srcS3": "من النتائج تذكر مصدرها",
  "mDigD": " · ربط مباشر بالسجل",
  "mAuthD": " · مؤكَّد من الجهة المُصدِرة",
  "mConfD": " · تحقق عبر شريك معتمد",
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
  "pilotE": "تجربة مجانية",
  "pilotH": "جرّبه على أول 20 عاملًا في دفعتك القادمة. مجانًا.",
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
  "copy": "©2026 علم. جميع الحقوق محفوظة.",
  "partner": "Vetted Worker من علم، بالشراكة مع يوفيرايفاي.",
  "mailFallback": "لم يُفتح تطبيق البريد؟",
  "mailFallbackLink": "أرسله إلى vw@youverify.co",
  "mailSubject": "طلب تجربة Vetted Worker · {company}",
  "f_sending": "جارٍ فتح تطبيق البريد…",
  "langLabel": "اللغة"
}

export const copy: Record<Lang, Copy> = { en, ar }
