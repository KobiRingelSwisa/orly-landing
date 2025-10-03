"use client";

import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import Link from 'next/link';

export default function FocusServicePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                <span className="gradient-text">
                  היי, בואי נשב ונשוחח על העסק שלך
                </span>
              </h1>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8">
                תחשבי על זה רגע... איזה מטורף זה - שאת עובדת קשה, יודעת שאת טובה
                במה שאת עושה, אבל מרגישה קצת אבודה. לא יודעת איפה את עומדת, מה
                הצעד הבא, או אם את בכלל מתקדמת בכיוון הנכון.
              </p>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8">
                אני יודעת בדיוק איך את מרגישה. פגשתי מאות בעלי עסקים שמרגישים
                בדיוק ככה. והחדשות הטובות? בשיחה אחת של שעה, אני יכולה לעזור לך
                לראות את התמונה המלאה ולהבין בדיוק איך להמשיך.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn btn-primary">
                  אני רוצה את השיחה הזו - ₪500
                </a>
                <a href="/services" className="btn btn-ghost">
                  חזרה לשירותים
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Section */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                את לא לבד, אני יודעת בדיוק איך את מרגישה
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    אם את אומרת לעצמך את הדברים האלה, את לא לבד:
                  </h3>
                  <ul className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                    <li>• "אני עובדת קשה אבל לא יודעת אם אני מתקדמת"</li>
                    <li>• "יש לי רעיונות מדהימים אבל לא יודעת איפה להתחיל"</li>
                    <li>• "המספרים והבירוקרטיה מבלבלים אותי"</li>
                    <li>• "אני מרגישה שתקועה במקום"</li>
                    <li>• "לא יודעת איך לתמחר נכון"</li>
                    <li>• "הרשויות והמסים מפחידים אותי"</li>
                  </ul>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mt-6 font-medium">
                    ואת יודעת מה? זה נורמלי לגמרי! כל בעלת עסק טובה עברה את זה.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--rose-1)]">
                    תדמיני איך תרגישי אחרי השיחה שלנו:
                  </h3>
                  <ul className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                    <li>• ברור לך איפה את עומדת בדיוק</li>
                    <li>• את יודעת מה הצעד הבא שלך</li>
                    <li>• את מבינה מה באמת חוסם אותך</li>
                    <li>• יש לך תוכנית פעולה פשוטה וברורה</li>
                    <li>• את רגועה יותר עם המצב</li>
                    <li>• את מלאה מוטיבציה לפעול</li>
                  </ul>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mt-6 font-medium text-[var(--rose-1)]">
                    איך זה נשמע? זה אפשרי, ואני כאן לעזור לך להגיע לשם.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                אז איך נראית השיחה שלנו?
              </h2>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8 text-center">
                תחשבי על זה כמו שיחה עם חברה טובה שמבינה בעסקים. אני לא כאן
                לשפוט או לבקר – אני כאן להקשיב, להבין, ולתת לך את הבהירות שאת
                צריכה.
              </p>

              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    🎯 שלב 1: בואי נכיר (15 דקות)
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    נתחיל בזה שתספרי לי את הסיפור שלך. איך התחלת? איפה את עכשיו?
                    מה מפריע לך? אני אקשיב לכל מילה, אשאל שאלות כדי להבין טוב
                    יותר, ואבין בדיוק מה המצב שלך.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אין שיפוט, אין ביקורת – רק הבנה עמוקה של מה שאת עוברת. את
                    יכולה לספר לי הכל.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    🔍 שלב 2: בואי נבין מה באמת קורה (20 דקות)
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    עכשיו בואי נסתכל יחד על המצב שלך – הפיננסי, העסקי והתודעתי.
                    אני אעזור לך לראות מה עובד ומה לא, מה באמת חוסם אותך, ואיפה
                    יש לך הזדמנויות מדהימות לצמיחה.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    ביחד נגלה את הדפוסים שמחזיקים אותך במקום, ונראה איך אפשר
                    לשנות אותם בקלות.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    🗺️ שלב 3: בואי נבנה תוכנית שתעבוד (20 דקות)
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    על בסיס מה שגילינו, בואי נבנה יחד תוכנית פעולה פשוטה וברורה.
                    אני אתן לך 3-5 צעדים קונקרטיים שאת יכולה לבצע מיד, עם סדר
                    עדיפויות ברור.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    התוכנית תהיה מותאמת בדיוק למצב שלך ולמטרות שלך. לא משהו
                    מורכב – משהו שקל לך לעמוד בו.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    💪 שלב 4: בואי נסיים עם אנרגיה חיובית (5 דקות)
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    נסיים עם העצמה. אני אעזור לך לראות את החוזקות המדהימות שלך,
                    את ההזדמנויות שיש לך, ואת הדרך להצלחה. תיצאי מהשיחה מלאה
                    אנרגיה ומוטיבציה לפעול!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                אז מה את באמת תקבלי מהשיחה הזו?
              </h2>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8 text-center">
                תחשבי על זה... שעה אחת של שיחה יכולה לשנות הכל. הנה מה שאת
                תקבלי:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                      📊 תמונת מצב מלאה
                    </h3>
                    <p className="text-[var(--ink)]">
                      הבנה ברורה של המצב הנוכחי שלך – הפיננסי, העסקי והתודעתי
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                      🎯 זיהוי חסמים
                    </h3>
                    <p className="text-[var(--ink)]">
                      הבנה של מה באמת חוסם אותך ומונע ממך להצליח
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                      📋 תוכנית פעולה
                    </h3>
                    <p className="text-[var(--ink)]">
                      3-5 צעדים קונקרטיים שאתה יכול לבצע מיד
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                      🧭 כיוון ברור
                    </h3>
                    <p className="text-[var(--ink)]">
                      הבנה של מה הצעד הבא שלך ואיך להגיע לשם
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                      💡 תובנות עמוקות
                    </h3>
                    <p className="text-[var(--ink)]">
                      הבנה של הדפוסים והאמונות שמשפיעים על ההחלטות שלך
                    </p>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                      🚀 מוטיבציה לפעולה
                    </h3>
                    <p className="text-[var(--ink)]">
                      אנרגיה חדשה ורצון עז להתחיל לפעול מיד
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                מה אומרים לקוחות שעברו את השיחה הזו?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "הגעתי לשיחה מבולבלת לגמרי. לא ידעתי איפה להתחיל ומה לעשות.
                    אורלי הקשיבה לי בסבלנות, עזרה לי להבין מה באמת קורה, ונתנה
                    לי תוכנית פעולה פשוטה. יצאתי מהשיחה עם בהירות מלאה!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — שרה, מטפלת הוליסטית
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "חשבתי שהכל תקוע אצלי. בשיחה עם אורלי גיליתי שיש לי
                    הזדמנויות שלא ידעתי עליהן. היא עזרה לי לראות את החוזקות שלי
                    ולבנות תוכנית שפועלת. תוך חודש כבר ראיתי שינוי!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — דוד, יועץ עסקי
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "הייתי מפחד מהמספרים ומהבירוקרטיה. אורלי הסבירה לי הכל
                    בפשטות, הרגיעה אותי, ונתנה לי תוכנית פשוטה להתמודד עם הכל.
                    היום אני לא מפחד יותר!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — מיכל, מאמנת אישית
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "השיחה עם אורלי הייתה נקודת מפנה עבורי. היא עזרה לי להבין מה
                    באמת חשוב לי ומה אני רוצה להשיג. יצאתי עם בהירות ותוכנית
                    ברורה. מומלץ בחום!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — יוסי, עורך דין
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                שאלות נפוצות על השיחה
              </h2>

              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    כמה זמן נמשכת השיחה?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    השיחה נמשכת שעה מלאה. זה הזמן הנדרש כדי להבין לעומק את המצב
                    שלך, לנתח אותו, ולבנות תוכנית פעולה מותאמת.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    איך מתבצעת השיחה?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    השיחה מתבצעת בזום, כך שתוכל להשתתף בנוחות מהבית או מהמשרד
                    שלך. אני אשלח לך לינק לפגישה מראש.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה אם אני לא יודע מה לספר?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אין בעיה! אני אשאל את השאלות הנכונות כדי לעזור לך להבין
                    ולהביע את מה שאתה מרגיש. השיחה תהיה נוחה ולא מאיימת.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    האם אני אקבל משהו בכתב?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    כן! אחרי השיחה אני אשלח לך סיכום כתוב של כל מה שדיברנו עליו,
                    כולל התוכנית הפעולה והצעדים הבאים שלך.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה אם אני רוצה ליווי נוסף אחרי השיחה?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    מצוין! אחרי השיחה נוכל להחליט יחד אם יש צורך בליווי נוסף. יש
                    לי תהליכים ארוכים יותר שאפשר להתחיל בהם אם תרצה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--ink)]">
                מוכנה לצאת מהבלבול לבהירות מלאה?
              </h2>

              <p className="text-[18px] text-[var(--ink)] mb-8">
                תחשבי על זה... השיחה הזו יכולה להיות נקודת המפנה שלך. תוך שעה
                אחת את תקבלי בהירות מלאה, תוכנית פעולה שתעבוד, והמוטיבציה לפעול
                מיד.
              </p>

              <p className="text-[18px] text-[var(--ink)] mb-8">
                איך זה נשמע? זה אפשרי, ואני כאן לעזור לך להגיע לשם.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn btn-primary">
                  אני רוצה את השיחה הזו - ₪500
                </a>
                <a href="/services" className="btn btn-ghost">
                  חזרה לשירותים
                </a>
              </div>

              <p className="text-sm text-[var(--ink)] opacity-70 mt-6">
                🔒 תשלום מאובטח • 💯 החזר כספי אם לא מרוצה • 📞 תמיכה מלאה
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink)]">
                  בואו נתחיל את השיחה שלכם
                </h2>
                <p className="text-[18px] text-[var(--ink)] opacity-70">
                  השאירו פרטים ואני אחזור אליכם תוך 24 שעות לתאם את השיחה
                </p>
              </div>

              <div className="card p-8 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white text-[var(--ink)] font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          חזור לדף הבית
        </Link>
      </div>
    </>
  );
}
