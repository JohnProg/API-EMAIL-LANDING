const sendEmail = require("./../helpers/sendEmail");

const contactUs = (req, res) => {
  const { companyName, fullname, cellphone, email, message } = req.body;
  const from = process.env.EMAIL_SENDER;
  const to = process.env.EMAIL_RECEIVER;
  const subject = `Quiere contactarse contigo - ${fullname}`;
  // TODO: Refactor Template
  const output = `
        <h3>Nueva cotización</h3>
        <ul>
          <li>Empresa: ${companyName}</li>
          <li>Nombre: ${fullname}</li>
          <li>Celular: ${cellphone}</li>
          <li>Email: ${email}</li>
          <li>Mensaje: ${message}</li>
        </ul>
      `;

  sendEmail(to, from, subject, output);
  res.status(200).json({ success: true });
};

const sendQuote = (req, res) => {
  const { fullname, cellphone, email, message } = req.body;
  const from = process.env.EMAIL_SENDER;
  const to = process.env.EMAIL_RECEIVER;
  const subject = `Nueva cotización - ${fullname}`;
  // TODO: Refactor Template
  const output = `
      <h3>Nueva cotización</h3>
      <ul>
        <li>Nombre: ${fullname}</li>
        <li>Celular: ${cellphone}</li>
        <li>Email: ${email}</li>
        <li>Mensaje: ${message}</li>
      </ul>
    `;

  sendEmail(to, from, subject, output);
  res.status(200).json({ success: true });
};

module.exports = {
  contactUs,
  sendQuote,
};
