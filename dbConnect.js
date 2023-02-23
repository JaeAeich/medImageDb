//connecting to mongodb database.
const mongoose = require("mongoose");

module.exports = async () => {
	try {
		const mongoUri = `mongodb+srv://JaeAeich:${process.env.DB_PASSWORD}@cluster0.q07nims.mongodb.net/?retryWrites=true&w=majority`;
		await mongoose.connect(mongoUri, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log(`MongoDB connected: ${mongoose.connection.host}`);
	} catch (error) {
		//if the connection wasn't made terminating the process.
		console.log(`MongoDB connection error: ${error}`);
		process.exit(1);
	}
};
