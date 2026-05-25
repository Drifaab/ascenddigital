const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { name, company, email, message } = req.body;

    if (!name || !company || !email || !message) {
      return res.status(400).json({
        error: 'Alla fält måste fyllas i',
      });
    }

    const response = await resend.emails.send({
      from: 'Ascend Digital <hello@ascenddigital.tech>',
      to: 'hello@ascenddigital.tech',

      reply_to: email,

      subject: `Ny kontaktförfrågan från ${name} - ${company}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #F97316;">
            Ny kontaktförfrågan
          </h2>

          <p><strong>Namn:</strong> ${name}</p>

          <p><strong>Företag:</strong> ${company}</p>

          <p><strong>E-post:</strong> ${email}</p>

          <h3>Meddelande:</h3>

          <div style="
            background:#f5f5f5;
            padding:15px;
            border-radius:8px;
          ">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      response,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: error.message,
    });
  }
};