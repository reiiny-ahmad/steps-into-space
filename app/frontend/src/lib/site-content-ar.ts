import { siteContentEn } from "@/lib/site-content-en";

export const siteContentAr = {
  ...siteContentEn,
  languageName: "العربية",
  preferences: {
    language: "اللغة",
    theme: "المظهر",
    light: "فاتح",
    dark: "داكن",
    backHome: "العودة للرئيسية",
  },
  brand: {
    lead: "Steps Into",
    accent: "Space",
    tagline: "جمعية مغربية غير ربحية",
  },
  nav: {
    home: "الرئيسية",
    activities: "الأنشطة",
    about: "من نحن",
    calendar: "البرنامج",
    contact: "تواصل",
    join: "انضم إلينا",
  },
  hero: {
    titleLead: "Steps Into",
    titleAccent: "Space",
    subtitle:
      "نشر علم الفلك وتبسيطه عبر تجارب تعليمية ملهمة وسهلة الوصول.",
    description:
      "اكتشفوا روعة الكون من خلال الورشات والرصد الليلي والبرامج التعليمية في مختلف مناطق المغرب.",
    primaryAction: "اكتشف الأنشطة",
    secondaryAction: "اعرف المزيد",
  },
  activities: {
    badge: "ماذا نقدم",
    titleLead: "أنشطتنا",
    titleAccent: "الأساسية",
    description:
      "من أمسيات الرصد إلى الورشات التعليمية، نجعل علم الفلك ممتعا ومتاحا للجميع.",
    items: [
      {
        title: "أمسيات رصد النجوم",
        description:
          "عيشوا ليالي لا تنسى تحت النجوم باستعمال تلسكوبات احترافية لمشاهدة الكواكب والسدم والمجرات.",
        image: siteContentEn.activities.items[0].image,
      },
      {
        title: "ورشات علم الفلك",
        description:
          "ورشات تفاعلية تبسط مفاهيم الفلك وتجعلها مفهومة للمبتدئين والمهتمين على حد سواء.",
        image: siteContentEn.activities.items[1].image,
      },
      {
        title: "زيارات مدرسية",
        description:
          "ننقل روعة الكون إلى الفصول الدراسية في مختلف مناطق المغرب لإلهام الجيل القادم.",
      },
      {
        title: "التصوير الفلكي",
        description:
          "تعلم كيف تلتقط جمال السماء الليلية وتشارك صورك الكونية الخاصة.",
      },
      {
        title: "محاضرات عمومية",
        description:
          "محاضرات مفتوحة حول مواضيع فلكية مدهشة من الثقوب السوداء إلى الحياة خارج الأرض.",
      },
      {
        title: "حصص التلسكوب",
        description:
          "حصص تطبيقية لتعلم إعداد التلسكوب وضبطه واستعماله في رصد السماء الليلية.",
      },
    ],
  },
  about: {
    badge: "من نحن",
    titleLead: "حول",
    titleAccent: "جمعيتنا",
    description:
      "Steps Into Space جمعية مغربية غير ربحية تهدف إلى تقريب عجائب علم الفلك من الجميع.",
    community: "نبني مجتمعا من عشاق السماء والنجوم",
    values: [
      {
        title: "رسالتنا",
        description:
          "جعل علم الفلك متاحا في المغرب عبر موارد مجانية وتجارب عملية وأنشطة مجتمعية.",
      },
      {
        title: "رؤيتنا",
        description:
          "مغرب يتمكن فيه كل شخص من النظر إلى السماء وفهم جمال الكون وعظمته.",
      },
      {
        title: "قيمنا",
        description:
          "الشمولية والتعليم والفضول وروح المجتمع. نحن نؤمن أن السماء ملك للجميع.",
      },
    ],
    teamTitleLead: "تعرّف على",
    teamTitleAccent: "فريقنا",
    teamDescription:
      "أشخاص شغوفون يوحدهم حب الكون ورغبة صادقة في مشاركة المعرفة مع الجميع.",
    teamMembers: [
      { name: "Ahmed El Fassi", role: "الرئيس", initials: "AE" },
      { name: "Sara Bennani", role: "نائبة الرئيس", initials: "SB" },
      { name: "Youssef Amrani", role: "أمين المال", initials: "YA" },
      {
        name: "Fatima Zahra Idrissi",
        role: "مسؤولة التواصل",
        initials: "FZ",
      },
      { name: "Omar Tazi", role: "منسق الأنشطة", initials: "OT" },
      { name: "Khadija Moussaoui", role: "مسؤولة التعليم", initials: "KM" },
    ],
  },
  calendar: {
    badge: "الفعاليات القادمة",
    titleLead: "برنامج",
    titleAccent: "الفعاليات",
    description:
      "خططوا لمواعيدكم القادمة. هذه بعض الفعاليات والأنشطة التعليمية المقبلة.",
    events: [
      {
        date: "15 مارس 2026",
        day: "15",
        month: "مارس",
        title: "ليلة رصد ربيعية",
        time: "20:00 - 23:00",
        location: "جبال الأطلس، أوكايمدن",
        description:
          "ليلة ساحرة لرصد النجوم في جبال الأطلس باستعمال تلسكوبات احترافية.",
        category: "رصد",
        tone: "violet",
      },
      {
        date: "22 مارس 2026",
        day: "22",
        month: "مارس",
        title: "مدخل إلى التصوير الفلكي",
        time: "15:00 - 18:00",
        location: "المركز المجتمعي بمراكش",
        description:
          "تعلم أساسيات تصوير السماء الليلية والحصول على صور مميزة بالكاميرا.",
        category: "ورشة",
        tone: "amber",
      },
      {
        date: "5 أبريل 2026",
        day: "05",
        month: "أبريل",
        title: "المجموعة الشمسية للأطفال",
        time: "10:00 - 12:00",
        location: "متحف العلوم بالرباط",
        description:
          "جلسة تفاعلية للأطفال من 6 إلى 12 سنة لاستكشاف كواكب مجموعتنا الشمسية.",
        category: "تعليم",
        tone: "sky",
      },
      {
        date: "12 أبريل 2026",
        day: "12",
        month: "أبريل",
        title: "ورشة صناعة تلسكوب",
        time: "14:00 - 17:00",
        location: "Casablanca Tech Hub",
        description:
          "اصنع تلسكوبا بسيطا من الصفر وتعلم المبادئ البصرية التي يقوم عليها.",
        category: "ورشة",
        tone: "amber",
      },
      {
        date: "22 أبريل 2026",
        day: "22",
        month: "أبريل",
        title: "محاضرة يوم الأرض والفلك",
        time: "18:00 - 20:00",
        location: "عن بعد",
        description:
          "محاضرة خاصة حول كيف يساعدنا علم الفلك على فهم كوكبنا وحمايته.",
        category: "محاضرة",
        tone: "emerald",
      },
      {
        date: "3 ماي 2026",
        day: "03",
        month: "ماي",
        title: "رصد السماء العميقة",
        time: "21:00 - 01:00",
        location: "صحراء مرزوكة",
        description:
          "استمتع بواحدة من أظلم سماء المغرب في جلسة لا تنسى لرصد السماء العميقة.",
        category: "رصد",
        tone: "violet",
      },
    ],
  },
  contact: {
    badge: "تواصل معنا",
    titleLead: "تواصل",
    titleAccent: "معنا",
    description:
      "لديك سؤال أو فكرة شراكة أو طلب نشاط؟ اكتب لنا وسيصلنا مباشرة عبر البريد الإلكتروني.",
    locationValue: "المغرب",
    infoTitles: {
      email: "البريد الإلكتروني",
      location: "الموقع",
      instagram: "إنستغرام",
      follow: "تابعنا وتواصل معنا",
    },
    infoDescription:
      "انضم إلى مجتمعنا عبر إنستغرام والأنشطة والاتصال المباشر.",
    note:
      "سواء كنت من محبي الفلك أو مؤسسة تعليمية أو متطوعا مستقبليا، يسعدنا التواصل معك ومواصلة بناء تعليم الفضاء معا.",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      namePlaceholder: "Ahmed El Fassi",
      emailPlaceholder: "ahmed@example.com",
      subjectPlaceholder: "أرغب في التعاون مع الجمعية",
      messagePlaceholder: "اكتب لنا تفاصيل طلبك أو سؤالك أو نشاطك...",
      sending: "جار الإرسال...",
      submit: "إرسال الرسالة",
    },
    messages: {
      success: "تم إرسال الرسالة بنجاح إلى Steps Into Space.",
      error: "تعذر إرسال رسالتك حاليا.",
    },
  },
  footer: {
    description:
      "جمعية مغربية غير ربحية مكرسة لتعليم ونشر علم الفلك عبر تجارب سهلة الوصول وملهمة.",
    quickLinksTitle: "روابط سريعة",
    activitiesTitle: "الأنشطة",
    contactTitle: "التواصل",
    activities: [
      "أمسيات الرصد",
      "ورشات الفلك",
      "زيارات مدرسية",
      "التصوير الفلكي",
      "محاضرات عمومية",
    ],
    copyright:
      "حقوق النشر 2026 Steps Into Space Association. جميع الحقوق محفوظة.",
    tagline: "صنع بحب من أجل علم الفلك",
  },
  join: {
    badge: "الانضمام إلى الجمعية",
    title: "مسار جديد نحو الفلك والتعلم وروح المجتمع",
    description:
      "قدّم طلب الانضمام إلى Steps Into Space. كل استمارة تصلنا عبر البريد الإلكتروني في ملف منظم وسهل المراجعة.",
    cards: [
      {
        title: "ملف ترشيح واضح",
        description:
          "كل إرسال ينشئ مرفقا واضحا حتى تتمكن الجمعية من مراجعة الطلبات بسرعة ووضوح.",
      },
      {
        title: "للتلاميذ والطلبة والمتطوعين",
        description:
          "شاركنا اهتماماتك ومستواك الدراسي ودوافعك حتى نوجهك إلى الأنشطة الأنسب لك.",
      },
    ],
    formTitle: "استمارة التسجيل",
    formDescription:
      "املأ معلوماتك وسيتم التوصل بها مباشرة على بريد الجمعية.",
    fields: {
      lastName: "النسب",
      firstName: "الاسم الشخصي",
      age: "العمر",
      studyLevel: "المستوى الدراسي",
      cin: "رقم البطاقة الوطنية",
      massarCode: "رمز مسار",
      city: "المدينة",
      phone: "الهاتف",
      address: "العنوان",
      email: "البريد الإلكتروني",
      interests: "الاهتمامات",
      motivation: "الدوافع أو معلومات إضافية",
      lastNamePlaceholder: "الفاسي",
      firstNamePlaceholder: "أحمد",
      agePlaceholder: "17",
      studyLevelPlaceholder: "ثانوي، جامعة، إلخ",
      cinPlaceholder: "اختياري إذا كان متوفرا",
      massarCodePlaceholder: "ضروري إذا لم توجد بطاقة وطنية",
      cityPlaceholder: "الدار البيضاء",
      phonePlaceholder: "+212 ...",
      addressPlaceholder: "الحي أو الشارع أو العنوان الكامل",
      emailPlaceholder: "اختياري لكنه مفيد للمتابعة",
      interestsPlaceholder: "الفلك، الروبوتيك، التصوير الفلكي، التطوع...",
      motivationPlaceholder:
        "اخبرنا لماذا ترغب في الانضمام إلى Steps Into Space",
    },
    sending: "جار إرسال التسجيل...",
    submit: "إرسال طلب التسجيل",
    messages: {
      missingId: "يرجى إدخال رقم CIN أو رمز مسار.",
      success: "تم إرسال التسجيل بنجاح ووصل الملف إلى البريد الإلكتروني.",
      error: "تعذر إرسال طلب التسجيل حاليا.",
    },
  },
} satisfies typeof siteContentEn;
