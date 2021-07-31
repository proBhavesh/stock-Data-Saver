const mongoose = require("mongoose");
DB =
	"mongodb+srv://bhavesh:bhavesh@mernapp.qkrpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
	.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log(err);
	});
