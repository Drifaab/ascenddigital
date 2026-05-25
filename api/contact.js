import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        error: 'Method not allowed',
      });
    }

    const { name, company, email, message } = req.body;

    if (!name || !company || !email || !message) {
      return res.status(400).json({
        error: 'Alla fält måste fyllas i',
      });
    }

    const data = await resend.emails.send({
      from: 'Ascend Digital <onboarding@resend.dev>',

      to: 'hello@ascenddigital.tech',

      reply_to: email,

      subject: `Ny kontaktförfrågan från ${name}`,

      html: `
        <h2>Ny kontaktförfrågan</h2>

        <p><strong>Namn:</strong> ${name}</p>

        <p><strong>Företag:</strong> ${company}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p>${message}</p>
      `,
    });

    return res.status(200).json(data);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}