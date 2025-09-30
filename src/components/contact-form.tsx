"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { User, Phone, Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: "website",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("שגיאה בשליחת הטופס");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("אירעה שגיאה בשליחת הטופס. אנא נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[var(--ink)] mb-2">תודה!</h3>
        <p className="text-[var(--ink)]">הפרטים התקבלו ✨</p>
      </div>
    );
  }

  return (
    <div className="card-gradient p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="gradient-text text-2xl font-bold mb-2">
          בואו נעשה סדר וצמיחה – ביחד
        </h2>
        <p className="text-gray-600">השאירו פרטים ואני חוזרת לתאם שיחה.</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            שם מלא
          </label>
          <div className="relative">
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...form.register("fullName")}
              type="text"
              id="fullName"
              placeholder="הכניסו את שמכם המלא"
              className="w-full h-12 pr-10 pl-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-right"
            />
          </div>
          {form.formState.errors.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            מספר טלפון
          </label>
          <div className="relative">
            <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...form.register("phone")}
              type="tel"
              id="phone"
              placeholder="050-123-4567"
              className="w-full h-12 pr-10 pl-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-right"
            />
          </div>
          {form.formState.errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              שולח...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 ml-2" />
              קבעו שיחת ייעוץ
            </>
          )}
        </button>

        <p className="text-xs text-center text-gray-500">
          לא שולחת ספאם. הפרטים נשארים אצלי.
        </p>
      </form>
    </div>
  );
}
