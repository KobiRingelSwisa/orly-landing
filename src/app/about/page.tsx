import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות אורלי - יועצת עסקית תודעתית ורו״ח | 20 שנות ניסיון",
  description:
    "יועצת עסקית ורואת חשבון עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים. הכירו את אורלי ואת הגישה הייחודית שלה.",
  keywords: [
    "אודות אורלי",
    "יועצת עסקית",
    "רו״ח",
    "ניסיון",
    "ייעוץ פיננסי",
    "קואצ׳ינג עסקי",
    "תודעה עסקית",
  ],
  openGraph: {
    title: "אודות אורלי - יועצת עסקית תודעתית ורו״ח",
    description:
      "רו״ח עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים",
    type: "website",
    locale: "he_IL",
    siteName: "Orly Advisory",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "אורלי",
            jobTitle: "יועצת עסקית תודעתית ורו״ח",
            description:
              "יועצת עסקית ורואת חשבון עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים",
            url: "https://orly-consulting.com/about",
            knowsAbout: [
              "ייעוץ עסקי",
              "ייעוץ פיננסי",
              "קואצ׳ינג עסקי",
              "תודעה עסקית",
            ],
          }),
        }}
      />
      <main id="main" className="min-h-screen">
        <Header />

        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">
                  קצת עליי
                </h1>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    קוראים לי אורלי בן הרוש, ואני מאמינה ששפע הוא לא מטרה – הוא
                    תוצאה של יישור קו בין תודעה, פעולה ותוצאה פיננסית.
                  </p>

                  <p>
                    אני רואת חשבון כבר למעלה משני עשורים, מלווה עסקים, עצמאים
                    ומטפלים, ומזה כמה שנים גם יועצת תודעתית שמלמדת איך להפוך את
                    הידע הרוחני שלך למערכת עסקית חכמה שמכניסה כסף בשקט ובזרימה.
                  </p>

                  <p>
                    ראיתי אינספור עסקים מצליחים "על הנייר" שקורסים מבפנים,
                    ואנשים עם תודעת שפע ענקית — שמתרגשים מהמילים אבל מפחדים
                    מהמספרים. ושם הבנתי: אין תודעה בלי מבנה, ואין מבנה בלי
                    תודעה.
                  </p>

                  <p className="text-xl font-semibold">
                    רק כששני העולמות נפגשים – נולדת מציאות של חופש אמיתי.
                  </p>

                  <p>
                    היום אני משלבת את שני הקצוות האלה – החישוב הקר והאנרגיה
                    החמה, הניהול והתדר, החזון והביצוע.
                  </p>

                  <p>
                    אני לא באה "ללמד" אותך – אני באה להזכיר לך. איך לחזור לפעול
                    בדרך שלך. איך לדבר עם כסף בלי פחד. ואיך לנהל עסק שלא מתיש
                    אותך – אלא מזין אותך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  מה מבדל אותי
                </h2>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <div>
                    <p className="font-semibold mb-2">
                      • אני רואה את התמונה המלאה.
                    </p>
                    <p className="mb-4">
                      אני סורקת את העסק שלך גם דרך המספרים וגם דרך האנרגיה
                      שמפעילה אותם.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      • אני לא מוכרת מוטיבציה.
                    </p>
                    <p className="mb-4">
                      אני עובדת רק עם אנשים שבאים לזוז – תכל'ס, בשטח, בתוצאות.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      • אני מבינה אותך מבפנים.
                    </p>
                    <p>
                      עברתי בעצמי תקופות של חוסר, בלבול, חיפוש ותקומה. זה לא
                      תיאוריה, זו דרך חיים.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  מה שאני מאמינה בו
                </h2>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    הצלחה אמיתית היא לא תוצאה של מזל – אלא של אדם שחי, פועל
                    ומרגיש בתדר הנכון.
                  </p>

                  <p>
                    וכשאת לומדת לנהל את האנרגיה שלך כמו את התקציב שלך, המציאות
                    שלך מתחילה להגיב אחרת.
                  </p>

                  <p>
                    <a
                      href="/contact"
                      className="btn btn-primary text-lg px-8 py-4 inline-block"
                    >
                      אני רוצה את סריקת ה־MRI שלי (₪888) →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
