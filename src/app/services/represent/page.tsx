"use client";

import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function RepresentationServicePage() {
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
                  היי, בואו נפטור מהניירת הזו אחת ולתמיד
                </span>
              </h1>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8">
                תחשוב על זה רגע... איזה מטורף זה - שאתה עובד קשה, יודע שאתה טוב
                במה שאתה עושה, אבל כל פעם שמגיע מכתב מהרשויות הלב שלך עוצר.
                הטופסים, המספרים, הבירוקרטיה - הכל מבלבל ומפחיד.
              </p>

              <p className="text-[18px] leading-8 text-[var(--ink)] mb-8">
                אני יודעת בדיוק איך אתה מרגיש. פגשתי מאות בעלי עסקים שמרגישים
                בדיוק ככה. והחדשות הטובות? אני אטפל בכל זה בשבילך – מייצגת אותך
                מול הרשויות, מסדרת אתה הניירת, ומאפשרת לך להיות רגוע.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn btn-primary">
                  אני רוצה שאורלי תייצג אותי - ₪1,200
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
                אני יודעת בדיוק איך אתה מרגיש
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    אם אתה מרגיש ככה, אתה/ה לא לבד:
                  </h3>
                  <ul className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                    <li>• "אני מפחד לפתוח אתה המכתבים מהמס"</li>
                    <li>• "הניירת הצטברה ואני לא יודע מה לעשות"</li>
                    <li>• "אני מבולבל מכל הטפסים והדוחות"</li>
                    <li>• "אני לא יודע איך להתמודד עם הרשויות"</li>
                    <li>• "אני מבלה שעות על ניירת במקום על העסק"</li>
                    <li>• "יש לי חובות שלא יודע איך לטפל בהם"</li>
                    <li>• "אני מרגיש שהבירוקרטיה חונקת אותי"</li>
                  </ul>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--rose-1)]">
                    אחרי שאני אטפל בזה תרגיש:
                  </h3>
                  <ul className="space-y-4 text-[18px] leading-8 text-[var(--ink)]">
                    <li>• רגוע עם הניירת והבירוקרטיה</li>
                    <li>• יודע שהכל מטופל על ידי מומחה</li>
                    <li>• יכול להתמקד בעסק שלך</li>
                    <li>• לא מפחד יותר מהמכתבים</li>
                    <li>• מבין מה קורה עם הכסף שלך</li>
                    <li>• יש לך מערכת מסודרת</li>
                    <li>• ישן טוב בלילה</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                מה אני עושה בשבילך?
              </h2>

              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    📋 סידור הניירת הקיימת
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    אני לוקחת אתה כל הניירת שלך – המכתבים, הטפסים, הדוחות –
                    ועושה סדר מושלם. אני בודקת מה חסר, מה צריך לטפל בו, ומה כבר
                    בסדר.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אתה תקבל דוח מפורט על המצב הנוכחי ותדע בדיוק מה קורה.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    🏛️ ייצוג מול הרשויות
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    אני מייצגת אותך מול רשויות המס, הביטוח הלאומי, וכל הרשויות
                    הרלוונטיות. אני מתקשרת בשמך, עונה על שאלות, ומטפלת בכל מה
                    שצריך.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אתה לא צריך להתמודד עם זה יותר – אני עושה הכל בשבילך.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    📊 הכנת דוחות וטפסים
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    אני מכינה בשבילך אתה כל הדוחות הנדרשים – דוח שנתי, דוח
                    חודשי, טפסי ביטוח לאומי, וכל מה שצריך. הכל בזמן ובצורה
                    נכונה.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אתה תקבל עותק של הכל ותדע בדיוק מה נשלח ומתי.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    💰 טיפול בחובות ובבעיות
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    אם יש לך חובות או בעיות עם הרשויות, אני אטפל בזה. אני יודעת
                    איך לנהל משא ומתן, איך להגיש בקשות להקלות, ואיך לפתור בעיות.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אני אעזור לך להגיע להסדרים טובים ולהפחית אתה החובות שלך.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[var(--ink)]">
                    📞 תמיכה וליווי
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)] mb-4">
                    אני זמינה לך לכל שאלה או בעיה. אם מגיע מכתב, אם יש בעיה, אם
                    אתה לא מבין משהו – אני כאן בשבילך.
                  </p>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אני אסביר לך הכל בפשטות ותדע בדיוק מה קורה עם הכסף שלך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                איך זה עובד?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--rose-1)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                          פגישה ראשונה
                        </h3>
                        <p className="text-[var(--ink)]">
                          נפגשים, אני מבינה אתה המצב שלך, ולוקחת אתה כל הניירת
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--rose-1)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                          סידור ואבחון
                        </h3>
                        <p className="text-[var(--ink)]">
                          אני מסדרת הכל, בודקת מה חסר, ומכינה תוכנית פעולה
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--rose-1)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                          טיפול פעיל
                        </h3>
                        <p className="text-[var(--ink)]">
                          אני מטפלת בכל מה שצריך, מייצגת אותך, ומכינה דוחות
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--rose-1)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                          עדכון שוטף
                        </h3>
                        <p className="text-[var(--ink)]">
                          אני מעדכנת אותך על כל מה שקורה ומסבירה הכל
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--rose-1)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                          מערכת מסודרת
                        </h3>
                        <p className="text-[var(--ink)]">
                          אני בונה לך מערכת שתאפשר לך לנהל הכל בקלות
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[var(--rose-1)] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        6
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[var(--ink)]">
                          תמיכה מתמשכת
                        </h3>
                        <p className="text-[var(--ink)]">
                          אני כאן בשבילך לכל שאלה או בעיה שתצוץ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                מה תקבל מהשירות הזה?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">😌</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    שקט נפשי
                  </h3>
                  <p className="text-[var(--ink)]">
                    אתה תישן טוב בלילה בידיעה שהכל מטופל
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    חיסכון בזמן
                  </h3>
                  <p className="text-[var(--ink)]">
                    אתה תוכל להתמקד בעסק שלך במקום בניירת
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    סדר מושלם
                  </h3>
                  <p className="text-[var(--ink)]">
                    כל הניירת שלך תהיה מסודרת ומעודכנת
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    ייצוג מקצועי
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני מייצגת אותך מול כל הרשויות
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    חיסכון בכסף
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני עוזרת לך לשלם רק מה שחייבים
                  </p>
                </div>

                <div className="card p-6 text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    תמיכה מלאה
                  </h3>
                  <p className="text-[var(--ink)]">
                    אני זמינה לך לכל שאלה או בעיה
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                מה אומרים לקוחות שמייצגתי?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "הייתי מפחד לפתוח אתה המכתבים מהמס. הניירת הצטברה ואני לא
                    ידעתי מה לעשות. אורלי לקחה אתה הכל, סידרה, וטיפלה בכל
                    הבעיות. היום אני רגוע לגמרי!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — יעל, מטפלת הוליסטית
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "היו לי חובות שלא ידעתי איך לטפל בהם. אורלי עזרה לי להגיע
                    להסדרים טובים ולהפחית אתה החובות. היא מייצגת אותי מול
                    הרשויות ואני רגוע!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — משה, יועץ עסקי
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "הבירוקרטיה חונקה אותי. אורלי לקחה אתה הכל לידיים שלה, סידרה
                    אתה הניירת, ומטפלת בכל מה שצריך. אני יכול להתמקד בעסק שלי!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — דני, מאמן אישי
                  </div>
                </div>

                <div className="card p-8">
                  <p className="text-[var(--ink)] mb-6 italic">
                    "אורלי מסבירה לי הכל בפשטות ומעדכנת אותי על כל מה שקורה. אני
                    יודע שהכל מטופל ואני לא צריך לדאוג. מומלץ בחום!"
                  </p>
                  <div className="text-sm text-[var(--rose-1)] font-semibold">
                    — רותי, עורכת דין
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--ink)]">
                שאלות נפוצות על השירות
              </h2>

              <div className="space-y-8">
                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה כלול בשירות?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    השירות כולל סידור הניירת הקיימת, ייצוג מול הרשויות, הכנת
                    דוחות וטפסים, טיפול בחובות ובבעיות, ותמיכה מלאה. הכל תחת
                    קורת גג אחת.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    כמה זמן לוקח לטפל בכל הניירת?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    זה תלוי בכמות הניירת ובמורכבות הבעיות. בדרך כלל תוך
                    שבועיים-שלושה אני מסיימת אתה הסידור הראשוני ומתחילה בטיפול
                    הפעיל.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה אם יש לי חובות גדולים?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אין בעיה! אני מנוסה בטיפול בחובות ובהשגת הסדרים טובים עם
                    הרשויות. אני אעזור לך להגיע להסדר שמתאים לך ולמצב שלך.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    איך אני יודע מה קורה?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    אני מעדכנת אותך באופן קבוע על כל מה שקורה. אתה תקבל דוחות
                    מפורטים ותדע בדיוק מה נשלח ומתי.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    מה אם מגיע מכתב חדש?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    פשוט תשלח לי אותו ואני אטפל בזה מיד. אני זמינה לך לכל דבר
                    שצריך טיפול.
                  </p>
                </div>

                <div className="card p-8">
                  <h3 className="text-xl font-bold mb-4 text-[var(--ink)]">
                    האם השירות כולל גם ייעוץ?
                  </h3>
                  <p className="text-[18px] leading-8 text-[var(--ink)]">
                    כן! אני לא רק מטפלת בניירת אלא גם מסבירה לך הכל ומעניקה לך
                    ייעוץ מקצועי. אתה תבין מה קורה עם הכסף שלך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="section-y bg-[var(--paper)]">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--ink)]">
                ההשקעה שלך בשקט נפשי
              </h2>

              <div className="card p-8 max-w-2xl mx-auto mb-8">
                <div className="text-4xl font-bold text-[var(--rose-1)] mb-4">
                  ₪1,200
                </div>
                <p className="text-[18px] text-[var(--ink)] mb-6">
                  שירות מלא • ייצוג מול כל הרשויות • טיפול בכל הניירת • תמיכה
                  מלאה
                </p>
                <div className="text-sm text-[var(--ink)] opacity-70">
                  זה שווה פחות מ-₪100 לחודש – מחיר זול לשקט נפשי מלא
                </div>
              </div>

              <p className="text-[18px] text-[var(--ink)] mb-8">
                זה לא רק שירות – זה שקט נפשי. אתה תישן טוב בלילה, תוכל להתמקד
                בעסק שלך, ותדע שהכל מטופל על ידי מומחה.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn btn-primary">
                  אני רוצה שאורלי תייצג אותי - ₪1,200
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
        <section id="contact" className="section-y">
          <div className="container-max">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink)]">
                  בואו נתחיל לטפל בזה
                </h2>
                <p className="text-[18px] text-[var(--ink)] opacity-70">
                  השאירו פרטים ואני אחזור אליכם תוך 24 שעות לתאם פגישה
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
