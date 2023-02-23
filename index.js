const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routers");

dotenv.config("./.env");

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);

app.use("/api", routes);
app.get("/", (req, res) => {
	res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4001;

dbConnect();
app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
