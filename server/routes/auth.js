import express from "express";
import { sendMagicLink, authenticateMagicLink } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", sendMagicLink);
router.post("/authenticate", authenticateMagicLink);

export default router;
