
const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);
    const smtp = data.smtp;
    const transporter = nodemailer.createTransport({
      host: smtp.server,
      port: parseInt(smtp.port),
      secure: false,
      auth: {
        user: smtp.user,
        pass: smtp.pass
      }
    });

    await transporter.sendMail({
      from: `"${smtp.fromname}" <${smtp.fromemail}>`,
      to: data.to,
      subject: data.subject,
      text: data.body
    });

    return {
      statusCode: 200,
      body: "Mail verzonden"
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Fout bij verzenden: " + err.message
    };
  }
};
