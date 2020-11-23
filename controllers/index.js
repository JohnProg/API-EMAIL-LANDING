const { sendMailContactUs, sendMailQuotation } = require("./../repositories");

const helloWorld = async (_req, res) => {
  res.json("Hi!");
};

const contactUs = (req, res) => {
  sendMailContactUs(req.body);
  res.status(200).json({ success: true });
};

const sendQuote = (req, res) => {
  sendMailQuotation(req.body);
  res.status(200).json({ success: true });
};

module.exports = {
  helloWorld,
  contactUs,
  sendQuote,
};
