import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שירותים - ייעוץ עסקי ותודעתי | אורלי רו״ח",
  description:
    "ייעוץ עסקי מותאם אישית, ליווי פיננסי ותודעה עסקית לבעלי עסקים ושירותים. שירותים מקצועיים עם גישה אנושית.",
  keywords: [
    "שירותים",
    "ייעוץ עסקי",
    "ליווי פיננסי",
    "תודעה עסקית",
    "יועצת עסקית",
    "רו״ח",
    "קואצ׳ינג עסקי",
  ],
  openGraph: {
    title: "שירותים - ייעוץ עסקי ותודעתי | אורלי רו״ח",
    description:
      "ייעוץ עסקי מותאם אישית, ליווי פיננסי ותודעה עסקית לבעלי עסקים ושירותים",
    type: "website",
    locale: "he_IL",
    siteName: "Orly Advisory",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "קואצ'ינג לחופש כלכלי",
            description:
              "קואצ'ינג לחופש כלכלי אמיתי, ליווי תודעתי ופיננסי לאנשים שרוצים לחיות את החיים שחלמו עליהם",
            provider: {
              "@type": "Person",
              name: "אורלי",
              jobTitle: "יועצת עסקית תודעתית ורו״ח",
            },
            serviceType: "ייעוץ עסקי",
            areaServed: "ישראל",
          }),
        }}
      />
      <main id="main" className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--ink)] mb-6">
                השירותים שלי
              </h1>
              <p className="text-xl md:text-2xl text-[var(--ink)] leading-relaxed max-w-3xl mx-auto">
                סינרגיה עסקית לחופש כלכלי – כי כסף הוא רק השתקפות של תודעה מנוהלת היטב
              </p>
            </div>
          </div>
        </section>

        {/* Service 1 - MRI */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="card p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl font-bold text-[var(--primary)]">1</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)] mb-4">
                      סריקת MRI תודעתית-עסקית
                    </h2>
                    <p className="text-lg text-[var(--ink-light)] mb-6">
                      (Mindset · Reality · Income)
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                  <p className="font-semibold">
                    השירות הראשון והמרכזי שלי — נקודת הפתיחה לכל תהליך.
                  </p>

                  <p>
                    זו סריקה אישית ומעמיקה שמטרתה למפות את כל הרבדים של המערכת שלך:
                    התודעה, ההתנהלות העסקית, התמחור, הערך העצמי, התזרים והחזון.
                  </p>

                  <p>
                    לאחר מילוי השאלון האישי, אני מפענחת את הסריקה בשיחה ממוקדת של כ־75 דקות,
                    בה את מקבלת מפת כסף אישית וצעדים מדויקים לשינוי מיידי.
                  </p>

                  <div className="bg-[var(--paper)] p-6 rounded-lg mt-6">
                    <p className="font-semibold mb-2">עלות: ₪888</p>
                    <p className="mb-4">מבנה השירות: תשלום → שאלון אישי → פגישה לפענוח MRI</p>
                  </div>

                  <p className="text-[var(--ink-light)] mt-4">
                    מתאים לעצמאים, מטפלים, מאמנים ובעלי עסקים שרוצים לראות את האמת במראה – 
                    בלי פילטרים, אבל עם דרך פעולה ברורה.
                  </p>
                </div>

                <div className="mt-8">
                  <a href="/payment/mri" className="btn btn-primary text-lg px-8 py-4">
                    אני רוצה את סריקת ה־MRI שלי (₪888) →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2 - Core Process */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="card p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl font-bold text-[var(--primary)]">2</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)]">
                      תהליך הליבה – סינרגיה עסקית לחופש כלכלי
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                  <p>
                    תהליך ליווי אישי של 8–12 מפגשים,
                    שבו אנחנו בונות יחד מערכת עסקית תודעתית שמייצרת חופש אמיתי —
                    במחשבה, בבנק ובחיים עצמם.
                  </p>

                  <div className="mt-6">
                    <p className="font-semibold mb-4">מה כולל התהליך:</p>
                    <ul className="space-y-3 mr-6">
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>
                          <strong>יישור תדר עסקי</strong> – ניקוי חסמים רגשיים סביב כסף, ערך והשוואה.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>
                          <strong>מודל רווח מותאם אישית</strong> – תמחור, תזרים ומבנה שירותים נכון לעסק שלך.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>
                          <strong>ניהול אנרגיה עסקית</strong> – בניית לו״ז, תפעול ושיווק בתדר שמזין אותך, לא שוחק אותך.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>
                          <strong>חיבור לייעוד</strong> – הגדרה מדויקת של מה באת לתת לעולם, ואיך להפוך את זה למקור הכנסה.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[var(--paper)] p-6 rounded-lg mt-6">
                    <p>
                      זה לא "עוד ליווי עסקי".<br/>
                      זה תהליך של יישום תודעה הלכה למעשה –
                      עם תוצאות שנמדדות גם בכסף וגם בשקט פנימי.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/contact" className="btn btn-primary text-lg px-8 py-4">
                    אני רוצה לשמוע עוד על התהליך →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3 - Financial Guidance */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="card p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl font-bold text-[var(--primary)]">3</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)]">
                      ליווי פיננסי לעצמאים בהתפתחות
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                  <p>
                    שירות ייחודי לעצמאים שנמצאים בצמיחה מהירה,
                    ומבקשים שליטה פיננסית מדויקת לצד התפתחות עסקית ותודעתית.
                  </p>

                  <div className="mt-6">
                    <p className="font-semibold mb-4">מה כולל השירות:</p>
                    <ul className="space-y-3 mr-6">
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>ניהול תזרים ותכנון מס חכם.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>בניית רווח גולמי ונקי לפי מטרות אישיות.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>ליווי בהצעות מחיר, הצהרות הון ודוחות שנתיים.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>התאמה בין מבנה העסק למבנה החיים.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg mt-6">
                    <p className="font-semibold">
                      השירות הזה נולד כי כסף לא צריך להלחיץ – הוא צריך לשרת אותך.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/contact" className="btn btn-primary text-lg px-8 py-4">
                    אני רוצה ליווי פיננסי →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4 - Focused Sessions */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="card p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl font-bold text-[var(--primary)]">4</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)]">
                      מפגשי דיוק ממוקדים / התייעצות נקודתית
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                  <p>
                    למי שכבר עברה תהליך ומרגישה תקועה בנושא אחד:
                    תמחור, שיווק, ניהול, תזרים, הצעת ערך או חסם תודעתי נקודתי.
                  </p>

                  <p>
                    פגישה חד־פעמית (90 דק׳) ממוקדת פתרון.
                  </p>

                  <div className="bg-[var(--paper)] p-6 rounded-lg mt-6">
                    <p className="font-semibold">
                      מפגש חד, ישיר, בלי סיפורים – עם תשובה מדויקת וצעדים ברורים להמשך.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/contact" className="btn btn-primary text-lg px-8 py-4">
                    אני רוצה מפגש ממוקד →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 5 - Lectures & Workshops */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="card p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl font-bold text-[var(--primary)]">5</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)]">
                      הרצאות וסדנאות לארגונים וקהילות
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                  <p>
                    אני מעבירה הרצאות וסדנאות שמשלבות ידע פיננסי, תודעה וכלים מעשיים לניהול עצמי וכלכלי.
                    מתאים לארגונים, קהילות ועסקים שמעוניינים לעורר השראה מתוך פרקטיקה.
                  </p>

                  <div className="mt-6">
                    <p className="font-semibold mb-4">נושאים פופולריים:</p>
                    <ul className="space-y-3 mr-6">
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>"תודעת שפע בעולם של מספרים"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>"איך לנהל כסף ואנרגיה באותו תדר"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--primary)] mt-1">•</span>
                        <span>"מה בין צמיחה עסקית להתפתחות אישית"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg mt-6">
                    <p>
                      כל הרצאה נתפרת בהתאמה אישית לקהל ולמטרה.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/contact" className="btn btn-primary text-lg px-8 py-4">
                    אני רוצה הרצאה או סדנה →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  למה לעבוד איתי
                </h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--primary)] mt-1">•</span>
                      <span>כי אני רואה גם את המספרים וגם את האנרגיה שמפעילה אותם.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--primary)] mt-1">•</span>
                      <span>כי אני לא מאמינה בקיצורי דרך – אלא בדיוק.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--primary)] mt-1">•</span>
                      <span>כי אני לא מלמדת תיאוריה – אני חיה אותה.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--primary)] mt-1">•</span>
                      <span>וכי השפע שאת מבקשת — כבר שלך. אני פשוט עוזרת לך לראות את הדרך לשם.</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-12">
                  <a href="/payment/mri" className="btn btn-primary text-lg px-8 py-4">
                    אני רוצה את סריקת ה־MRI שלי (₪888) →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
