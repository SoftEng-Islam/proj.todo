import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import ViteExpress from "vite-express";

// Import dotenv
// import dotenv from "dotenv";
// dotenv.config({ path: "../../.env" });

const port = process.env.APP_SERVER_PORT || 3000;
const app = express();

app.get("/hello", (_, res) => {
	res.send("Hello Vite + Vue + TypeScript! and hello islam");
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}...`));
