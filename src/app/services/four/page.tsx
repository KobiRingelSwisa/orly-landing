"use client";

import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function FourSessionsPage() {
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
                  היי, בואו נגלה יחד אתה הייעוד האמיתי שלך
                </span>
              </h1>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8">
                תחשוב על זה רגע... אתה עובד קשה, יודע שאתה טוב במה שאתה עושה,
                אבל מרגיש שלא באמת מחובר למה שאתה עושה. כמו שאתה עובד על משהו
                שמישהו אחר אמר לך שצריך לעשות, ולא על משהו שבאמת מרגש אותך.
              </p>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8">
                אני יודעת בדיוק איך אתה מרגיש. פגשתי מאות בעלי עסקים שמרגישים
                בדיוק ככה. והחדשות הטובות? בתהליך של ארבעה מפגשים אני מלווה אותך
                צעד־צעד לגלות מה באמת חשוב לך ולבנות עסק שמרגיש נכון ומתאים לך.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn btn-primary">
                  אני רוצה להתחיל אתה התהליך - ₪2,500
                </a>
                <Link href="/" className="btn btn-ghost">
                  חזרה לשירותים
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Section */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                אם אתה מרגיש ככה, התהליך הזה בדיוק בשבילך
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    הסימנים שאתה צריך אתה התהליך:
                  </h3>
                  <ul className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                    <li>• "אני עובד קשה אבל לא מרגיש סיפוק"</li>
                    <li>• "יש לי תחושה שחסר משהו אבל לא יודע מה"</li>
                    <li>• "אני לא בטוח שזה מה שאני באמת רוצה לעשות"</li>
                    <li>• "אני מרגיש שלא מחובר למה שאני עושה"</li>
                    <li>• "אני רוצה לבנות עסק שמרגיש נכון לי"</li>
                    <li>• "אני לא יודע מה הייעוד שלי"</li>
                    <li>• "אני מרגיש שעמוק בפנים משהו לא בסדר"</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--rose-1)]">
                    אחרי התהליך תרגיש:
                  </h3>
                  <ul className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                    <li>• מחובר עמוק למה שאתה עושה</li>
                    <li>• ברור לך מה הייעוד שלך</li>
                    <li>• יש לך עסק שמרגיש נכון ומתאים לך</li>
                    <li>• אתה יודע מה באמת חשוב לך</li>
                    <li>• יש לך תוכנית ברורה לצמיחה</li>
                    <li>• אתה מרגיש שלום פנימי</li>
                    <li>• מלא אנרגיה ומוטיבציה</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                איך נראה התהליך של 4 המפגשים?
              </h2>

              <div className="space-y-8">
                <div className="card p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-[var(--rose-1)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[var(--ink)]">
                        מפגש ראשון: גילוי והבנה
                      </h3>
                      <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                        נעמיק יחד בהבנה של מי אתה באמת, מה מניע אותך, ומה חשוב
                        לך בחיים. נגלה אתה הערכים הבסיסיים שלך, אתה החלומות שלך,
                        ואתה מה שאתה באמת רוצה להשיג.
                      </p>
                      <p className="text-[18px] leading-8 text-[var(--ink)]">
                        נבין מה עוצר אותך, מה הפחדים שלך, ואיך האמונות שלך
                        משפיעות על ההחלטות שלך.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-[var(--rose-1)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[var(--ink)]">
                        מפגש שני: עבודה על אמונות וכסף
                      </h3>
                      <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                        נעבוד יחד על האמונות שלך לגבי כסף, הצלחה, ועסק. נגלה איך
                        האמונות האלה נוצרו, איך הן משפיעות עליך היום, ונבנה
                        מערכת יחסים חדשה ובריאה עם כסף.
                      </p>
                      <p className="text-[18px] leading-8 text-[var(--ink)]">
                        נשחרר אמונות מגבילות ונבנה אמונות מקדמות שיעזרו לך
                        להצליח.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-[var(--rose-1)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[var(--ink)]">
                        מפגש שלישי: מציאתה הייעוד ובניית החזון
                      </h3>
                      <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                        נגלה יחד מה הייעוד שלך, מה השליחות שלך, ואיך אתה רוצה
                        להשפיע על העולם. נבנה חזון ברור ומושלם לעסק שלך – איך
                        הוא ייראה, איך הוא ירגיש, ואיך הוא יעבוד.
                      </p>
                      <p className="text-[18px] leading-8 text-[var(--ink)]">
                        החזון הזה יהיה הבסיס לכל ההחלטות והפעולות שלך בעתיד.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-[var(--rose-1)] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[var(--ink)]">
                        מפגש רביעי: בניית התוכנית ויציאה לדרך
                      </h3>
                      <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                        נבנה יחד תוכנית פעולה מפורטת שתאפשר לך לממש אתה החזון
                        שלך. התוכנית תהיה מותאמת בדיוק לך, למטרות שלך, ולמצב
                        הנוכחי שלך.
                      </p>
                      <p className="text-[18px] leading-8 text-[var(--ink)]">
                        נסיים עם העצמה מלאה ומוטיבציה ענקית לצאתה לדרך ולהתחיל
                        לממש אתה החלום שלך.
                      </p>
                    </div>
                  </div>
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
                מה תקבל מהתהליך הזה?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    בהירות מלאה
                  </h3>
                  <p className="text-[var(--ink)]">
                    הבנה עמוקה של מי אתה, מה חשוב לך, ומה הייעוד שלך
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    תובנות עמוקות
                  </h3>
                  <p className="text-[var(--ink)]">
                    הבנה של האמונות והדפוסים שמשפיעים עליך ואיך לשנות אותם
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    תוכנית פעולה
                  </h3>
                  <p className="text-[var(--ink)]">
                    תוכנית מפורטת ומותאמת אישית לממש אתה החזון שלך
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מערכת יחסים חדשה
                  </h3>
                  <p className="text-[var(--ink)]">
                    מערכת יחסים בריאה ומועילה עם כסף, הצלחה, ועסק
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    חזון ברור
                  </h3>
                  <p className="text-[var(--ink)]">
                    חזון מפורט ומושלם לעסק שלך שמרגיש נכון ומתאים לך
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    אנרגיה ומוטיבציה
                  </h3>
                  <p className="text-[var(--ink)]">
                    אנרגיה חדשה ומוטיבציה ענקית לצאתה לדרך ולהצליח
                  </p>
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
                מה אומרים לקוחות שעברו אתה התהליך?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "התהליך הזה שינה לי אתה החיים. לא ידעתי מי אני באמת ומה חשוב
                    לי. אחרי 4 המפגשים עם אורלי, יש לי בהירות מלאה, חזון ברור,
                    ואני מרגיש מחובר עמוק למה שאני עושה. העסק שלי עכשיו מרגיש
                    נכון ומתאים לי מכל הלב!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — רחל, מטפלת הוליסטית
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "עבדתי קשה שנים אבל לא הרגשתי סיפוק. אורלי עזרה לי להבין מה
                    באמת חשוב לי ולגלות אתה הייעוד שלי. היום יש לי עסק שמרגיש
                    נכון, אני מרוויח יותר, ואני מרגיש מלא אנרגיה ומוטיבציה.
                    התהליך הזה היה שווה כל שקל!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — אמיר, יועץ עסקי
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "הייתי מפחד מכסף ומהצלחה. התהליך עם אורלי עזר לי לשנות אתה
                    האמונות שלי ולבנות מערכת יחסים חדשה עם כסף. עכשיו אני לא
                    מפחד יותר, ואני יודע איך לבנות עסק מצליח שמתאים לי!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — נועה, מאמנת אישית
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "הרגשתי שאני לא מחובר למה שאני עושה. התהליך עם אורלי עזר לי
                    לגלות מה באמת חשוב לי ולבנות חזון ברור. היום יש לי עסק
                    שמרגיש נכון, ואני מרגיש שלום פנימי. מומלץ בחום!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — יונתן, עורך דין
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
                שאלות נפוצות על התהליך
              </h2>

              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    כמה זמן נמשך כל מפגש?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    כל מפגש נמשך שעה וחצי. זה הזמן הנדרש כדי לעבוד לעומק ולקבל
                    תוצאות אמיתיות.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    איך מתבצעים המפגשים?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    המפגשים מתבצעים בזום, כך שתוכל להשתתף בנוחות מהבית או מהמשרד
                    שלך. אני אשלח לך לינק לפגישה מראש.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה אם אני לא יודע מה לענות על השאלות?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אין בעיה! אני אעזור לך לגלות אתה התשובות. זה חלק מהתהליך.
                    אני אשאל אתה השאלות הנכונות ואעזור לך להבין ולהביע אתה מה
                    שאתה מרגיש.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    האם אני אקבל חומרים כתובים?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    כן! אחרי כל מפגש אני אשלח לך סיכום כתוב של מה שעברנו עליו,
                    כולל התובנות, התרגילים, והצעדים הבאים שלך.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה אם אני רוצה ליווי נוסף אחרי התהליך?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    מצוין! אחרי התהליך נוכל להחליט יחד אם יש צורך בליווי נוסף.
                    יש לי תהליכים ארוכים יותר ואפשר גם מפגשי המשך לפי הצורך.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    האם התהליך מתאים לכל אחד?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    התהליך מתאים לבעלי עסקים ונותני שירות שמרגישים שהם צריכים
                    בהירות וקשר עמוק יותר למה שהם עושים. אם אתה מרגיש תקוע או לא
                    מחובר, זה בדיוק בשבילך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--ink)]">
                ההשקעה שלך בהצלחה
              </h2>

              <div className="card p-8 max-w-2xl mx-auto mb-8">
                <div className="text-4xl font-bold text-[var(--rose-1)] mb-4">
                  ₪2,500
                </div>
                <p className="text-[18px] text-[var(--ink)] mb-6">
                  תהליך מלא של 4 מפגשים • סיכומים כתובים • תוכנית פעולה מפורטת •
                  תמיכה מלאה
                </p>
                <div className="text-sm text-[var(--ink)] opacity-70">
                  זה שווה פחות מ-₪625 למפגש – השקעה קטנה שתשנה לך אתה החיים
                </div>
              </div>

              <p className="text-[18px] text-[var(--ink)] mb-8">
                זה לא רק 4 מפגשים – זה תהליך שישנה לך אתה החיים. אתה תצא ממנו עם
                בהירות מלאה, חזון ברור, ותוכנית פעולה שתאפשר לך לבנות עסק שמרגיש
                נכון ומתאים לך מכל הלב.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn btn-primary">
                  אני רוצה להתחיל אתה התהליך - ₪2,500
                </a>
                <Link href="/" className="btn btn-ghost">
                  חזרה לשירותים
                </Link>
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
                  בואו נתחיל אתה התהליך שלכם
                </h2>
                <p className="text-[18px] text-[var(--ink)] opacity-70">
                  השאירו פרטים ואני אחזור אליכם תוך 24 שעות לתאם אתה המפגש
                  הראשון
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
