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
          <div className="container-max max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              נעים להכיר, אני אורלי
            </h1>

            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  מי אני
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני יועצת עסקית ורואת חשבון עם 20 שנות ניסיון, ואני מאמנת
                  עסקית. השילוב הזה בין מספרים לתודעה הוא מה שהופך את העבודה שלי
                  לייחודית ויעילה.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  למדתי שהעסקים הכי מצליחים הם אלה שמשלבים בין סדר פיננסי לחשיבה
                  תודעתית. זה לא רק על המספרים – זה על ההבנה העמוקה של מה שמניע
                  אותך ומה מונע ממך.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  מה מיוחד בשילוב שלי
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  פשוטות וגובה העיניים הם הבסיס שלי. אני לא מדברת בשפה מקצועית
                  מורכבת – אני מסבירה הכל בפשטות, כי אני מאמינה שכשאתה מבין מה
                  קורה, אתה יכול לקבל החלטות נכונות.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  השילוב בין אימון לכסף מאפשר לי לראות את התמונה המלאה – גם את
                  המספרים וגם את האמונות והפחדים שמשפיעים על ההחלטות שלך.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  איך נראה שיתוף פעולה איתי
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אנחנו מתחילים בשיחה ממוקדת שבה אני מבינה איפה אתה נמצא ומה
                  חוסם אותך. יחד נבנה תוכנית פעולה שמשלבת סדר פיננסי עם פיתוח
                  תודעה עסקית.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  המטרה שלי היא לעזור לך ליצור סדר פיננסי שמאפשר לך להתמקד במה
                  שאתה הכי טוב בו – לתת שירות מעולה ללקוחות שלך. ביחד נפתח תודעה
                  עסקית שמקדמת תוצאות אמיתיות.
                </p>
                <div className="mt-8">
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
