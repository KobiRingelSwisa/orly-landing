"use client";

import { Header } from "@/components/header";
import { ClientQuestionnaire } from "@/components/client-questionnaire";
import { ContactForm } from "@/components/contact-form";
import { useState } from "react";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const services = {
    focus: {
      name: "שיחת מיקוד והכוונה",
      price: 500,
      description: "שיחה ממוקדת של שעה להבנת המצב והצעד הבא",
    },
    four: {
      name: "תהליך 4 מפגשים",
      price: 2500,
      description: "תהליך עומק למציאת הייעוד והבניית תוכנית עסקית",
    },
    represent: {
      name: "שירותי ייצוג",
      price: 1200,
      description: "ייצוג מול רשויות וטיפול בניירת",
    },
  };

  const selectService = (serviceType) => {
    setSelectedService(serviceType);
    setShowPayment(true);
  };

  const handlePayment = () => {
    // כאן תהיה אינטגרציה עם מערכת תשלום
    alert(
      `תשלום של ₪${services[selectedService].price} עבור ${services[selectedService].name}`
    );
    setShowPayment(false);
    setShowQuestionnaire(true);
  };

  const handleQuestionnaireSubmit = (answers) => {
    // כאן תהיה שליחה לשרת
    alert("השאלון נשלח בהצלחה! אורלי תחזור אליך בקרוב.");
    setShowQuestionnaire(false);
    setSelectedService(null);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "אורלי - יועצת עסקית תודעתית ורו״ח",
            description:
              "רו״ח עם 20 שנות ניסיון, ייעוץ עסקי ותודעתי לבעלי עסקים ושירותים",
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
                  אני יודעת כמה מתסכל זה להרגיש שהמספרים והבירוקרטיה מנהלים אותך
                </span>
              </h1>

              <div className="text-[18px] leading-8 text-[var(--ink)] mb-8 space-y-4">
                <p>אני אורלי, מאמנת עסקית ורו״ח עם 20 שנות ניסיון.</p>
                <p>
                  המטרה שלי היא לעזור לך לעשות סדר בכסף, להיות רגוע/ה מול
                  הרשויות, ולשחרר אמונות שמגבילות אותך.
                </p>
              </div>

              <div className="mb-8">
                <a href="/contact" className="btn btn-primary">
                  קבעו שיחת ייעוץ
                </a>
              </div>

              <div className="text-sm text-[var(--ink)] opacity-70">
                <span>20+ שנות ניסיון</span>
                <span className="mx-2">•</span>
                <span>ליווי לבעלי עסקים ונותני שירות</span>
                <span className="mx-2">•</span>
                <span>גישה אישית, פשוטה וברורה</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pain → Solution Cards */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-2">
                    הכאב:
                  </h3>
                  <p className="font-bold text-[var(--ink)]">
                    הניירת והבירוקרטיה חונקות אותי.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-2">
                    הפתרון:
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני אעשה לך סדר ואייצג אותך מול הרשויות, כדי שתוכל/י להיות
                    רגוע/ה.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-2">
                    הכאב:
                  </h3>
                  <p className="font-bold text-[var(--ink)]">
                    אני מפחד/ת מהכסף—לא מבין/ה איפה אני עומד/ת.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-2">
                    הפתרון:
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני אסביר בפשטות, אבנה איתך תמונת מצב ותוכנית פעולה שקל
                    לעמוד בה.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-2">
                    הכאב:
                  </h3>
                  <p className="font-bold text-[var(--ink)]">
                    עמוק בפנים אני מאמין/ה שכסף לא בשבילי.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-2">
                    הפתרון:
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני אעזור לשחרר אמונות מגבילות ולבנות מערכת יחסים חדשה
                    ובריאה עם כסף.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-2">
                    הכאב:
                  </h3>
                  <p className="font-bold text-[var(--ink)]">
                    אני עובד/ת קשה אבל מרגיש/ה תקוע/ה.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--rose-1)] mb-2">
                    הפתרון:
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני אחבר בין מספרים לתודעה—כדי שתראה/י תנועה אמיתית בעסק.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-y">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              נעים להכיר, אני אורלי
            </h2>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  מי אני
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני רו״ח עם 20 שנות ניסיון, ואני מאמנת עסקית. השילוב הזה בין
                  מספרים לתודעה הוא מה שהופך את העבודה שלי לייחודית ויעילה.
                </p>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  למדתי שהעסקים הכי מצליחים הם אלה שמשלבים בין סדר פיננסי לחשיבה
                  תודעתית. זה לא רק על המספרים – זה על ההבנה העמוקה של מה שמניע
                  אותך ומה מונע ממך.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  מה מיוחד בשילוב שלי
                </h3>
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
                <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                  איך נראה שיתוף פעולה איתי
                </h3>
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
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              השירותים שלי
            </h2>

            <div className="space-y-12">
              {/* שיחת מיקוד והכוונה - Main service */}
              <div className="card p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--ink)]">
                  שיחת מיקוד והכוונה
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני פוגשת הרבה בעלי עסקים שמרגישים אבודים – או בתחילת הדרך ולא
                  יודעים מאיפה להתחיל, או באמצע הדרך ומרגישים שמשהו תקוע. בשיחה
                  ממוקדת של שעה אנחנו עושים סדר: מה המצב כרגע, מה חוסם אותך, ומה
                  הצעד הבא שלך כדי שהעסק יזרום ויתקדם. את/ה יוצא/ת עם בהירות
                  ותוכנית פעולה פשוטה וברורה.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => selectService("focus")}
                  >
                    אני רוצה שיחת מיקוד - ₪500
                  </button>
                </div>
              </div>

              {/* תהליך 4 מפגשים - Main service */}
              <div className="card p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--ink)]">
                  תהליך עומק – 4 מפגשים למציאת הייעוד שלך
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  יש בעלי עסקים שמרגישים שהם עובדים קשה אבל לא באמת מחוברים
                  לייעוד שלהם. בתהליך של ארבעה מפגשים אני מלווה אותך צעד־צעד
                  לגלות מה באמת חשוב לך, איזה אמונות על כסף ועסק עוצרות אותך,
                  ואיך אפשר לבנות עסק שמרגיש נכון ומתאים לך. ביחד נבנה בהירות,
                  כיוון ותוכנית שתאפשר לך לנהל עסק שאת/ה מחובר/ת אליו מכל הלב.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => selectService("four")}
                  >
                    אני רוצה להתחיל תהליך 4 מפגשים - ₪2,500
                  </button>
                </div>
              </div>

              {/* שירותי ייצוג - Secondary service */}
              <div className="card p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[var(--ink)]">
                  שירותי ייצוג מול רשויות
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)] mb-6">
                  אני יודעת כמה מתסכל זה להתמודד עם רשויות המס, עם מכתבים שלא
                  נגמרים ועם בירוקרטיה שגוזלת זמן ואנרגיה. במקום שתבזבז/י שעות
                  ותלחץ/י מכל טופס שמגיע, אני מייצגת אותך מול הרשויות ודואגת שכל
                  מה שצריך – יטופל בזמן ובצורה מסודרת. ככה את/ה יכול/ה להיות
                  רגוע/ה ולשים את הפוקוס שלך איפה שבאמת חשוב – על העסק שלך.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => selectService("represent")}
                  >
                    אני רוצה שאורלי תייצג אותי - ₪1,200
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              מה אומרים עליי
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-8">
                <p className="text-[var(--ink)] mb-4">
                  "פחדתי מרשויות וממספרים, תמיד דחיתי ניירת. אורלי עשתה לי סדר
                  ובפעם הראשונה אני רגוע/ה. היום יש לי תוכנית פעולה ואני
                  בשליטה."
                </p>
                <div className="text-sm text-[var(--rose-1)] font-semibold">
                  — בעל עסק בתחום השירותים
                </div>
              </div>

              <div className="card p-8">
                <p className="text-[var(--ink)] mb-4">
                  "הבנתי שאני מאמינה שכסף לא בשבילי. עם אורלי שיניתי את זה לאט
                  ובבטחה, והעסק התחיל לזוז."
                </p>
                <div className="text-sm text-[var(--rose-1)] font-semibold">
                  — עצמאית בתחום הייעוץ
                </div>
              </div>

              <div className="card p-8">
                <p className="text-[var(--ink)] mb-4">
                  "הרגשתי תקועה. השילוב של מספרים ותודעה אצל אורלי פשוט עבד —
                  ברור, פשוט, אנושי."
                </p>
                <div className="text-sm text-[var(--rose-1)] font-semibold">
                  — בעלת עסק בתחום הטכנולוגיה
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-y">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
              שאלות נפוצות
            </h2>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  מה קורה בשיחה הראשונה?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  בשיחה הראשונה אנחנו נכיר, אני אבין איפה אתה נמצא מבחינה עסקית
                  ופיננסית, ואנחנו נחליט יחד על הכיוון הנכון עבורך. את/ה יוצא/ת
                  עם בהירות על המצב הנוכחי ועל הצעדים הבאים.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  האם יש ליווי רק פיננסי או גם תודעתי?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  אני משלבה בין שני התחומים. סדר פיננסי בלבד לא מספיק – צריך גם
                  לעבוד על התודעה והאמונות שמשפיעות על ההחלטות שלך. השילוב בין
                  מספרים לתודעה הוא מה שיוצר תוצאות אמיתיות.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  למי זה מתאים?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  בעיקר לבעלי עסקים בתחומי השירות – מטפלים, מאמנים, יועצים,
                  עורכי דין, רואי חשבון. גם למי שנותן שירותים או מייעץ לאנשים
                  אחרים. אם אתה מרגיש תקוע או לא בטוח איפה אתה עומד מבחינה
                  פיננסית – זה בדיוק בשבילך.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                  כמה זמן לוקח התהליך?
                </h3>
                <p className="text-[18px] leading-8 text-[var(--ink)]">
                  זה תלוי במה שאנחנו עובדים עליו. יש שיחת מיקוד חד-פעמית של שעה,
                  ויש תהליך של 4 מפגשים למציאת הייעוד. גם שירותי הייצוג הם לפי
                  הצורך. אני לא דוחפת תהליכים מיותרים – רק מה שבאמת עוזר לך.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink)]">
                השאירו פרטים ואני חוזרת לתאם שיחה
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="card p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-y">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--ink)]">
              בואו נעשה סדר וצמיחה – ביחד
            </h2>
            <a href="#contact" className="btn btn-primary">
              קבעו שיחת ייעוץ
            </a>
          </div>
        </section>

        {/* Payment Modal */}
        {showPayment && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="card p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4 text-[var(--ink)]">
                אישור הזמנה
              </h3>
              <div className="mb-6">
                <p className="text-lg font-semibold text-[var(--ink)]">
                  {services[selectedService].name}
                </p>
                <p className="text-[var(--ink)]">
                  {services[selectedService].description}
                </p>
                <p className="text-xl font-bold text-[var(--rose-1)] mt-2">
                  ₪{services[selectedService].price}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePayment}
                  className="btn btn-primary flex-1"
                >
                  אישור תשלום
                </button>
                <button
                  onClick={() => setShowPayment(false)}
                  className="btn btn-ghost flex-1"
                >
                  ביטול
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Client Questionnaire Modal */}
        {showQuestionnaire && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                שאלון לקוח - {services[selectedService].name}
              </h3>

              <ClientQuestionnaire
                serviceType={selectedService}
                onSubmit={handleQuestionnaireSubmit}
                onCancel={() => setShowQuestionnaire(false)}
              />
            </div>
          </div>
        )}

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
                  יועצת עסקית תודעתית ורו״ח עם 20+ שנות ניסיון
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
                &copy; 2024 אורלי - יועצת עסקית תודעתית ורו״ח. כל הזכויות
                שמורות.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
