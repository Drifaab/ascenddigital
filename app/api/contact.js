const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, message } = req.body;

  if (!name || !company || !email || !message) {
    return res.status(400).json({ error: 'Alla fält måste fyllas i' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Ogiltig e-postadress' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontaktformulär" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'hello@ascenddigital.tech',
      replyTo: email,
      subject: `Ny kontaktförfrågan från ${name} - ${company}`,
      text: `Namn: ${name}
Företag: ${company}
E-post: ${email}

Meddelande:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #F97316;">Ny kontaktförfrågan</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>Företag:</strong> ${company}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <h3>Meddelande:</h3>
          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Kunde inte skicka mejlet' });
  }
};
