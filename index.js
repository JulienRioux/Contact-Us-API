const express = require("express"),
      bodyParser = require("body-parser"),
			PORT = process.env.PORT || 3001,
			app = express();

const cors = require('cors');

app.use(cors());

// Setting up the bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send({
		text: "It Worked!"
	})
})

app.post("/email/new", (req, res) => {
	res.send("Thanks for your email!");
})

app.listen(PORT, console.log(`Server Running on port ${ PORT }`))
