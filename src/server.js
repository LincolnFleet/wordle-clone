import Express, { Router } from "express";

const APP = Express();
const ROUTER = Router();
const port = process.env.PORT || 3000;

ROUTER.get("/", async (req, res) => {
	res.status(200).json({ message: "Server is running." });
});

APP.use("/", ROUTER);

APP.listen(port, () => {
	console.log(`Server listening on port ${port}.`);
});
