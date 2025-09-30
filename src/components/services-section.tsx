"use client";

import { ChartLine, Calculator, Brain, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ChartLine,
    title: "ייעוץ עסקי",
    description:
      "אסטרטגיה ממוקדת לעסק שלך, מיקוד מסרים ושיווק, תכנון יעדים ובקרה",
    features: [
      "אסטרטגיה ממוקדת לעסק שלך",
      "מיקוד מסרים ושיווק",
      "תכנון יעדים ובקרה",
    ],
    color: "from-orange-400 to-pink-400",
  },
  {
    icon: Calculator,
    title: "ליווי פיננסי",
    description:
      "סדר בהכנסות/הוצאות ומיסים, תזרים מזומנים ברור, קבלת החלטות בלי פחד מספרים",
    features: [
      "סדר בהכנסות/הוצאות ומיסים",
      "תזרים מזומנים ברור",
      "קבלת החלטות בלי פחד מספרים",
    ],
    color: "from-cyan-400 to-blue-400",
  },
  {
    icon: Brain,
    title: "תודעה עסקית",
    description:
      "קואצ'ינג לעצמאיים, הרגלים שמקדמים תוצאות, ביטחון ובירור פנימי בניהול העסק",
    features: [
      "קואצ'ינג לעצמאיים",
      "הרגלים שמקדמים תוצאות",
      "ביטחון ובירור פנימי בניהול העסק",
    ],
    color: "from-purple-400 to-pink-400",
  },
];

export function ServicesSection() {
  return (
    <section className="section-y bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-8">
            השירותים שלי
          </h2>
          <p className="text-[18px] leading-8 text-gray-700 max-w-4xl mx-auto">
            שלושה תחומי מומחיות קסומים שמשלימים זה את זה ליצירת עסק חזק, יציב
            ומשגשג!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-gradient p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-pink-600 font-semibold text-sm transition-colors hover:scale-105"
              >
                רוצה את זה בעסק שלי
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Value Strip */}
        <div className="text-center">
          <h3 className="gradient-text-secondary text-2xl md:text-3xl font-bold mb-8">
            מה מקבלים בתכל׳ס?
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 text-lg font-semibold">
            <span className="text-orange-600">שקט מול הרשויות</span>
            <span className="text-gray-400">•</span>
            <span className="text-pink-600">בהירות פיננסית</span>
            <span className="text-gray-400">•</span>
            <span className="text-purple-600">תוכנית צמיחה שפויה</span>
          </div>
        </div>
      </div>
    </section>
  );
}
