const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ahronlu@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ahronlu@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
