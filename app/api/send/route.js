//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.fROM_EMAIL;

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ,
      to: [""],
      subject: 'Hello world',
      react: 
      <>
        <p>Email Body</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
