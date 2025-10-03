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
            name: "ייעוץ עסקי ותודעתי",
            description:
              "ייעוץ עסקי מותאם אישית, ליווי פיננסי ותודעה עסקית לבעלי עסקים ושירותים",
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

        <section className="section-y">
          <div className="container-max">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              השירותים שלי
            </h1>

            <div className="space-y-12">
              {/* שיחת מיקוד והכוונה - Main service */}
              <div id="focus" className="card p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--ink)]">
                  שיחת מיקוד והכוונה
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני פוגשת הרבה בעלי עסקים שמרגישים אבודים – או בתחילת הדרך ולא
                  יודעים מאיפה להתחיל, או באמצע הדרך ומרגישים שמשהו תקוע. בשיחה
                  ממוקדת של שעה אנחנו עושים סדר: מה המצב כרגע, מה חוסם אותך, ומה
                  הצעד הבא שלך כדי שהעסק יזרום ויתקדם. את/ה יוצא/ת עם בהירות
                  ותוכנית פעולה פשוטה וברורה.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="/orly-landing/contact" className="btn btn-primary">
                    אני רוצה שיחת מיקוד
                  </a>
                  <a
                    href="https://orlycoach.ravpage.co.il"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    טופס קיים
                  </a>
                </div>
              </div>

              {/* תהליך 4 מפגשים - Main service */}
              <div id="four" className="card p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--ink)]">
                  תהליך עומק – 4 מפגשים למציאת הייעוד שלך
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  יש בעלי עסקים שמרגישים שהם עובדים קשה אבל לא באמת מחוברים
                  לייעוד שלהם. בתהליך של ארבעה מפגשים אני מלווה אותך צעד־צעד
                  לגלות מה באמת חשוב לך, איזה אמונות על כסף ועסק עוצרות אותך,
                  ואיך אפשר לבנות עסק שמרגיש נכון ומתאים לך. ביחד נבנה בהירות,
                  כיוון ותוכנית שתאפשר לך לנהל עסק שאתה מחובר אליו מכל הלב.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="/orly-landing/contact" className="btn btn-primary">
                    אני רוצה להתחיל תהליך 4 מפגשים
                  </a>
                </div>
              </div>

              {/* שירותי ייצוג - Secondary service */}
              <div id="represent" className="card p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-[var(--ink)]">
                  שירותי ייצוג מול רשויות
                </h2>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני יודעת כמה מתסכל זה להתמודד עם רשויות המס, עם מכתבים שלא
                  נגמרים ועם בירוקרטיה שגוזלת זמן ואנרגיה. במקום שתבזבז שעות
                  ותלחץ מכל טופס שמגיע, אני מייצגת אותך מול הרשויות ודואגת שכל
                  מה שצריך – יטופל בזמן ובצורה מסודרת. ככה אתה יכול להיות רגוע
                  ולשים את הפוקוס שלך איפה שבאמת חשוב – על העסק שלך.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a href="/orly-landing/contact" className="btn btn-primary">
                    אני רוצה שאורלי תייצג אותי
                  </a>
                  <a
                    href="https://lp.vp4.me/p3ay"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    למידע נוסף קיים
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
