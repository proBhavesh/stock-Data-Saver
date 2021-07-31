const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	stockName: {
		type: String,
	},
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
