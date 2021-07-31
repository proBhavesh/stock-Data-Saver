const fetch = require("node-fetch");
const DOMAIN = "sandbox576b5f7c7db54119a02081290b22ed52.mailgun.org";
const mailgun = require("mailgun-js")({
	apiKey: "92edc405d00216edd1f994a06ae21a7c-a0cfb957-684602a2",
	domain: DOMAIN,
});

const stockDB = require("../models/model.js");

const API_KEY = "INC8F6N2TL9AX478";

const getData = async (time_frame, company) => {
	const URL = `https://www.alphavantage.co/query?function=${time_frame}&symbol=BSE:${company}&apikey=${API_KEY}`;
	console.log(URL);
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			// sending mail-------------------------
			const mailData = {
				from: "probhavsh@gmail.com",
				to: "bhaveshjat9950@gmail.com",
				subject: "Testing from mailgun",
				text: JSON.stringify(data),
			};

			mailgun.messages().send(mailData, function (error, body) {
				console.log(body);
			});
			//for logging purposes--------------------------------
			console.log("result in json: ", data["Meta Data"]["2. Symbol"]);
			const stockName = data["Meta Data"]["2. Symbol"];
			// saving to DB---------------------------------------
			const DB = new stockDB({
				stockName,
			});
			DB.save();
		})
		.catch((err) => console.log(err));
	return console.log("data has been fetched");
};

module.exports = {
	getData,
};
