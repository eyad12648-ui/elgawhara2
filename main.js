/**
 * شركة الجوهرة للتوزيع - Main JavaScript
 * Interactive Features:
 * 1. Mobile Menu Toggle & Navigation Smooth Scroll
 * 2. Active Link Tracking on Scroll
 * 3. FAQ Accordion (expand/collapse with + icon)
 * 4. Brands Carousel Navigation (Next/Prev)
 * 5. Testimonials Data & Navigation with Multi-Language Support
 * 6. Hero indicators click
 * 7. Dynamic copyright year
 * 8. Dark Mode / Light Mode with LocalStorage Persistence
 * 9. Full Bilingual Support (Arabic / English) with RTL / LTR Switching & LocalStorage Persistence
 */

// Comprehensive Internationalization (i18n) Translations Dictionary
const translations = {
  ar: {
    docTitle: "شركة الجوهرة للتوزيع - الجوهرة للتسالي والمقرمشات بالجملة",
    brandTitle: "الجوهرة للتوزيع",
    brandSub: "للمقرمشات و التسالي بالجملة",
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navHistory: "نبذة تاريخية",
    navProducts: "المنتجات",
    navBrands: "الشركات التي نتعامل معها",
    navDistribution: "مناطق التوزيع",
    navTestimonials: "آراء العملاء",
    navFaq: "الأسئلة الشائعة",
    navFaqShort: "أسئلة",
    navContact: "تواصل معنا",
    heroTitle: "الجوهرة للتوزيع",
    heroSubtitle: "شريكك الموثوق في توزيع جميع أنواع التسالي بالجملة",
    heroDesc: "نقدم لكم أجود أصناف التسالي والمقرمشات بأفضل الأسعار التنافسية وبأعلى معايير الجودة، مع تغطية شاملة وشبكة توزيع سريعة ومنضبطة تصل لكافة عملائنا.",
    heroBadge1: "جودة عالية",
    heroBadge2: "أسعار تنافسية",
    heroBadge3: "تغطية واسعة",
    heroCta: "تواصل معنا",
    badgeTrust: "ثقة وضمان",
    badgeSupply: "توريد جملة فوري",
    truckPlaceholderTitle: "مساحة مخصصة لصورة شاحنة توزيع الشركة",
    truckPlaceholderSub: "سيتم إدراج صورة أسطول النقل والتوزيع لاحقاً",
    aboutTitle: "من نحن",
    aboutDesc1: "نحن <strong>شركة الجوهرة للتوزيع</strong>، إحدى الشركات الرائدة والمتخصصة في تجارة وتوزيع وتسويق منكهات التسالي والمقرمشات بكافة أنواعها بالجملة. نحرص دائماً على تقديم أفضل المنتجات بأعلى مستويات الجودة وأنسب الأسعار لعملائنا الكرام من تجار الجملة والتجزئة والمحلات في جميع أنحاء الجمهورية.",
    aboutDesc2: "نلتزم بالدقة والاحترافية وسرعة التوريد الدائم من خلال أسطول توزيع مجهز يضمن وصول المنتجات طازجة ومحفوظة وفق أعلى معايير السلامة والجودة الغذائية.",
    learnMore: "اعرف المزيد",
    feat1Title: "جودة مضمونة",
    feat1Desc: "أعلى معايير الجودة في كافة المنتجات لضمان رضا عملائنا",
    feat2Title: "شراكات قوية",
    feat2Desc: "تعامل مباشر وموثوق مع أكبر المصانع والعلامات التجارية",
    feat3Title: "تغطية واسعة",
    feat3Desc: "شبكة شحن وتوزيع مرنة تغطي محافظات الوجه البحري والقبلي",
    feat4Title: "أسعار تنافسية",
    feat4Desc: "أفضل عروض وأسعار جملة تمنح شركاءنا هوامش ربح ممتازة",
    productsTitle: "المنتجات",
    productsSubtitle: "مجموعة متنوعة من أفضل منتجات التسالي",
    productImgSpace: "مساحة صورة المنتج",
    prodSunflower: "لب عباد شمس",
    prodSuper: "لب سوبر عالي الجودة",
    prodCrackers: "مقرمشات",
    prodPeanuts: "فول سوداني",
    prodSweets: "حلويات",
    exploreAll: "استكشف جميع المنتجات",
    brandsTitle: "الشركات التي نتعامل معها",
    brandsSubtitle: "نفخر بالتعاون مع كبرى العلامات التجارية الرائدة",
    whPlaceholderTitle: "مساحة مخصصة لصورة مستودع البضائع",
    whPlaceholderSub: "سيتم إدراج صورة المخازن ومستودعات التوزيع لاحقاً",
    historyTitle: "نبذة تاريخية",
    metaFoundLabel: "تاريخ التأسيس",
    metaFounderLabel: "المؤسس",
    metaFounderVal: "شراكة تأسيس",
    historyDesc1: "بدأت رحلتنا في عالم توزيع التسالي والمقرمشات منذ عام 2012، حيث انطلقت الشركة برؤية طموحة تهدف إلى إرساء معايير جديدة في خدمات التوريد والتوزيع بالجملة.",
    historyDesc2: "وعلى مدار أكثر من عقد من الزمان، نجحنا بفضل الله في توسيع نطاق أعمالنا وبناء قاعدة عملاء صلبة وشبكة علاقات متينة قائمة على الأمانة والالتزام وتوفير أجود المنتجات بأفضل الأسعار. مستمرون في التطوير والنمو لنكون دائماً الخيار الأول والموثوق لكافة عملائنا.",
    historyBtn: "اعرف المزيد عن تاريخنا",
    testimonialsTitle: "آراء العملاء",
    testimonialsSubtitle: "ثقة عملائنا هي سر نجاحنا المستمر",
    hsPlaceholderTitle: "مساحة مخصصة لصورة المصافحة وشراكة العمل",
    hsPlaceholderSub: "سيتم إدراج صورة تعبر عن الثقة والشراكة لاحقاً",
    distTitle: "مناطق التوزيع",
    distSubtitle: "نغطي مناطق الوجه البحري والوجه القبلي لتوفير منتجاتنا لعملائنا في مختلف أنحاء الجمهورية",
    tagCoastal: "تغطية شاملة للمحافظات الشمالية",
    cardLowerTitle: "الوجه البحري",
    cardLowerBrief: "نقدم خدمات توزيع وتوريد متكاملة تغطي كافة محافظات ومدن وقرى الوجه البحري والدلتا والقناة والإسكندرية مع جدول توريد أسبوعي ثابت ومنتظم.",
    hlLower1T: "توريد أسبوعي دوري",
    hlLower1D: "شحن مباشر وسريع لمحلات ومخازن الجملة",
    hlLower2T: "مراكز التوزيع الكبرى",
    hlLower2D: "كفر الشيخ، الدلتا، الإسكندرية، مدن القناة",
    prov1: "كفر الشيخ",
    prov2: "الغربية",
    prov3: "الدقهلية",
    prov4: "البحيرة",
    prov5: "الإسكندرية",
    prov6: "مدن القناة",
    statusActiveDaily: "خطوط شحن نشطة يومياً",
    orderNow: "اطلب توريد منطقتك",
    tagUpper: "خطوط إمداد ممتدة لمحافظات الصعيد",
    cardUpperTitle: "الوجه القبلي",
    cardUpperBrief: "نمتلك أسطول نقل مجهز ومسارات شحن دورية تغطي كافة محافظات الصعيد، لضمان وصول شحنات التسالي والمقرمشات بالجملة بأمان تام وجودة طازجة.",
    hlUpper1T: "شحن كميات ضخمة",
    hlUpper1D: "سيارات نقل كبرى مجهزة لتوريد طلبيات الجملة",
    hlUpper2T: "خطوط توريد منتظمة",
    hlUpper2D: "بني سويف، المنيا، أسيوط، سوهاج، قنا، أسوان",
    prov7: "بني سويف والمنيا",
    prov8: "أسيوط وسوهاج",
    prov9: "قنا والأقصر",
    prov10: "أسوان",
    prov11: "البحر الأحمر",
    statusActiveDirect: "شحن مباشر متوفر أسبوعياً",
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "إجابات على أكثر الأسئلة شيوعاً",
    faqQ1: "ما هو الحد الأدنى للطلب بالجملة؟",
    faqA1: "نحرص على تيسير التعامل مع كافة عملائنا؛ يتم تحديد الحد الأدنى للطلب بحسب نوع الصنف والكميات المطلوبة للمحافظة، ويمكنكم التواصل معنا هاتفياً أو عبر واتساب لتحديد متطلباتكم بدقة وتقديم أنسب عرض سعر.",
    faqQ2: "هل يوجد توصيل لجميع المحافظات؟",
    faqA2: "نعم، تغطي شبكة توزيعنا محافظات الوجه البحري بالكامل ومحافظات الوجه القبلي من خلال خطوط توريد منتظمة وسيارات شحن مجهزة تضمن وصول طلبياتكم في أسرع وقت.",
    faqQ3: "ما هي طرق الدفع المتاحة؟",
    faqA3: "نوفر خيارات دفع مرنة تناسب تجار الجملة والتجزئة، بما يشمل الدفع النقدي عند الاستلام، والتحويلات البنكية المباشرة، والمحافظ الإلكترونية بما يتوافق مع سياسة التوريد المتفق عليها.",
    faqQ4: "كيف يمكنني طلب قائمة أسعار المنتجات المحدثة؟",
    faqA4: "يمكنكم ببساطة مراسلتنا عبر الواتساب على الرقم 01000854324 أو الاتصال المباشر بفريق المبيعات، وسنقوم بإرسال أحدث قائمة أسعار تشمل جميع المنتجات المتاحة والخصومات المخصصة للكميات الكبيرة.",
    faqQ5: "هل المنتجات مضمونة الصلاحية والجودة؟",
    faqA5: "بالتأكيد، كافة بضائعنا ومنتجات التسالي والمقرمشات مخزنة في مستودعات ومخازن مجهزة وفق أعلى معايير الجودة الغذائية، وتصلكم طازجة وبأحدث فترات الصلاحية الإنتاجية مباشرة من المصانع المعتمدة.",
    contactTitle: "تواصل معنا",
    contactSubtitle: "يسعدنا تواصلك معنا في أي وقت للإجابة على استفساراتكم واستقبال طلبات الجملة والتوزيع",
    formLabelName: "الاسم",
    formLabelEmail: "الايميل",
    formLabelPhone: "الرقم",
    formLabelMessage: "الرساله",
    phName: "أدخل اسمك بالكامل",
    phEmail: "example@email.com",
    phPhone: "010XXXXXXXX",
    phMessage: "اكتب تفاصيل طلبك أو استفسارك هنا...",
    formSubmitBtn: "إرسال عبر واتساب",
    devByPrefix: "تم التطوير بواسطة",
    methodHq: "المقر الرئيسي",
    methodAddress: "عزبة قبيبة القبلية - مركز دسوق - محافظة كفر الشيخ",
    followUs: "تابعونا على منصات التواصل:",
    mapBadge: "موقع الشركة الفعلي - دسوق",
    copyrightText: "جميع الحقوق محفوظة - شركة الجوهرة للتوزيع",
    whatsappTooltip: "تواصل معنا عبر واتساب",
    footerDesc: "شركة رائدة في توزيع وتسويق منكهات التسالي والمقرمشات بالجملة، نلتزم بأعلى معايير الجودة وأسرع خطوط التوريد.",
    footerQuickLinks: "روابط سريعة",
    footerProducts: "المنتجات",
    footerContactUs: "تواصل معنا"
  },
  en: {
    docTitle: "Al-Jawhara Distribution Co. - Wholesale Snacks & Crackers",
    brandTitle: "Al-Jawhara Distribution",
    brandSub: "Wholesale Snacks & Crackers",
    navHome: "Home",
    navAbout: "About Us",
    navHistory: "History",
    navProducts: "Products",
    navBrands: "Our Brands",
    navDistribution: "Distribution Areas",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navFaqShort: "FAQ",
    navContact: "Contact Us",
    heroTitle: "Al-Jawhara Distribution",
    heroSubtitle: "Your Trusted Partner in Wholesale Snacks & Crackers",
    heroDesc: "Delivering the finest varieties of snacks and crisps at competitive prices with uncompromised quality, backed by a fast, disciplined distribution network serving clients nationwide.",
    heroBadge1: "Guaranteed Quality",
    heroBadge2: "Competitive Rates",
    heroBadge3: "Wide Coverage",
    heroCta: "Contact Us",
    badgeTrust: "Trust & Warranty",
    badgeSupply: "Instant Wholesale Supply",
    truckPlaceholderTitle: "Reserved Space for Distribution Truck Fleet",
    truckPlaceholderSub: "Official fleet vehicle photos will be added here",
    aboutTitle: "About Us",
    aboutDesc1: "We are <strong>Al-Jawhara Distribution Company</strong>, a premier distributor specialized in wholesale snacks, nuts, and crackers. We are dedicated to providing superior product quality at the most competitive rates for wholesale and retail merchants across the republic.",
    aboutDesc2: "We take pride in our precision, reliability, and fast recurring deliveries via equipped vehicles ensuring items arrive fresh and stored to the highest standards.",
    learnMore: "Learn More",
    feat1Title: "Guaranteed Quality",
    feat1Desc: "Highest quality standards across all snack categories to guarantee customer satisfaction",
    feat2Title: "Solid Partnerships",
    feat2Desc: "Direct, trustworthy relationships with leading factories and international brands",
    feat3Title: "Wide Coverage",
    feat3Desc: "A flexible logistics and transport network covering Lower and Upper Egypt",
    feat4Title: "Competitive Pricing",
    feat4Desc: "Best wholesale deals empowering our partner merchants with outstanding profit margins",
    productsTitle: "Our Products",
    productsSubtitle: "A diverse selection of premium snack and cracker categories",
    productImgSpace: "Product Image Placeholder",
    prodSunflower: "Sunflower Seeds",
    prodSuper: "Premium Super Seeds",
    prodCrackers: "Crackers & Crisps",
    prodPeanuts: "Roasted Peanuts",
    prodSweets: "Confectionery & Sweets",
    exploreAll: "Explore All Products",
    brandsTitle: "Brands We Distribute",
    brandsSubtitle: "Proud to collaborate with market-leading commercial brands",
    whPlaceholderTitle: "Reserved Space for Goods Warehouse",
    whPlaceholderSub: "Modern warehouse storage photos will be added here",
    historyTitle: "Historical Background",
    metaFoundLabel: "Established In",
    metaFounderLabel: "Founder",
    metaFounderVal: "Founding Partnership",
    historyDesc1: "Our journey in the wholesale snacks distribution sector began in 2012, established with an ambitious vision to redefine supply chain excellence and punctuality.",
    historyDesc2: "Over more than a decade of proven success, we have expanded our reach and forged lasting partnerships built on integrity, reliability, and value.",
    historyBtn: "Learn More About Our History",
    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "Our clients' trust is the cornerstone of our ongoing success",
    hsPlaceholderTitle: "Reserved Space for Partnership Handshake Image",
    hsPlaceholderSub: "Symbolic photo of trusted business partnership will be added here",
    distTitle: "Distribution Areas",
    distSubtitle: "Covering both Lower and Upper Egypt to supply our valued clients across the republic",
    tagCoastal: "Full Coverage for Northern Governorates",
    cardLowerTitle: "Lower Egypt (Delta & Coast)",
    cardLowerBrief: "Comprehensive distribution services reaching across all Delta governorates, the Canal cities, and Alexandria with scheduled weekly runs.",
    hlLower1T: "Regular Weekly Supply",
    hlLower1D: "Direct expedited shipments to retail and wholesale stores",
    hlLower2T: "Key Distribution Hubs",
    hlLower2D: "Kafr El-Sheikh, Delta cities, Alexandria, Suez Canal",
    prov1: "Kafr El-Sheikh",
    prov2: "Gharbia",
    prov3: "Dakahlia",
    prov4: "Beheira",
    prov5: "Alexandria",
    prov6: "Canal Cities",
    statusActiveDaily: "Active Daily Shipping Routes",
    orderNow: "Request Supply for Your Area",
    tagUpper: "Extended Supply Lines to Upper Egypt",
    cardUpperTitle: "Upper Egypt (Southern Hubs)",
    cardUpperBrief: "Equipped vehicle fleets and dedicated freight corridors covering Upper Egypt, guaranteeing fresh snacks arrive safely and on time.",
    hlUpper1T: "Bulk Capacity Shipments",
    hlUpper1D: "Heavy transport vehicles specialized for wholesale volumes",
    hlUpper2T: "Scheduled Supply Routes",
    hlUpper2D: "Beni Suef, Minya, Asyut, Sohag, Qena, Aswan",
    prov7: "Beni Suef & Minya",
    prov8: "Asyut & Sohag",
    prov9: "Qena & Luxor",
    prov10: "Aswan",
    prov11: "Red Sea",
    statusActiveDirect: "Direct Shipments Dispatched Weekly",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Clear answers to your most common inquiries",
    faqQ1: "What is the minimum wholesale order quantity?",
    faqA1: "We prioritize flexible cooperation. Minimum quantities depend on category and regional location. Contact us via phone or WhatsApp for a tailored quote.",
    faqQ2: "Do you deliver to all governorates?",
    faqA2: "Yes, our extensive network covers both Lower and Upper Egypt through regular supply schedules ensuring prompt arrival.",
    faqQ3: "What payment methods do you accept?",
    faqA3: "We offer flexible terms including cash on delivery, bank wire transfers, and electronic wallets as agreed per commercial supply contract.",
    faqQ4: "How can I receive the updated wholesale price list?",
    faqA4: "Simply message our team via WhatsApp at 01000854324 or call us directly. We will provide our comprehensive catalog with bulk discounts.",
    faqQ5: "Are all products guaranteed fresh with valid shelf life?",
    faqA5: "Without question. All items are maintained in certified, quality-controlled warehouses and delivered fresh directly from authorized manufacturers.",
    contactTitle: "Contact Us",
    contactSubtitle: "We welcome your inquiries and wholesale distribution requests at any time",
    methodPhone: "Direct Phone Call",
    methodWhatsApp: "WhatsApp (Instant Chat)",
    methodHq: "Headquarters",
    methodAddress: "Qobaibah Al-Qibliyah - Desouk Center - Kafr El-Sheikh Governorate",
    followUs: "Follow Us on Social Media:",
    mapBadge: "Verified Location - Desouk",
    copyrightText: "All rights reserved - Al-Jawhara Distribution Co.",
    whatsappTooltip: "Contact us on WhatsApp",
    footerDesc: "A leading company in wholesale distribution and marketing of snacks and crackers, committed to the highest quality standards and fastest supply lines.",
    footerQuickLinks: "Quick Links",
    footerProducts: "Products",
    footerContactUs: "Contact Us"
  }
};

// Bilingual Testimonials Data
const testimonialsData = {
  ar: [
    {
      quote: '"شركة متميزة في التعامل، وأسعارها مناسبة جداً، والتوصيل دائماً في الموعد المحدد مع التزام تام بالجودة العالية في كافة أصناف التسالي."',
      name: 'أحمد محمد',
      role: 'تاجر جملة - كفر الشيخ',
      stars: 5,
      avatarIcon: 'fa-user-tie'
    },
    {
      quote: '"من أفضل وأصدق شركات التوزيع التي تعاملنا معها، بضاعة طازجة باستمرار ومنتجات كبرى الشركات متوفرة دون انقطاع."',
      name: 'محمود عبد الله',
      role: 'صاحب محمصة وماركت - الغربية',
      stars: 5,
      avatarIcon: 'fa-store'
    },
    {
      quote: '"التزامهم بخطوط التوريد في محافظات الصعيد ممتاز وسريع، والأسعار تمنحنا ميزة تنافسية ممتازة في السوق."',
      name: 'خالد الصاوي',
      role: 'وكيل توزيع - أسيوط',
      stars: 5,
      avatarIcon: 'fa-building'
    }
  ],
  en: [
    {
      quote: '"An outstanding distribution company to work with. Highly competitive prices, always on-time deliveries, and premium freshness across all snack varieties."',
      name: 'Ahmed Mohamed',
      role: 'Wholesale Merchant - Kafr El-Sheikh',
      stars: 5,
      avatarIcon: 'fa-user-tie'
    },
    {
      quote: '"One of the most authentic and reliable suppliers we partner with. Continuous availability of top-tier brands and dependable customer support."',
      name: 'Mahmoud Abdullah',
      role: 'Supermarket & Roastery Owner - Gharbia',
      stars: 5,
      avatarIcon: 'fa-store'
    },
    {
      quote: '"Their commitment to delivery routes across Upper Egypt is exceptional and prompt. Their wholesale pricing gives us a powerful market edge."',
      name: 'Khaled El-Sawy',
      role: 'Distribution Agent - Asyut',
      stars: 5,
      avatarIcon: 'fa-building'
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 0. Splash Screen - Hide after page load (only once per session)
  // -------------------------------------------------------------
  const splashScreen = document.getElementById('splashScreen');

  function hideSplashScreen() {
    if (splashScreen) {
      splashScreen.classList.add('hidden');
      setTimeout(() => {
        splashScreen.style.display = 'none';
      }, 500);
    }
  }

  if (!sessionStorage.getItem('aljawhara_splash_shown')) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        hideSplashScreen();
        sessionStorage.setItem('aljawhara_splash_shown', 'true');
      }, 1500);
    });
  } else {
    hideSplashScreen();
  }

  setTimeout(() => {
    hideSplashScreen();
    sessionStorage.setItem('aljawhara_splash_shown', 'true');
  }, 4000);

  // -------------------------------------------------------------
  // Testimonials - Shared variables & functions (needed by applyLanguage)
  // -------------------------------------------------------------
  let currentTestiIndex = 0;
  const testiQuoteEl = document.getElementById('testiQuote');
  const testiNameEl = document.getElementById('testiName');
  const testiRoleEl = document.getElementById('testiRole');
  const testiAvatarEl = document.getElementById('testiAvatar');
  const testiCardEl = document.getElementById('testiCard');
  const testiIndicatorsEl = document.getElementById('testiIndicators');
  let testiAutoInterval = null;
  let testiIsAnimating = false;

  function testiBuildIndicators() {
    if (!testiIndicatorsEl) return;
    const list = testimonialsData[currentLang] || testimonialsData.ar;
    testiIndicatorsEl.innerHTML = '';
    list.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'testi-indicator' + (i === currentTestiIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
      dot.addEventListener('click', () => {
        if (i !== currentTestiIndex && !testiIsAnimating) {
          testiGoTo(i);
        }
      });
      testiIndicatorsEl.appendChild(dot);
    });
  }

  function testiUpdateIndicators() {
    if (!testiIndicatorsEl) return;
    const dots = testiIndicatorsEl.querySelectorAll('.testi-indicator');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentTestiIndex);
    });
  }

  function testiRender(index) {
    if (!testiQuoteEl || !testiCardEl) return;
    const list = testimonialsData[currentLang] || testimonialsData.ar;
    const data = list[index] || list[0];

    testiIsAnimating = true;
    testiCardEl.classList.add('slide-out');

    setTimeout(() => {
      testiQuoteEl.textContent = data.quote;
      testiNameEl.textContent = data.name;
      testiRoleEl.textContent = data.role;
      if (testiAvatarEl) {
        testiAvatarEl.innerHTML = `<i class="fa-solid ${data.avatarIcon}"></i>`;
      }
      testiUpdateIndicators();

      testiCardEl.classList.remove('slide-out');
      testiCardEl.classList.add('slide-in');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          testiCardEl.classList.remove('slide-in');
          testiIsAnimating = false;
        });
      });
    }, 300);
  }

  function testiGoTo(index) {
    const list = testimonialsData[currentLang] || testimonialsData.ar;
    currentTestiIndex = ((index % list.length) + list.length) % list.length;
    testiRender(currentTestiIndex);
    testiResetAuto();
  }

  function testiNext() {
    const list = testimonialsData[currentLang] || testimonialsData.ar;
    currentTestiIndex = (currentTestiIndex + 1) % list.length;
    testiRender(currentTestiIndex);
  }

  function testiPrev() {
    const list = testimonialsData[currentLang] || testimonialsData.ar;
    currentTestiIndex = (currentTestiIndex - 1 + list.length) % list.length;
    testiRender(currentTestiIndex);
  }

  function testiStartAuto() {
    testiStopAuto();
    testiAutoInterval = setInterval(() => {
      testiNext();
    }, 4000);
  }

  function testiStopAuto() {
    if (testiAutoInterval) {
      clearInterval(testiAutoInterval);
      testiAutoInterval = null;
    }
  }

  function testiResetAuto() {
    testiStopAuto();
    testiStartAuto();
  }

  // -------------------------------------------------------------
  // 1. Language Switcher (AR / EN) with LocalStorage
  // -------------------------------------------------------------
  const langSwitchBtn = document.getElementById('langSwitch');
  const langTextSpan = document.getElementById('langText');
  let currentLang = localStorage.getItem('aljawhara_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('aljawhara_lang', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Button label shows the alternate language to switch to
    if (langTextSpan) {
      langTextSpan.textContent = lang === 'ar' ? 'EN' : 'العربية';
    }

    // Sync mobile lang text
    const langTextMobile = document.getElementById('langTextMobile');
    if (langTextMobile) {
      langTextMobile.textContent = lang === 'ar' ? 'EN' : 'العربية';
    }

    // Translate all elements with data-i18n attribute
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Check if string contains HTML tags
        if (translations[lang][key].includes('<')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update document title
    if (translations[lang] && translations[lang].docTitle) {
      document.title = translations[lang].docTitle;
    }

    // Re-render current testimonial with new language
    testiBuildIndicators();
    testiRender(currentTestiIndex);
  }

  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(newLang);
    });
  }

  // -------------------------------------------------------------
  // 2. Dark Mode / Light Mode with LocalStorage
  // -------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('aljawhara_theme') || 'light';

  function applyTheme(theme) {
    const htmlEl = document.documentElement;
    if (theme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeToggleBtn.setAttribute('title', currentLang === 'ar' ? 'تبديل للوضع النهاري' : 'Switch to Light Mode');
      }
      // Sync mobile
      const themeToggleMobile = document.getElementById('themeToggleMobile');
      if (themeToggleMobile) {
        themeToggleMobile.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
    } else {
      htmlEl.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        themeToggleBtn.setAttribute('title', currentLang === 'ar' ? 'تبديل للوضع الليلي' : 'Switch to Dark Mode');
      }
      // Sync mobile
      const themeToggleMobile = document.getElementById('themeToggleMobile');
      if (themeToggleMobile) {
        themeToggleMobile.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    }
    localStorage.setItem('aljawhara_theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // Initial Theme and Lang apply
  applyTheme(savedTheme);
  applyLanguage(currentLang);

  // Sync mobile theme toggle with desktop
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  if (themeToggleMobile && themeToggleBtn) {
    themeToggleMobile.addEventListener('click', () => {
      themeToggleBtn.click();
      // Sync icon
      setTimeout(() => {
        const icon = themeToggleMobile.querySelector('i');
        const desktopIcon = themeToggleBtn.querySelector('i');
        if (icon && desktopIcon) {
          icon.className = desktopIcon.className;
        }
      }, 50);
    });
  }

  // Sync mobile lang switch with desktop
  const langSwitchMobile = document.getElementById('langSwitchMobile');
  const langTextMobile = document.getElementById('langTextMobile');
  if (langSwitchMobile && langSwitchBtn) {
    langSwitchMobile.addEventListener('click', () => {
      langSwitchBtn.click();
      setTimeout(() => {
        if (langTextMobile && langTextSpan) {
          langTextMobile.textContent = langTextSpan.textContent;
        }
      }, 50);
    });
  }

  // -------------------------------------------------------------
  // 3. Mobile Menu Toggle
  // -------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navMenuClose = document.getElementById('navMenuClose');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMenu() {
    if (navMenu) navMenu.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (navMenu) navMenu.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  if (navMenuClose) {
    navMenuClose.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // -------------------------------------------------------------
  // 4. Active Link on Scroll
  // -------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // -------------------------------------------------------------
  // 5. FAQ Accordion
  // -------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // -------------------------------------------------------------
  // 6. Brands Carousel Navigation
  // -------------------------------------------------------------
  const brandsTrack = document.getElementById('brandsTrack');
  const brandPrev = document.getElementById('brandPrev');
  const brandNext = document.getElementById('brandNext');

  if (brandsTrack && brandPrev && brandNext) {
    let brandIndex = 0;

    function updateBrandCarousel() {
      const direction = document.documentElement.getAttribute('dir') === 'rtl' ? 1 : -1;
      brandsTrack.style.transform = `translateX(${brandIndex * 60 * direction}px)`;
    }

    brandNext.addEventListener('click', () => {
      brandIndex = (brandIndex + 1) % 3;
      updateBrandCarousel();
    });

    brandPrev.addEventListener('click', () => {
      brandIndex = (brandIndex - 1 + 3) % 3;
      updateBrandCarousel();
    });
  }

  // -------------------------------------------------------------
  // 7. Testimonials Carousel (Auto Slider + Swipe + Indicators)
  // -------------------------------------------------------------
  const testiPrevBtn = document.getElementById('testiPrev');
  const testiNextBtn = document.getElementById('testiNext');
  const testiWrapperEl = document.getElementById('testimonialWrapper');

  // Button events
  if (testiPrevBtn) {
    testiPrevBtn.addEventListener('click', () => {
      if (!testiIsAnimating) {
        testiPrev();
        testiResetAuto();
      }
    });
  }

  if (testiNextBtn) {
    testiNextBtn.addEventListener('click', () => {
      if (!testiIsAnimating) {
        testiNext();
        testiResetAuto();
      }
    });
  }

  // Pause on hover
  if (testiWrapperEl) {
    testiWrapperEl.addEventListener('mouseenter', testiStopAuto);
    testiWrapperEl.addEventListener('mouseleave', testiStartAuto);
  }

  // Swipe support for mobile
  if (testiCardEl) {
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    testiCardEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      testiStopAuto();
    }, { passive: true });

    testiCardEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > minSwipeDistance && !testiIsAnimating) {
        const dir = document.documentElement.getAttribute('dir');
        if (dir === 'rtl') {
          if (diff > 0) testiPrev(); else testiNext();
        } else {
          if (diff > 0) testiNext(); else testiPrev();
        }
      }

      testiStartAuto();
    }, { passive: true });
  }

  // Initialize testimonials
  testiBuildIndicators();
  testiStartAuto();

  // -------------------------------------------------------------
  // 8. Hero Indicators
  // -------------------------------------------------------------
  const indicators = document.querySelectorAll('.hero-indicators .indicator');
  indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
      indicators.forEach(ind => ind.classList.remove('active'));
      indicator.classList.add('active');
    });
  });

  // -------------------------------------------------------------
  // 9. Current Year
  // -------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------
  // 10. Contact Form → WhatsApp
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contactWhatsAppForm');
  if (contactForm) {
    let isSubmitting = false;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (isSubmitting) return;

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      // Validation
      const errors = [];
      if (!name) errors.push(currentLang === 'ar' ? 'الاسم مطلوب' : 'Name is required');
      if (!phone) errors.push(currentLang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required');
      if (!message) errors.push(currentLang === 'ar' ? 'نص الرسالة مطلوب' : 'Message is required');

      if (errors.length > 0) {
        const errorMsg = errors.join('\n');
        if (currentLang === 'ar') {
          alert('يرجى ملء جميع الحقول المطلوبة:\n\n' + errorMsg);
        } else {
          alert('Please fill in all required fields:\n\n' + errorMsg);
        }
        return;
      }

      // Prevent double-click
      isSubmitting = true;
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = currentLang === 'ar'
        ? '<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري التحويل...</span>'
        : '<i class="fa-solid fa-spinner fa-spin"></i> <span>Redirecting...</span>';
      submitBtn.style.pointerEvents = 'none';
      submitBtn.style.opacity = '0.7';

      // Build WhatsApp message
      const waNumber = '201000854324';

      let text = '';
      if (currentLang === 'ar') {
        text = 'مرحبًا، لدي استفسار جديد من خلال الموقع.\n\n';
        text += `الاسم: ${name}\n`;
        text += `رقم الهاتف: ${phone}\n`;
        if (email) text += `البريد الإلكتروني: ${email}\n`;
        text += `\nنص الرسالة:\n${message}`;
      } else {
        text = 'Hello, I have a new inquiry from the website.\n\n';
        text += `Name: ${name}\n`;
        text += `Phone: ${phone}\n`;
        if (email) text += `Email: ${email}\n`;
        text += `\nMessage:\n${message}`;
      }

      // Confirmation
      const confirmMsg = currentLang === 'ar'
        ? 'سيتم تحويلك إلى واتساب لإرسال رسالتك'
        : 'You will be redirected to WhatsApp to send your message';

      // Show confirmation and redirect
      setTimeout(() => {
        if (currentLang === 'ar') {
          alert(confirmMsg);
        } else {
          alert(confirmMsg);
        }

        const params = new URLSearchParams({ text: text });
        const waURL = `https://wa.me/${waNumber}?${params.toString()}`;

        window.open(waURL, '_blank');

        // Reset form and button
        contactForm.reset();
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.pointerEvents = '';
        submitBtn.style.opacity = '';
        isSubmitting = false;
      }, 600);
    });
  }
});
