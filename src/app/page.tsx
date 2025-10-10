"use client";

import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";

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
        <section id="hero" className="section-y relative">
          <div className="container-max">
            <div className="max-w-5xl mx-auto relative">
              {/* Decorative flower - Hero */}
              <Image
                src="/flower-lineart.png"
                alt=""
                width={400}
                height={400}
                className="absolute right-[5%] top-[10%] opacity-[0.45] pointer-events-none hidden md:block"
                aria-hidden="true"
              />

              {/* Main Headline - Centered */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  <span className="gradient-text">
                    העתיד שאת חולמת עליו מחכה לך במרחק נגיעה של לחיצה על כפתור
                    הייעוץ
                  </span>
                </h1>
              </div>

              {/* Text Content */}
              <div className="max-w-4xl mx-auto relative">
                {/* Decorative flower - "אז מי אני?" section */}
                <Image
                  src="/flower-lineart.png"
                  alt=""
                  width={250}
                  height={250}
                  className="absolute left-[-8%] top-[20%] opacity-[0.35] pointer-events-none hidden lg:block"
                  aria-hidden="true"
                />

                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  אז מי אני?
                </h2>
                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    אני אורלי בן הרוש — רואת חשבון, יועצת עסקית ותודעתית. אני
                    מחברת בין שני עולמות שנראים מנוגדים — תודעה וכסף — ומראה איך
                    הם בעצם מערכת אחת שלמה.
                  </p>
                  <p>
                    לא עוד "חשבי שפע" או "תנהלי נכון". אני מלמדת אותך את השפה של
                    השפע — איך להחזיק תדר של שפע ולנהל אותו בחכמה.
                  </p>
                  <p className="text-xl font-semibold">
                    כי שפע לא נמדד רק בכסף, אבל כסף הוא השתקפות ישירה של תדר.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  מה אני מאפשרת לך
                </h2>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    מרחב מדויק שבו תוכלי לראות בבהירות מוחלטת איפה את נמצאת בתדר
                    שלך, במספרים שלך ובחזון שלך.
                  </p>

                  <p>
                    זו הזמנה לעצור לרגע, ולבצע סריקה עמוקה של עצמך ושל העסק שלך
                    — תודעתית, אנרגטית ופיננסית — שתחשוף את הפערים, את העוצמות,
                    ואת הדרך המדויקת שלך לשפע.
                  </p>

                  <p>
                    זו לא שיחת הכרות. זו סריקה אמיתית שמחזירה אותך למרכז שלך,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MRI Method Section */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-4">
                  שיטת MRI תודעתי־עסקי
                </h2>
                <p className="text-xl text-[var(--ink)] mb-8">
                  (Mindset · Reality · Income)
                </p>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    בדומה ל־MRI רפואי, גם כאן מדובר בסריקה מעמיקה ויסודית — אבל
                    הפעם אנחנו סורקות את העסק, התודעה והאנרגיה שמנהלות אותך.
                  </p>

                  <div>
                    <p className="font-semibold mb-3">הסריקה מגלה:</p>
                    <p>• איך את חושבת על ערך, הצלחה וכסף.</p>
                    <p>• איך זה מתורגם למעשים ולמספרים שלך.</p>
                    <p>• מה החסמים שמעכבים את הזרימה הכלכלית.</p>
                    <p>• ואיך ליישר קו בין ייעוד, תשוקה ותוצאה מדידה.</p>
                  </div>

                  <p>
                    זו נקודת פתיחה לתהליך שבו את מבינה לא רק מה קורה, אלא למה זה
                    קורה, ואיך לשנות את זה מבפנים החוצה.
                  </p>

                  <div className="pt-6 relative">
                    {/* Decorative flower - Bottom CTA */}
                    <Image
                      src="/flower-lineart.png"
                      alt=""
                      width={450}
                      height={450}
                      className="absolute left-[-10%] bottom-[-5%] opacity-[0.35] pointer-events-none hidden lg:block"
                      aria-hidden="true"
                    />

                    <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                      פענוח ה־MRI שלך
                    </h3>
                    <p className="mb-6">
                      לאחר השלמת הסריקה שלך, ניפגש לשיחה אישית שבה נבצע את
                      הפענוח. שם מתרחש הקסם — כשאנחנו מחברות בין התובנות,
                      המספרים והאנרגיה שלך ומתרגמות הכול למפת כסף אישית עם מהלך
                      ראשון וישים.
                    </p>
                    <p className="mb-6">
                      זו לא שעה של "ייעוץ". זו שעה של דיוק, בהירות ותדר חדש של
                      עשייה.
                    </p>
                    <p className="text-2xl font-bold text-[var(--rose-1)] mb-6">
                      עלות ההצטרפות לסריקה ולפענוח: ₪888
                    </p>
                    <a href="/payment/mri" className="btn btn-primary inline-block">
                      אני רוצה לבצע את הסריקה
                    </a>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                      תהליך ההמשך – "סינרגיה עסקית לחופש כלכלי"
                    </h3>
                    <p>
                      לאחר סריקת ה־MRI שלך, תוכלי לבחור להעמיק לתהליך האישי:
                      8–12 מפגשים שבהם נבנה יחד מערכת עסקית ותודעתית שלמה, כזו
                      שמחברת תודעה, תזרים ותשוקה — ומייצרת הרמוניה אמיתית בין
                      החזון שלך לבין המציאות הכלכלית שלך.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  לקוחות אומרות
                </h2>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    "זו לא שיחת ייעוץ — זו סריקה מדויקת שמראה לך את כל האמת, גם
                    על העסק וגם על עצמך. מפגש ששינה לי את כל התמונה."
                  </p>
                  <p className="text-sm text-[var(--rose-1)] font-semibold">
                    — נ', מאמנת עסקית
                  </p>

                  <p className="pt-4">
                    "כל שלב היה מדויק. מהשאלון ועד לשיחה, הרגשתי שמישהו באמת
                    רואה אותי. סריקה אנרגטית ופיננסית שלא דומה לשום דבר."
                  </p>
                  <p className="text-sm text-[var(--rose-1)] font-semibold">
                    — ס', מטפלת הוליסטית
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">
                  לסיום
                </h2>

                <div className="text-[18px] leading-8 text-[var(--ink)] space-y-6">
                  <p>
                    את לא באה ללמוד — את באה להיזכר. השפע כבר שלך. אני רק עוזרת
                    לך לראות איפה בדיוק הוא מחכה לך.
                  </p>

                  <p className="text-xl font-semibold">
                    העתיד שאת חולמת עליו מתחיל בלחיצה אחת על כפתור הייעוץ.
                  </p>

                  <p>
                    <a
                      href="/payment/mri"
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
                      href="/orly-landing/services"
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
