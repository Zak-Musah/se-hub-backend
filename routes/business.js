import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { uploadImage } from "../controllers/business";

router.post("/business/upload-image", uploadImage);

module.exports = router;