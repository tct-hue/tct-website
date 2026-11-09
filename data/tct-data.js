// data/tct-data.js
// TCT အဖွဲ့ဝင်များ အလွယ်တကူ ပြင်ဆင်နိုင်သော Website Content Data ဖိုင်

const TCT_DATA = {
  organization: {
    nameEn: "Travel Computer Training (TCT)",
    nameMm: "ခရီးသွား ပညာဒါန ကွန်ပျူတာသင်တန်း",
    taglineEn: "Skill Today - Better Tomorrow",
    taglineMm: "နည်းပညာနဲ့ လူငယ်ဘဝကို မြှင့်တင်ကြစို့",
    subTaglineMm: "အိမ်မက်တွေကို နည်းပညာနဲ့ ပုံဖော်ဖို့ TCT နဲ့ လက်တွဲစို့",
    foundedDate: "August 19, 2019",
    founder: "ဦးကောလေး (U Kaw Lay)",
    phone: "09 43045506",
    facebookUrl: "https://www.facebook.com/travelcomputertraining",
    facebookName: "Travel Computer Training",
    currentLocation: "အေးစေတီကျောင်းတိုက်၊ အေးစေတီရပ်ကွက်၊ မြစ်ကြီးနားမြို့ (ယာယီ)",
    operatingRegion: "ကချင်ပြည်နယ် (Kachin State, Myanmar)",
    logoImage: "images/logo.jpg",
    heroBgImage: "images/hero-bg.jpg"
  },

  featuredSoftware: {
    badge: "TCT Official Educational Software",
    name: "TCT Myanmar Unicode Typing Tutor",
    version: "Version 2.0 (Desktop Edition)",
    os: "Windows 10 / 11 (.NET Framework)",
    fileSize: "Lightweight C# Package",
    description: "TCT သင်တန်းမှ ရေးသားဖန်တီးထားသော မြန်မာယူနီကုဒ် (Pyidaungsu Standard) နှင့် အင်္ဂလိပ် လက်ကွက်လေ့ကျင့်ရေး Software ဖြစ်ပါသည်။ ကွန်ပျူတာစတင်လေ့လာသူများ အခြေခံလက်ကွက်မှစ၍ မြန်နှုန်းမြင့် စာရိုက်ကျွမ်းကျင်သည်အထိ အဆင့်လိုက် လေ့ကျင့်နိုင်ပါသည်။",
    features: [
      "Pure C# Windows Forms ဖြင့် တည်ဆောက်ထား၍ စက်လေးခြင်း လုံးဝမရှိဘဲ ပေါ့ပါးမြန်ဆန်ခြင်း",
      "Pyidaungsu Unicode စံနှုန်းနှင့် သင်ပုန်းကြီး အခြေခံမှ အဆင့်မြင့်အထိ သင်ခန်းစာများ ပါဝင်ခြင်း",
      "External Text Lesson ဖိုင်များဖြင့် သင်ခန်းစာအသစ်များ အလွယ်တကူ ထပ်တိုးလေ့ကျင့်နိုင်ခြင်း",
      "စာရိုက်နှုန်း (WPM)၊ တိကျမှုရာခိုင်နှုန်း (Accuracy %) နှင့် အမှားထောက်ပြစနစ် ပါဝင်ခြင်း",
      "အင်တာနက်မလိုဘဲ (100% Offline) Portable ဖိုင်အဖြစ် တိုက်ရိုက်ဖွင့်သုံးနိုင်ခြင်း"
    ],
    downloadUrl: "https://github.com/tct-hue/tct-website/releases/download/2.0/TCT-Typing-Tutor.zip",
    guideText: "ZIP ဖိုင်ကို ဒေါင်းလုဒ်ဆွဲပြီး Password: travelcomputertraining နှင့် Extract (ဖြည်)၍ TCTTypingTutor.exe ကို Install ပြုလုပ်ကာ အသုံးပြုနိုင်ပါသည်။"
  },

  softwareDownloads: [
    {
      id: "typing-lessons-pack",
      category: "Software Add-on",
      title: "TCT Typing Tutor — Extra Lesson Pack",
      titleMm: "လက်ကွက်လေ့ကျင့်ခန်း သင်ခန်းစာဖိုင်တွဲ (.txt)",
      version: "2026 Pack",
      size: "ZIP Pack",
      desc: "TCT Typing Tutor တွင် ထည့်သွင်းလေ့ကျင့်နိုင်သော မြန်မာစာပိုဒ်များ၊ ရုံးသုံးစာများနှင့် အင်္ဂလိပ် လေ့ကျင့်ခန်း Text ဖိုင်များ။",
      downloadUrl: "https://github.com/tct-hue/tct-website/releases/download/2.0/TCT-Typing-Tutor.zip,
      btnLabel: "Lesson Pack ဒေါင်းလုဒ်ဆွဲရန်"
    },
    {
      id: "pyidaungsu-font",
      category: "Font & Keyboard",
      title: "Pyidaungsu Unicode Font & Guide Pack",
      titleMm: "ပြည်ထောင်စု ယူနီကုဒ်ဖောင့်နှင့် လမ်းညွှန်",
      version: "Official Standard",
      size: "ZIP Pack",
      desc: "မြန်မာနိုင်ငံ ရုံးလုပ်ငန်းသုံး စံသတ်မှတ်ထားသော Pyidaungsu Font နှင့် ကွန်ပျူတာသုံး ယူနီကုဒ်လက်ကွက် သွင်းနည်းလမ်းညွှန်။",
      downloadUrl: "downloads/Pyidaungsu-Unicode-Pack.zip",
      btnLabel: "Font Pack ဒေါင်းလုဒ်ဆွဲရန်"
    }
  ],

  impactStats: [
    { number: "21+", labelMm: "ဖွင့်လှစ်ခဲ့ပြီးသော သင်တန်းနေရာပေါင်း", labelEn: "Training Locations" },
    { number: "179+", labelMm: "ကျေးရွာနှင့် ရပ်ကွက်ပေါင်း", labelEn: "Villages & Wards Reached" },
    { number: "1,382+", labelMm: "သင်တန်းဆင်း လူငယ်ပေါင်း", labelEn: "Graduated Students" },
    { number: "100%", labelMm: "အာမခံကြေး ပြန်အမ်းသည့် ပညာဒါန", labelEn: "Deposit Refund Guarantee" }
  ],

  pledges: [
    "၁။ ငါတို့သည် အချိန်တိုင်းတိုးတက်အောင် ကြိုးစားပါမည်။",
    "၂။ ငါတို့သည် တတ်၊ သိပညာ ဟူသမျှကို အမြဲတမ်းရှာဖွေမျှဝေပါမည်။",
    "၃။ ငါတို့သည် ငါတို့ပတ်ဝန်းကျင်ကို အမြဲတမ်းအကျိုးပြုပါမည်။",
    "၄။ ငါတို့သည် စာရိတ္တမဏ္ဍိုင်တောင့်ခိုင်သော အနာဂတ်ပိုင်ရှင်များဖြစ်ရပါမည်။"
  ],

  team: [
    {
      nameMm: "ဦးကောလေး",
      nameEn: "U Kaw Lay",
      roleMm: "သင်တန်းမှူး နှင့် တည်ထောင်သူ",
      roleEn: "Founder, Head Instructor"
    },
    {
      nameMm: "ဒေါ်သိင်္ဂီဝင်း",
      nameEn: "Daw Theingi Win",
      roleMm: "အကြီးတန်း သင်တန်းနည်းပြ နှင့် အဖွဲ့ခေါင်းဆောင်",
      roleEn: "Senior Instructor & Team Leader"
    },
    {
      nameMm: "မ",
      nameEn: "Ma",
      roleMm: "အကူ သင်တန်းနည်းပြ",
      roleEn: "Assistant Instructor"
    },
    {
      nameMm: "မောင်",
      nameEn: "Mg",
      roleMm: "အထွေထွေ သင်တန်းအကူ",
      roleEn: "General Assistant"
    }
  ],

  courses: [
    {
      id: "basic-office",
      category: "foundation",
      badge: "Level 1",
      title: "Computer Fundamentals & Special Office",
      titleMm: "ကွန်ပျူတာအခြေခံနှင့် ရုံးလုပ်ငန်းသုံး သင်တန်း",
      duration: "40 Days",
      target: "ကွန်ပျူတာ လုံးဝမကိုင်ဖူးသူများ (အနိမ့်ဆုံး G-8 မှစ၍)",
      skills: ["Windows အခြေခံနှင့် စနစ်တကျ ကိုင်တွယ်နည်း", "TCT Typing Tutor ဖြင့် မြန်မာ/အင်္ဂလိပ် လက်ကွက်ကျွမ်းကျင်မှု", "Microsoft Word, Excel, PowerPoint, Access", "i-Office Suite အသုံးပြုနည်း"],
      projects: "ရုံးသုံးစာစီစာရိုက်၊ အစီရင်ခံစာ၊ စာရင်းဇယားနှင့် Presentation ဖန်တီးခြင်း"
    },
    {
      id: "kids-coding",
      category: "foundation",
      badge: "Kids",
      title: "Basic For Kids & Scratch Programming",
      titleMm: "ကလေးများအတွက် အခြေခံနှင့် Scratch Coding",
      duration: "40 Days",
      target: "ကျောင်းသားလူငယ်ငယ်များ (G-4 နှင့်အထက်)",
      skills: ["ကွန်ပျူတာအခြေခံ ကိုင်တွယ်နည်း", "Scratch Block Coding", "Logical Thinking & Problem Solving", "Animation နှင့် Game အခြေခံ"],
      projects: "ကိုယ်ပိုင် 2D Game နှင့် ကာတွန်း Animation ပရောဂျက်များ ဖန်တီးခြင်း"
    },
    {
      id: "advanced-excel",
      category: "office",
      badge: "Level 2",
      title: "Advanced Excel & VBA Fundamental",
      titleMm: "အဆင့်မြင့် ရုံးလုပ်ငန်းသုံး Excel သင်တန်း",
      duration: "40 Days",
      target: "အခြေခံတတ်မြောက်ပြီး ရုံးလုပ်ငန်းနှင့် စာရင်းကိုင်လုပ်ကိုင်လိုသူများ",
      skills: ["Complex Formulas & Functions", "Data Analysis & Reporting", "VBA Fundamental", "Office Automation Sheets"],
      projects: "လုပ်ငန်းသုံး အရောင်းအဝယ်စာရင်း၊ လစာတွက်ချက်မှုနှင့် အလိုအလျောက် စာရင်းချုပ်စနစ်"
    },
    {
      id: "graphic-dtp",
      category: "design",
      badge: "Creative",
      title: "Graphic Design, Adobe Photoshop & DTP",
      titleMm: "ဂရပ်ဖစ်ဒီဇိုင်း၊ Photoshop နှင့် စာစီစာရိုက်လုပ်ငန်း",
      duration: "40 Days",
      target: "ဒီဇိုင်း၊ ဓာတ်ပုံတည်းဖြတ်မှုနှင့် ပုံနှိပ်လုပ်ငန်း စိတ်ဝင်စားသူများ",
      skills: ["Adobe Photoshop", "Desktop Publishing (DTP)", "Photo & Video Editing Basics", "Flyer, Poster, Banner & Certificate Design"],
      projects: "လုပ်ငန်းသုံး ကြော်ငြာစာစောင်၊ ဗီနိုင်း၊ ပိုစတာနှင့် အောင်လက်မှတ် ဒီဇိုင်းဆွဲခြင်း"
    },
    {
      id: "hardware-aplus",
      category: "hardware",
      badge: "Technical",
      title: "Practical A+ & System Administration",
      titleMm: "လက်တွေ့ ကွန်ပျူတာပြုပြင်ထိန်းသိမ်းခြင်း သင်တန်း",
      duration: "40 Days",
      target: "ကွန်ပျူတာ Hardware နှင့် ပြုပြင်ထိန်းသိမ်းရေး လေ့လာလိုသူများ",
      skills: ["PC & Laptop Hardware တပ်ဆင်ခြင်း", "Windows OS & Software Installation", "System Administration", "Hardware Troubleshooting & Maintenance"],
      projects: "ကွန်ပျူတာ တစ်လုံးလုံး ဖြုတ်/တပ်ခြင်း၊ Windows တင်ခြင်းနှင့် Error ရှာဖွေပြုပြင်ခြင်း"
    },
    {
      id: "web-dev",
      category: "programming",
      badge: "Full-Stack",
      title: "Web Development (Frontend to Backend)",
      titleMm: "ခေတ်မီ Website ရေးဆွဲနည်း သင်တန်း",
      duration: "Multi-Module Course",
      target: "Web Developer အဖြစ် အသက်မွေးဝမ်းကျောင်းပြုလိုသူများ",
      skills: ["HTML, CSS, JavaScript", "BootStrap, jQuery, JSON", "PHP & MySQL Database", "Laravel Framework"],
      projects: "Responsive Website နှင့် Dynamic Web Application အပြည့်အစုံ တည်ဆောက်ခြင်း"
    },

    {
      id: "ai-t2t",
      category: "ai-trainer",
      badge: "Future & ToT",
      title: "AI Tools, Soft Skills & Trainee to Trainer (T2T)",
      titleMm: "AI နည်းပညာ၊ လူငယ်စွမ်းရည်မြှင့်တင်မှုနှင့် ဆရာဖြစ်သင်တန်း",
      duration: "Ongoing Mentorship",
      target: "မိမိဒေသတွင် ပညာဒါန ပြန်လည်မျှဝေလိုသော ထူးချွန်ကျောင်းသားဟောင်းများ",
      skills: ["AI နှင့် တွဲဖက်အသုံးပြုမှု", "Public Speaking & Instructional Design", "Organization, Collaboration & Patience", "Observation, Flexibility & Problem Solving"],
      projects: "သင်ရိုးညွှန်းတမ်း ပြင်ဆင်ခြင်းနှင့် လက်တွေ့သင်တန်းခန်းမတွင် ဦးဆောင်သင်ကြားခြင်း"
    }
  ],

  journeyLocations: [
    {
      region: "ဗန်းမော်ခရိုင်",
      places: "ထီးလင်းရွာ၊ ကောင်းတုံ (အ.ထ.က-ခွဲ)၊ မံမကောက်ရွာ (သုတပဒေသာစာကြည့်တိုက်)၊ မြလယ် (ခါနန်လီဆူဘုရားကျောင်း)၊ နောင်ဟူးကျေးရွာ၊ စီဟဲကျေးရွာ၊ ကမ္ဘာနီကျေးရွာ၊ ရွှေကျီးနား (အ.ထ.က-၆)၊ တံခွန်တိုင် ရွှေဇေယျာလင်္ကာရသီလရှင်စာသင်တိုက်၊ မင်းလှ (စာကြည့်တိုက်)၊ ကျွန်းကုန်း (ဗန်းမော်တက္ကသိုလ်အနီး)"
    },
    {
      region: "နမ္မတီးမြို့",
      places: "ရွှေဝါရပ်ကွက် — Round (1) နှင့် Round (2) ပညာဒါန ကွန်ပျူတာသင်တန်းများ"
    },
    {
      region: "မိုးကောင်းမြို့",
      places: "ကျွန်းတောရပ်ကွက် — Round (1) နှင့် Round (2) ပညာဒါန ကွန်ပျူတာသင်တန်းများ"
    },
    {
      region: "ဟိုပင်မြို့",
      places: "မြဇေယျာရပ်ကွက် — Round (1) , Round (2) နှင့် Round (3) ပညာဒါန ကွန်ပျူတာသင်တန်းများ"
    },
    {
      region: "မိုးညှင်းမြို့",
      places: "အရှေ့စုရပ်ကွက် — Round (1) နှင့် Round (2) ပညာဒါန ကွန်ပျူတာသင်တန်းများ"
    },
    {
      region: "တနိုင်းမြို့",
      places: "အေးသုခရပ်ကွက် — Round (1) , Round (2) နှင့် Round (3) ပညာဒါန ကွန်ပျူတာသင်တန်းများ"
    },
    {
      region: "မြစ်ကြီးနားမြို့",
      places: "ပမ္မတီးရပ်ကွက် (ခရမ်းကျောင်းတိုက် Round 1 & 2)၊ အေးစေတီကျောင်းတိုက် (အေးစေတီရပ်ကွက် - ဖွင့်လှစ်ဆဲ)"
    },
    
  ],

  refundGrades: [
    {
      grade: "Grade A",
      criteria: "စာမေးပွဲ 90% နှင့်အထက် + စည်းကမ်းသန့်ရှင်း + Batch တွင် အမှတ်အများဆုံး",
      benefit: "ထူးချွန်ဆုကြေး ၁၀၀,၀၀၀ ကျပ် + ပထမဒိုင်းဆု + အာမခံကြေး ၄၀,၀၀၀ ကျပ် အပြည့်ပြန်ရ + Certificate"
    },
    {
      grade: "Grade B",
      criteria: "စာမေးပွဲ 80% နှင့်အထက် + စည်းကမ်းသန့်ရှင်း",
      benefit: "T2T (Trainee to Trainer) Program လျှောက်ထားခွင့် + အာမခံကြေး ၄၀,၀၀၀ ကျပ် အပြည့်ပြန်ရ + Certificate"
    },
    {
      grade: "Grade C",
      criteria: "စာမေးပွဲ 70% နှင့်အထက် + စည်းကမ်းသန့်ရှင်း",
      benefit: "အာမခံကြေး ၄၀,၀၀၀ ကျပ် အပြည့်ပြန်ရ + Certificate"
    },
    {
      grade: "Grade D",
      criteria: "70% အောက် (50% အထက် + စည်းကမ်းသန့်ရှင်းမှု 15% + Class Activity 5%)",
      benefit: "အာမခံကြေး ထက်ဝက် (၂၀,၀၀၀ ကျပ်) ပြန်ရပြီး ကျန်တစ်ဝက်အား သင်တန်းရန်ပုံငွေသို့ လှူဒါန်း + Certificate"
    },
    {
      grade: "Grade E",
      criteria: "သတိပေးချက်ရဖူးသူ (Attendance 85% ကျော်၊ စာမေးပွဲ 70% ကျော်)",
      benefit: "Certificate သီးသန့်သာ ရရှိမည် (အာမခံကြေး ပြန်မရပါ၊ သင်တန်းရန်ပုံငွေသို့ ထည့်သွင်းမည်)"
    }
  ],

  testimonials: [
    {
      name: "မသဇင်ကို",
      location: "ဗန်းမော်",
      quote: "ပညာဒါန သင်တန်းဆိုပေမယ့် ငွေပေးတက်ရတဲ့ သင်တန်းတွေထက်တောင် ပိုကောင်းပြီး အသေးစိတ် စနစ်တကျ သင်ပေးတာကြောင့် အရမ်းအဆင်ပြေပါတယ်။"
    },
    {
      name: "မောင်နိုင်ဇော်",
      location: "မိုးညှင်း",
      quote: "အခမဲ့ သင်တန်းဆိုလို့ ပေါ့ပျက်ပျက်လို့ မထင်လိုက်နဲ့၊ တကယ့်ကို ထိထိရောက်ရောက်နဲ့ နားမလည်မချင်း ရှင်းပြပေးလို့ ယုံကြည်မှုအပြည့်ရခဲ့ပါတယ်၊ ရူးတောင် ခါသွားတယ်။"
    },
    {
      name: "မမျိုးထက်ဝေ",
      location: "တနိုင်း",
      quote: "ဒီသင်တန်းက ကွန်ပျူတာပညာရပ်တင်မကဘဲ လူနေမှုဘဝအတွက် လိုအပ်တဲ့ soft skills ဗဟုသုတတွေကိုပါ မျှဝေပေးတဲ့ ထူးခြားတဲ့ သင်တန်းပါ။"
    },
    {
      name: "မမွှေးအိမ်",
      location: "တနိုင်း",
      quote: "တီချယ်ရဲ့ အမြဲပြုံးရွှင်နေတဲ့မျက်နှာနဲ့ သင်ကြားမှုကြောင့် သင်တန်းတက်ရတာ ပျော်စရာကောင်းသလို အိုင်တီနည်းပညာသစ်တွေကိုလည်း အမြဲမျှဝေပေးပါတယ်။"
    }
  ],

  news: [
    {
      date: "လက်ရှိ ဖွင့်လှစ်ဆဲ",
      tag: "သင်တန်းကြေညာချက်",
      title: "မြစ်ကြီးနားမြို့ အေးစေတီကျောင်းတိုက် (ယာယီ) တွင် ပညာဒါန ကွန်ပျူတာသင်တန်းများ ဖွင့်လှစ်ပို့ချခြင်း",
      summary: "အခြေခံကွန်ပျူတာ၊ Advanced Excel၊ Graphic Design၊ Practical A+ နှင့် Web Development တန်းခွဲများကို တစ်ဖွဲ့လျှင် ၂၀ ဦး လက်ခံသင်ကြားပေးလျက်ရှိပါသည်။"
    },
    {
      date: "Software Release",
      tag: "TCT Typing Tutor",
      title: "သင်တန်းသားများအတွက် TCT Myanmar Unicode Typing Tutor Software အခမဲ့ ဒေါင်းလုဒ်ရယူနိုင်ပြီ",
      summary: "အိမ်တွင် ကိုယ်တိုင် လက်ကွက်လေ့ကျင့်လိုသော သင်တန်းသားများနှင့် လူငယ်များအတွက် TCT မှ ရေးသားထားသော Typing Tutor ကို Website မှတစ်ဆင့် အခမဲ့ ရယူနိုင်ပါသည်။"
    },
    {
      date: "မှတ်တမ်း",
      tag: "သင်တန်းဆင်းပွဲ",
      title: "မြစ်ကြီးနားမြို့ ပမ္မတီးရပ်ကွက်၊ ခရမ်းကျောင်း၌ Round (1), (2) သင်တန်းများ အောင်မြင်စွာ ကျင်းပပြီးစီး",
      summary: "စည်းကမ်းလိုက်နာပြီး စာမေးပွဲအောင်မြင်သော သင်တန်းသားများအား အောင်လက်မှတ်၊ ထူးချွန်ဆုနှင့် အာမခံကြေးငွေများ အပြည့်အဝ ပြန်လည်ပေးအပ်ခဲ့ပါသည်။"
    }
  ],

  gallery: [
    { region: "myitkyina", image: "images/gallery/myitkyina-pammati.jpg", title: "မြစ်ကြီးနားမြို့ — ပမ္မတီးရပ်ကွက် သင်တန်းဆင်းပွဲ", desc: "Round 1 & Round 2 အောင်လက်မှတ်နှင့် အာမခံကြေး ပြန်လည်ပေးအပ်ပွဲ အမှတ်တရ" },
    { region: "myitkyina", image: "images/gallery/myitkyina-class.jpg", title: "မြစ်ကြီးနားမြို့ — သင်တန်းသား လူငယ်များ", desc: "ပမ္မတီးရပ်ကွက် ကွန်ပျူတာသင်တန်း တက်ရောက်ကြသော သင်တန်းသား/သူများ" },
    { region: "tanai", image: "images/gallery/tanai-classroom.jpg", title: "တနိုင်းမြို့ — အေးသုခရပ်ကွက် ချမ်းမြေ့ရွှေပြည်ကျောင်း", desc: "ကွန်ပျူတာအလုံး ၂၀ ဖြင့် လက်တွေ့လေ့ကျင့် သင်ယူနေကြစဉ်" },
    { region: "tanai", image: "images/gallery/tanai-graduation.jpg", title: "တနိုင်းမြို့ — အေးသုခရပ်ကွက် သင်တန်းဆင်းပွဲ", desc: "ပထမ၊ ဒုတိယနှင့် တတိယအကြိမ် သင်တန်းဆင်း အောင်လက်မှတ်ပေးအပ်ပွဲ" },
    { region: "mohnyin", image: "images/gallery/mohnyin-graduation.jpg", title: "မိုးညှင်းမြို့ — အရှေ့စုရပ်ကွက် သင်တန်းဆင်းပွဲ", desc: "ပထမအကြိမ်နှင့် ဒုတိယအကြိမ် ကွန်ပျူတာသင်တန်းဆင်းပွဲ မှတ်တမ်း" },
    { region: "mohnyin", image: "images/gallery/mohnyin-practical.jpg", title: "မိုးညှင်းမြို့ — လက်တွေ့ကွန်ပျူတာ သင်ကြားမှု", desc: "အရှေ့စုရပ်ကွက် သင်တန်းသားများ လက်တွေ့လေ့ကျင့်နေမှု" },
    { region: "mohnyin", image: "images/gallery/hopin-graduation.jpg", title: "ဟိုပင်မြို့ — မြဇေယျာရပ်ကွက် သင်တန်းဆင်းပွဲ", desc: "ပထမ၊ ဒုတိယနှင့် တတိယအကြိမ် သင်တန်းဆင်း အမှတ်တရ" },
    { region: "mohnyin", image: "images/gallery/hopin-practical.jpg", title: "ဟိုပင်မြို့ — လက်တွေ့စာသင်ခန်းမ", desc: "မြဇေယျာရပ်ကွက် သင်တန်းသားများ လက်တွေ့လေ့ကျင့်နေစဉ်" },
    { region: "mohnyin", image: "images/gallery/mogaung-graduation.jpg", title: "မိုးကောင်းမြို့ — ကျွန်းတောရပ်ကွက် သင်တန်းဆင်းပွဲ", desc: "ပထမအကြိမ်နှင့် ဒုတိယအကြိမ် ကွန်ပျူတာသင်တန်းဆင်းပွဲ" },
    { region: "mohnyin", image: "images/gallery/namti-graduation.jpg", title: "နမ္မတီးမြို့ — ရွှေဝါရပ်ကွက် သင်တန်းဆင်းပွဲ", desc: "Round (1) နှင့် Round (2) သင်တန်းဆင်း အောင်လက်မှတ်ရ လူငယ်များ" },
    { region: "bhamo", image: "images/gallery/bhamo-ml.jpg", title: "မင်းလှစာကြည့်တိုက် သင်တန်းဆင်းပွဲ", desc: "ဗန်းမော် ရပ်ကွက်ပေါင်းစုံမှ Certificate  လူငယ်များ" },
    { region: "bhamo", image: "images/gallery/bhamo-kk.jpg", title: "ဗန်းမော်တက္ကသိုလ်အနီး ကျွန်းကုန်း(၂) သင်တန်းဆင်းပွဲ", desc: "ဗန်းမော်တက္ကသိုလ် Major ပေါင်းစုံမှ လူငယ်များ" },
    { region: "bhamo", image: "images/gallery/bhamo-ucsb.jpg", title: "ကွန်ပျူတာတက္ကသိုလ် (ဗန်းမော်) ရောက် သင်တန်းသားများ", desc: "ကွန်ပျူတာတက္ကသိုလ် (ဗန်းမော်)သို့ တက်ရောက် လူငယ်များ" },
    { region: "bhamo", image: "images/gallery/bhamo-sihe.jpg", title: "ဗန်းမော်ခရိုင် — စီဟဲကျေးရွာ သင်တန်းဆင်းပွဲ", desc: "ကျေးရွာအရောက် လှည့်လည်ဖွင့်လှစ်ခဲ့သော ပညာဒါနသင်တန်း ပုံရိပ်များ" }
  ],

  faqs: [
    {
      q: "သင်တန်းကြေး အမှန်တကယ် အခမဲ့ (ပညာဒါန) ဖြစ်ပါသလား?",
      a: "ဟုတ်ကဲ့၊ သင်တန်းကြေး လုံးဝ မယူပါ။ သင်တန်းစည်းကမ်းလိုက်နာစေရန် အာမခံကြေး ၄၀,၀၀၀ ကျပ်သာ ခေတ္တအပ်နှံရပြီး စည်းကမ်းလိုက်နာ၍ စာမေးပွဲအောင်မြင်ပါက အပြည့်ပြန်အမ်းပေးပါသည်။"
    },
    {
      q: "TCT Typing Tutor ကို မည်သည့်ကွန်ပျူတာများတွင် သုံးနိုင်ပါသလဲ?",
      a: "Windows 10, 11 ကွန်ပျူတာနှင့် Laptop အားလုံးတွင် အင်တာနက်မလိုဘဲ အခမဲ့ ဒေါင်းလုဒ်ဆွဲ၍ လေ့ကျင့်နိုင်ပါသည်။"
    },
    {
      q: "ကိုယ်ပိုင် Laptop မရှိလျှင် သင်တန်းတက်ရောက်နိုင်ပါသလား?",
      a: "တက်ရောက်နိုင်ပါသည်။ ကိုယ်ပိုင် Laptop မရှိသူများအတွက် သင်တန်းမှ သင်ထောက်ကူ ကွန်ပျူတာ ၂၀ လုံး စီစဉ်ပေးထားပါသည်။"
    }
  ]
};
