require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 5000,
  },
  mailer: {
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    defaultEmailSender: process.env.EMAIL_SENDER,
    defaultEmailReceiver: process.env.EMAIL_RECEIVER,
  },
  logger: {
    enabled: true,
    stdout: true,
    minLevel: "debug",
  },
  firebase: {
    databaseUrl: process.env.FIREBASE_DB_URL,
    serviceAccount: {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: (process.env.FIREBASE_PRIVATE_KEY || "").replace(
        /\\n/gu,
        "\n"
      ),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    },
  },
};
