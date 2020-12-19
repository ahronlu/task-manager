const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "ahronlu@gmail.com",
  from: "ahronlu@gmail.com",
  subject: "a",
  text: "a",
});
