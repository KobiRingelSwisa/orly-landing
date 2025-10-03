"use client";

import { ArrowDown, Sparkles, Users, Award, Heart } from "lucide-react";
import BizConsultingAccountingAnimation from "./biz-consulting-animation";

export function HeroSection() {
  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Blobs - Inspired by Orly's vibrant style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-400 blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-400 blur-3xl opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-400 blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-400 blur-3xl opacity-25 animate-float"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      {/* Sparkles Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-400 rounded-full sparkle"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full sparkle"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full sparkle"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-rose-300 rounded-full sparkle"
          style={{ animationDelay: "9s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-teal-300 rounded-full sparkle"
          style={{ animationDelay: "12s" }}
        ></div>
      </div>

      <div className="container-max section-y">
        <div className="md:grid md:grid-cols-2 md:items-center gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="gradient-text text-4xl md:text-6xl font-extrabold leading-tight">
              העסק שלך יכול לצמוח – גם במספרים וגם בתודעה
            </h1>

            <p className="text-[18px] leading-8 text-gray-700 max-w-2xl">
              אני אורלי, רו״ח עם 20 שנות ניסיון, יועצת עסקית וקואצ׳רית. השילוב
              בין סדר פיננסי לחשיבה תודעתית יוצר תוצאות שמרגישים בבנק וביום-יום.
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold">
              <div className="flex items-center gap-2 text-orange-600">
                <Award className="w-5 h-5" />
                <span>20+ שנות ניסיון</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2 text-pink-600">
                <Users className="w-5 h-5" />
                <span>מאות עסקים</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2 text-purple-600">
                <Heart className="w-5 h-5" />
                <span>גישה אנושית</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={goToContact} className="btn-primary">
                קבעו שיחת ייעוץ
              </button>
              <a href="/orly-landing/about" className="btn-outline">
                רוצה לשמוע בקצרה מה עושים כאן؟
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Animated Business Dashboard Component */}
            <BizConsultingAccountingAnimation
              className="w-full h-[400px]"
              width={600}
              height={400}
            />

            {/* Tagline under animation */}
            <p className="text-center text-lg text-orange-600 font-bold mt-4">
              יועצת עסקית ורואת חשבון ורואה אותך מעבר
            </p>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-float">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div
              className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Award className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
}
