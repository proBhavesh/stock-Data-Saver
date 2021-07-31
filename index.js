//Default exports
const express = require("express");

//importing files
const DB = require("./models/connect.js");
const controller = require("./controllers/controllers.js");
//initialising server
const app = express();

//middlewares
DB;
// app.use(DB);

setInterval(() => {
	controller.getData("TIME_SERIES_DAILY", "TATAMOTORS");
}, 30000);

//port setting
const PORT = process.env.PORT || 7000;

// starting the server
app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});
