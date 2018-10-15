const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp(functions.config().firebase);
const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);

exports.httpEmail = functions.https.onRequest((req, res) => {
  // Set CORS headers
  // e.g. allow GETs from any origin with the Content-Type header
  // and cache preflight response for an 3600s
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  // Send response to OPTIONS requests and terminate the function execution
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }

  if (req.method !== 'POST') {
    res.status(405).end();
  } else {
    const msg = {
      to: {
        name: 'Sukhdeep Singh',
        email: 'sukhdeep.singh12@outlook.com'
      },
      from: {
        name: req.body.name,
        email: req.body.email
      },
      subject: 'Contact request from portfolio website',
      html: `<p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone number: ${req.body.phoneNumber}</p>
      <p>Message: ${req.body.message}</p>`
    };

    sgMail.send(msg).then(() => {
      res.json({
        message: "Thank you for your request. I will get in touch with you shortly."
      });
      return true;
    }).catch(err => {
      console.error(err);
      res.json({
        error: "Something went wrong, Please try again later."
      });
    });
  }
});
