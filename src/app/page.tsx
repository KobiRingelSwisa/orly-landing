"use client";

import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "אורלי - יועצת עסקית תודעתית ורואת חשבון",
            description:
              "יועצת עסקית ורואת חשבון עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים",
            url: "https://orly-consulting.com",
            logo: "https://orly-consulting.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+972-XX-XXXXXXX", // TODO: Fill with actual phone number
              contactType: "customer service",
              availableLanguage: "Hebrew",
            },
          }),
        }}
      />
      <main id="main" className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section id="hero" className="section-y">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                <span className="gradient-text">
                  בואו נדבר בכנות – המספרים והבירוקרטיה הורסים לך את השינה,
                  נכון?
                </span>
              </h1>

              <div className="text-[18px] leading-8 text-[var(--ink)] mb-8 space-y-6">
                <p>
                  היי, אני אורלי. קאוצ'רית בנשמה ויועצת עסקית תודעתית עם 20 שנות ניסיון, אבל
                  לא מהסוג שאתה חושב.
                </p>
                <p>
                  אני יודעת בדיוק מה אתה מרגיש כשאתה עובד כל כך קשה אבל לא רואה נחת, כשאתה מביט
                  בחשבון הבנק ורואה מינוס למרות כל העבודה הקשה, או כשאתה שוכב בלילה וחושב "למה
                  אין לי זמן לעצמי? למה אני לא יכול להיות עם הילדים? למה אני לא מצליח לצאת לחופש כלכלי?"
                </p>
                <p>
                  אני כאן כי למדתי שהבעיה לא במספרים – הבעיה היא שאף אחד לא
                  הסביר לך איך לחשוב על כסף ועל חיים של חופש. אני כאן כי
                  אני יודעת איך לחבר בין הידע הפיננסי שלי לבין הכלים התודעתיים שמובילים לחופש אמיתי.
                </p>
                <p>
                  המטרה שלי? פשוטה – לעזור לך לצאת לחופש כלכלי אמיתי. להיות עם הילדים שלך. 
                  להפסיק לעבוד כל כך קשה בלי לראות תוצאות. ולחיות את החיים שחלמת עליהם – עם זמן לעצמך, 
                  למשפחה ולחברים. כל זה תוך כדי שאתה ממקסם רווחים בפחות מאמץ.
                </p>
              </div>

              <div className="mb-8">
                <a href="#contact" className="btn btn-primary">
                  בואו נתחיל לדבר – קבעו שיחת ייעוץ
                </a>
              </div>

              <div className="text-sm text-[var(--ink)] opacity-70">
                <span>20+ שנות ניסיון</span>
                <span className="mx-2">•</span>
                <span>מאות בעלי עסקים שכבר נושמים לרווחה</span>
                <span className="mx-2">•</span>
                <span>אפס שיפוטיות, הרבה הבנה</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pain → Solution Stories */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-4">
                אני יודעת מה אתה עובר – בואו נדבר על זה בכנות
              </h2>
              <p className="text-[18px] text-[var(--ink)] opacity-70">
                כל אחד מהסיפורים האלה הוא של מישהו אמיתי שאני עבדתי איתו. אולי
                אתה תתחבר לאחד מהם?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-4">
                    הסיפור של דנה – הניירת שהורגת אותי
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "דנה הגיעה אליי אחרי שהיא קיבלה מכתב מהמס. היא ישבה במשרד
                    שלי ובכתה. 'אני מפחדת לפתוח את המכתבים', היא אמרה לי. 'כל
                    פעם שאני רואה מעטפה של רשות המסים, הלב שלי עוצר. אני לא
                    מבינה כלום במספרים האלה, ואני מרגישה כמו אידיוט.'"
                  </p>
                  <p className="text-[var(--ink)] mb-4">
                    "דנה, מטפלת מוכשרת, הייתה כל כך טובה בעבודה שלה אבל
                    הבירוקרטיה חיסלה לה את הביטחון. הניירת הצטברה, המכתבים לא
                    נענו, והיא התחילה לפחד שכל יום יבוא מישהו לדלת."
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-4">
                    איך אני עזרתי לה:
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "לקחתי את כל הניירת שלה, עשיתי סדר, וייצגתי אותה מול
                    הרשויות. אבל החלק החשוב באמת? הסברתי לה בדיוק מה קורה בכל
                    שלב. עכשיו היא יודעת מה המספרים אומרים, והיא לא מפחדת יותר."
                  </p>
                  <p className="text-[var(--ink)] font-semibold">
                    "היום דנה ישנה טוב בלילה. הניירת מטופלת, והיא מבינה מה קורה
                    עם הכסף שלה."
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-4">
                    הסיפור של רונן – הכסף הזה מפחיד אותי
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "רונן, יועץ עסקי מצוין, הגיע אליי אחרי שנתיים של עבודה קשה.
                    'אני לא מבין', הוא אמר, 'אני עובד כל כך קשה, אבל אני לא יודע
                    איפה אני עומד. הכסף נכנס ויוצא, ואני מרגיש כמו בסרט נע. אני
                    לא יודע אם אני מרוויח או מפסיד.'"
                  </p>
                  <p className="text-[var(--ink)] mb-4">
                    "רונן היה מבולבל לגמרי. הוא היה טוב במה שהוא עושה, אבל הכסף
                    הפך להיות משהו מפחיד ומסתורי. הוא לא ידע איך לתמחר, איך
                    לעקוב, ואיך להבין אם העסק שלו באמת עובד."
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-4">
                    איך אני עזרתי לו:
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "בניתי לו מערכת פשוטה לעקוב אחרי הכסף. הסברתי לו בדיוק מה כל
                    מספר אומר, איך לתמחר נכון, ואיך להבין אם העסק שלו צומח.
                    עכשיו הוא יודע בדיוק איפה הוא עומד."
                  </p>
                  <p className="text-[var(--ink)] font-semibold">
                    "היום רונן יודע בדיוק כמה הוא מרוויח, איך העסק שלו מתקדם,
                    והוא לא מפחד יותר מהמספרים."
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-4">
                    הסיפור של מירי – כסף לא בשבילי
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "מירי, מאמנת מוכשרת, הגיעה אליי אחרי שנתיים של קושי להרוויח.
                    'אני יודעת שאני טובה', היא אמרה, 'אבל עמוק בפנים אני מרגישה
                    שכסף לא בשבילי. כמו שאני לא ראויה להרוויח יותר. זה נשמע
                    מטופש, אבל זה מה שאני מרגישה.'"
                  </p>
                  <p className="text-[var(--ink)] mb-4">
                    "מירי הייתה תקועה. היא הייתה מוכשרת, לקוחות אהבו אותה, אבל
                    היא לא הצליחה לתמחר נכון, לא ביקשה תשלום בזמן, ולא האמינה
                    שהיא ראויה להרוויח יותר. האמונות שלה על כסף חוסמות אותה."
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-4">
                    איך אני עזרתי לה:
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "עבדנו יחד על האמונות שלה על כסף. גילינו איפה זה התחיל, איך
                    זה משפיע על ההחלטות שלה, ובנינו יחד מערכת יחסים חדשה עם כסף.
                    עכשיו היא מבינה שהיא ראויה להרוויח מה שהיא שווה."
                  </p>
                  <p className="text-[var(--ink)] font-semibold">
                    "היום מירי מרוויחה פי שניים ממה שהרוויחה קודם, והיא לא
                    מרגישה אשמה על זה."
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-4">
                    הסיפור של יוסי – עובד קשה אבל תקוע
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "יוסי, עורך דין מוכשר, הגיע אליי אחרי 5 שנים של עבודה קשה.
                    'אני עובד 12 שעות ביום', הוא אמר, 'אבל אני מרגיש שאני רץ
                    במקום. הכנסה שלי לא גדלה, אני לא יודע איך לצמוח, ואני מתחיל
                    לאבד תקווה.'"
                  </p>
                  <p className="text-[var(--ink)] mb-4">
                    "יוסי היה מתוסכל. הוא עבד קשה, היה מקצועי, אבל העסק שלו לא
                    צמח. הוא לא ידע איך לחבר בין העבודה הקשה שלו לבין התוצאות
                    שהוא רצה. הוא הרגיש שהוא עובד נגד עצמו."
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-4">
                    איך אני עזרתי לו:
                  </h3>
                  <p className="text-[var(--ink)] mb-4">
                    "עבדנו על החיבור בין המספרים לתודעה. גילינו איפה הוא חוסם את
                    עצמו, איך הוא יכול לעבוד פחות ולהרוויח יותר, ובנינו תוכנית
                    צמיחה שמתאימה לו. עכשיו הוא יודע איך להפוך את העבודה הקשה
                    שלו לתוצאות."
                  </p>
                  <p className="text-[var(--ink)] font-semibold">
                    "היום יוסי עובד פחות שעות, מרוויח יותר, והוא רואה איך העסק
                    שלו צומח כל חודש."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[18px] text-[var(--ink)] mb-6">
                איזה מהסיפורים האלה נשמע לך מוכר? אם אחד מהם דיבר אליך, בואו
                נדבר.
              </p>
              <a href="#contact" className="btn btn-primary">
                אני רוצה לספר לך את הסיפור שלי
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-y">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              בואו נכיר – אני אורלי, והסיפור שלי מתחיל בדיוק איפה שלך נגמר
            </h2>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  מי אני, ולמה אני כאן
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  היי, אני אורלי. יועצת עסקית ורואת חשבון עם 20 שנות ניסיון, אבל
                  לא מהסוג הרגיל שאתה מכיר. אני כאן כי למדתי שהבעיה לא במספרים –
                  הבעיה היא שאף אחד לא הסביר לך איך לחשוב על כסף בלי להרגיש כמו
                  אידיוט.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  התחלתי את הדרך שלי כמו כל יועצת עסקית ורואת חשבון רגיל – עם
                  המספרים, הדוחות, והבירוקרטיה. אבל מהר מאוד הבנתי שיש משהו חסר.
                  הלקוחות שלי היו מבולבלים, מפוחדים, ולא הבינו מה קורה עם הכסף
                  שלהם. הם היו טובים במה שהם עושים, אבל הכסף הפך להיות משהו
                  מפחיד ומסתורי.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  אז התחלתי לחפש פתרון. למדתי אימון עסקי, פסיכולוגיה של כסף,
                  ואיך האמונות שלנו משפיעות על ההחלטות הפיננסיות שלנו. היום אני
                  יודעת איך לחבר בין הסדר הפיננסי שצריך לבין התודעה שמונעת ממך
                  להצליח באמת.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  מה הופך את העבודה שלי לשונה
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני לא מדברת אליך מלמעלה. אני לא אשתמש במונחים מקצועיים
                  מורכבים שאתה לא מבין. אני לא אגיד לך "פשוט תהיה יותר מאורגן"
                  או "פשוט תעבוד יותר קשה". אני יודעת שזה לא עובד.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני מדברת איתך כמו חברה טובה שמבינה מה אתה עובר. אני מסבירה
                  הכל בפשטות, עם דוגמאות מהחיים, עם הומור, ועם הרבה סבלנות. אני
                  יודעת שכשאתה מבין מה קורה, אתה יכול לקבל החלטות נכונות.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  השילוב בין אימון לכסף מאפשר לי לראות את התמונה המלאה – גם את
                  המספרים וגם את האמונות והפחדים שמשפיעים על ההחלטות שלך. אני לא
                  רק אסדר לך את הניירת, אני אעזור לך להבין איך לחשוב על כסף
                  בצורה שמקדמת אותך במקום לחסום אותך.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  איך נראה שיתוף הפעולה שלנו
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אנחנו מתחילים בשיחה. לא בירוקרטיה, לא בטפסים, לא במונחים
                  מקצועיים. בשיחה. אני רוצה לשמוע את הסיפור שלך – איפה אתה נמצא,
                  מה חוסם אותך מלחיות את החיים שחלמת עליהם, מה מונע ממך לצאת לחופש כלכלי,
                  ומה אתה באמת רוצה להשיג בחיים שלך.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  יחד נבנה תוכנית פעולה שמשלבת את הידע הפיננסי שלי עם הכלים התודעתיים 
                  שמובילים לחופש אמיתי. אני לא אדחוף עליך פתרונות שלא מתאימים לך. 
                  אני אקשיב, אבין, ואציע פתרונות שמתאימים בדיוק למצב שלך ולחלומות שלך.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  המטרה שלי היא לעזור לך לצאת לחופש כלכלי אמיתי – לחיות את החיים שחלמת עליהם,
                  עם זמן לעצמך, למשפחה ולחברים. ביחד נפתח תודעה שמקדמת חופש אמיתי ועצמאות כלכלית.
                  ואתה תדע בדיוק איך להגיע לשם.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[18px] text-[var(--ink)] mb-6">
                נשמע לך כמו משהו שאתה רוצה לנסות? בואו נתחיל לדבר.
              </p>
              <a href="#contact" className="btn btn-primary">
                אני רוצה להכיר אותך יותר טוב
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              איך אני יכולה לעזור לך? בואו נדבר על זה
            </h2>

            <div className="space-y-12">
              {/* שיחת מיקוד והכוונה - Main service */}
              <div className="card p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--ink)]">
                  שיחת מיקוד – בואו נגלה מה באמת מונע ממך לצאת לחופש כלכלי
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני פוגשת הרבה אנשים שמרגישים אבודים. הם עובדים כל כך קשה אבל לא רואים נחת,
                  הם רוצים יותר זמן עם הילדים, יותר זמן לעצמם, אבל לא יודעים איך להגיע לשם.
                  הם יודעים שהם טובים במה שהם עושים, אבל משהו לא עובד.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  בשיחה ממוקדת של שעה אנחנו עושים סדר. אני אקשיב לסיפור שלך,
                  אבין איפה אתה נמצא, ואז יחד נגלה מה באמת מונע ממך לצאת לחופש כלכלי. האם זה
                  הפחד מכסף? האמונות שחוסמות אותך? חוסר בהירות על הייעוד שלך? או משהו אחר לגמרי?
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אתה יוצא מהשיחה עם בהירות מלאה על המצב הנוכחי, הבנה של מה מונע ממך
                  לצאת לחופש כלכלי, ותוכנית פעולה פשוטה וברורה לצעד הבא. לא בירוקרטיה, לא
                  מונחים מורכבים – רק בהירות ותוכנית שמובילה אותך לחופש אמיתי.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] font-semibold mb-6">
                  זה מתאים לך אם: אתה עובד קשה אבל לא רואה נחת, רוצה יותר זמן עם הילדים,
                  או מרגיש שחסר לך משהו בחיים אבל לא בטוח מה.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="/services/focus" className="btn btn-primary">
                    אני רוצה שיחת מיקוד - ₪500
                  </a>
                </div>
              </div>

              {/* תהליך 4 מפגשים - Main service */}
              <div className="card p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--ink)]">
                  תהליך עומק – 4 מפגשים לחופש כלכלי אמיתי
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  יש אנשים שמרגישים שהם עובדים קשה אבל לא באמת מגיעים למקום שהם רוצים להיות בו.
                  הם יודעים שהם רוצים יותר זמן עם הילדים, יותר זמן לעצמם, אבל לא יודעים איך
                  להגיע לשם. הם לא יודעים איך לבנות חיים של חופש כלכלי אמיתי.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  בתהליך של ארבעה מפגשים אני מלווה אותך צעד־צעד לגלות מה באמת
                  חשוב לך. איזה אמונות על כסף וחיים עוצרות אותך? איך אתה יכול
                  לבנות חיים של חופש כלכלי אמיתי? מה באמת מניע אותך, ומה מונע
                  ממך להגיע לחיים שחלמת עליהם?
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  ביחד נבנה בהירות, כיוון ותוכנית שתאפשר לך לחיות חיים של חופש כלכלי אמיתי.
                  לא רק להרוויח כסף, אלא לחיות את החיים שחלמת עליהם – עם זמן לעצמך,
                  למשפחה ולחברים. חיים שמרגישים נכון ומקדמים אותך למקום שאתה באמת רוצה להיות בו.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] font-semibold mb-6">
                  זה מתאים לך אם: אתה רוצה לצאת לחופש כלכלי אמיתי, רוצה יותר זמן עם הילדים,
                  או מרגיש שאתה לא מגיע למקום שאתה רוצה להיות בו בחיים.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="/services/four" className="btn btn-primary">
                    אני רוצה להתחיל תהליך 4 מפגשים - ₪2,500
                  </a>
                </div>
              </div>

              {/* שירותי ייצוג - Secondary service */}
              <div className="card p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[var(--ink)]">
                  ליווי כולל לחופש כלכלי – אני כאן לכל מה שאתה צריך
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני יודעת כמה מתסכל זה להתמודד עם כל מה שקשור לכסף ולעסק. המכתבים שלא
                  נגמרים, הטפסים שלא מבינים, הבירוקרטיה שגוזלת זמן ואנרגיה. אתה
                  יודע שאתה צריך לטפל בזה, אבל כל פעם שאתה מביט בזה, הלב
                  שלך עוצר.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  במקום שתבזבז שעות ותלחץ מכל דבר שקשור לכסף, אני כאן כדי ללוות אותך
                  בכל מה שאתה צריך. אני אטפל בכל הניירת, אדאג שכל מה שצריך יטופל בזמן
                  ובצורה מסודרת, ואסביר לך בדיוק מה קורה בכל שלב. אבל יותר חשוב מזה –
                  אני אעזור לך להתמודד עם הפחדים והאמונות שחוסמות אותך.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  ככה אתה יכול להיות רגוע, לשים את הפוקוס שלך איפה שבאמת חשוב –
                  על החיים שחלמת עליהם – ולדעת שכל מה שקשור לכסף מטופל על ידי מישהו שמבין בזה
                  ויודע מה הוא עושה, ושהוא גם מלווה אותך בדרך לחופש כלכלי אמיתי.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)] font-semibold mb-6">
                  זה מתאים לך אם: כל מה שקשור לכסף מפחיד אותך, אתה רוצה לצאת לחופש כלכלי אבל לא יודע איך,
                  או רוצה שמישהו אחר יטפל בכל זה בשבילך וילווה אותך בדרך לחופש אמיתי.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="/services/represent" className="btn btn-primary">
                    אני רוצה שאורלי תייצג אותי - ₪1,200
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[18px] text-[var(--ink)] mb-6">
                לא בטוח איזה שירות מתאים לך? בואו נדבר ונגלה יחד מה הכי נכון
                עבורך.
              </p>
              <a href="#contact" className="btn btn-primary">
                אני רוצה להתייעץ איתך
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-y">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              מה הלקוחות שלי אומרים – סיפורים אמיתיים מהלב
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-8">
                <p className="text-[var(--ink)] mb-6">
                  "אני זוכרת את הרגע שהגעתי לאורלי. ישבתי במשרד שלה ובכתתי. 'אני
                  מפחדת מהמספרים', אמרתי לה, 'אני מרגישה כמו אידיוט'. אורלי לא
                  שפטה אותי, לא הסתכלה עליי מלמעלה. היא פשוט הקשיבה, הסבירה, ועם
                  הזמן הפכה את הפחד שלי לביטחון. היום אני יודעת בדיוק מה קורה עם
                  הכסף שלי, ואני לא מפחדת יותר."
                </p>
                <div className="text-sm text-[var(--rose-1)] font-semibold">
                  — דנה, מטפלת הוליסטית
                </div>
              </div>

              <div className="card p-8">
                <p className="text-[var(--ink)] mb-6">
                  "עבדתי עם אורלי על האמונות שלי על כסף. זה לא היה קל, אבל היא
                  ליוותה אותי באהבה ובסבלנות. 'אתה ראוי להרוויח מה שאתה שווה',
                  היא אמרה לי, ואני לא האמנתי לה. אבל היא הייתה צודקת. היום אני
                  מרוויח פי שניים ממה שהרוויחתי קודם, ואני לא מרגיש אשמה על זה.
                  אורלי לא רק עזרה לי עם הכסף – היא עזרה לי להבין מי אני באמת."
                </p>
                <div className="text-sm text-[var(--rose-1)] font-semibold">
                  — רונן, יועץ עסקי
                </div>
              </div>

              <div className="card p-8">
                <p className="text-[var(--ink)] mb-6">
                  "הרגשתי תקועה. עבדתי קשה, אבל לא ראיתי תוצאות. אורלי עזרה לי
                  להבין שהבעיה לא במספרים – הבעיה הייתה בדרך שבה אני חושבת על
                  העסק שלי. השילוב שלה בין מספרים לתודעה פשוט עבד. היום אני
                  עובדת פחות שעות, מרוויחה יותר, והעסק שלי צומח כל חודש. אורלי
                  לא רק עזרה לי עם הכסף – היא עזרה לי למצוא את הייעוד שלי."
                </p>
                <div className="text-sm text-[var(--rose-1)] font-semibold">
                  — מירי, מאמנת אישית
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[18px] text-[var(--ink)] mb-6">
                נשמע לך מוכר? אם אתה מרגיש כמו אחד מהסיפורים האלה, בואו נדבר.
              </p>
              <a href="#contact" className="btn btn-primary">
                אני רוצה להיות הסיפור הבא שלך
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-y bg-[var(--paper)]">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              שאלות ששואלים אותי הרבה – בואו נדבר על זה בכנות
            </h2>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  מה באמת קורה בשיחה הראשונה? אני קצת חושש...
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  אני מבינה את החשש. הרבה אנשים מגיעים אליי עם פחד – פחד
                  מהשיפוט, פחד שלא יבינו אותם, פחד שהם לא מספיק טובים. בשיחה
                  הראשונה אני רוצה שתדע שאתה במקום בטוח. אני אקשיב לסיפור שלך,
                  לא אשפט אותך, ולא אגיד לך "פשוט תהיה יותר מאורגן". אני רוצה
                  להבין איפה אתה נמצא, מה מפחיד אותך, ומה אתה באמת רוצה להשיג.
                  את/ה יוצא/ת עם בהירות על המצב הנוכחי ועל הצעדים הבאים – לא עם
                  עוד רשימה של דברים לעשות.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  אני מבולבל – זה ייעוץ פיננסי או אימון? מה בדיוק אני אקבל?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  זה שאלה מעולה, ואני מבינה את הבלבול. אני משלבת בין שני התחומים
                  כי למדתי שהבעיה לא רק במספרים – הבעיה גם באמונות ובפחדים
                  שמשפיעים על ההחלטות שלך. אני לא רק אסדר לך את הניירת ואסביר את
                  המספרים, אני גם אעזור לך להבין איך לחשוב על כסף בצורה שמקדמת
                  אותך במקום לחסום אותך. השילוב הזה הוא מה שיוצר תוצאות אמיתיות
                  – לא רק סדר זמני, אלא שינוי אמיתי בדרך שבה אתה מתמודד עם כסף
                  ועסק.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  אני לא יודע אם זה מתאים לי. מי הלקוחות שלך?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  הלקוחות שלי הם אנשים כמוך – בעלי עסקים בתחומי השירות שמרגישים
                  שהם טובים במה שהם עושים אבל משהו לא עובד. מטפלים שמפחדים
                  מהמספרים, מאמנים שלא יודעים איך לתמחר, יועצים שמרגישים תקועים,
                  עורכי דין שמבולבלים מהבירוקרטיה. אם אתה מרגיש תקוע, אם אתה לא
                  בטוח איפה אתה עומד מבחינה פיננסית, אם אתה מפחד מהמספרים או
                  מהרשויות – זה בדיוק בשבילך. אני לא עובדת עם תאגידים גדולים או
                  עם אנשים שכבר הכל מושלם אצלם – אני עובדת עם אנשים כמוך.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  כמה זמן זה לוקח? אני לא רוצה תהליך אינסופי
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  אני מבינה את החשש – אף אחד לא רוצה להיכנס לתהליך שלא נגמר. זה
                  תלוי במה שאנחנו עובדים עליו. יש שיחת מיקוד חד-פעמית של שעה
                  שאמורה לתת לך בהירות ותוכנית פעולה. יש תהליך של 4 מפגשים
                  למציאת הייעוד שלך. יש שירותי ייצוג שהם לפי הצורך. אני לא דוחפת
                  עליך תהליכים מיותרים – רק מה שבאמת עוזר לך. המטרה שלי היא
                  שתרגיש טוב עם הכסף שלך ותדע איך להמשיך לבד, לא שתהיה תלוי בי
                  לנצח.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  אני לא מבין כלום במספרים – זה בסדר?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  זה בסדר לגמרי! למעשה, רוב הלקוחות שלי מגיעים אליי בדיוק בגלל
                  זה. הם מרגישים כמו אידיוטים כשהם מביטים בגיליון אקסל או בדוח
                  כספי. אני כאן כדי לשנות את זה. אני אסביר לך הכל בפשטות, עם
                  דוגמאות מהחיים, בלי מונחים מקצועיים מורכבים. המטרה שלי היא
                  שתבין מה קורה עם הכסף שלך ותרגיש שליטה, לא שתרגיש כמו אידיוט.
                  זה בסדר לא להבין – זה לא בסדר להישאר במצב הזה.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[18px] text-[var(--ink)] mb-6">
                יש לך עוד שאלות? בואו נדבר – אני כאן כדי לענות על כל השאלות שלך.
              </p>
              <a href="#contact" className="btn btn-primary">
                יש לי שאלה נוספת
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-y">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink)]">
                בואו נתחיל לדבר – השאירו פרטים ואני חוזרת אליכם
              </h2>
              <p className="text-[18px] text-[var(--ink)] opacity-70">
                אני יודעת שזה לא קל להגיע לכאן. אני יודעת שאתה אולי חושש, מתלבט,
                או לא בטוח אם זה מתאים לך. זה בסדר. בואו נתחיל בשיחה פשוטה – אני
                אקשיב, אבין, ואעזור לך להבין אם זה נכון עבורך.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="card p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--ink)]">
              בואו נעשה סדר וצמיחה – ביחד
            </h2>
            <p className="text-[18px] text-[var(--ink)] mb-8 max-w-2xl mx-auto">
              אני כאן כדי לעזור לך לישון טוב בלילה, להיות רגוע עם הכסף שלך,
              ולהפסיק לפחד מהרשויות. בואו נתחיל לדבר ונגלה יחד איך אפשר לעשות את
              זה.
            </p>
            <a href="#contact" className="btn btn-primary">
              בואו נתחיל לדבר – קבעו שיחת ייעוץ
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--ink)] text-white py-12">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
              <div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--rose-2)" }}
                >
                  אורלי
                </h3>
                <p className="text-gray-300 mb-2">
                  יועצת עסקית תודעתית ורואת חשבון עם 20+ שנות ניסיון
                </p>
                <p className="text-gray-400">
                  השילוב המושלם בין מקצועיות לתודעה
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">ניווט</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-[var(--rose-2)] transition-colors"
                    >
                      אודות
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-[var(--rose-2)] transition-colors"
                    >
                      שירותים
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-[var(--rose-2)] transition-colors"
                    >
                      יצירת קשר
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="hover:text-[var(--rose-2)] transition-colors"
                    >
                      שאלות נפוצות
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📞 טלפון: [להוסיף]</p>
                  <p>📧 מייל: [להוסיף]</p>
                  <a
                    href="https://wa.me/972XXXXXXXXX"
                    className="text-[var(--rose-2)] hover:opacity-80 transition-colors flex items-center justify-center md:justify-end gap-2 mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-whatsapp"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; 2024 אורלי - יועצת עסקית תודעתית ורואת חשבון. כל הזכויות
                שמורות.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
