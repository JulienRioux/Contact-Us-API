// Setting up sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function that send the email to the client
const sendEmailToClient = ({ email, name }) => {
	const msg = {
	  to: email,
	  from: 'new-project@koidja.com',
	  subject: `Thanks for reaching us ${ name }`,
	  text: `Hi, ${ name }, we will respond you as soon as possible. Have a nice day!`,
	  html: `Hi, ${ name }, we will respond you as soon as possible. Have a nice day!`,
	};
	// Return the message instead of sending it
	// return msg
	sgMail.send(msg);
}

// Function that send the email to the client
const sendContactUsForm = ({ email, name, message }) => {
	const msg = {
	  to: 'new-project@koidja.com',
	  from: 'new-project@koidja.com',
	  subject: `New Message from ${ name }`,
	  text: `Message: ${ message }, Email: ${ email }, Name: ${ name }`,
	  html: `Message: ${ message }<br>Email: ${ email }<br>Name: ${ name }`,
	};
	// Return the message instead of sending it
	// return msg
	sgMail.send(msg);
}

module.exports = {
	sendEmailToClient,
	sendContactUsForm
};
