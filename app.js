// JanSeva AI - Multilingual Chatbot & Deliverables Controller

// Welfare Schemes Localized Database (Fallback for direct local file browser execution)
let schemesData = [];

// Localization dictionary for UI
const translations = {
  en: {
    title: "Chatbot Sandbox",
    subtitle: "Simulate RAG-grounded multilingual conversation in low bandwidth conditions.",
    profileTitle: "Beneficiary Profile",
    profileSub: "Simulate user attributes to dry-run matching logic.",
    ageLabel: "Age",
    genderLabel: "Gender",
    genderAny: "Any / Male",
    genderFemale: "Female",
    occLabel: "Occupation",
    occFarmer: "Farmer (कृषक / விவசாயி)",
    occGig: "Gig Worker / Delivery",
    occDomestic: "Domestic Helper / Housemaid",
    occUnemployed: "Unemployed",
    occOther: "Other / General",
    incomeLabel: "Annual Income (₹)",
    landLabel: "Owns Agricultural Land",
    btnUpdate: "Update Matches",
    btnReset: "Reset Chat",
    guidedScenarios: "Guided Simulation Scenarios",
    guidedSub: "Click to test instant walkthrough inputs:",
    scenarioFarmer: "Farmer Eligibility",
    scenarioMaternity: "Maternity Benefits",
    scenarioPension: "Pension Discovery",
    chatTitle: "JanSeva AI Assistant",
    chatStatus: "Online",
    chatInputPlaceholder: "Type your query (e.g., 'मेरा Aadhaar card kho gaya है' or 'Farmer schemes')...",
    matchTitle: "Eligibility Output",
    matchSub: "Live matching engine grounded in schemes.json",
    matchCountText: "Eligible Schemes Found",
    matchedSchemesTitle: "Matched Schemes",
    checklistTitle: "Document Checklist",
    checklistSub: "Consolidated documents required across eligible schemes:",
    btnPdf: "Download PDF",
    btnSms: "Send SMS Checklist",
    bandwidth2G: "Bandwidth Mode: 2G (Compressed)",
    bandwidthNormal: "Bandwidth Mode: 3G/4G (Normal)"
  },
  hi: {
    title: "चैटबॉट सैंडबॉक्स",
    subtitle: "कम बैंडविड्थ स्थितियों में RAG-आधारित बहुभाषी बातचीत का अनुकरण करें।",
    profileTitle: "लाभार्थी प्रोफ़ाइल",
    profileSub: "पात्रता मिलान तर्क का परीक्षण करने के लिए उपयोगकर्ता विशेषताओं का अनुकरण करें।",
    ageLabel: "उम्र",
    genderLabel: "लिंग",
    genderAny: "कोई भी / पुरुष",
    genderFemale: "महिला",
    occLabel: "व्यवसाय",
    occFarmer: "किसान (कृषक)",
    occGig: "गिग वर्कर / डिलीवरी बॉय",
    occDomestic: "घरेलू कामगार / कामवाली बाई",
    occUnemployed: "बेरोजगार",
    occOther: "अन्य / सामान्य",
    incomeLabel: "वार्षिक आय (₹)",
    landLabel: "कृषि भूमि का स्वामित्व है",
    btnUpdate: "पात्रता जांचें",
    btnReset: "चैट रीसेट करें",
    guidedScenarios: "निर्देशित सिमुलेशन परिदृश्य",
    guidedSub: "त्वरित वॉकथ्रू इनपुट का परीक्षण करने के लिए क्लिक करें:",
    scenarioFarmer: "किसान पात्रता",
    scenarioMaternity: "मातृत्व लाभ",
    scenarioPension: "पेंशन खोजें",
    chatTitle: "जनसेवा एआई सहायक",
    chatStatus: "सक्रिय",
    chatInputPlaceholder: "अपनी जिज्ञासा लिखें (जैसे, 'मेरा Aadhaar card खो गया है' या 'पीएम किसान')...",
    matchTitle: "पात्रता परिणाम",
    matchSub: "schemes.json में प्रमाणित लाइव मिलान इंजन",
    matchCountText: "योग्य योजनाएं मिलीं",
    matchedSchemesTitle: "योग्य योजनाएं",
    checklistTitle: "आवश्यक दस्तावेज",
    checklistSub: "योग्य योजनाओं के लिए आवश्यक दस्तावेजों की सूची:",
    btnPdf: "पीडीएफ डाउनलोड करें",
    btnSms: "एसएमएस द्वारा सूची भेजें",
    bandwidth2G: "बैंडविड्थ मोड: 2जी (संक्षिप्त)",
    bandwidthNormal: "बैंडविड्थ मोड: 3जी/4जी (सामान्य)"
  },
  ta: {
    title: "சாட்பாட் சாண்ட்பாக்ஸ்",
    subtitle: "குறைந்த அலைவரிசையிலும் RAG-அடிப்படையிலான பன்மொழி உரையாடலை சோதித்துப் பாருங்கள்.",
    profileTitle: "பயனாளியின் விவரம்",
    profileSub: "தகுதி கணக்கீட்டு முறையை சோதிக்க பயனரின் விவரங்களை மாற்றியமைக்கவும்.",
    ageLabel: "வயது",
    genderLabel: "பாலினம்",
    genderAny: "அனைத்தும் / ஆண்",
    genderFemale: "பெண்",
    occLabel: "தொழில்",
    occFarmer: "விவசாயி",
    occGig: "கூரியர் / டெலிவரி ஊழியர்",
    occDomestic: "வீட்டுப் பணியாளர் / வேலைக்காரி",
    occUnemployed: "வேலையில்லாதவர்",
    occOther: "இதர / பொது",
    incomeLabel: "ஆண்டு வருமானம் (₹)",
    landLabel: "விவசாய நிலம் உள்ளது",
    btnUpdate: "தகுதியை புதுப்பி",
    btnReset: "உரையாடலை மீட்டமை",
    guidedScenarios: "வழிகாட்டப்பட்ட உரையாடல் முறைகள்",
    guidedSub: "உடனடி உரையாடல் சோதனையைத் தொடங்க கிளிக் செய்க:",
    scenarioFarmer: "விவசாயி தகுதி",
    scenarioMaternity: "மகப்பேறு நலன்கள்",
    scenarioPension: "ஓய்வூதிய உதவி",
    chatTitle: "ஜனசேவா ஏஐ உதவியாளர்",
    chatStatus: "செயலில் உள்ளது",
    chatInputPlaceholder: "கேள்விகளை டைப் செய்யவும் (எ.கா: 'எனது ஆதார் கார்டு தொலைந்துவிட்டது' அல்லது 'விவசாயிகள் திட்டம்')...",
    matchTitle: "தகுதி முடிவுகள்",
    matchSub: "schemes.json மூலம் சரிபார்க்கப்பட்ட தகுதி முடிவுகள்",
    matchCountText: "பொருத்தமான திட்டங்கள்",
    matchedSchemesTitle: "பொருத்தமான திட்டங்கள்",
    checklistTitle: "தேவையான ஆவணங்கள்",
    checklistSub: "பொருத்தமான திட்டங்களுக்கு தேவையான ஆவணங்களின் தொகுப்பு:",
    btnPdf: "பதிவிறக்க PDF",
    btnSms: "SMS மூலம் பெறுக",
    bandwidth2G: "அலைவரிசை முறை: 2G (சுருக்கப்பட்ட)",
    bandwidthNormal: "அலைவரிசை முறை: 3G/4G (சாதாரண)"
  }
};

// Target user personas details
const personas = {
  farmer: {
    profile: { age: 48, gender: "any", occupation: "farmer", income: 90000, needs_land: true },
    chatLog: [
      { sender: "user", text: "I am a farmer and I want to know what government assistance I can get. I have some agricultural land." },
      { sender: "bot", text: "Namaste Ramesh Prasad. Based on your profile as a land-owning farmer with an income of ₹90,000, you qualify for several key welfare schemes. Let me share the primary ones:\n\n1. **PM-KISAN**: Gives you ₹6,000 per year in three direct bank transfers.\n2. **Ayushman Bharat (PM-JAY)**: Cashless medical cover up to ₹5 Lakhs per family per year.\n3. **MGNREGA**: 100 days of guaranteed wage employment.\n\nWould you like me to generate a checklist of documents for these?" },
      { sender: "user", text: "Yes please, Mera Aadhaar card already bank se link hai, but land papers search karne padenge." },
      { sender: "bot", text: "Got it! Since your Aadhaar is linked, you are halfway there. For **PM-KISAN** and **Ayushman Bharat**, you will need:\n\n* **Land Ownership Papers (Jamabandi/Patta)** (critical for PM-KISAN)\n* **Aadhaar Card**\n* **Bank Account Passbook**\n* **Ration Card (BPL)**\n\nI have generated a downloadable checklist in the right panel. You can print it or receive it via SMS." }
    ],
    flow: [
      { num: "1", title: "User Query Ingestion", desc: "User types or speaks in code-mixed Hindi/English: 'I am a farmer and want help.'" },
      { num: "2", title: "RAG & Profile Alignment", desc: "Agent parses parameters: Age=48, Job=Farmer, Land=Yes, Income=90k, Language=English/Hindi." },
      { num: "3", title: "Eligibility Engine Execution", desc: "Scans schemes.json. Matches: PM-KISAN (fits farmer & land), PM-JAY (income < 2.5L), MGNREGA." },
      { num: "4", title: "Grounded Responding", desc: "Synthesizes response citing PM-KISAN and PM-JAY guidelines directly from database. Prevents hallucinating payouts." },
      { num: "5", title: "Checklist Synthesis", desc: "Extracts union of required documents: Land Patta + Aadhaar + Bank Account, rendering a downloadable checklist." }
    ]
  },
  maternity: {
    profile: { age: 19, gender: "female", occupation: "domestic_worker", income: 75000, needs_land: false },
    chatLog: [
      { sender: "user", text: "வணக்கம். என் மகள் 19 வயது, கர்ப்பமாக இருக்கிறாள். அவளுக்கு ஏதேனும் அரசு உதவி கிடைக்குமா? (Hello. My daughter is 19 and pregnant. Is there any government aid?)" },
      { sender: "bot", text: "வணக்கம் சுனிதா தேவி. உங்கள் மகளுக்கு வாழ்த்துகள். 19 வயதுடைய கர்ப்பிணிப் பெண்ணுக்கு அரசாங்கம் வழங்கும் மிக முக்கியமான திட்டம் **பிரதான் மந்திரி மாத்ரு வந்தனா யோஜனா (PMMVY)** ஆகும்.\n\nஇதன் கீழ் முதல் பிரசவத்திற்கு **₹5,000** நேரடி ரொக்க உதவி 3 தவணைகளாக வழங்கப்படும். மேலும், உங்கள் குடும்பத்தின் குறைந்த வருமானம் (₹75,000) காரணமாக, நீங்கள் **ஆயுஷ்மான் பாரத் (PM-JAY)** திட்டத்தின் கீழ் ₹5 லட்சம் இலவச மருத்துவக் காப்பீட்டிற்கும் தகுதி பெறுகிறீர்கள்.\n\nதேவையான ஆவணங்களை உங்களுக்குப் பட்டியலிடட்டுமா?" },
      { sender: "user", text: "ஆம், என்னென்ன ஆவணங்கள் தேவை என்று சொல்லுங்கள். (Yes, please tell me what documents are needed.)" },
      { sender: "bot", text: "நிச்சயமாக. **PMMVY** திட்டத்திற்கு பின்வரும் ஆவணங்கள் தேவை:\n\n* **தாய் சேய் பாதுகாப்பு அட்டை (MCP Card)** (கர்ப்ப பதிவு சான்று)\n* **தாயின் ஆதார் அட்டை**\n* **வங்கி கணக்கு புத்தக நகல்** (நேரடி பணப்பரிமாற்றத்திற்கு)\n* **கணவரின் ஆதார் அட்டை**\n\nஇவை அனைத்தையும் தயார் செய்து அருகில் உள்ள அங்கன்வாடி மையத்தில் சமர்ப்பிக்கவும். வலது பக்க பேனலில் விரிவான பட்டியல் உள்ளது." }
    ],
    flow: [
      { num: "1", title: "Tamil Input Translation", desc: "User inputs queries in Tamil. System loads the Tamil dictionary and routes queries locally." },
      { num: "2", title: "Attribute Extraction", desc: "System extracts attributes: Gender=Female, Age=19 (eligible for PMMVY since min_age is 19), Job=Domestic Helper." },
      { num: "3", title: "JSON Rule Check", desc: "PMMVY requires female gender, age >= 19. Matches successfully. PM-JAY matches due to low income (75k)." },
      { num: "4", title: "Tamil Response Synthesis", desc: "Compiles response in Tamil, citing MCP card and Anganwadi submission guidelines." },
      { num: "5", title: "Tamil Checklist", desc: "Outputs document names translated in Tamil: 'தாய் சேய் பாதுகாப்பு அட்டை', 'ஆதார் அட்டை'." }
    ]
  },
  pension: {
    profile: { age: 24, gender: "any", occupation: "gig_worker", income: 160000, needs_land: false },
    chatLog: [
      { sender: "user", text: "Hey JanSeva, main Zomato rider hoon. Delivery ka kaam karta hoon. Mujhe future ke liye save karna hai. Pension schemes batao?" },
      { sender: "bot", text: "Hello Amit! As a gig worker (delivery agent) aged 24 with an annual income of ₹1.6 Lakhs, you qualify for two highly secure social security schemes:\n\n1. **PM Shram Yogi Maan-dhan (PM-SYM)**: A pension scheme specifically for unorganized workers. By contributing a small monthly amount (approx ₹55-₹200 depending on age), the government co-contributes equal money. You get **₹3,000/month assured pension** after age 60.\n2. **Atal Pension Yojana (APY)**: Gives guaranteed minimum pension of ₹1,000 to ₹5,000/month after age 60.\n3. **PM Mudra Yojana**: If you need a loan (Shishu category up to ₹50,000) to purchase a vehicle, you can get it collateral-free.\n\nWhich of these would you like to enroll in first?" },
      { sender: "user", text: "PM-SYM looks good. Registration ke liye kya documents lagnge? Auto debit ho jayega na?" },
      { sender: "bot", text: "Yes! PM-SYM utilizes auto-debit from your savings account directly. For registration, you only need:\n\n* **Aadhaar Card**\n* **Savings Bank Account with IFSC Code**\n* **Signed Consent Form for Auto-debit**\n\nYou can register at any nearest Common Service Centre (CSC) / Jan Seva Kendra. Your checklist has been updated." }
    ],
    flow: [
      { num: "1", title: "Code-Mixed Tokenizing", desc: "User inputs Hinglish: 'main Zomato rider hoon... pension schemes'. Extracted keywords: Zomato rider -> Gig Worker, pension." },
      { num: "2", title: "Unorganized Worker Matching", desc: "Rules match PM-SYM: eligible for unorganized workers aged 18-40, income <= 1.8L. Amit is 24, earns 1.6L. Success." },
      { num: "3", title: "Mudra Loan Logic", desc: "Mudra is eligible for micro-businesses/freelancers. Matches Amit's potential bike loan request." },
      { num: "4", title: "Actionable Guidance", desc: "Guides the user to CSC (Common Service Centre) for enrollment and clarifies auto-debit consent details." },
      { num: "5", title: "Checklist Compiling", desc: "Pulls Bank Account IFSC details and Auto-debit consent form requirement into the output checklist." }
    ]
  }
};

// Pilot testing data of 12 users
const pilotUsers = [
  { id: "P-01", age: 48, gender: "Male", lang: "Hindi", occupation: "farmer", income: 7500, schemes: "PM-KISAN, PMJAY, NREGA", completion: "Yes", comp: "90%", csat: "5" },
  { id: "P-02", age: 36, gender: "Female", lang: "Tamil", occupation: "domestic_worker", income: 6200, schemes: "PMUY, PMAY, PMJAY", completion: "Yes", comp: "80%", csat: "4" },
  { id: "P-03", age: 24, gender: "Male", lang: "Hindi/Eng", occupation: "gig_worker", income: 13000, schemes: "PM-SYM, PMMY, APY", completion: "Yes", comp: "90%", csat: "5" },
  { id: "P-04", age: 52, gender: "Male", lang: "Hindi", occupation: "farmer", income: 8000, schemes: "PM-KISAN, NREGA, APY", completion: "Yes", comp: "70%", csat: "4" },
  { id: "P-05", age: 29, gender: "Female", lang: "Tamil", occupation: "unemployed", income: 4500, schemes: "PMMVY, PMUY, PMJAY", completion: "Yes", comp: "80%", csat: "4" },
  { id: "P-06", age: 19, gender: "Female", lang: "Tamil", occupation: "domestic_worker", income: 5000, schemes: "PMMVY, PMJAY", completion: "Yes", comp: "80%", csat: "5" },
  { id: "P-07", age: 42, gender: "Female", lang: "Hindi", occupation: "domestic_worker", income: 7000, schemes: "PMUY, NREGA, PM-SYM", completion: "Yes", comp: "60%", csat: "3" },
  { id: "P-08", age: 31, gender: "Male", lang: "Hindi", occupation: "gig_worker", income: 15000, schemes: "PMMY, APY, PMJAY", completion: "No", comp: "50%", csat: "3" },
  { id: "P-09", age: 61, gender: "Male", lang: "Tamil", occupation: "farmer", income: 5500, schemes: "PM-KISAN, NREGA, PMJAY", completion: "Yes", comp: "80%", csat: "4" },
  { id: "P-10", age: 27, gender: "Female", lang: "Hindi", occupation: "unemployed", income: 3000, schemes: "PMMVY, PMUY, PMJAY", completion: "Yes", comp: "90%", csat: "5" },
  { id: "P-11", age: 38, gender: "Male", lang: "Hindi", occupation: "farmer", income: 9500, schemes: "PM-KISAN, NREGA, PMMY", completion: "Yes", comp: "80%", csat: "4" },
  { id: "P-12", age: 45, gender: "Female", lang: "Tamil", occupation: "domestic_worker", income: 8500, schemes: "PMUY, PM-SYM", completion: "No", comp: "60%", csat: "2" }
];

// Fallback schemes if schemes.json load is blocked by CORS in file scheme
const embeddedSchemesFallback = [
  {
    "id": "pm_kisan",
    "name": {
      "en": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
      "hi": "पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)",
      "ta": "பிஎம்-கிசான் (பிரதான் மந்திரி கிசான் சம்மன் நிதி)"
    },
    "description": {
      "en": "Direct financial assistance of ₹6,000 per year for land-owning farmers.",
      "hi": "भूमिधारक किसानों के लिए प्रति वर्ष ₹6,000 की प्रत्यक्ष वित्तीय सहायता।",
      "ta": "நில உரிமையாளரான விவசாயிகளுக்கு ஆண்டுக்கு ₹6,000 நேரடி நிதி உதவி."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 150, "gender": "any", "occupations": ["farmer"], "max_income": 9999999, "needs_land": true },
    "benefits": { "en": "₹6,000 per year in bank accounts (₹2,000 every 4 months).", "hi": "बैंक खातों में प्रति वर्ष ₹6,000 (हर 4 महीने में ₹2,000)।", "ta": "வங்கி கணக்கில் ஆண்டுக்கு ₹6,000 (ஒவ்வொரு 4 மாதங்களுக்கும் ₹2,000)." },
    "documents": {
      "en": ["Land Ownership Papers (Jamabandi/Patta)", "Aadhaar Card", "Bank Account Passbook", "Mobile Number Linked to Aadhaar"],
      "hi": ["भूमि स्वामित्व के दस्तावेज (जमाबंदी/पट्टा)", "आधार कार्ड", "बैंक खाता पासबुक", "आधार से लिंक मोबाइल नंबर"],
      "ta": ["நில உரிமை ஆவணங்கள் (பட்டா/சிட்டா)", "ஆதார் அட்டை", "வங்கி கணக்கு புத்தக நகல்", "ஆதாருடன் இணைக்கப்பட்ட கைபேசி எண்"]
    }
  },
  {
    "id": "ayushman_bharat",
    "name": {
      "en": "Ayushman Bharat (PM-JAY)",
      "hi": "आयुष्मान भारत (पीएम-जन आरोग्य योजना)",
      "ta": "ஆயுஷ்மான் பாரத் (பிஎம்-ஜேஏஒய்)"
    },
    "description": {
      "en": "National health insurance scheme offering cashless hospital cover.",
      "hi": "कैशलेस माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती कवर की पेशकश करने वाली स्वास्थ्य बीमा योजना।",
      "ta": "இலவச மற்றும் ரொக்கமில்லா மருத்துவக் காப்பீடு வழங்கும் தேசிய சுகாதாரத் திட்டம்."
    },
    "eligibility_rules": { "min_age": 0, "max_age": 150, "gender": "any", "occupations": ["farmer", "gig_worker", "domestic_worker", "unemployed", "other"], "max_income": 250000, "needs_land": false },
    "benefits": { "en": "Free medical cover up to ₹5 Lakh per family per year.", "hi": "पैनल में शामिल अस्पतालों में प्रति वर्ष प्रति परिवार ₹5 लाख तक का मुफ्त चिकित्सा कवर।", "ta": "அங்கீகரிக்கப்பட்ட மருத்துவமனைகளில் ஒரு குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை இலவச சிகிச்சை." },
    "documents": {
      "en": ["Aadhaar Card", "Ration Card (BPL)", "Income Certificate"],
      "hi": ["आधार कार्ड", "राशन कार्ड (बीपीएल)", "आय प्रमाण पत्र"],
      "ta": ["ஆதார் அட்டை", "குடும்ப அட்டை (வறுமைக் கோட்டிற்கு கீழ்)", "வருமான சான்றிதழ்"]
    }
  },
  {
    "id": "pmay",
    "name": {
      "en": "PMAY (Pradhan Mantri Awas Yojana - Housing for All)",
      "hi": "पीएम आवास योजना (प्रधानमंत्री आवास योजना - सबके लिए आवास)",
      "ta": "பிஎம்ஆய் (பிரதான் மந்திரி அவாஸ் யோஜனா - அனைவருக்கும் வீடு)"
    },
    "description": {
      "en": "Provides financial subsidy for construction of pucca houses for poor families.",
      "hi": "ग्रामीण और शहरी क्षेत्रों में गरीब परिवारों के लिए पक्के घरों के निर्माण के लिए वित्तीय सब्सिडी।",
      "ta": "கிராமப்புற மற்றும் நகர்ப்புற ஏழைக் குடும்பங்கள் பக்கா வீடுகள் கட்ட நிதியுதவி அளிக்கிறது."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 150, "gender": "any", "occupations": ["farmer", "gig_worker", "domestic_worker", "unemployed", "other"], "max_income": 300000, "needs_land": false },
    "benefits": { "en": "Financial assistance of ₹1.2 Lakh to ₹1.3 Lakh for house construction.", "hi": "घर निर्माण के लिए ₹1.2 लाख से ₹1.3 लाख की वित्तीय सहायता।", "ta": "வீடு கட்ட சமவெளிப் பகுதியில் ₹1.2 லட்சமும், மலைப் பகுதியில் ₹1.3 லட்சமும் நிதி உதவி." },
    "documents": {
      "en": ["Aadhaar Card", "Ration Card", "Affidavit declaring no pucca house in India", "Income Certificate"],
      "hi": ["आधार कार्ड", "राशन कार्ड", "भारत में कोई पक्का घर न होने का शपथ पत्र", "आय प्रमाण पत्र"],
      "ta": ["ஆதார் அட்டை", "குடும்ப அட்டை", "இந்தியாவில் சொந்தமாக பக்கா வீடு இல்லை என்பதற்கான சுய சான்றிதழ்", "வருமான சான்றிதழ்"]
    }
  },
  {
    "id": "ujjwala",
    "name": {
      "en": "Pradhan Mantri Ujjwala Yojana (PMUY)",
      "hi": "प्रधानमंत्री उज्ज्वला योजना (पीएमयूवाई)",
      "ta": "பிரதான் மந்திரி உஜ்வாலா யோஜனா (பிஎம்யுஒய்)"
    },
    "description": {
      "en": "Provides clean cooking fuel (LPG connections) to women from below-poverty-line (BPL) households.",
      "hi": "गरीबी रेखा से नीचे (बीपीएल) परिवारों की महिलाओं को स्वच्छ खाना पकाने का ईंधन (एलपीजी कनेक्शन) प्रदान करता है।",
      "ta": "வறுமைக் கோட்டுக்கு கீழுள்ள குடும்பங்களைச் சேர்ந்த பெண்களுக்கு இலவச சமையல் எரிவாயு இணைப்பு வழங்குகிறது."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 150, "gender": "female", "occupations": ["farmer", "gig_worker", "domestic_worker", "unemployed", "other"], "max_income": 150000, "needs_land": false },
    "benefits": { "en": "Free first LPG cylinder, regulator, and stove connection subsidy.", "hi": "पहला एलपीजी सिलेंडर, रेगुलेटर और गैस चूल्हा बिल्कुल मुफ्त।", "ta": "முதல் எல்பிஜி சிலிண்டர், ரெகுலேட்டர் மற்றும் எரிவாயு அடுப்பு இலவசமாக வழங்கப்படும்." },
    "documents": {
      "en": ["Aadhaar Card", "RPL/BPL Ration Card", "BPL Certificate", "Bank Account Details"],
      "hi": ["आधार कार्ड", "राशन कार्ड (बीपीएल)", "बीपीएल प्रमाण पत्र", "बैंक खाता विवरण"],
      "ta": ["ஆதார் அட்டை", "குடும்ப அட்டை (வறுமைக் கோட்டிற்கு கீழ்)", "பிபிஎல் சான்றிதழ்", "வங்கி கணக்கு விவரங்கள்"]
    }
  },
  {
    "id": "nrega",
    "name": {
      "en": "MGNREGA (National Rural Employment Guarantee)",
      "hi": "मनरेगा (महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी)",
      "ta": "மகாத்மா காந்தி தேசிய ஊரக வேலை உறுதித் திட்டம் (மகாத்மா காந்தி என்ஆர்இஜிஏ)"
    },
    "description": {
      "en": "Guarantees 100 days of unskilled wage employment in a financial year to rural household members.",
      "hi": "ग्रामीण परिवारों के वयस्क सदस्यों को एक वित्तीय वर्ष में 100 दिनों के अकुशल मजदूरी रोजगार की गारंटी।",
      "ta": "கிராமப்புறக் குடும்பங்களில் உள்ள நபர்களுக்கு நிதியாண்டில் 100 நாட்கள் உடல் உழைப்பு சார்ந்த வேலைவாய்ப்பை உறுதி செய்கிறது."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 150, "gender": "any", "occupations": ["farmer", "domestic_worker", "unemployed", "other"], "max_income": 9999999, "needs_land": false },
    "benefits": { "en": "Guaranteed 100 days of employment at state-fixed wage rates.", "hi": "राज्य-निर्धारित मजदूरी दरों पर 100 दिनों के रोजगार की गारंटी।", "ta": "மாநில அரசால் நிர்ணயிக்கப்பட்ட தினசரி கூலியில் 100 நாட்கள் வேலைவாய்ப்பு." },
    "documents": {
      "en": ["Aadhaar Card", "Passport Size Photograph", "Bank Account Details", "Proof of Residence"],
      "hi": ["आधार कार्ड", "पासपोर्ट आकार का फोटो", "बैंक खाता विवरण", "निवास का प्रमाण"],
      "ta": ["ஆதார் அட்டை", "புகைப்படம்", "வங்கி கணக்கு விவரங்கள்", "முகவரி சான்று"]
    }
  },
  {
    "id": "sukanya_samriddhi",
    "name": {
      "en": "Sukanya Samriddhi Yojana (SSY)",
      "hi": "सुकन्या समृद्धि योजना (एसएसवाई)",
      "ta": "சுகன்யா சம்ரித்தி யோஜனா (பெண் குழந்தை சேமிப்புத் திட்டம்)"
    },
    "description": {
      "en": "A small deposit savings scheme for the girl child, offering high-interest rates and tax benefits.",
      "hi": "बालिकाओं के लिए एक लघु जमा बचत योजना, जिसमें उच्च ब्याज दर और कर लाभ प्रदान किए जाते हैं।",
      "ta": "பெண் குழந்தைகளின் கல்வி மற்றும் எதிர்காலத்திற்கான அதிக வட்டி வழங்கும் சிறு சேமிப்புத் திட்டம்."
    },
    "eligibility_rules": { "min_age": 0, "max_age": 10, "gender": "female", "occupations": ["unemployed", "other"], "max_income": 9999999, "needs_land": false },
    "benefits": { "en": "High compound interest rate (8.2%+) on savings, tax-exempt under Section 80C.", "hi": "बचत पर उच्च चक्रवृद्धि ब्याज दर (8.2%+), धारा 80C के तहत कर-मुक्त।", "ta": "சேமிப்பிற்கு அதிக கூட்டு வட்டி (8.2%+), பிரிவு 80C-ன் கீழ் வரி விலக்கு." },
    "documents": {
      "en": ["Birth Certificate of Girl Child", "Identity Proof of Parent", "Address Proof of Parent"],
      "hi": ["बालिका का जन्म प्रमाण पत्र", "माता-पिता का पहचान पत्र", "माता-पिता का निवास प्रमाण"],
      "ta": ["பெண் குழந்தையின் பிறப்பு சான்றிதழ்", "பெற்றோரின் அடையாள சான்று", "பெற்றோரின் முகவரி சான்று"]
    }
  },
  {
    "id": "shram_yogi",
    "name": {
      "en": "PM Shram Yogi Maan-dhan (PM-SYM)",
      "hi": "प्रधानमंत्री श्रम योगी मान-धन (पीएम-एसवाईएम)",
      "ta": "பிஎம் ஷ்ரம் யோகி மான்-தன் (பிஎம்-எஸ்ஒய்எம்)"
    },
    "description": {
      "en": "A pension scheme for unorganized workers like street vendors, domestic workers.",
      "hi": "रेहड़ी-पटरी वालों, रिक्शा चालकों, घरेलू कामगारों जैसे असंगठित कामगारों के लिए एक स्वैच्छिक पेंशन योजना।",
      "ta": "தெரு வியாபாரிகள், வீட்டுப் பணியாளர்கள் போன்ற ஒழுங்கமைக்கப்படாத தொழிலாளர்களுக்கான பங்களிப்பு ஓய்வூதியத் திட்டம்."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 40, "gender": "any", "occupations": ["gig_worker", "domestic_worker", "other"], "max_income": 180000, "needs_land": false },
    "benefits": { "en": "Assured pension of ₹3,000 per month after reaching the age of 60.", "hi": "60 वर्ष की आयु पूरी होने के बाद ₹3,000 प्रति माह की सुनिश्चित पेंशन।", "ta": "60 வயதை அடைந்த பிறகு மாதந்தோறும் ₹3,000 ஓய்வூதியம் வழங்கப்படும்." },
    "documents": {
      "en": ["Aadhaar Card", "Savings Bank Account Details", "Consent Form for Auto-debit"],
      "hi": ["आधार कार्ड", "बचत बैंक खाता विवरण", "ऑटो-डेबिट के लिए सहमति पत्र"],
      "ta": ["ஆதார் அட்டை", "வங்கி சேமிப்புக் கணக்கு விவரங்கள்", "தானாகவே பிடித்தம் செய்வதற்கான ஒப்புதல் படிவம்"]
    }
  },
  {
    "id": "matru_vandana",
    "name": {
      "en": "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
      "hi": "प्रधानमंत्री मातृ वंदना योजना (पीएमएमवीवाई)",
      "ta": "பிரதான் மந்திரி மாத்ரு வந்தனா யோஜனா (பிஎம்எம்விஒய்)"
    },
    "description": {
      "en": "Maternity benefit scheme for pregnant and lactating mothers for the first live birth.",
      "hi": "गर्भवती और स्तनपान कराने वाली माताओं के लिए पहली बार मां बनने पर मातृत्व लाभ योजना।",
      "ta": "கர்ப்பிணிப் பெண்கள் மற்றும் பாலூட்டும் தாய்மார்களின் முதல் பிரசவத்திற்கு வழங்கும் மகப்பேறு நலத் திட்டம்."
    },
    "eligibility_rules": { "min_age": 19, "max_age": 50, "gender": "female", "occupations": ["farmer", "gig_worker", "domestic_worker", "unemployed", "other"], "max_income": 9999999, "needs_land": false },
    "benefits": { "en": "Direct cash incentive of ₹5,000 paid in three installments.", "hi": "गर्भावस्था पंजीकरण और टीकाकरण से जुड़े तीन किस्तों में ₹5,000 का सीधा नकद प्रोत्साहन।", "ta": "கர்ப்ப பதிவு, பரிசோதனைகள் மற்றும் குழந்தைக்கு தடுப்பூசி போடுதல் ஆகியவற்றுடன் தொடர்புடைய ₹5,000 ரொக்க உதவி." },
    "documents": {
      "en": ["Mother and Child Protection (MCP) Card", "Identity Proof of Mother", "Bank Account Passbook"],
      "hi": ["मां और बच्चा संरक्षण (एमसीपी) कार्ड", "मां का पहचान प्रमाण", "बैंक खाता पासबुक"],
      "ta": ["தாய் சேய் பாதுகாப்பு அட்டை (MCP Card)", "தாயின் அடையாளச் சான்று", "வங்கி கணக்கு புத்தக நகல்"]
    }
  },
  {
    "id": "mudra_yojana",
    "name": {
      "en": "Pradhan Mantri Mudra Yojana (PMMY)",
      "hi": "प्रधानमंत्री मुद्रा योजना (पीएमएमवाई)",
      "ta": "பிரதான் மந்திரி முத்ரா யோஜனா (பிஎம்எம்ஒய்)"
    },
    "description": {
      "en": "Offers collateral-free business loans up to ₹10 Lakhs to micro enterprises.",
      "hi": "गैर-कॉरपोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को ₹10 लाख तक के संपार्श्विक-मुक्त व्यापार ऋण।",
      "ta": "சிறு, குறு மற்றும் நடுத்தர தொழில் முனைவோருக்கு பிணையில்லா வணிகக் கடன் ₹10 லட்சம் வரை வழங்குகிறது."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 65, "gender": "any", "occupations": ["farmer", "gig_worker", "domestic_worker", "other"], "max_income": 9999999, "needs_land": false },
    "benefits": { "en": "Loans categorised in Shishu, Kishor, and Tarun with low interest rates.", "hi": "शिशु (₹50k तक), किशोर (₹5L तक), और तरुण (₹10L तक) श्रेणियों में कम ब्याज दर ऋण।", "ta": "சிசு (₹50,000 வரை), किशोर (₹5 லட்சம் வரை) மற்றும் தருண் (₹10 லட்சம் வரை) என குறைந்த வட்டி கடன்." },
    "documents": {
      "en": ["Mudra Application Form", "Business Plan", "Aadhaar Card/PAN Card"],
      "hi": ["मुद्रा आवेदन पत्र", "बिजनेस प्लान", "आधार कार्ड/पैन कार्ड"],
      "ta": ["முத்ரா விண்ணப்பப் படிவம்", "தொழில் திட்டம்", "ஆதார் அட்டை/பான் கார்டு"]
    }
  },
  {
    "id": "atal_pension",
    "name": {
      "en": "Atal Pension Yojana (APY)",
      "hi": "अटल पेंशन योजना (एपीवाई)",
      "ta": "அடல் பென்ஷன் யோஜனா (ஏபிஒய்)"
    },
    "description": {
      "en": "A pension scheme aimed at creating a social security system for all citizens.",
      "hi": "सभी नागरिकों के लिए एक सामाजिक सुरक्षा प्रणाली बनाने के उद्देश्य से शुरू की गई पेंशन योजना।",
      "ta": "அனைத்து குடிமக்களுக்கும், குறிப்பாக ஒழுங்கமைக்கப்படாத துறையில் உள்ள தொழிலாளர்களுக்கு ஓய்வூதியம் அளிக்கும் திட்டம்."
    },
    "eligibility_rules": { "min_age": 18, "max_age": 40, "gender": "any", "occupations": ["farmer", "gig_worker", "domestic_worker", "unemployed", "other"], "max_income": 9999999, "needs_land": false },
    "benefits": { "en": "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month after age 60.", "hi": "योगदान के आधार पर 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह की न्यूनतम गारंटीकृत पेंशन।", "ta": "பங்களிப்பின் அடிப்படையில் 60 வயதிற்குப் பிறகு மாதந்தோறும் ₹1,000 முதல் ₹5,000 வரை ஓய்வூதியம்." },
    "documents": {
      "en": ["Aadhaar Card", "Mobile Number", "Savings Bank Account Details"],
      "hi": ["आधार कार्ड", "मोबाइल नंबर", "बचत बैंक खाता विवरण"],
      "ta": ["ஆதார் அட்டை", "கைபேசி எண்", "வங்கி சேமிப்புக் கணக்கு விவரங்கள்"]
    }
  }
];

// App State
const state = {
  currentLang: 'en',
  currentTab: 'chatbot-sandbox',
  bandwidthMode: '2G', // '2G' or '3G/4G'
  profile: {
    age: 45,
    gender: 'any',
    occupation: 'farmer',
    income: 90000,
    needs_land: true
  },
  chatState: {
    guidedStep: -1, // -1 means free chat or chatbot waiting
    history: []
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadSchemes();
  setupNavigation();
  setupTheme();
  setupProfileForm();
  setupChatbot();
  setupPersonas();
  setupPilotTable();
  setupImpactCalculator();
  updateUIStrings();
  
  // Set initial recalculate
  triggerRecalculate();
});

// Load schemes data from JSON
function loadSchemes() {
  fetch('schemes.json')
    .then(res => res.json())
    .then(data => {
      schemesData = data;
      triggerRecalculate();
    })
    .catch(err => {
      console.warn("CORS/Fetch error: falling back to embedded schemes database.", err);
      schemesData = embeddedSchemesFallback;
      triggerRecalculate();
    });
}

// Sidebar and Navigation logic
function setupNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = item.getAttribute('data-target');
      
      // Update active menu class
      menuItems.forEach(mi => mi.classList.remove('active'));
      item.classList.add('active');
      
      // Update visible tabs
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      const activeTab = document.getElementById(target);
      if (activeTab) {
        activeTab.classList.add('active');
        state.currentTab = target;
      }
      
      // Update header titles
      const headings = {
        'chatbot-sandbox': { title: translations[state.currentLang].title, sub: translations[state.currentLang].subtitle },
        'user-personas': { title: "Target User Personas", sub: "Interactive Conversational Workflows and Personas Journey." },
        'pilot-report': { title: "Pilot Test Report", sub: "Comprehension, completion rates, and feedback logs from 12 real users." },
        'impact-projection': { title: "Impact Projection & ROI", sub: "Interactive model displaying benefits of chatbot uptake at scale." },
        'technical-blueprint': { title: "Technical Blueprint", sub: "Production deployment diagram and systems architecture." }
      };
      
      document.getElementById('section-title').textContent = headings[target].title;
      document.getElementById('section-subtitle').textContent = headings[target].sub;
    });
  });

  // Language selectors
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentLang = btn.getAttribute('data-target') || btn.getAttribute('data-lang');
      
      updateUIStrings();
      triggerRecalculate();
      
      // Re-trigger greetings in selected language if chat is empty
      if (state.chatState.history.length === 0) {
        resetChat();
      } else {
        // Just refresh the messages display
        renderChatMessages();
      }
    });
  });
}

// Light / Dark Mode Toggle
function setupTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const themeText = document.getElementById('theme-text');
  
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      themeText.textContent = "Dark Mode";
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
      themeText.textContent = "Light Mode";
    }
  });
}

// Localized UI updating
function updateUIStrings() {
  const dict = translations[state.currentLang];
  
  // Section headers if active target is chatbot
  if (state.currentTab === 'chatbot-sandbox') {
    document.getElementById('section-title').textContent = dict.title;
    document.getElementById('section-subtitle').textContent = dict.subtitle;
  }
  
  // Profile forms
  document.querySelector('.profile-card .card-header h3').textContent = dict.profileTitle;
  document.querySelector('.profile-card .card-header p').textContent = dict.profileSub;
  document.querySelector('label[for="prof-age"]').textContent = dict.ageLabel;
  document.querySelector('label[for="prof-gender"]').textContent = dict.genderLabel;
  document.getElementById('prof-gender').options[0].textContent = dict.genderAny;
  document.getElementById('prof-gender').options[1].textContent = dict.genderFemale;
  document.querySelector('label[for="prof-occupation"]').textContent = dict.occLabel;
  
  const occSelect = document.getElementById('prof-occupation');
  occSelect.options[0].textContent = dict.occFarmer;
  occSelect.options[1].textContent = dict.occGig;
  occSelect.options[2].textContent = dict.occDomestic;
  occSelect.options[3].textContent = dict.occUnemployed;
  occSelect.options[4].textContent = dict.occOther;
  
  document.querySelector('label[for="prof-income"]').textContent = dict.incomeLabel;
  document.querySelector('label[for="prof-land"]').nextElementSibling.textContent = dict.landLabel;
  document.getElementById('btn-recalculate').textContent = dict.btnUpdate;
  document.getElementById('btn-reset-chat').textContent = dict.btnReset;
  
  // Guided prompts text
  document.querySelector('.guided-prompts h4').textContent = dict.guidedScenarios;
  document.querySelector('.guided-prompts .small').textContent = dict.guidedSub;
  document.querySelector('[data-scenario="farmer"]').textContent = dict.scenarioFarmer;
  document.querySelector('[data-scenario="maternity"]').textContent = dict.scenarioMaternity;
  document.querySelector('[data-scenario="pension"]').textContent = dict.scenarioPension;
  
  // Chat header
  document.querySelector('.chat-agent-info h4').textContent = dict.chatTitle;
  document.querySelector('.status-badge').innerHTML = `<span class="pulse"></span>${dict.chatStatus}`;
  document.getElementById('bandwidth-mode').textContent = state.bandwidthMode === '2G' ? dict.bandwidth2G : dict.bandwidthNormal;
  document.getElementById('chat-input').placeholder = dict.chatInputPlaceholder;
  
  // Result sidebar
  document.querySelector('.result-card .card-header h3').textContent = dict.matchTitle;
  document.querySelector('.result-card .card-header p').textContent = dict.matchSub;
  document.querySelector('.kpi-micro .kpi-lbl').textContent = dict.matchCountText;
  document.querySelector('.matches-container h4').textContent = dict.matchedSchemesTitle;
  document.querySelector('.checklist-container h4').textContent = dict.checklistTitle;
  document.querySelector('.checklist-container p').textContent = dict.checklistSub;
  document.getElementById('btn-download-pdf').textContent = dict.btnPdf;
  document.getElementById('btn-send-sms').textContent = dict.btnSms;
}

// Profile Inputs Logic
function setupProfileForm() {
  const form = document.getElementById('profile-form');
  
  // Recalculate match output immediately on input change
  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      updateStateFromProfile();
      triggerRecalculate();
    });
  });
  
  document.getElementById('btn-recalculate').addEventListener('click', (e) => {
    e.preventDefault();
    updateStateFromProfile();
    triggerRecalculate();
    
    // Add chatbot message indicating recalculation
    addBotMessage(state.currentLang === 'en' ? 
      "I have updated your eligibility criteria directly from the profile fields." : 
      state.currentLang === 'hi' ? 
      "मैंने प्रोफ़ाइल फ़ील्ड से सीधे आपकी पात्रता मानदंडों को अपडेट कर दिया है।" : 
      "உங்களது சுயவிவர பக்கத்தின் அடிப்படையில் தகுதிகள் மாற்றியமைக்கப்பட்டுள்ளது."
    );
  });
}

// Update local state variables from forms
function updateStateFromProfile() {
  state.profile.age = parseInt(document.getElementById('prof-age').value) || 0;
  state.profile.gender = document.getElementById('prof-gender').value;
  state.profile.occupation = document.getElementById('prof-occupation').value;
  state.profile.income = parseFloat(document.getElementById('prof-income').value) || 0;
  state.profile.needs_land = document.getElementById('prof-land').checked;
}

// Sync profile form values with external changes
function syncProfileFormFromState() {
  document.getElementById('prof-age').value = state.profile.age;
  document.getElementById('prof-gender').value = state.profile.gender;
  document.getElementById('prof-occupation').value = state.profile.occupation;
  document.getElementById('prof-income').value = state.profile.income;
  document.getElementById('prof-land').checked = state.profile.needs_land;
}

// Eligibility Matching Engine
function checkEligibility(profile, scheme) {
  const rules = scheme.eligibility_rules;
  
  // Rule 1: Age check
  if (profile.age < rules.min_age || profile.age > rules.max_age) return false;
  
  // Rule 2: Gender check
  if (rules.gender !== "any" && profile.gender !== "any" && profile.gender !== rules.gender) return false;
  
  // Rule 3: Occupation check
  if (!rules.occupations.includes(profile.occupation)) return false;
  
  // Rule 4: Income check
  if (profile.income > rules.max_income) return false;
  
  // Rule 5: Land check
  if (rules.needs_land && !profile.needs_land) return false;
  
  return true;
}

// Run matching algorithms and print results
function triggerRecalculate() {
  if (schemesData.length === 0) return;
  
  const eligibleSchemes = [];
  const requiredDocs = new Set();
  
  schemesData.forEach(scheme => {
    if (checkEligibility(state.profile, scheme)) {
      eligibleSchemes.push(scheme);
      
      // Add documents localized
      const docList = scheme.documents[state.currentLang] || scheme.documents['en'] || [];
      docList.forEach(doc => requiredDocs.add(doc));
    }
  });
  
  // Update badge count
  document.getElementById('match-count').textContent = eligibleSchemes.length;
  
  // Render Matched list
  const listContainer = document.getElementById('eligible-schemes-list');
  listContainer.innerHTML = '';
  
  if (eligibleSchemes.length === 0) {
    listContainer.innerHTML = `<div class="empty-state">No schemes matched. Run the eligibility flow or update the beneficiary profile.</div>`;
  } else {
    eligibleSchemes.forEach(scheme => {
      const item = document.createElement('div');
      item.className = 'scheme-match-item';
      
      const title = scheme.name[state.currentLang] || scheme.name['en'];
      const desc = scheme.description[state.currentLang] || scheme.description['en'];
      const benefit = scheme.benefits[state.currentLang] || scheme.benefits['en'];
      
      item.innerHTML = `
        <h5>${title}</h5>
        <p>${desc}</p>
        <div class="val-badge">${benefit}</div>
      `;
      listContainer.appendChild(item);
    });
  }
  
  // Render Documents Checklist
  const docContainer = document.getElementById('document-checklist-ul');
  const docActions = document.getElementById('checklist-actions-div');
  docContainer.innerHTML = '';
  
  if (requiredDocs.size === 0) {
    docContainer.innerHTML = `<li class="empty">No documents required.</li>`;
    docActions.classList.add('hidden');
  } else {
    requiredDocs.forEach(doc => {
      const li = document.createElement('li');
      li.textContent = doc;
      docContainer.appendChild(li);
    });
    docActions.classList.remove('hidden');
  }
}

// Chatbot UI & logic
function setupChatbot() {
  const btnSend = document.getElementById('btn-send');
  const chatInput = document.getElementById('chat-input');
  const btnReset = document.getElementById('btn-reset-chat');
  const btnMic = document.getElementById('btn-mic');
  const btnBandwidth = document.getElementById('btn-toggle-bandwidth');
  
  btnSend.addEventListener('click', handleUserSendMessage);
  
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserSendMessage();
    }
  });
  
  btnReset.addEventListener('click', resetChat);
  
  btnMic.addEventListener('click', simulateVoiceInput);
  
  btnBandwidth.addEventListener('click', () => {
    state.bandwidthMode = state.bandwidthMode === '2G' ? '3G/4G' : '2G';
    updateUIStrings();
    addBotMessage(state.currentLang === 'en' ? 
      `Network bandwidth toggled to ${state.bandwidthMode}. Dynamic formatting adjusted.` : 
      state.currentLang === 'hi' ? 
      `नेटवर्क बैंडविड्थ को ${state.bandwidthMode} पर टॉगल किया गया।` : 
      `அலைவரிசை முறை ${state.bandwidthMode}க்கு மாற்றப்பட்டது.`
    );
  });
  
  // Initial greetings
  resetChat();
}

// Clear chat history and trigger welcoming text
function resetChat() {
  state.chatState.history = [];
  state.chatState.guidedStep = 0;
  
  const container = document.getElementById('chat-messages-container');
  container.innerHTML = '';
  
  const welcomeText = {
    en: "Namaste! I am JanSeva AI, your digital helper for government welfare schemes. I can answer questions in Hindi, Tamil, English, or mixed languages. To check your eligibility, please answer a few simple questions.\n\nFirst, **what is your age**?",
    hi: "नमस्ते! मैं जनसेवा एआई हूँ, सरकारी जन कल्याणकारी योजनाओं के लिए आपका डिजिटल सहायक। मैं हिंदी, तमिल, अंग्रेजी या मिश्रित भाषाओं में उत्तर दे सकता हूँ। आपकी पात्रता की जांच करने के लिए, कृपया कुछ सरल प्रश्नों के उत्तर दें।\n\nसबसे पहले, **आपकी उम्र क्या है**?",
    ta: "வணக்கம்! நான் ஜனசேவா ஏஐ, அரசு நலத்திட்டங்களுக்கான உங்கள் டிஜிட்டல் உதவியாளர். தமிழ், இந்தி, ஆங்கிலம் அல்லது கலப்பு மொழிகளில் நான் பதிலளிக்க முடியும். உங்கள் தகுதியைச் சரிபார்க்க, சில எளிய கேள்விகளுக்குப் பதிலளிக்கவும்.\n\nமுதலில், **உங்களுடைய வயது என்ன**?"
  };
  
  addBotMessage(welcomeText[state.currentLang]);
  
  // Show quick replies for age or reset profile values
  showQuickRepliesForGuidedStep();
}

function addMessageToDOM(sender, text) {
  const container = document.getElementById('chat-messages-container');
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Convert markdown-like syntax to HTML formatting
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
    
  msg.innerHTML = `
    <div class="message-content">${formattedText}</div>
    <div class="message-meta">${time}</div>
  `;
  container.appendChild(msg);
  
  // Auto scroll to bottom
  container.scrollTop = container.scrollHeight;
  
  // Add to internal state history
  state.chatState.history.push({ sender, text });
}

function addBotMessage(text) {
  addMessageToDOM('bot', text);
}

function addUserMessage(text) {
  addMessageToDOM('user', text);
}

// Handle sending input
function handleUserSendMessage() {
  const chatInput = document.getElementById('chat-input');
  const text = chatInput.value.trim();
  if (!text) return;
  
  addUserMessage(text);
  chatInput.value = '';
  
  // Process query
  setTimeout(() => {
    processChatInput(text);
  }, 600);
}

// Show Quick Choice Replies for guided conversation
function showQuickRepliesForGuidedStep() {
  const container = document.getElementById('quick-options-container');
  container.innerHTML = '';
  container.classList.add('hidden');
  
  // If we are not in guided flow, do nothing
  if (state.chatState.guidedStep <= 0) return;
  
  let options = [];
  
  if (state.chatState.guidedStep === 2) { // Gender question
    options = [
      { text: state.currentLang === 'en' ? 'Male / General' : state.currentLang === 'hi' ? 'पुरुष / सामान्य' : 'ஆண் / பொது', value: 'any' },
      { text: state.currentLang === 'en' ? 'Female' : state.currentLang === 'hi' ? 'महिला' : 'பெண்', value: 'female' }
    ];
  } else if (state.chatState.guidedStep === 3) { // Occupation question
    options = [
      { text: state.currentLang === 'en' ? 'Farmer' : state.currentLang === 'hi' ? 'किसान' : 'விவசாயி', value: 'farmer' },
      { text: state.currentLang === 'en' ? 'Gig Worker' : state.currentLang === 'hi' ? 'गिग वर्कर' : 'டெலிவரி ஊழியர்', value: 'gig_worker' },
      { text: state.currentLang === 'en' ? 'Domestic Worker' : state.currentLang === 'hi' ? 'घरेलू कामगार' : 'வீட்டுப் பணியாளர்', value: 'domestic_worker' },
      { text: state.currentLang === 'en' ? 'Unemployed' : state.currentLang === 'hi' ? 'बेरोजगार' : 'வேலையில்லாதவர்', value: 'unemployed' },
      { text: state.currentLang === 'en' ? 'Other' : state.currentLang === 'hi' ? 'अन्य' : 'இதர', value: 'other' }
    ];
  } else if (state.chatState.guidedStep === 4) { // Annual income range
    options = [
      { text: 'Under ₹1.0 Lakh', value: '90000' },
      { text: '₹1.0L - ₹1.8L', value: '160000' },
      { text: '₹1.8L - ₹2.5L', value: '220000' },
      { text: 'Above ₹2.5 Lakhs', value: '350000' }
    ];
  } else if (state.chatState.guidedStep === 5) { // Land ownership
    options = [
      { text: state.currentLang === 'en' ? 'Yes, I own land' : state.currentLang === 'hi' ? 'हाँ, जमीन है' : 'ஆம், நிலம் உள்ளது', value: 'yes' },
      { text: state.currentLang === 'en' ? 'No land' : state.currentLang === 'hi' ? 'नहीं, जमीन नहीं है' : 'இல்லை, நிலம் இல்லை', value: 'no' }
    ];
  }
  
  if (options.length > 0) {
    container.classList.remove('hidden');
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quick-opt-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => {
        addUserMessage(opt.text);
        container.classList.add('hidden');
        setTimeout(() => {
          processGuidedInput(opt.value);
        }, 500);
      });
      container.appendChild(btn);
    });
  }
}

// NLP Code-mix Parser & eligibility engine combined
function processChatInput(userInput) {
  // Check if we are in guided conversational flow
  if (state.chatState.guidedStep > 0) {
    processGuidedInput(userInput);
    return;
  }
  
  const text = userInput.toLowerCase();
  
  // Fallback Grounding / Fallback Answer
  let fallbackMessage = "";
  if (state.currentLang === 'en') {
    fallbackMessage = "I am grounded in official MyScheme database guidelines. I cannot confirm your eligibility for this specific query as the details are unclear. Please consult the nearest *Jan Seva Kendra* or government welfare office.";
  } else if (state.currentLang === 'hi') {
    fallbackMessage = "मैं आधिकारिक सरकारी योजनाओं के नियमों के अनुसार उत्तर देता हूँ। आपके प्रश्न का उत्तर देने के लिए पर्याप्त विवरण नहीं है। कृपया नजदीकी *जन सेवा केंद्र* से संपर्क करें।";
  } else {
    fallbackMessage = "நான் அதிகாரப்பூர்வ அரசு வழிகாட்டுதல்களின்படி பதிலளிக்கிறேன். உங்கள் கேள்விக்கான விவரங்கள் தெளிவாக இல்லை. தயவுசெய்து அருகில் உள்ள *ஜனசேவை மையத்தை* அணுகவும்.";
  }
  
  // Simple code-mixing keywords checking
  // 1. Farmer schemes
  if (text.includes("kisan") || text.includes("farmer") || text.includes("kheti") || text.includes("விவசாய") || text.includes("பயிர்")) {
    state.profile.occupation = "farmer";
    state.profile.needs_land = true;
    syncProfileFormFromState();
    triggerRecalculate();
    
    addBotMessage(state.currentLang === 'en' ?
      "Recognized **Farmer** status. I have matched you to **PM-KISAN** which pays ₹6,000/year to land-owning farmers, and **MGNREGA** for work support. Check the updated documents checklist in the right panel." :
      state.currentLang === 'hi' ?
      "**किसान** प्रोफ़ाइल पहचानी गई। मैंने आपको **पीएम-किसान** (₹6,000/वर्ष) और **मनरेगा** (रोजगार) से जोड़ दिया है। कृपया दाएं पैनल में आवश्यक दस्तावेजों की सूची देखें।" :
      "**விவசாயி** விவரங்கள் கண்டறியப்பட்டது. உங்களை **பிஎம்-கிசான்** (ஆண்டுக்கு ₹6,000) மற்றும் **என்ஆர்இஜிஏ** திட்டங்களுடன் இணைத்துள்ளேன். ஆவணங்களின் பட்டியலை வலது பக்க பேனலில் பார்க்கவும்."
    );
    return;
  }
  
  // 2. Health schemes
  if (text.includes("hospital") || text.includes("ayushman") || text.includes("medical") || text.includes("health") || text.includes("bimar") || text.includes("treatment") || text.includes("மருத்துவ") || text.includes("காப்பீடு")) {
    state.profile.income = Math.min(state.profile.income, 150000); // match threshold
    syncProfileFormFromState();
    triggerRecalculate();
    
    addBotMessage(state.currentLang === 'en' ?
      "Looking for health benefits? You qualify for **Ayushman Bharat (PM-JAY)** which offers free medical cover up to ₹5 Lakhs per family per year at empaneled hospitals. Ration card and Income certificate are required." :
      state.currentLang === 'hi' ?
      "स्वास्थ्य लाभ की तलाश है? आप **आयुष्मान भारत (PM-JAY)** के लिए पात्र हैं, जो अस्पतालों में प्रति परिवार प्रति वर्ष ₹5 लाख तक का मुफ्त चिकित्सा कवर प्रदान करता है।" :
      "சுகாதார நலத்திட்டம் தேடுகிறீர்களா? நீங்கள் **ஆயுஷ்மான் பாரத் (PM-JAY)** திட்டத்திற்கு தகுதியுடையவர். இதன் மூலம் குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை இலவச சிகிச்சை பெறலாம்."
    );
    return;
  }
  
  // 3. LPG gas schemes
  if (text.includes("gas") || text.includes("ujjwala") || text.includes("cylinder") || text.includes("chulha") || text.includes("எரிவாயு") || text.includes("சிலிண்டர்")) {
    state.profile.gender = "female";
    state.profile.income = Math.min(state.profile.income, 120000);
    syncProfileFormFromState();
    triggerRecalculate();
    
    addBotMessage(state.currentLang === 'en' ?
      "For clean cooking gas, **Pradhan Mantri Ujjwala Yojana (PMUY)** offers free LPG cylinders to women of BPL households. I have updated your profile gender to Female to reflect this." :
      state.currentLang === 'hi' ?
      "स्वच्छ रसोई गैस के लिए, **प्रधानमंत्री उज्ज्वला योजना (PMUY)** बीपीएल परिवारों की महिलाओं को मुफ्त एलपीजी कनेक्शन प्रदान करती है। मैंने आपकी प्रोफ़ाइल में लिंग को महिला में अपडेट किया है।" :
      "இலவச சமையல் எரிவாயு இணைப்பிற்கு, **பிரதான் மந்திரி உஜ்வாலா யோஜனா (PMUY)** திட்டத்தின் கீழ் இலவச சிலிண்டர் பெறலாம். உங்களது பாலின விவரம் பெண் என மாற்றப்பட்டுள்ளது."
    );
    return;
  }

  // 4. House / Home
  if (text.includes("ghar") || text.includes("awas") || text.includes("housing") || text.includes("house") || text.includes("makaan") || text.includes("வீடு")) {
    state.profile.income = Math.min(state.profile.income, 200000);
    syncProfileFormFromState();
    triggerRecalculate();
    
    addBotMessage(state.currentLang === 'en' ?
      "To build a house, **Pradhan Mantri Awas Yojana (PMAY)** provides financial assistance of ₹1.2 Lakhs to ₹1.3 Lakhs. Check the document checklist for an affidavit stating you own no pucca house in India." :
      state.currentLang === 'hi' ?
      "पक्का घर बनाने के लिए, **प्रधानमंत्री आवास योजना (PMAY)** ₹1.2 लाख से ₹1.3 लाख की वित्तीय सहायता देती है। आवश्यक दस्तावेजों की जांच करें।" :
      "சொந்தமாக வீடு கட்ட, **பிரதான் மந்திரி அவாஸ் யோஜனா (PMAY)** மூலம் ₹1.2 லட்சம் முதல் ₹1.3 லட்சம் வரை மானியம் பெறலாம்."
    );
    return;
  }
  
  // Default fallback
  addBotMessage(fallbackMessage);
}

// Guided flow input processor
function processGuidedInput(userInput) {
  const dict = translations[state.currentLang];
  
  // Step 1: Age gathered
  if (state.chatState.guidedStep === 0) {
    const age = parseInt(userInput);
    if (isNaN(age) || age < 0 || age > 120) {
      addBotMessage(state.currentLang === 'en' ? 
        "Please enter a valid age in numbers." : 
        state.currentLang === 'hi' ? "कृपया नंबरों में एक वैध उम्र दर्ज करें।" : "தயவுசெய்து சரியான வயதை எண்களில் குறிப்பிடவும்."
      );
      return;
    }
    
    state.profile.age = age;
    syncProfileFormFromState();
    
    state.chatState.guidedStep = 2; // move to gender
    addBotMessage(state.currentLang === 'en' ? 
      "Got it. **What is your gender?**" : 
      state.currentLang === 'hi' ? "समझ गया। **आपका लिंग क्या है?**" : "வயது சேமிக்கப்பட்டது. **உங்களது பாலினம் என்ன?**"
    );
    showQuickRepliesForGuidedStep();
  }
  
  // Step 2: Gender gathered
  else if (state.chatState.guidedStep === 2) {
    let genderVal = 'any';
    const inputLower = userInput.toLowerCase();
    if (inputLower.includes('female') || inputLower.includes('महिला') || inputLower.includes('பெண்') || userInput === 'female') {
      genderVal = 'female';
    }
    
    state.profile.gender = genderVal;
    syncProfileFormFromState();
    
    state.chatState.guidedStep = 3; // move to occupation
    addBotMessage(state.currentLang === 'en' ? 
      "Understood. **What is your primary occupation?**" : 
      state.currentLang === 'hi' ? "ठीक है। **आपका मुख्य व्यवसाय क्या है?**" : "சேமிக்கப்பட்டது. **உங்களது முக்கிய தொழில் என்ன?**"
    );
    showQuickRepliesForGuidedStep();
  }
  
  // Step 3: Occupation gathered
  else if (state.chatState.guidedStep === 3) {
    let job = 'other';
    // User clicked quick button which sends exact values or typed words
    if (userInput === 'farmer' || userInput === 'gig_worker' || userInput === 'domestic_worker' || userInput === 'unemployed') {
      job = userInput;
    } else {
      const txt = userInput.toLowerCase();
      if (txt.includes('farm') || txt.includes('kisan') || txt.includes('kheti') || txt.includes('விவசாய')) job = 'farmer';
      else if (txt.includes('gig') || txt.includes('delivery') || txt.includes('rider') || txt.includes('டெலிவரி')) job = 'gig_worker';
      else if (txt.includes('domestic') || txt.includes('helper') || txt.includes('maid') || txt.includes('வேலைக்காரி')) job = 'domestic_worker';
      else if (txt.includes('unemployed') || txt.includes('no job') || txt.includes('வேலை இல்லை')) job = 'unemployed';
    }
    
    state.profile.occupation = job;
    state.profile.needs_land = (job === 'farmer'); // auto set land for farmers
    syncProfileFormFromState();
    
    state.chatState.guidedStep = 4; // move to income
    addBotMessage(state.currentLang === 'en' ? 
      "Got it. **What is your estimated annual household income?**" : 
      state.currentLang === 'hi' ? "समझ गया। **आपकी अनुमानित वार्षिक पारिवारिक आय कितनी है?**" : "சேமிக்கப்பட்டது. **உங்களது குடும்பத்தின் தோராயமான ஆண்டு வருமானம் எவ்வளவு?**"
    );
    showQuickRepliesForGuidedStep();
  }
  
  // Step 4: Income gathered
  else if (state.chatState.guidedStep === 4) {
    let income = 90000;
    const cleanInput = userInput.replace(/[^0-9]/g, '');
    if (cleanInput) {
      income = parseInt(cleanInput);
    } else {
      income = parseInt(userInput) || 90000;
    }
    
    state.profile.income = income;
    syncProfileFormFromState();
    
    // If occupation is farmer, we must ask about land ownership
    if (state.profile.occupation === 'farmer') {
      state.chatState.guidedStep = 5;
      addBotMessage(state.currentLang === 'en' ? 
        "Final question. **Do you own agricultural land?**" : 
        state.currentLang === 'hi' ? "आखिरी सवाल। **क्या आपके पास अपनी कृषि भूमि है?**" : "இறுதி கேள்வி. **உங்களுக்கு சொந்தமாக விவசாய நிலம் இருக்கிறதா?**"
      );
      showQuickRepliesForGuidedStep();
    } else {
      // Complete guided flow
      completeGuidedFlow();
    }
  }
  
  // Step 5: Land ownership (Farmers only)
  else if (state.chatState.guidedStep === 5) {
    let hasLand = false;
    const txt = userInput.toLowerCase();
    if (txt.includes('yes') || txt.includes('हाँ') || txt.includes('ஆம்') || userInput === 'yes') {
      hasLand = true;
    }
    
    state.profile.needs_land = hasLand;
    state.profile.hasLand = hasLand; // compatibility
    syncProfileFormFromState();
    
    completeGuidedFlow();
  }
}

// Complete conversational flow and match schemes
function completeGuidedFlow() {
  state.chatState.guidedStep = 0; // reset to 0 (free chat mode)
  
  triggerRecalculate();
  
  // Fetch eligible list
  const eligibleSchemes = [];
  schemesData.forEach(scheme => {
    if (checkEligibility(state.profile, scheme)) {
      eligibleSchemes.push(scheme);
    }
  });
  
  let matchNames = eligibleSchemes.map(s => s.name[state.currentLang] || s.name['en']).join(', ');
  
  let successText = "";
  if (state.currentLang === 'en') {
    successText = `Thank you for completing the eligibility checklist. Based on your inputs, you are eligible for **${eligibleSchemes.length} schemes**:\n\n${matchNames ? `* ${matchNames}` : "* No schemes matched. Try updating your profile."}\n\nI have generated your **required documents checklist** in the panel on the right. You can download it or send it as an SMS. Let me know if you have other questions!`;
  } else if (state.currentLang === 'hi') {
    successText = `पात्रता चेकलिस्ट को पूरा करने के लिए धन्यवाद। आपके इनपुट के आधार पर, आप **${eligibleSchemes.length} योजनाओं** के लिए पात्र हैं:\n\n${matchNames ? `* ${matchNames}` : "* कोई योजना मेल नहीं खाई।"}\n\nमैंने दाएं पैनल में आपकी **आवश्यक दस्तावेजों की चेकलिस्ट** जनरेट कर दी है। आप इसे डाउनलोड कर सकते हैं या एसएमएस के रूप में भेज सकते हैं।`;
  } else {
    successText = `கேள்விகளுக்கு பதிலளித்தமைக்கு நன்றி. உங்களது பதில்களின்படி, நீங்கள் **${eligibleSchemes.length} அரசு திட்டங்களுக்கு** தகுதியுடையவர்:\n\n${matchNames ? `* ${matchNames}` : "* திட்டங்கள் எதுவும் பொருந்தவில்லை."}\n\nஉங்களுக்கு தேவையான **ஆவணங்களின் பட்டியல்** வலது பக்க பேனலில் தயாராக உள்ளது. அவற்றை நீங்கள் பதிவிறக்கிக்கொள்ளலாம் அல்லது SMS மூலம் பெற்றுக்கொள்ளலாம்.`;
  }
  
  addBotMessage(successText);
}

// Simulate Voice Microphone input
function simulateVoiceInput() {
  let simulatedQueries = {
    en: "I am a rural farmer and I need housing and farming help.",
    hi: "मैं गाँव में रहता हूँ, मुझे खेती और पक्के मकान के लिए सरकारी मदद चाहिए।",
    ta: "நான் விவசாயி, வீடு கட்ட மற்றும் விவசாயம் செய்ய உதவி தேவை."
  };
  
  const query = simulatedQueries[state.currentLang];
  
  addBotMessage(state.currentLang === 'en' ? 
    "*Simulating Voice Input: Speaking Hindi/Tamil voice message...*" : 
    state.currentLang === 'hi' ? 
    "*वॉयस इनपुट सिमुलेशन: हिंदी में वॉयस संदेश रिकॉर्ड किया जा रहा है...*" : 
    "*ஒலிப்பதிவு சோதிக்கப்படுகிறது: தமிழில் குரல் செய்தி அனுப்பப்படுகிறது...*"
  );
  
  setTimeout(() => {
    addUserMessage(query);
    setTimeout(() => {
      processChatInput(query);
    }, 600);
  }, 1200);
}

// Personas tab setup
function setupPersonas() {
  const loadBtns = document.querySelectorAll('.btn-load-persona');
  loadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-persona');
      const data = personas[pId];
      
      // Update state profile
      state.profile = { ...data.profile };
      state.chatState.guidedStep = 0; // stop guided flow
      
      // Sync form and matching results
      syncProfileFormFromState();
      triggerRecalculate();
      
      // Clear and populate chat logs
      const container = document.getElementById('chat-messages-container');
      container.innerHTML = '';
      state.chatState.history = [];
      
      data.chatLog.forEach(log => {
        addMessageToDOM(log.sender, log.text);
      });
      
      // Render workflow steps
      renderWorkflowSteps(data.flow);
      
      // Switch active tab back to Chatbot Sandbox for demonstration
      const targetMenu = document.querySelector('.menu-item[data-target="chatbot-sandbox"]');
      if (targetMenu) {
        targetMenu.click();
      }
    });
  });
}

function renderWorkflowSteps(steps) {
  const container = document.getElementById('workflow-steps-container');
  container.innerHTML = '';
  
  steps.forEach((step, idx) => {
    const item = document.createElement('div');
    item.className = 'step-item completed';
    item.innerHTML = `
      <div class="step-num">${step.num}</div>
      <div class="step-content">
        <h5>${step.title}</h5>
        <p>${step.desc}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

// Pilot test Participant Table setup
function setupPilotTable() {
  const tbody = document.querySelector('#pilot-table-body tbody');
  const filter = document.getElementById('filter-pilot-occupation');
  
  const renderTable = (jobFilter = 'all') => {
    tbody.innerHTML = '';
    const filtered = pilotUsers.filter(u => jobFilter === 'all' || u.occupation === jobFilter);
    
    filtered.forEach(user => {
      const tr = document.createElement('tr');
      
      const compClass = user.completion === "Yes" ? "high" : "low";
      const ratingStars = "★".repeat(parseInt(user.csat)) + "☆".repeat(5 - parseInt(user.csat));
      
      tr.innerHTML = `
        <td><strong>${user.id}</strong></td>
        <td>${user.age} / ${user.gender}</td>
        <td>${user.lang}</td>
        <td><span class="meta-tag">${user.occupation.toUpperCase().replace('_', ' ')}</span></td>
        <td>₹${user.income}</td>
        <td><span class="small">${user.schemes}</span></td>
        <td><span class="score-badge ${compClass}">${user.completion}</span></td>
        <td><strong>${user.comp}</strong></td>
        <td><span class="text-warning">${ratingStars}</span></td>
      `;
      tbody.appendChild(tr);
    });
  };
  
  filter.addEventListener('change', () => {
    renderTable(filter.value);
  });
  
  // Initial render
  renderTable();
}

// Impact Calculator setup
function setupImpactCalculator() {
  const slidePop = document.getElementById('slide-population');
  const slideBase = document.getElementById('slide-baseline');
  const slideUplift = document.getElementById('slide-uplift');
  const slideEnt = document.getElementById('slide-entitlement');
  
  const valPop = document.getElementById('val-population');
  const valBase = document.getElementById('val-baseline');
  const valUplift = document.getElementById('val-uplift');
  const valEnt = document.getElementById('val-entitlement');
  
  const recalculateImpact = () => {
    const population = parseInt(slidePop.value);
    const baseline = parseInt(slideBase.value);
    const uplift = parseInt(slideUplift.value);
    const entitlement = parseInt(slideEnt.value);
    
    // Update text indicators
    valPop.textContent = population.toLocaleString('en-IN');
    valBase.textContent = `${baseline}%`;
    valUplift.textContent = `+${uplift}%`;
    valEnt.textContent = `₹${entitlement.toLocaleString('en-IN')}`;
    
    // Calculate new metrics
    const additionalHouseholds = Math.round(population * (uplift / 100));
    const totalOutlayUnlocked = additionalHouseholds * entitlement;
    
    // Format Crores
    const outlayCrores = (totalOutlayUnlocked / 10000000).toFixed(2);
    
    document.getElementById('impact-new-households').textContent = additionalHouseholds.toLocaleString('en-IN');
    document.getElementById('impact-total-capital').textContent = `₹${outlayCrores} Cr`;
    
    // Narrative sync
    document.getElementById('narrative-pop').textContent = population.toLocaleString('en-IN');
    document.getElementById('narrative-base').textContent = `${baseline}%`;
    document.getElementById('narrative-new').textContent = `${baseline + uplift}%`;
    document.getElementById('narrative-capital').textContent = `₹${outlayCrores} Crores`;
  };
  
  const sliders = [slidePop, slideBase, slideUplift, slideEnt];
  sliders.forEach(slide => {
    slide.addEventListener('input', recalculateImpact);
  });
  
  // Initial calculate
  recalculateImpact();
}
