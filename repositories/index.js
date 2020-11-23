const Firebase = require("../services/firebase");
const Mailer = require("../services/mail");
const config = require("./../config");

const QUOTATION_COLLECTION_NAME = "Quotation";
const CLIENT_COLLECTION_NAME = "Client";

const saveQuotation = async (input) => {
  const docRef = Firebase.collection(QUOTATION_COLLECTION_NAME).doc();
  await docRef.set(input);

  return {
    created: 1,
  };
};

const fetchAllQuotations = async () => {
  const list = [];
  const snapshot = await Firebase.collection(QUOTATION_COLLECTION_NAME).get();

  snapshot.forEach((doc) => {
    list.push(doc.data());
    console.log(doc.id, "=>", doc.data());
  });

  return list;
};

const fetchAllClients = async () => {
  const list = [];
  const snapshot = await Firebase.collection(CLIENT_COLLECTION_NAME).get();

  snapshot.forEach((doc) => {
    list.push({ ...doc.data(), id: doc.id });
  });

  return list;
};

const sendMailQuotation = (input) => {
  const { fullname, cellphone, email, message } = input;
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

  saveQuotation(input);
  Mailer.send(
    config.mailer.defaultEmailSender,
    config.mailer.defaultEmailReceiver,
    subject,
    output
  );
};

const sendMailContactUs = (input) => {
  const { companyName, fullname, cellphone, email, message } = input;
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

  Mailer.send(
    config.mailer.defaultEmailSender,
    config.mailer.defaultEmailReceiver,
    subject,
    output
  );
};

module.exports = {
  fetchAllQuotations,
  fetchAllClients,
  sendMailContactUs,
  sendMailQuotation,
};
