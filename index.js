// Loading the .env variables
require('dotenv').config();

const express = require("express"),
      bodyParser = require("body-parser"),
			PORT = process.env.PORT || 3001,
			app = express();

// Setting up cors
const cors = require('cors');
app.use(cors());


// inporting the function that send email
const { sendEmailToClient, sendContactUsForm } = require("./helpers/sendEmail");

// Setting up the bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// Post new email route
app.post("/email/new", (req, res) => {
	sendEmailToClient(req.body.user)
	sendContactUsForm(req.body.user)
	res.send("Successfully sent");

	// Return the message instead of sending it
	// res.send({
	// 	toClient: sendEmailToClient(req.body.user),
	// 	toCompany: sendContactUsForm(req.body.user)
	// });
})

app.listen(PORT, console.log(`Server Running on port ${ PORT }`))
