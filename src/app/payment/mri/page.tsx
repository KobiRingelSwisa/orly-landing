import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "תשלום עבור סריקת MRI תודעתית-עסקית | אורלי",
  description:
    "השלימו את התשלום עבור סריקת MRI תודעתית-עסקית - ₪888",
  robots: "noindex, nofollow",
};

export default function MRIPaymentPage() {
  return (
    <>
      <main id="main" className="min-h-screen bg-[var(--paper)]">
        <Header />

        <section className="section-y">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-4">
                  סריקת MRI תודעתית-עסקית
                </h1>
                <p className="text-xl text-[var(--ink-light)]">
                  (Mindset · Reality · Income)
                </p>
              </div>

              {/* Payment Card */}
              <div className="card p-8 md:p-12 mb-8">
                {/* Service Summary */}
                <div className="mb-8 pb-8 border-b border-[var(--ink)]/10">
                  <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
                    מה כולל השירות?
                  </h2>
                  <ul className="space-y-3 text-[18px] text-[var(--ink)]">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--rose-1)] mt-1">✓</span>
                      <span>שאלון אישי מקיף למיפוי המצב הנוכחי</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--rose-1)] mt-1">✓</span>
                      <span>פגישה אישית של 75 דקות לפענוח הסריקה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--rose-1)] mt-1">✓</span>
                      <span>מפת כסף אישית מותאמת למצב שלך</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--rose-1)] mt-1">✓</span>
                      <span>צעדים מדויקים לשינוי מיידי</span>
                    </li>
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-[var(--ink)]/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-[var(--ink)]">
                      סריקת MRI תודעתית-עסקית
                    </span>
                    <span className="text-3xl font-bold text-[var(--rose-1)]">
                      ₪888
                    </span>
                  </div>
                </div>

                {/* Payment Mock-up */}
                <div className="bg-gradient-to-br from-[var(--rose-2)]/10 to-[var(--rose-1)]/10 rounded-lg p-8 mb-6">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--rose-1)]/20 rounded-full mb-4">
                      <svg
                        className="w-8 h-8 text-[var(--rose-1)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--ink)] mb-2">
                      אזור סליקה מאובטח
                    </h3>
                    <p className="text-[var(--ink-light)]">
                      כאן יופיע טופס התשלום המאובטח
                    </p>
                  </div>

                  {/* Mock Payment Form */}
                  <div className="space-y-4 max-w-md mx-auto">
                    <div className="bg-white/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-[var(--ink-light)] mb-2">
                        אפשרויות תשלום:
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-[var(--ink)]">
                        <span>💳 כרטיס אשראי</span>
                        <span>•</span>
                        <span>🔐 תשלום מאובטח</span>
                        <span>•</span>
                        <span>📱 אפליקציה</span>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-lg p-6 border-2 border-dashed border-[var(--rose-1)]/30">
                      <p className="text-center text-[var(--ink)] font-semibold mb-3">
                        הטמעת מערכת סליקה בתהליך
                      </p>
                      <p className="text-sm text-[var(--ink-light)] text-center">
                        בינתיים, לתיאום תשלום ופגישה:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center">
                  <a
                    href="/contact"
                    className="btn btn-primary text-lg px-8 py-4 inline-block mb-4"
                  >
                    צרו קשר לתיאום התשלום והפגישה
                  </a>
                  <p className="text-sm text-[var(--ink-light)]">
                    או התקשרו אלינו ישירות
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="card p-8">
                <h3 className="text-xl font-bold text-[var(--ink)] mb-6 text-center">
                  מה הלאה?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--rose-1)] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                      1
                    </div>
                    <h4 className="font-semibold text-[var(--ink)] mb-2">
                      תשלום
                    </h4>
                    <p className="text-sm text-[var(--ink-light)]">
                      השלמת התשלום המאובטח
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--rose-1)] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                      2
                    </div>
                    <h4 className="font-semibold text-[var(--ink)] mb-2">
                      שאלון אישי
                    </h4>
                    <p className="text-sm text-[var(--ink-light)]">
                      קבלת שאלון ומילוי פרטים
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--rose-1)] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                      3
                    </div>
                    <h4 className="font-semibold text-[var(--ink)] mb-2">
                      פגישת פענוח
                    </h4>
                    <p className="text-sm text-[var(--ink-light)]">
                      פגישה אישית של 75 דקות
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="text-center mt-8">
                <a
                  href="/orly-landing/services"
                  className="text-[var(--ink-light)] hover:text-[var(--rose-1)] transition-colors"
                >
                  ← חזרה לעמוד השירותים
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

