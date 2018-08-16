// Loading the .env variables
require('dotenv').config();

const express = require("express"),
      bodyParser = require("body-parser"),
			PORT = process.env.PORT || 3001,
			app = express();

// Setting up cors
const cors = require('cors');
app.use(cors());

// Setting up sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function that send the email
const sendEmail = (email) => {
	const msg = {
	  to: email,
	  from: 'newEmail@koidja.com',
	  subject: 'Let\'s build it',
	  text: `Email: ${ email }`,
	  html: `<strong>Email:</strong> ${ email }`,
	};
	sgMail.send(msg);
}

// Setting up the bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.post("/email/new", (req, res) => {
	sendEmail(req.body.email)
	res.send("Successfully sent");
})

app.listen(PORT, console.log(`Server Running on port ${ PORT }`))
