import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/lib/db";
import { leadSchema } from "@/lib/validations";
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = leadSchema.parse(body);

    // TODO: Save to database when database is configured
    // const lead = await db.lead.create({
    //   data: {
    //     fullName: validatedData.fullName,
    //     phone: validatedData.phone,
    //     email: validatedData.email || null,
    //     source: validatedData.source,
    //     status: "new",
    //   },
    // });

    // Log the lead data
    console.info("NEW_LEAD", validatedData);

    // TODO: integrate Resend email + CRM webhook

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead creation error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { message: "הנתונים לא תקינים. אנא בדוק את השדות ונסה שוב." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "אירעה שגיאה. אנא נסה שוב מאוחר יותר." },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
