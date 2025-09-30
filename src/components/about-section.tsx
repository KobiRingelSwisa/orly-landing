"use client";

import { Award, Users, Heart, Calculator, Target } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "רו״ח + ייעוץ עסקי + קואצ׳ינג תודעתי",
    description: "שילוב ייחודי של שלושה תחומי מומחיות",
  },
  {
    icon: Target,
    title: "התאמה אישית לעסק ולסגנון החיים שלך",
    description: "כל תוכנית מותאמת בדיוק לצרכים שלך",
  },
  {
    icon: Calculator,
    title: "תכנון פיננסי פשוט, בלי כאבי ראש",
    description: "מערכות פשוטות וברורות לכל עסק",
  },
  {
    icon: Heart,
    title: "תקשורת אנושית, קלילה ומדויקת",
    description: "ליווי אישי עם גישה חמה ומקצועית",
  },
];

export function AboutSection() {
  return (
    <section className="section-y bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="gradient-text-secondary text-3xl md:text-4xl font-bold mb-8">
            שלום, אני אורלי
          </h2>
          <p className="text-[18px] leading-8 text-gray-700 max-w-4xl mx-auto">
            נעים להכיר, אני אורלי. רואת חשבון מוסמכת עם מעל 20 שנות ניסיון,
            מלווה בעלי עסקים—בעיקר נותני שירות, מטפלים ומאמנים—לסדר פיננסי,
            צמיחה עסקית ותודעתית. חשוב לי לראות את האדם מאחורי העסק, ולבנות יחד
            תהליך שהוא גם פרקטי וגם מרגיע.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient relative p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
