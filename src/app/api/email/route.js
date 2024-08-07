import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // use your API key from resend and make sure it is in a string
const fromEmail = process.env.FROM_EMAIL; // use a string email for this -> "test@example.com"

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  await resend.emails.send({
    from: "Luke <onboarding@resend.dev>",
    to: [fromEmail, email],
    subject: subject,
    react: (
      <>
        <p>Thank you for contacting me, I will be reaching out soon!</p>
      </>
    ),
  });
  return NextResponse.json({
    status: "ok",
  });
}
