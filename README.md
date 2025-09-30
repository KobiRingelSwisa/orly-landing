# אורלי - דף נחיתה ליועצת עסקית תודעתית ורו"ח

דף נחיתה מקצועי ומעוצב עבור אורלי - יועצת עסקית תודעתית ורו"ח עם 20 שנות ניסיון.

## 🚀 טכנולוגיות

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod validation
- **Database**: Prisma + PostgreSQL (Supabase)
- **Email**: Resend
- **Analytics**: Google Analytics 4 + Meta Pixel
- **Deployment**: Vercel

## 📁 מבנה הפרויקט

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── lead/         # Lead submission endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── analytics.tsx     # Analytics setup
│   ├── contact-form.tsx  # Contact form component
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   └── services-section.tsx # Services section
├── lib/                  # Utilities
│   ├── db.ts            # Database connection
│   ├── utils.ts         # Helper functions
│   └── validations.ts   # Zod schemas
└── prisma/              # Database schema
```

## 🛠️ התקנה והפעלה

### 1. התקנת תלויות

```bash
npm install
```

### 2. הגדרת משתני סביבה

צור קובץ `.env.local` בהתבסס על `env.example`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/orly_landing?schema=public"

# Email (Resend)
RESEND_API_KEY="re_xxxxxxxxxx"

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_META_PIXEL_ID="123456789"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="אורלי - יועצת עסקית תודעתית ורו\"ח"
```

### 3. הגדרת מסד נתונים

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

### 4. הפעלת השרת

```bash
npm run dev
```

האתר יהיה זמין ב-http://localhost:3000

## 📊 מסד נתונים

### מודל Lead

```prisma
model Lead {
  id        String   @id @default(cuid())
  fullName  String
  phone     String
  email     String?
  source    String   @default("website")
  status    String   @default("new")
  notes     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 עיצוב

- **צבעים**: גרדיאנטים של כחול, סגול, ורוד וכתום
- **טיפוגרפיה**: Assistant (תמיכה מלאה בעברית)
- **אנימציות**: Tailwind CSS animations + custom sparkle effects
- **רספונסיבי**: מותאם לכל המכשירים

## 📈 אנליטיקות

הפרויקט כולל תמיכה ב:

- **Google Analytics 4**: מעקב אחר תנועה ואירועים
- **Meta Pixel**: מעקב אחר conversions ל-Facebook/Instagram
- **Event Tracking**: מעקב אחר שליחת טפסים ויצירת לידים

## 🚀 פריסה ל-Vercel

1. **העלה את הקוד ל-GitHub**
2. **חבר ל-Vercel**
3. **הגדר משתני סביבה ב-Vercel**
4. **הגדר מסד נתונים Supabase**
5. **פרוס!**

## 📝 API Endpoints

### POST /api/lead

שליחת ליד חדש

**Request Body:**

```json
{
  "fullName": "שם מלא",
  "phone": "050-123-4567",
  "email": "email@example.com", // optional
  "source": "website"
}
```

**Response:**

```json
{
  "success": true,
  "message": "הטופס נשלח בהצלחה! נחזור אליך בקרוב.",
  "leadId": "clx123..."
}
```

## 🔧 תכונות עתידיות

- [ ] **Cal.com integration** - קביעת פגישות אוטומטית
- [ ] **Stripe payments** - תשלומים אונליין
- [ ] **CRM integration** - HubSpot/Zoho
- [ ] **WhatsApp integration** - הודעות אוטומטיות
- [ ] **Blog section** - תוכן SEO
- [ ] **Testimonials management** - ניהול המלצות
- [ ] **Email automation** - סדרת מיילים אוטומטית

## 📞 תמיכה

לשאלות או בעיות, צור קשר עם הצוות הטכני.

---

**פותח עם ❤️ עבור אורלי**
