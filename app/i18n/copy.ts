// Bilingual copy for the Vetted Worker landing page (design: Vetted Worker Landing Elm v2).
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
  "valH": "Most bad hires look fine on paper. That's the problem.",
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
      "b": "Every result carries its source, method and consent record, ready for an auditor, a client or a dispute."
    }
  ],
  "calcH": "Run your own numbers",
  "calcP": "When a placement falls through you pay the recruitment fee, the visa and the flights, and then you pay them again for the replacement. Put in your figures and see what that adds up to.",
  "calcHires": "Overseas hires per year",
  "calcCost": "Cost per hire (SAR)",
  "calcRate": "Placements that fail (%)",
  "calcEx": "Example figures. Enter your own.",
  "calcOutL": "WHAT WRONG HIRES COST YOU A YEAR",
  "calcSub": "{n} failed placements × SAR {c}",
  "calcNote": "We run the checks before you spend any of this. A free pilot on your next intake will show you what we'd have caught.",
  "calcCta": "Test it on my next intake",
  "howH": "Follow two applicants through it",
  "howP": "Juan is a caregiver in Manila. Asif is an electrician in Lahore. They applied to the same Riyadh employer on the same day. Here's what happened next.",
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
  "howAsifR": "Stopped on day 4, before any fees were paid.",
  "howJuanR": "Cleared on day 9, with one question for interview.",
  "audH": "Who uses it",
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
  "faqH": "Things people usually ask us",
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
  "elmH1": "From the company behind the ",
  "elmH2": "Kingdom's digital services",
  "elmH3": ".",
  "elmP": "Elm has spent more than 30 years building the digital services that people and businesses in Saudi Arabia use every day. Vetted Worker brings that same standard to the people you bring into the Kingdom: checked at the source, with consent, and on the record.",
  "elmNums": [
    {
      "v": "3+",
      "l": "billion transactions"
    },
    {
      "v": "30+",
      "l": "million users"
    },
    {
      "v": "700+",
      "l": "thousand clients"
    },
    {
      "v": "350+",
      "l": "electronic services"
    }
  ],
  "elmSrc": "Figures published by Elm at elm.sa.",
  "ftP": "Vetted Worker is offered by Elm to workforce and recruitment companies bringing workers into Saudi Arabia.",
  "ftH1": "Vetted Worker",
  "ftH2": "Contact",
  "ftTeam": "The Vetted Worker team",
  "ftLoc": "Riyadh, Saudi Arabia",
  "ftPartner": "Data and verification partner",
  "ftLinks": [
    {
      "l": "How it works",
      "href": "#how"
    },
    {
      "l": "Packages",
      "href": "#levels"
    },
    {
      "l": "Data sources",
      "href": "#sources"
    },
    {
      "l": "Questions",
      "href": "#faq"
    },
    {
      "l": "Free pilot",
      "href": "#pilot"
    }
  ],
  "legal": [
    {
      "h": "Vetted Worker",
      "b": "is a service offered by Elm Company (\"Elm\") to workforce and recruitment companies in the Kingdom of Saudi Arabia. Identity, document and background verification services, the underlying data sources and the technology platform are provided by Youverify Inc. (\"Youverify\"), Elm's data and verification partner and an Elm portfolio company."
    },
    {
      "h": "Security.",
      "b": "Youverify's information security management system is certified to ISO/IEC 27001, its protection of personal data in public cloud environments is certified to ISO/IEC 27018, its AI management system is certified to ISO/IEC 42001, and its controls are independently examined under a SOC 2 Type II report. Certificates and reports are available to clients on request."
    },
    {
      "h": "Data protection.",
      "b": "Personal data is processed only with the worker's consent and only for the checks requested, in accordance with the Personal Data Protection Law of the Kingdom of Saudi Arabia and the applicable law of the worker's home country. Workers can see who has accessed their file and withdraw consent at any time."
    },
    {
      "h": "Reports.",
      "b": "Worker Trust Reports reflect information returned by issuing authorities, registries, employers and accredited local partners at the time of checking. They support the employer's hiring decision but do not replace it, and they are not legal or immigration advice. Checks, coverage and turnaround vary by country and by the availability of each source."
    },
    {
      "h": "",
      "b": "Elm and the Elm logo are trademarks of Elm Company. Youverify is a trademark of Youverify Inc. Names of authorities, registries and programmes are used only to describe where a check is performed and do not imply their endorsement. People and results shown on this site are fictitious examples."
    }
  ],
  "assure": [
    "Consent first",
    "PDPL aligned",
    "Arabic and English reports"
  ],
  "chipPillT": "{n} of 7 clear",
  "faceL": "Live face match · 96%",
  "scanL": "IDENTITY CHECK",
  "doneL": "Verified · ready for visa",
  "locL": "Riyadh, SA",
  "heroAlt": "Worker in Riyadh verifying his identity on his phone",
  "chipChecks": [
    "Passport and PhilSys record match",
    "Document authentic, 7 of 7 features",
    "Live person, 96% face match",
    "No duplicate identity",
    "No match across 500+ watchlists",
    "Wafid medical: fit",
    "Recruitment agency licence active"
  ],
  "mapCap1": "18 authorities across 6 countries",
  "mapCap2": "Next: Nepal, Indonesia, Sri Lanka, Kenya, Ethiopia, Uganda",
  "lgDig": "Matched in real time against an official or authorised source, in seconds.",
  "lgAuth": "The worker's own official certificate, verified with the authority that issued it.",
  "lgConf": "Verified directly with the employer or institution.",
  "pilotE2": "Complimentary pilot",
  "plA": "Start with ",
  "plB": "20 workers",
  "plC": " from your next intake.",
  "copyL": "Copy",
  "copiedL": "Copied",
  "navCta": "Start a free pilot",
  "heroE": "Vetted Worker, from Elm",
  "h1a": "Know who you're hiring ",
  "h1b": "before the visa",
  "h1c": ".",
  "heroP": "We check each overseas hire's passport, police record, certificates and past jobs with the offices that issued them. If something's off, you hear about it on day 4, while it still costs you nothing.",
  "cta1": "Start a free pilot",
  "cta2": "See how it works",
  "mapRiyadh": "Riyadh",
  "juan": "Juan Dela Cruz",
  "asif": "Asif Raza",
  "reviewD9": "Review · Day 9",
  "stopD4": "Stop · Day 4",
  "proceed": "Proceed",
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
  "c2p": "Before Juan puts his phone down, seven checks are back. At 14:41 the same checks run for Asif in Lahore, and his selfie doesn't match his passport photo.",
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
  "c3p": "A certificate is only as good as whoever issued it. Juan's police clearance is confirmed with the NBI. Asif's goes back to the police office whose stamp is on it, and they've never heard of it.",
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
  "c4p": "Juan said four years at his last job. Their HR says eighteen months, left on good terms, would hire him again. That's not a reason to turn down a good caregiver, but it's worth asking about at interview.",
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
  "c5a": "Here's what lands on your desk",
  "c5b": "",
  "c5c": ".",
  "c5p": "Every line shows what was checked, where and what came back, with the evidence pack and consent record attached. In a dashboard or by API, in Arabic and English.",
  "c5asif": "Stopped on day 4, before a visa, a flight or a recruitment fee was paid. His face didn't match his passport and his police certificate couldn't be traced. The evidence is attached.",
  "c5juan": "Report on day 9. Clear on identity, record and licence. One discrepancy on tenure. Recommended action: confirm caregiving experience at interview.",
  "c5okT": "When everything matches",
  "c5ok": "Everything the worker told you checks out. Book the flight.",
  "lvH": "Pick how deep you want to go",
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
  "srcH": "Who we check with",
  "srcP": "Every result in the report names the office or registry that confirmed it, and how.",
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
  "okBody": "Thank you, {name}. Your email app has opened with your request to vw@youverify.co. Send it, and your Elm team will reply to {email} within one working day to confirm your start date.",
  "okAgain": "Submit another request",
  "copy": "©2026 Elm. All rights reserved.",
  "mailFallback": "Email app didn't open?",
  "mailFallbackLink": "Send it to vw@youverify.co",
  "mailSubject": "Vetted Worker pilot request · {company}",
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
  "valH": "معظم التوظيفات الخاطئة تبدو سليمة على الورق. وهنا المشكلة.",
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
      "b": "كل نتيجة تحمل مصدرها وطريقتها وسجل الموافقة، جاهزة لمدقق أو عميل أو نزاع."
    }
  ],
  "calcH": "احسبها بأرقامك",
  "calcP": "كل استقدام فاشل يُدفع ثمنه مرتين: رسوم الاستقدام والتأشيرة والطيران، ثم البديل والأسابيع التي تبقى فيها الوظيفة شاغرة.",
  "calcHires": "عدد العمال المستقدمين سنويًا",
  "calcCost": "تكلفة الاستقدام للعامل (ريال)",
  "calcRate": "نسبة الاستقدام الفاشل (%)",
  "calcEx": "أرقام توضيحية. أدخل أرقامك.",
  "calcOutL": "يُنفق على التوظيف الخاطئ سنويًا",
  "calcSub": "{n} استقدام فاشل × {c} ريال",
  "calcNote": "يعمل Vetted Worker قبل الالتزام بأي من هذه المبالغ. وتُظهر التجربة المجانية ما يكتشفه في دفعتك القادمة.",
  "calcCta": "جرّبه على دفعتي القادمة",
  "howH": "تابع متقدّمَين خطوة بخطوة",
  "howP": "خوان مقدّم رعاية من مانيلا، وآصف كهربائي من لاهور. تقدّما لصاحب العمل نفسه في الرياض في اليوم نفسه. وهذا ما حدث بعد ذلك.",
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
  "howAsifR": "أُوقف في اليوم 4 قبل دفع أي رسوم.",
  "howJuanR": "سليم في اليوم 9، مع سؤال واحد للمقابلة.",
  "audH": "من يستخدم الخدمة",
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
  "faqH": "أسئلة نسمعها كثيرًا",
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
  "elmH1": "من الشركة التي تقف وراء ",
  "elmH2": "الخدمات الرقمية في المملكة",
  "elmH3": ".",
  "elmP": "أمضت علم أكثر من 30 عامًا في بناء الخدمات الرقمية التي يعتمد عليها الأفراد والشركات في المملكة العربية السعودية كل يوم. ويحمل Vetted Worker المعيار نفسه إلى من تستقدمهم إلى المملكة: تحقق من المصدر، بموافقة، وموثَّق.",
  "elmNums": [
    {
      "v": "+3",
      "l": "مليار عملية"
    },
    {
      "v": "+30",
      "l": "مليون مستخدم"
    },
    {
      "v": "+700",
      "l": "ألف عميل"
    },
    {
      "v": "+350",
      "l": "خدمة إلكترونية"
    }
  ],
  "elmSrc": "أرقام منشورة من علم على elm.sa.",
  "ftP": "تقدّم علم خدمة Vetted Worker لشركات القوى العاملة والاستقدام التي تستقدم العمال إلى المملكة العربية السعودية.",
  "ftH1": "Vetted Worker",
  "ftH2": "تواصل معنا",
  "ftTeam": "فريق Vetted Worker",
  "ftLoc": "الرياض، المملكة العربية السعودية",
  "ftPartner": "شريك البيانات والتحقق",
  "ftLinks": [
    {
      "l": "كيف يعمل",
      "href": "#how"
    },
    {
      "l": "الباقات",
      "href": "#levels"
    },
    {
      "l": "مصادر البيانات",
      "href": "#sources"
    },
    {
      "l": "الأسئلة",
      "href": "#faq"
    },
    {
      "l": "التجربة المجانية",
      "href": "#pilot"
    }
  ],
  "legal": [
    {
      "h": "Vetted Worker",
      "b": "خدمة تقدّمها شركة علم (\"علم\") لشركات القوى العاملة والاستقدام في المملكة العربية السعودية. وتُقدَّم خدمات التحقق من الهوية والمستندات والخلفية، ومصادر البيانات، والمنصة التقنية من قِبل شركة Youverify Inc. (\"يوفيرايفاي\")، شريك علم في البيانات والتحقق وإحدى الشركات في محفظة علم الاستثمارية."
    },
    {
      "h": "الأمن.",
      "b": "نظام إدارة أمن المعلومات لدى يوفيرايفاي حاصل على شهادة ISO/IEC 27001، وحماية البيانات الشخصية في البيئات السحابية العامة حاصلة على شهادة ISO/IEC 27018، ونظام إدارة الذكاء الاصطناعي حاصل على شهادة ISO/IEC 42001، وتخضع ضوابطها لفحص مستقل بموجب تقرير SOC 2 Type II. والشهادات والتقارير متاحة للعملاء عند الطلب."
    },
    {
      "h": "حماية البيانات.",
      "b": "تُعالج البيانات الشخصية بموافقة العامل فقط، ولأغراض الفحوصات المطلوبة فقط، وفقًا لنظام حماية البيانات الشخصية في المملكة العربية السعودية والأنظمة المعمول بها في بلد العامل. ويمكن للعامل معرفة من اطّلع على ملفه وسحب موافقته في أي وقت."
    },
    {
      "h": "التقارير.",
      "b": "تعكس تقارير موثوقية العامل المعلومات الواردة من الجهات المُصدِرة والسجلات وأصحاب العمل والشركاء المحليين المعتمدين وقت إجراء الفحص. وهي تدعم قرار التوظيف لدى صاحب العمل ولا تحلّ محله، ولا تُعد استشارة قانونية أو استشارة في شؤون الهجرة. وتختلف الفحوصات والتغطية ومدة الإنجاز بحسب الدولة ومدى توفر كل مصدر."
    },
    {
      "h": "",
      "b": "علم وشعار علم علامتان تجاريتان لشركة علم، ويوفيرايفاي علامة تجارية لشركة Youverify Inc. وتُذكر أسماء الجهات والسجلات والبرامج لبيان مكان إجراء الفحص فقط، ولا يعني ذكرها تأييدها للخدمة. والأشخاص والنتائج المعروضة في هذا الموقع أمثلة افتراضية."
    }
  ],
  "assure": [
    "الموافقة أولًا",
    "متوافق مع نظام حماية البيانات الشخصية",
    "تقارير بالعربية والإنجليزية"
  ],
  "chipPillT": "{n} من 7 سليمة",
  "faceL": "مطابقة حيّة للوجه · 96%",
  "scanL": "التحقق من الهوية",
  "doneL": "موثَّق · جاهز للتأشيرة",
  "locL": "Riyadh, SA",
  "heroAlt": "عامل في الرياض يتحقق من هويته عبر هاتفه",
  "chipChecks": [
    "تطابق الجواز وسجل PhilSys",
    "المستند أصلي، 7 من 7 خصائص",
    "شخص حقيقي، تطابق الوجه 96%",
    "لا هوية مكررة",
    "لا تطابق في أكثر من 500 قائمة مراقبة",
    "الفحص الطبي (وافد): لائق",
    "ترخيص وكالة الاستقدام ساري"
  ],
  "mapCap1": "18 جهة في 6 دول",
  "mapCap2": "التالي: نيبال وإندونيسيا وسريلانكا وكينيا وإثيوبيا وأوغندا",
  "lgDig": "مطابقة فورية مع مصدر رسمي أو معتمد، خلال ثوانٍ.",
  "lgAuth": "الشهادة الرسمية الخاصة بالعامل، موثَّقة مع الجهة التي أصدرتها.",
  "lgConf": "تحقق مباشر مع صاحب العمل أو المؤسسة.",
  "pilotE2": "تجربة مجانية",
  "plA": "ابدأ بـ",
  "plB": "20 عاملًا",
  "plC": " من دفعتك القادمة.",
  "copyL": "نسخ",
  "copiedL": "تم النسخ",
  "navCta": "ابدأ تجربة مجانية",
  "heroE": "Vetted Worker من علم",
  "h1a": "اعرف من توظّف ",
  "h1b": "قبل التأشيرة",
  "h1c": ".",
  "heroP": "يؤكد Vetted Worker هوية كل عامل مستقدم وسجله الجنائي ومؤهلاته وتاريخه الوظيفي مع الجهات التي أصدرتها، ليُوقف التوظيف الخاطئ في اليوم الرابع، لا بعد الوصول.",
  "cta1": "ابدأ تجربة مجانية",
  "cta2": "كيف يعمل",
  "mapRiyadh": "الرياض",
  "juan": "خوان ديلا كروز",
  "asif": "آصف رضا",
  "reviewD9": "مراجعة · اليوم 9",
  "stopD4": "إيقاف · اليوم 4",
  "proceed": "متابعة",
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
  "c2p": "قبل أن يضع خوان هاتفه، تعود سبعة فحوصات. وفي الساعة 14:41 تُجرى الفحوصات نفسها لآصف في لاهور، فإذا بصورته الذاتية لا تطابق صورة جوازه.",
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
  "c3p": "قيمة الشهادة من قيمة مُصدِرها. تُوثَّق شهادة حسن سيرة خوان مع المكتب الوطني للتحقيقات. أما شهادة آصف فتعود إلى المكتب الذي يحمل ختمه، ولا يوجد لديه أي سجل لها.",
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
  "c4p": "صرّح خوان بأربع سنوات لدى آخر صاحب عمل. وتؤكد الموارد البشرية لديهم ثمانية عشر شهرًا، بسجل جيد وأهلية لإعادة التوظيف. ليس سببًا لخسارة مقدّم رعاية جيد، لكنه يستحق سؤالًا في المقابلة.",
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
  "c5a": "هذا ما يصلك في النهاية",
  "c5b": "",
  "c5c": ".",
  "c5p": "يوضح كل سطر ما فُحص وأين وما النتيجة، مع حزمة الأدلة وسجل الموافقة. عبر لوحة التحكم أو واجهة برمجية، بالعربية والإنجليزية.",
  "c5asif": "أُوقف في اليوم 4، قبل الالتزام بتأشيرة أو رحلة أو رسوم استقدام. عدم تطابق الوجه وشهادة حسن سيرة يتعذّر التحقق منها، مع الأدلة مرفقة.",
  "c5juan": "التقرير في اليوم 9. سليم من حيث الهوية والسجل والترخيص. اختلاف واحد في مدة الخدمة. الإجراء الموصى به: تأكيد خبرة الرعاية في المقابلة.",
  "c5okT": "حين يتطابق كل شيء",
  "c5ok": "كل الفحوصات تتفق مع مستندات العامل وادعاءاته. استقدم بثقة.",
  "lvH": "اختر عمق الفحص",
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
  "srcH": "مع من نتحقق",
  "srcP": "كل سطر في تقرير موثوقية العامل يعود إلى جهة أو سجل أو برنامج معتمد محدد، ويوضح طريقة التحقق.",
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
  "okBody": "شكرًا {name}. فتحنا تطبيق البريد لديك وفيه طلبك إلى vw@youverify.co. أرسله، وسيتواصل معك فريق علم على {email} خلال يوم عمل واحد لتأكيد تاريخ البدء.",
  "okAgain": "إرسال طلب آخر",
  "copy": "©2026 علم. جميع الحقوق محفوظة.",
  "mailFallback": "لم يُفتح تطبيق البريد؟",
  "mailFallbackLink": "أرسله إلى vw@youverify.co",
  "mailSubject": "طلب تجربة Vetted Worker · {company}",
  "langLabel": "اللغة"
}

export const copy: Record<Lang, Copy> = { en, ar }
