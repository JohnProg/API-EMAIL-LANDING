const sgMail = require("@sendgrid/mail");
const config = require("./../config");

sgMail.setApiKey(config.mailer.sendgridApiKey);

class Mailer {
  static send(from, to, subject, text) {
    const msg = {
      from,
      to,
      subject,
      html: text,
    };

    sgMail.send(msg, function (err, _result) {
      if (err) {
        console.log("Email Not Sent Error Occured");
      } else {
        console.log("Email was Sent");
      }
    });
  }
}

module.exports = Mailer;
