import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Email and message are required' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    // Send to YOU (Inbox-safe with +alias)
    await transporter.sendMail({
      from: `"Varsha Portfolio" <${process.env.MAIL_FROM}>`, // must be your Gmail for Gmail SMTP
      to: process.env.MAIL_TO,                               // <- you (use +alias)
      replyTo: email,                                        // reply goes to visitor
      subject: `[Portfolio] ${subject || 'New message'}`,
      text: `From: ${email}\n\n${message}`,
    });

    // OPTIONAL: auto-reply to the visitor (comment out if you don't want this)
    // await transporter.sendMail({
    //   from: `"Varsha Portfolio" <${process.env.MAIL_FROM}>`,
    //   to: email,
    //   subject: 'Thanks for reaching out!',
    //   text: 'Got your message — I’ll get back to you soon.',
    // });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || 'Failed to send' }), { status: 500 });
  }
}
