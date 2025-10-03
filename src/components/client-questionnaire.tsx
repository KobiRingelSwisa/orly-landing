"use client";

import { useState } from "react";

export function ClientQuestionnaire({
  serviceType,
  onSubmit,
  onCancel,
}: {
  serviceType: string;
  onSubmit: (data: {
    serviceType: string;
    answers: Record<string, string | string[]>;
    timestamp: string;
  }) => void;
  onCancel: () => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [currentStep, setCurrentStep] = useState(0);

  const questions = {
    focus: [
      {
        id: "business_stage",
        question: "באיזה שלב העסק שלך נמצא?",
        type: "radio",
        options: [
          "רק מתחיל/ה - עדיין לא התחלתי",
          "התחלתי אבל מרגיש/ה אבוד/ה",
          "עובד/ת אבל מרגיש/ה תקוע/ה",
          "יש לי לקוחות אבל לא יודע/ת איך לגדול",
        ],
      },
      {
        id: "main_challenge",
        question: "מה האתגר הכי גדול שלך כרגע?",
        type: "radio",
        options: [
          "לא יודע/ת איך להתחיל",
          "מפחד/ת מהכסף והמספרים",
          "לא יודע/ת איך למצוא לקוחות",
          "עובד/ת קשה אבל לא רואה תוצאות",
        ],
      },
      {
        id: "business_type",
        question: "איזה סוג עסק יש לך?",
        type: "text",
        placeholder: "למשל: מטפל/ת, מאמן/ת, יועץ/ת, עורך/ת דין וכו'",
      },
      {
        id: "experience_years",
        question: "כמה שנים אתה/את בעולם הזה?",
        type: "radio",
        options: ["עד שנה", "1-3 שנים", "3-5 שנים", "מעל 5 שנים"],
      },
      {
        id: "current_income",
        question: "איך אתה/את מתפרנס/ת כרגע?",
        type: "radio",
        options: [
          "עדיין לא מתפרנס/ת מהעסק",
          "מתפרנס/ת חלקית",
          "מתפרנס/ת במלואו מהעסק",
          "יש לי הכנסה אבל לא מספיק",
        ],
      },
    ],
    four: [
      {
        id: "business_stage",
        question: "באיזה שלב העסק שלך נמצא?",
        type: "radio",
        options: [
          "רק מתחיל/ה - עדיין לא התחלתי",
          "התחלתי אבל מרגיש/ה אבוד/ה",
          "עובד/ת אבל מרגיש/ה תקוע/ה",
          "יש לי לקוחות אבל לא יודע/ת איך לגדול",
        ],
      },
      {
        id: "purpose_clarity",
        question: "כמה ברור לך מה הייעוד שלך?",
        type: "radio",
        options: [
          "לא ברור בכלל",
          "קצת ברור אבל לא בטוח/ה",
          "די ברור אבל יש ספקות",
          "ברור לי אבל לא יודע/ת איך לממש",
        ],
      },
      {
        id: "money_beliefs",
        question: "איך אתה/את מרגיש/ה לגבי כסף?",
        type: "radio",
        options: [
          "מפחד/ת מכסף",
          "חושב/ת שכסף לא בשבילי",
          "רוצה כסף אבל לא יודע/ת איך",
          "מבין/ה שצריך כסף אבל לא יודע/ת איך להרוויח",
        ],
      },
      {
        id: "business_vision",
        question: "איך אתה/את רואה את העסק שלך בעוד שנה?",
        type: "text",
        placeholder: "תאר/י בקצרה איך אתה/את רוצה שהעסק ייראה",
      },
      {
        id: "current_obstacles",
        question: "מה הכי חוסם אותך כרגע?",
        type: "checkbox",
        options: [
          "פחד מכסף",
          "לא יודע/ת איך להתחיל",
          "לא יודע/ת איך למצוא לקוחות",
          "עובד/ת קשה אבל לא רואה תוצאות",
          "לא יודע/ת איך לתמחר",
          "מפחד/ת מהבירוקרטיה",
        ],
      },
    ],
    represent: [
      {
        id: "business_type",
        question: "איזה סוג עסק יש לך?",
        type: "text",
        placeholder: "למשל: מטפל/ת, מאמן/ת, יועץ/ת, עורך/ת דין וכו'",
      },
      {
        id: "current_status",
        question: "מה הסטטוס הנוכחי של העסק שלך?",
        type: "radio",
        options: [
          "עדיין לא התחלתי",
          "עובד/ת כעצמאי/ת",
          "יש לי חברה",
          "לא יודע/ת מה הסטטוס",
        ],
      },
      {
        id: "tax_issues",
        question: "איזה בעיות יש לך עם רשויות המס?",
        type: "checkbox",
        options: [
          "לא יודע/ת איך להתחיל",
          "יש לי מכתבים שלא טיפלתי בהם",
          "מפחד/ת מהבירוקרטיה",
          "לא יודע/ת איך לנהל את הניירת",
          "צריך עזרה עם דוחות",
          "יש לי חובות שלא יודע/ת איך לטפל",
        ],
      },
      {
        id: "urgency",
        question: "כמה דחוף לך?",
        type: "radio",
        options: [
          "דחוף מאוד - יש לי בעיה עכשיו",
          "דחוף - צריך לטפל בקרוב",
          "לא דחוף - רוצה להיות מוכן/ה",
          "לא יודע/ת",
        ],
      },
      {
        id: "previous_experience",
        question: "האם כבר עבדת עם רואה חשבון?",
        type: "radio",
        options: [
          "כן, אבל לא מרוצה/ת",
          "כן, אבל לא זמין/ה",
          "לא, זו הפעם הראשונה",
          "לא יודע/ת",
        ],
      },
    ],
  };

  const currentQuestions =
    questions[serviceType as keyof typeof questions] || [];
  const currentQuestion = currentQuestions[currentStep];

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentStep < currentQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onSubmit({
      serviceType,
      answers,
      timestamp: new Date().toISOString(),
    });
  };

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case "radio":
        return (
          <div className="space-y-3">
            {question.options.map((option: string, index: number) => (
              <label
                key={index}
                className="flex items-start gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={(e) => handleAnswer(question.id, e.target.value)}
                  className="mt-1"
                />
                <span className="text-[var(--ink)]">{option}</span>
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <div className="space-y-3">
            {question.options.map((option: string, index: number) => (
              <label
                key={index}
                className="flex items-start gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={answers[question.id]?.includes(option) || false}
                  onChange={(e) => {
                    const currentAnswers =
                      (answers[question.id] as string[]) || [];
                    if (e.target.checked) {
                      handleAnswer(question.id, [...currentAnswers, option]);
                    } else {
                      handleAnswer(
                        question.id,
                        currentAnswers.filter((a) => a !== option)
                      );
                    }
                  }}
                  className="mt-1"
                />
                <span className="text-[var(--ink)]">{option}</span>
              </label>
            ))}
          </div>
        );

      case "text":
        return (
          <textarea
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            placeholder={question.placeholder}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--rose-1)] focus:border-[var(--rose-1)]"
            rows={3}
          />
        );

      default:
        return null;
    }
  };

  if (!currentQuestion) {
    return <div>שגיאה בטעינת השאלון</div>;
  }

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[var(--ink)] opacity-70">
            שאלה {currentStep + 1} מתוך {currentQuestions.length}
          </span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div
              className="bg-[var(--rose-1)] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentStep + 1) / currentQuestions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4 text-[var(--ink)]">
          {currentQuestion.question}
        </h4>
        {renderQuestion(currentQuestion)}
      </div>

      <div className="flex gap-4 pt-6">
        <button
          onClick={handleNext}
          disabled={
            !answers[currentQuestion.id] ||
            (Array.isArray(answers[currentQuestion.id]) &&
              answers[currentQuestion.id].length === 0)
          }
          className="btn btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === currentQuestions.length - 1 ? "שלח שאלון" : "הבא"}
        </button>
        <button onClick={onCancel} className="btn btn-ghost flex-1">
          ביטול
        </button>
      </div>
    </div>
  );
}
