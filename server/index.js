import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./server/.env" });

const { default: authRouter } = await import("./routes/auth.js");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/auth", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Auth server listening on http://localhost:${port}`);
});
