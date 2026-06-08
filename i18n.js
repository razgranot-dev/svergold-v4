/* ============================================================
   SVERGOLD — i18n (HE / EN / RU), theme + language control
   ============================================================ */
const I18N = {
  en: {
    _name: "English",
    "nav.sectors": "Sectors", "nav.why": "Why Svergold", "nav.journey": "The Journey",
    "nav.services": "Services", "nav.locations": "Locations", "nav.contact": "Contact",
    "nav.cta": "Leave Details", "nav.vehicles": "Vehicles",

    "hero.eyebrow": "Import & International Trade",
    "hero.h1a": "We find it, import it,",
    "hero.h1b": "and deliver it to your door.",
    "hero.lede": "From the supplier abroad to your door — one import chain, one responsibility.",
    "hero.cta1": "Leave Details", "hero.cta2": "Our Services", "hero.cta3": "Contact Us",
    "hero.x1": "International trade,", "hero.x2": "end to end.", "hero.scroll": "Scroll to enter",
    "ship.ph": "Drop ship artwork (transparent PNG)",

    "sec.eyebrow": "What we trade",
    "sec.t": "The fields we know cold.",
    "sec.lede": "Every import field has its own rules, standards and suppliers. We specialise in each: industrial & energy raw materials, food & beverage, and luxury vehicles.",
    "sec.1t": "Bentonite for Drilling", "sec.1d": "Drilling-grade bentonite and additives, supplied to energy and infrastructure sites.",
    "sec.2t": "Polymers & Minerals", "sec.2d": "Industrial polymers, raw minerals and bulk construction materials.",
    "sec.3t": "Luxury Car Import", "sec.3d": "We find the model, import it, clear customs and register it in your name — ready for the road.",
    "sec.4t": "Food & Beverage Import", "sec.4d": "Food and drink imports held to standard: compliance, cold chain, distribution.",
    "sec.5t": "Sourcing & Logistics", "sec.5d": "We find the right supplier, book the freight, and get the cargo there on time.",
    "sec.6t": "Warehousing & Distribution", "sec.6d": "Storage beside the port, then delivery to the final door.",

    "veh.eyebrow": "Luxury Vehicle Import",
    "veh.ta": "Luxury vehicles,", "veh.tb": "imported with precision",
    "veh.lede": "Personal, professional guidance from first inspection to delivery in Israel — handled with full discretion.",
    "veh.1t": "Sourcing & verification", "veh.1d": "We find the requested model and check its condition and history before any commitment.",
    "veh.2t": "Insured shipping", "veh.2d": "Sea or land freight, fully insured and tracked all the way to the port.",
    "veh.3t": "Customs & licensing", "veh.3d": "Duties, clearance and Israeli vehicle licensing — end to end.",
    "veh.4t": "Delivery to the client", "veh.4d": "The vehicle arrives ready to drive, delivered wherever you choose.",
    "veh.note": "Full personal concierge — from the first inspection to handing you the keys. You pick the car; we handle everything else.",
    "veh.cta": "Arrange a personal vehicle import",
    "veh.c1": "Sedans & SUVs", "veh.c2": "Sports cars", "veh.c3": "Electric vehicles", "veh.c4": "Collector & classic",

    "scale.eyebrow": "Infrastructure & Capability",
    "scale.t": "Port, customs and warehouse — all in-house, not subcontracted.",
    "scale.lede": "Port operations, customs and warehousing — under one roof, so every shipment keeps moving.",
    "scale.1t": "Port operations", "scale.1d": "Day-to-day work at Haifa and Ashdod ports — unloading, handling and coordination.",
    "scale.2t": "Customs & brokerage", "scale.2d": "Clearance, regulation and documents, handled here in full transparency.",
    "scale.3t": "Port-side warehousing", "scale.3d": "Warehouses at Haifa and Ashdod, for fast clearance and on-time dispatch.",

    "why.eyebrow": "Why Svergold",
    "why.t": "One team owns the whole shipment.",
    "why.lede": "Most trade goes wrong in the handoffs. We hold every step: supplier, deal, freight, customs, storage. One team to answer for it, one number to call.",
    "why.asideT": "From the factory to your door, nothing changes hands without us on it.",
    "why.1t": "A vetted global supplier network", "why.1d": "Vetted suppliers matched to your spec and budget. A shortlist, not a directory.",
    "why.2t": "One desk, every stage", "why.2d": "A single point of accountability across sourcing, deal, freight and delivery.",
    "why.3t": "Our own port-side storage", "why.3d": "Warehouses beside Haifa and Ashdod. Faster clearance, faster dispatch.",
    "why.4t": "Run by traders", "why.4d": "Negotiation, compliance and risk, handled by people who trade for a living.",

    "jr.eyebrow": "The Svergold Journey",
    "jr.t": "Six stations. Zero places for something to fall through.",
    "jr.lede": "Every shipment travels six stations. Scroll to follow a container from first enquiry to your loading dock.",
    "jr.now": "Now loading",
    "jr.1e": "Station 01", "jr.1t": "Needs Analysis", "jr.1d": "We pin down spec, volumes, timing and budget, so we source the right thing the first time.", "jr.1c": "Brief secured",
    "jr.2e": "Station 02", "jr.2t": "Supplier Sourcing", "jr.2d": "We find, vet and shortlist suppliers who can actually deliver.", "jr.2c": "Shortlist ready",
    "jr.3e": "Station 03", "jr.3t": "Deal Management", "jr.3d": "Price, terms, contract and compliance, negotiated in your favour and signed.", "jr.3c": "Deal closed",
    "jr.4e": "Station 04", "jr.4t": "Shipping & Logistics", "jr.4d": "Freight booked and run across sea and land, tracked the whole way.", "jr.4c": "Cargo in transit",
    "jr.5e": "Station 05", "jr.5t": "Storage & Warehousing", "jr.5d": "Goods land in our warehouses beside Haifa and Ashdod ports.", "jr.5c": "Stored port-side",
    "jr.6e": "Station 06", "jr.6t": "Delivery to Client", "jr.6d": "Door to door. The shipment arrives exactly where you need it.", "jr.6c": "Delivered",

    "svc.eyebrow": "Services",
    "svc.t": "Take one stage. Or hand us the chain.",
    "svc.lede": "Bring us in for a single step, or hand over the whole import from the factory to your floor.",
    "svc.1t": "International Supplier Sourcing", "svc.1d": "Finding, vetting and qualifying suppliers worldwide, including the checks most skip.",
    "svc.2t": "Import Management", "svc.2d": "Customs, compliance, documents and clearance. Handled here, not forwarded on.",
    "svc.3t": "Marketing & Distribution", "svc.3d": "Getting imported goods onto shelves and into channels.",
    "svc.4t": "Logistics & Storage", "svc.4d": "Freight organised and goods stored beside the port.",
    "svc.5t": "Commercial Deal Support", "svc.5d": "Negotiation, contracts and risk, on your side of the table.",
    "svc.6t": "Door-to-Door Service", "svc.6d": "One clean line from the supplier's gate to your floor.",

    "loc.eyebrow": "Locations",
    "loc.t": "Built around Haifa and Ashdod.",
    "loc.lede": "Head office in Haifa, warehouses on the country's two busiest ports, so cargo clears and moves without a detour.",
    "loc.1tag": "Head Office", "loc.1t": "Haifa", "loc.1d": "47 Histadrut Blvd, Haifa",
    "loc.2tag": "Warehouse", "loc.2t": "Haifa Port", "loc.2d": "Warehouse minutes from Haifa Port.",
    "loc.3tag": "Warehouse", "loc.3t": "Ashdod Port", "loc.3d": "Warehouse minutes from Ashdod Port.",

    "ct.eyebrow": "Contact",
    "ct.t": "Tell us what you need to import.",
    "ct.lede": "Send a few details and a trader gets back to you with cost, timing, and whether it's worth doing.",
    "ct.human": "Talk directly with Asaf Goldschmidt",
    "ct.resppromise": "We reply within one business day.",
    "ct.wacta": "Message us on WhatsApp",
    "ct.ownerRole": "Founder · Svergold",
    "ct.license": "Licensed customs broker · License no. —",
    "ct.privacy": "By submitting, you agree we may contact you by phone or WhatsApp. Your details are not shared with third parties.",
    "ct.phone": "Phone", "ct.phonev": "+972 50-882-8800",
    "ct.wa": "WhatsApp", "ct.wav": "Chat with our team",
    "ct.email": "Email", "ct.emailv": "Asaf@svergold.co.il",
    "ct.fname": "Full name", "ct.fnameph": "Your name",
    "ct.fcompany": "Company name", "ct.fcompanyph": "Company name (optional)",
    "ct.femail": "Email", "ct.femailph": "you@company.com",
    "ct.fphone": "Phone / WhatsApp", "ct.fphoneph": "+972 ...",
    "ct.fsector": "Area of interest",
    "ct.sector1": "Bentonite / drilling materials",
    "ct.sector2": "Polymers & minerals",
    "ct.sector3": "Luxury vehicles",
    "ct.sector4": "Food & beverages",
    "ct.sector5": "General import inquiry",
    "ct.fmsg": "What do you want to import? (optional)", "ct.fmsgph": "Product, quantity, target price, timeline. Whatever you have.",
    "ct.submit": "Send via WhatsApp",
    "ct.err.name": "Please enter your name", "ct.err.email": "Please enter a valid email", "ct.err.msg": "Please add a short message",
    "ct.err.contact": "Please leave a phone or email so we can reply",
    "ct.okT": "Opening WhatsApp…", "ct.okD": "We've prefilled a WhatsApp message with your details — just hit send. We'll reply within one business day.",

    "ft.tag": "Sourcing, import and delivery. International trade, run by one team.",
    "ft.explore": "Explore", "ft.company": "Company", "ft.reach": "Reach us",
    "ft.rights": "All rights reserved.", "ft.built": "Svergold Import & Marketing LTD",
    "fab.call": "Call", "fab.wa": "WhatsApp",

    "trust.eyebrow": "Why teams trust us",
    "trust.1": "Headquartered in Haifa",
    "trust.2": "Working Haifa & Ashdod ports",
    "trust.3": "End-to-end guidance",
    "trust.4": "Supplier, freight, customs, storage & delivery — under one address",

    "jr.cta": "It starts with one enquiry",
    "map.haifa": "Haifa", "map.ashdod": "Ashdod", "map.sea": "Mediterranean",
    "wa.greeting": "Hi, I came from the Svergold website and would like details about importing."
  },

  he: {
    _name: "עברית",
    "nav.sectors": "תחומים", "nav.why": "למה Svergold", "nav.journey": "המסע",
    "nav.services": "שירותים", "nav.locations": "מיקומים", "nav.contact": "צור קשר",
    "nav.cta": "השאירו פרטים", "nav.vehicles": "רכבי יוקרה",

    "hero.eyebrow": "יבוא וסחר בינלאומי",
    "hero.h1a": "מאתרים, מייבאים ומספקים",
    "hero.h1b": "עד הדלת שלכם.",
    "hero.lede": "מהספק בחו״ל ועד הדלת שלכם — שרשרת יבוא אחת, באחריות אחת.",
    "hero.cta1": "השאירו פרטים", "hero.cta2": "השירותים שלנו", "hero.cta3": "צור קשר",
    "hero.x1": "סחר בינלאומי,", "hero.x2": "מקצה לקצה.", "hero.scroll": "גללו כדי להיכנס",
    "ship.ph": "גררו לכאן את תמונת האונייה (PNG שקוף)",

    "sec.eyebrow": "מה אנחנו מסחרים",
    "sec.t": "התחומים שאנחנו מכירים לעומק.",
    "sec.lede": "לכל תחום יבוא הכללים, התקנים והספקים שלו. אנחנו מתמחים בכל אחד בנפרד: חומרי גלם לתעשייה ולאנרגיה, מזון ומשקאות, ורכבי יוקרה.",
    "sec.1t": "בנטונייט לקידוחים", "sec.1d": "בנטונייט ותוספי קידוח באיכות גבוהה, לאתרי אנרגיה ותשתיות.",
    "sec.2t": "פולימרים ומינרלים", "sec.2d": "פולימרים תעשייתיים, חומרי גלם וחומרי בניין בתפזורת.",
    "sec.3t": "יבוא רכבי יוקרה", "sec.3d": "מאתרים את הדגם, מייבאים, משחררים ממכס ומעבירים על שמכם — מוכן לכביש.",
    "sec.4t": "יבוא מזון ומשקאות", "sec.4d": "יבוא מזון ומשקאות לפי תקן: עמידה בדרישות, שרשרת קירור והפצה.",
    "sec.5t": "איתור ולוגיסטיקה", "sec.5d": "מוצאים את הספק הנכון, סוגרים את ההובלה ודואגים שהמטען יגיע בזמן.",
    "sec.6t": "אחסנה והפצה", "sec.6d": "אחסון צמוד לנמל, ואז משלוח עד הדלת האחרונה.",

    "veh.eyebrow": "יבוא רכבי יוקרה",
    "veh.ta": "רכבי יוקרה,", "veh.tb": "מיובאים בדייקנות",
    "veh.lede": "ליווי אישי ומקצועי, מרגע איתור הדגם ועד מסירה בישראל — בדיסקרטיות מלאה.",
    "veh.1t": "איתור ואימות", "veh.1d": "מאתרים את הדגם המבוקש ובודקים מצב והיסטוריה לפני כל התחייבות.",
    "veh.2t": "שילוח מבוטח", "veh.2d": "הובלה ימית או יבשתית, בביטוח מלא ובמעקב עד הנמל.",
    "veh.3t": "מכס ורישוי", "veh.3d": "מסים, שחרור ורישוי הרכב בישראל — מקצה לקצה.",
    "veh.4t": "מסירה עד הלקוח", "veh.4d": "הרכב מגיע מוכן לנסיעה, נמסר היכן שתבחרו.",
    "veh.note": "ליווי אישי מלא — מהבדיקה הראשונה ועד מסירת המפתח לידכם. אתם בוחרים את הרכב; את כל השאר אנחנו עושים.",
    "veh.cta": "לתיאום ייבוא רכב אישי",
    "veh.c1": "רכבי סדאן ו־SUV", "veh.c2": "רכבי ספורט", "veh.c3": "רכבים חשמליים", "veh.c4": "רכבי אספנות וקלאסיקה",

    "scale.eyebrow": "תשתית ויכולת תפעולית",
    "scale.t": "נמל, מכס ומחסן — הכול אצלנו, לא בקבלנות משנה.",
    "scale.lede": "תפעול נמלים, מכס ואחסנה — הכול תחת קורת גג אחת, כדי שכל משלוח ממשיך לזוז.",
    "scale.1t": "תפעול נמלים", "scale.1d": "פעילות שוטפת מול נמלי חיפה ואשדוד — פריקה, שינוע ותיאום.",
    "scale.2t": "עמילות מכס ותאימות", "scale.2d": "שחרור סחורה, רגולציה ומסמכים — מטופלים אצלנו, בשקיפות מלאה.",
    "scale.3t": "אחסנה צמודת־נמל", "scale.3d": "מחסנים בחיפה ובאשדוד, לשחרור מהיר ולמשלוח בזמן.",

    "why.eyebrow": "למה Svergold",
    "why.t": "צוות אחד אחראי על כל המשלוח.",
    "why.lede": "סחר בינלאומי נשבר בדיוק בהעברות בין הגורמים. אצלנו הכול ביד אחת: ספק, עסקה, שילוח, מכס ואחסון. צוות אחד שאחראי, מספר אחד להתקשר אליו.",
    "why.asideT": "מהמפעל ועד הדלת שלכם, שום דבר לא עובר יד בלי שאנחנו עליו.",
    "why.1t": "רשת ספקים גלובלית בדוקה", "why.1d": "ספקים בדוקים, מותאמים למפרט ולתקציב שלכם. רשימה קצרה, לא ספר טלפונים.",
    "why.2t": "שולחן אחד, כל השלבים", "why.2d": "נקודת אחריות אחת לאורך איתור, עסקה, שילוח ואספקה.",
    "why.3t": "אחסון משלנו ליד הנמל", "why.3d": "מחסנים ליד חיפה ואשדוד. שחרור מהיר יותר, משלוח מהיר יותר.",
    "why.4t": "מנוהל בידי אנשי סחר", "why.4d": "משא ומתן, רגולציה וניהול סיכונים, בידי אנשים שחיים מהסחר הזה.",

    "jr.eyebrow": "המסע של Svergold",
    "jr.t": "שש תחנות. אפס נקודות שבהן משהו נופל.",
    "jr.lede": "כל משלוח עובר שש תחנות. גללו כדי ללוות מכולה מהפנייה הראשונה ועד רציף הפריקה שלכם.",
    "jr.now": "כעת נטען",
    "jr.1e": "תחנה 01", "jr.1t": "ניתוח צרכים", "jr.1d": "מגדירים מפרט, כמויות, לוחות זמנים ותקציב, כדי לאתר את הדבר הנכון בפעם הראשונה.", "jr.1c": "הבריף נסגר",
    "jr.2e": "תחנה 02", "jr.2t": "איתור ספקים", "jr.2d": "מאתרים, בודקים ומסננים ספקים שבאמת מספקים.", "jr.2c": "רשימה קצרה מוכנה",
    "jr.3e": "תחנה 03", "jr.3t": "ניהול העסקה", "jr.3d": "מחיר, תנאים, חוזה ותקינה, נסגרים לטובתכם וחתומים.", "jr.3c": "העסקה נסגרה",
    "jr.4e": "תחנה 04", "jr.4t": "שילוח ולוגיסטיקה", "jr.4d": "מזמינים ומנהלים את המטען בים וביבשה, עם מעקב לכל הדרך.", "jr.4c": "המטען בדרך",
    "jr.5e": "תחנה 05", "jr.5t": "אחסון ואחסנה", "jr.5d": "הסחורה נוחתת במחסנים שלנו ליד נמלי חיפה ואשדוד.", "jr.5c": "אוחסן בנמל",
    "jr.6e": "תחנה 06", "jr.6t": "אספקה ללקוח", "jr.6d": "דלת לדלת. המשלוח מגיע בדיוק לאן שצריך.", "jr.6c": "נמסר",

    "svc.eyebrow": "שירותים",
    "svc.t": "קחו שלב אחד. או מסרו לנו את כל השרשרת.",
    "svc.lede": "קחו שלב אחד, או מסרו לנו את כל היבוא מהמפעל ועד הדלת שלכם.",
    "svc.1t": "איתור ספקים בינלאומי", "svc.1d": "איתור, בדיקה והסמכה של ספקים בעולם, כולל הבדיקות שרובם מדלגים עליהן.",
    "svc.2t": "ניהול יבוא", "svc.2d": "מכס, תקינה, מסמכים ושחרור. מטופלים אצלנו, לא מועברים הלאה.",
    "svc.3t": "שיווק והפצה", "svc.3d": "מביאים את הסחורה המיובאת למדפים ולערוצי ההפצה.",
    "svc.4t": "לוגיסטיקה ואחסון", "svc.4d": "ארגון שילוח ואחסון צמוד לנמל.",
    "svc.5t": "ליווי עסקאות מסחריות", "svc.5d": "משא ומתן, חוזים וניהול סיכונים, בצד שלכם של השולחן.",
    "svc.6t": "שירות דלת לדלת", "svc.6d": "קו אחד ונקי משער הספק ועד הרצפה שלכם.",

    "loc.eyebrow": "מיקומים",
    "loc.t": "פרוסים מחיפה ועד אשדוד.",
    "loc.lede": "מטה בחיפה, מחסנים על שני הנמלים העמוסים בישראל, כך שהמטען משתחרר וזז בלי עיקופים.",
    "loc.1tag": "משרד ראשי", "loc.1t": "חיפה", "loc.1d": "שדרות ההסתדרות 47, חיפה",
    "loc.2tag": "מחסן", "loc.2t": "נמל חיפה", "loc.2d": "מחסן דקות מנמל חיפה.",
    "loc.3tag": "מחסן", "loc.3t": "נמל אשדוד", "loc.3d": "מחסן דקות מנמל אשדוד.",

    "ct.eyebrow": "צור קשר",
    "ct.t": "ספרו לנו מה אתם צריכים לייבא.",
    "ct.lede": "השאירו כמה פרטים, ואיש סחר חוזר אליכם עם תשובה ישירה על עלות, זמנים וכדאיות.",
    "ct.human": "מדברים ישירות עם אסף גולדשמידט",
    "ct.resppromise": "נחזור אליכם תוך יום עסקים אחד.",
    "ct.wacta": "דברו איתנו בוואטסאפ",
    "ct.ownerRole": "מייסד · Svergold",
    "ct.license": "עמיל מכס מורשה · רישיון מס׳ —",
    "ct.privacy": "בשליחת הטופס אתם מאשרים שניצור איתכם קשר בטלפון או בוואטסאפ. הפרטים לא יועברו לצד שלישי.",
    "ct.phone": "טלפון", "ct.phonev": "050-882-8800",
    "ct.wa": "וואטסאפ", "ct.wav": "שוחחו עם הצוות שלנו",
    "ct.email": "אימייל", "ct.emailv": "Asaf@svergold.co.il",
    "ct.fname": "שם מלא", "ct.fnameph": "השם שלכם",
    "ct.fcompany": "שם החברה", "ct.fcompanyph": "שם החברה (לא חובה)",
    "ct.femail": "אימייל", "ct.femailph": "you@company.com",
    "ct.fphone": "טלפון / וואטסאפ", "ct.fphoneph": "‎050...",
    "ct.fsector": "תחום עניין",
    "ct.sector1": "בנטונייט / חומרי קידוח",
    "ct.sector2": "פולימרים ומינרלים",
    "ct.sector3": "רכבי יוקרה",
    "ct.sector4": "מזון ומשקאות",
    "ct.sector5": "פנייה כללית",
    "ct.fmsg": "מה תרצו לייבא? (לא חובה)", "ct.fmsgph": "מוצר, כמות, מחיר יעד, לוח זמנים. כל מה שיש לכם.",
    "ct.submit": "שליחה בוואטסאפ",
    "ct.err.name": "נא להזין שם", "ct.err.email": "נא להזין אימייל תקין", "ct.err.msg": "נא להוסיף הודעה קצרה",
    "ct.err.contact": "השאירו טלפון או אימייל כדי שנוכל לחזור אליכם",
    "ct.okT": "פותחים וואטסאפ…", "ct.okD": "הכנו עבורכם הודעת וואטסאפ עם הפרטים — רק ללחוץ שליחה. נחזור אליכם תוך יום עסקים.",

    "ft.tag": "איתור, יבוא ואספקה. סחר בינלאומי בניהול צוות אחד.",
    "ft.explore": "ניווט", "ft.company": "החברה", "ft.reach": "צרו קשר",
    "ft.rights": "כל הזכויות שמורות.", "ft.built": "Svergold Import & Marketing LTD",
    "fab.call": "התקשרו", "fab.wa": "וואטסאפ",

    "trust.eyebrow": "למה סומכים עלינו",
    "trust.1": "מטה בחיפה",
    "trust.2": "פעילות מול נמלי חיפה ואשדוד",
    "trust.3": "ליווי מקצה לקצה",
    "trust.4": "ספק, שילוח, מכס, אחסון ומסירה — תחת כתובת אחת",

    "jr.cta": "זה מתחיל בפנייה אחת",
    "map.haifa": "חיפה", "map.ashdod": "אשדוד", "map.sea": "הים התיכון",
    "wa.greeting": "היי, הגעתי מאתר Svergold ואשמח לקבל פרטים על יבוא."
  },

  ru: {
    _name: "Русский",
    "nav.sectors": "Направления", "nav.why": "Почему Svergold", "nav.journey": "Путь",
    "nav.services": "Услуги", "nav.locations": "Адреса", "nav.contact": "Контакты",
    "nav.cta": "Оставить заявку", "nav.vehicles": "Авто люкс",

    "hero.eyebrow": "Импорт и международная торговля",
    "hero.h1a": "Находим, ввозим и доставляем",
    "hero.h1b": "до вашей двери.",
    "hero.lede": "От поставщика за рубежом до вашей двери — одна цепочка импорта, одна ответственность.",
    "hero.cta1": "Оставить заявку", "hero.cta2": "Наши услуги", "hero.cta3": "Связаться",
    "hero.x1": "Международная торговля,", "hero.x2": "под ключ.", "hero.scroll": "Прокрутите, чтобы войти",
    "ship.ph": "Перетащите изображение судна (прозрачный PNG)",

    "sec.eyebrow": "Что мы поставляем",
    "sec.t": "Отрасли, которые мы знаем досконально.",
    "sec.lede": "У каждой отрасли импорта свои правила, стандарты и поставщики. Мы специализируемся на каждой: промышленное и энергетическое сырьё, продукты и напитки, авто класса люкс.",
    "sec.1t": "Бентонит для бурения", "sec.1d": "Буровой бентонит и добавки для энергетики и инфраструктуры.",
    "sec.2t": "Полимеры и минералы", "sec.2d": "Промышленные полимеры, сырьё и стройматериалы навалом.",
    "sec.3t": "Импорт люксовых авто", "sec.3d": "Находим модель, ввозим, растаможиваем и регистрируем на ваше имя — готово к дороге.",
    "sec.4t": "Импорт продуктов и напитков", "sec.4d": "Импорт продуктов и напитков по стандарту: нормы, холодовая цепь, дистрибуция.",
    "sec.5t": "Поиск и логистика", "sec.5d": "Находим нужного поставщика, бронируем перевозку и доставляем груз вовремя.",
    "sec.6t": "Склады и дистрибуция", "sec.6d": "Склад у порта, затем доставка до последней двери.",

    "veh.eyebrow": "Импорт люксовых авто",
    "veh.ta": "Люксовые авто,", "veh.tb": "импорт с точностью",
    "veh.lede": "Личное профессиональное сопровождение — от поиска модели до доставки в Израиле, с полной конфиденциальностью.",
    "veh.1t": "Поиск и проверка", "veh.1d": "Находим нужную модель и проверяем состояние и историю до любых обязательств.",
    "veh.2t": "Застрахованная перевозка", "veh.2d": "Море или суша, с полной страховкой и отслеживанием до порта.",
    "veh.3t": "Таможня и регистрация", "veh.3d": "Пошлины, растаможка и регистрация автомобиля в Израиле — под ключ.",
    "veh.4t": "Доставка клиенту", "veh.4d": "Автомобиль приезжает готовым к поездке, туда, куда нужно.",
    "veh.note": "Полное персональное сопровождение — от первой проверки до передачи ключей. Вы выбираете авто; всё остальное делаем мы.",
    "veh.cta": "Организовать личный импорт авто",
    "veh.c1": "Седаны и внедорожники", "veh.c2": "Спорткары", "veh.c3": "Электромобили", "veh.c4": "Классика и коллекционные",

    "scale.eyebrow": "Инфраструктура и возможности",
    "scale.t": "Порт, таможня и склад — всё у нас, без субподряда.",
    "scale.lede": "Портовые операции, таможня и склады — под одной крышей, чтобы каждая поставка не стояла.",
    "scale.1t": "Портовые операции", "scale.1d": "Ежедневная работа в портах Хайфы и Ашдода — разгрузка, обработка и координация.",
    "scale.2t": "Таможня и брокераж", "scale.2d": "Растаможка, нормы и документы — у нас и полностью прозрачно.",
    "scale.3t": "Склады у порта", "scale.3d": "Склады в Хайфе и Ашдоде — быстрая растаможка и своевременная отправка.",

    "why.eyebrow": "Почему Svergold",
    "why.t": "Одна команда отвечает за всю поставку.",
    "why.lede": "Торговля рушится на стыках. У нас всё в одних руках: поставщик, сделка, фрахт, таможня, склад. Одна команда отвечает, один номер для звонка.",
    "why.asideT": "От завода до вашей двери, ничто не проходит без нашего контроля.",
    "why.1t": "Проверенная глобальная сеть поставщиков", "why.1d": "Проверенные поставщики под ваши требования и бюджет. Короткий список, а не справочник.",
    "why.2t": "Один стол, все этапы", "why.2d": "Единая точка ответственности: поиск, сделка, фрахт, доставка.",
    "why.3t": "Свой склад у порта", "why.3d": "Склады рядом с Хайфой и Ашдодом. Быстрее растаможка, быстрее отправка.",
    "why.4t": "Ведут трейдеры", "why.4d": "Переговоры, нормы и риски ведут люди, которые торгуют каждый день.",

    "jr.eyebrow": "Путь Svergold",
    "jr.t": "Шесть станций. Ноль мест, где что-то теряется.",
    "jr.lede": "Каждая поставка проходит шесть станций. Прокрутите, чтобы пройти путь контейнера от запроса до вашего склада.",
    "jr.now": "Загрузка",
    "jr.1e": "Станция 01", "jr.1t": "Анализ потребностей", "jr.1d": "Фиксируем спецификацию, объёмы, сроки и бюджет, чтобы найти нужное с первого раза.", "jr.1c": "Бриф согласован",
    "jr.2e": "Станция 02", "jr.2t": "Поиск поставщиков", "jr.2d": "Находим, проверяем и отбираем поставщиков, которые реально поставят.", "jr.2c": "Шорт-лист готов",
    "jr.3e": "Станция 03", "jr.3t": "Ведение сделки", "jr.3d": "Цена, условия, контракт и нормы, в вашу пользу и подписано.", "jr.3c": "Сделка закрыта",
    "jr.4e": "Станция 04", "jr.4t": "Перевозка и логистика", "jr.4d": "Фрахт оформлен и ведётся по морю и суше, с отслеживанием всю дорогу.", "jr.4c": "Груз в пути",
    "jr.5e": "Станция 05", "jr.5t": "Хранение и склад", "jr.5d": "Товар приходит на наши склады у портов Хайфы и Ашдода.", "jr.5c": "На складе у порта",
    "jr.6e": "Станция 06", "jr.6t": "Доставка клиенту", "jr.6d": "От двери до двери. Груз приходит точно туда, куда нужно.", "jr.6c": "Доставлено",

    "svc.eyebrow": "Услуги",
    "svc.t": "Берите один этап. Или передайте всю цепочку.",
    "svc.lede": "Подключите нас на один шаг или передайте весь импорт от завода до вашего цеха.",
    "svc.1t": "Международный поиск поставщиков", "svc.1d": "Поиск, проверка и квалификация поставщиков по миру, включая проверки, которые часто пропускают.",
    "svc.2t": "Управление импортом", "svc.2d": "Таможня, нормы, документы и растаможка. Делаем сами, а не пересылаем дальше.",
    "svc.3t": "Маркетинг и дистрибуция", "svc.3d": "Выводим импортный товар на полки и в каналы сбыта.",
    "svc.4t": "Логистика и хранение", "svc.4d": "Организация перевозок и хранение у порта.",
    "svc.5t": "Поддержка сделок", "svc.5d": "Переговоры, контракты и риски, на вашей стороне стола.",
    "svc.6t": "Доставка от двери до двери", "svc.6d": "Одна чистая линия от ворот поставщика до вашего цеха.",

    "loc.eyebrow": "Адреса",
    "loc.t": "Построены вокруг Хайфы и Ашдода.",
    "loc.lede": "Головной офис в Хайфе, склады у двух самых загруженных портов страны, чтобы груз растаможивался и шёл без объездов.",
    "loc.1tag": "Головной офис", "loc.1t": "Хайфа", "loc.1d": "бул. Гистадрут 47, Хайфа",
    "loc.2tag": "Склад", "loc.2t": "Порт Хайфа", "loc.2d": "Склад в минутах от порта Хайфы.",
    "loc.3tag": "Склад", "loc.3t": "Порт Ашдод", "loc.3d": "Склад в минутах от порта Ашдода.",

    "ct.eyebrow": "Контакты",
    "ct.t": "Расскажите, что нужно импортировать.",
    "ct.lede": "Оставьте пару деталей, и трейдер вернётся с прямым ответом по цене, срокам и целесообразности.",
    "ct.human": "Общайтесь напрямую с Асафом Голдшмидтом",
    "ct.resppromise": "Ответим в течение одного рабочего дня.",
    "ct.wacta": "Напишите нам в WhatsApp",
    "ct.ownerRole": "Основатель · Svergold",
    "ct.license": "Лицензированный таможенный брокер · Лицензия № —",
    "ct.privacy": "Отправляя форму, вы соглашаетесь, что мы свяжемся с вами по телефону или в WhatsApp. Ваши данные не передаются третьим лицам.",
    "ct.phone": "Телефон", "ct.phonev": "+972 50-882-8800",
    "ct.wa": "WhatsApp", "ct.wav": "Напишите нашей команде",
    "ct.email": "Эл. почта", "ct.emailv": "Asaf@svergold.co.il",
    "ct.fname": "Имя", "ct.fnameph": "Ваше имя",
    "ct.fcompany": "Компания", "ct.fcompanyph": "Компания (необязательно)",
    "ct.femail": "Эл. почта", "ct.femailph": "you@company.com",
    "ct.fphone": "Телефон / WhatsApp", "ct.fphoneph": "+972 ...",
    "ct.fsector": "Сфера интереса",
    "ct.sector1": "Бентонит / буровые материалы",
    "ct.sector2": "Полимеры и минералы",
    "ct.sector3": "Авто класса люкс",
    "ct.sector4": "Продукты и напитки",
    "ct.sector5": "Общий запрос по импорту",
    "ct.fmsg": "Что хотите импортировать? (необязательно)", "ct.fmsgph": "Товар, объём, целевая цена, сроки. Всё, что есть.",
    "ct.submit": "Отправить через WhatsApp",
    "ct.err.name": "Введите имя", "ct.err.email": "Введите корректный email", "ct.err.msg": "Добавьте короткое сообщение",
    "ct.err.contact": "Оставьте телефон или email, чтобы мы могли ответить",
    "ct.okT": "Открываем WhatsApp…", "ct.okD": "Мы подготовили сообщение в WhatsApp с вашими данными — просто нажмите отправить. Ответим в течение рабочего дня.",

    "ft.tag": "Поиск, импорт и доставка. Международная торговля одной командой.",
    "ft.explore": "Навигация", "ft.company": "Компания", "ft.reach": "Связь",
    "ft.rights": "Все права защищены.", "ft.built": "Svergold Import & Marketing LTD",
    "fab.call": "Позвонить", "fab.wa": "WhatsApp",

    "trust.eyebrow": "Почему нам доверяют",
    "trust.1": "Штаб-квартира в Хайфе",
    "trust.2": "Работаем с портами Хайфы и Ашдода",
    "trust.3": "Сопровождение под ключ",
    "trust.4": "Поставщик, фрахт, таможня, склад и доставка — под одним адресом",

    "jr.cta": "Всё начинается с одного обращения",
    "map.haifa": "Хайфа", "map.ashdod": "Ашдод", "map.sea": "Средиземное море",
    "wa.greeting": "Здравствуйте, я с сайта Svergold и хочу узнать об импорте."
  }
};

const LANGS = ["he", "en", "ru"];
const RTL_LANGS = ["he"];

function applyLang(lang) {
  if (!I18N[lang]) lang = "he";
  const dict = I18N[lang];
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", RTL_LANGS.includes(lang) ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph");
    if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const k = el.getAttribute("data-i18n-aria");
    if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
  });
  // ship slot placeholders
  document.querySelectorAll("image-slot").forEach(s => {
    if (dict["ship.ph"]) s.setAttribute("placeholder", dict["ship.ph"]);
  });

  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  try { localStorage.setItem("svergold-lang", lang); } catch (e) {}
  document.dispatchEvent(new CustomEvent("svergold:langchange", { detail: { lang } }));
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("svergold-theme", theme); } catch (e) {}
}

(function initPrefs() {
  let lang = null, theme = null;
  try { lang = localStorage.getItem("svergold-lang"); } catch (e) {}
  try { theme = localStorage.getItem("svergold-theme"); } catch (e) {}
  if (!LANGS.includes(lang)) lang = "he"; // default: Hebrew
  if (theme !== "dark" && theme !== "light") {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  // set immediately (pre-DOM where possible)
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", RTL_LANGS.includes(lang) ? "rtl" : "ltr");
  window.__svergold = { lang, theme };
})();
