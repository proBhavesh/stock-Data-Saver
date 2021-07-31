//Default exports
const express = require("express");

//importing files
const routes = require("./router/routes.js");

//initialising server
const app = express();

//middlewares
app.use(routes);

//port setting
const PORT = process.env.PORT || 5000;

// starting the server
app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
});
