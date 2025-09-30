import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שאלות נפוצות - ייעוץ עסקי ותודעתי | אורלי רו״ח",
  description:
    "שאלות נפוצות על ייעוץ עסקי ותודעתי עם אורלי - רו״ח ומאמנת עסקית. תשובות על תהליך הייעוץ, המחירים והתאמה.",
  keywords: [
    "שאלות נפוצות",
    "FAQ",
    "ייעוץ עסקי",
    "יועצת עסקית",
    "רו״ח",
    "תהליך ייעוץ",
  ],
  openGraph: {
    title: "שאלות נפוצות - ייעוץ עסקי ותודעתי | אורלי רו״ח",
    description: "שאלות נפוצות על ייעוץ עסקי ותודעתי עם אורלי",
    type: "website",
    locale: "he_IL",
    siteName: "Orly Advisory",
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "מה קורה בשיחה הראשונה?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "בשיחה הראשונה אנחנו נכיר, אני אבין איפה אתה נמצא מבחינה עסקית ופיננסית, ואנחנו נחליט יחד על הכיוון הנכון עבורך. את/ה יוצא/ת עם בהירות על המצב הנוכחי ועל הצעדים הבאים.",
                },
              },
              {
                "@type": "Question",
                name: "האם יש ליווי רק פיננסי או גם תודעתי?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "אני משלבה בין שני התחומים. סדר פיננסי בלבד לא מספיק – צריך גם לעבוד על התודעה והאמונות שמשפיעות על ההחלטות שלך. השילוב בין מספרים לתודעה הוא מה שיוצר תוצאות אמיתיות.",
                },
              },
              {
                "@type": "Question",
                name: "למי זה מתאים?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "בעיקר לבעלי עסקים בתחומי השירות – מטפלים, מאמנים, יועצים, עורכי דין, רואי חשבון. גם למי שנותן שירותים או מייעץ לאנשים אחרים. אם אתה מרגיש תקוע או לא בטוח איפה אתה עומד מבחינה פיננסית – זה בדיוק בשבילך.",
                },
              },
              {
                "@type": "Question",
                name: "כמה זמן לוקח התהליך?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "זה תלוי במה שאנחנו עובדים עליו. יש שיחת מיקוד חד-פעמית של שעה, ויש תהליך של 4 מפגשים למציאת הייעוד. גם שירותי הייצוג הם לפי הצורך. אני לא דוחפת תהליכים מיותרים – רק מה שבאמת עוזר לך.",
                },
              },
            ],
          }),
        }}
      />
      <main id="main" className="min-h-screen">
        <Header />

        <section className="section-y">
          <div className="container-max max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              שאלות נפוצות
            </h1>

            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  מה קורה בשיחה הראשונה?
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  בשיחה הראשונה אנחנו נכיר, אני אבין איפה אתה נמצא מבחינה עסקית
                  ופיננסית, ואנחנו נחליט יחד על הכיוון הנכון עבורך. את/ה יוצא/ת
                  עם בהירות על המצב הנוכחי ועל הצעדים הבאים.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  האם יש ליווי רק פיננסי או גם תודעתי?
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  אני משלבה בין שני התחומים. סדר פיננסי בלבד לא מספיק – צריך גם
                  לעבוד על התודעה והאמונות שמשפיעות על ההחלטות שלך. השילוב בין
                  מספרים לתודעה הוא מה שיוצר תוצאות אמיתיות.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  למי זה מתאים?
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  בעיקר לבעלי עסקים בתחומי השירות – מטפלים, מאמנים, יועצים,
                  עורכי דין, רואי חשבון. גם למי שנותן שירותים או מייעץ לאנשים
                  אחרים. אם אתה מרגיש תקוע או לא בטוח איפה אתה עומד מבחינה
                  פיננסית – זה בדיוק בשבילך.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  כמה זמן לוקח התהליך?
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  זה תלוי במה שאנחנו עובדים עליו. יש שיחת מיקוד חד-פעמית של שעה,
                  ויש תהליך של 4 מפגשים למציאת הייעוד. גם שירותי הייצוג הם לפי
                  הצורך. אני לא דוחפת תהליכים מיותרים – רק מה שבאמת עוזר לך.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  מה אם אני לא מבין במספרים?
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  זה בדיוק למה אני כאן. אני מסבירה הכל בפשטות, ללא ז'רגון
                  מקצועי. המטרה שלי היא שתבין מה קורה בעסק שלך ותוכל לקבל החלטות
                  נכונות. אני לא שופטת – אני עוזרת.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  איך מתחילים?
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  פשוט מאוד – השאירו פרטים בטופס יצירת הקשר, ואני אחזור אליכם
                  לתאם שיחה ראשונה. בשיחה נחליט יחד מה הכי נכון עבורכם.
                </p>
                <div className="mt-6">
                  <a href="/contact" className="btn btn-primary">
                    בואו נתחיל
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
