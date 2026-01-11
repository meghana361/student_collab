import express from "express";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { addNote,getNotes } from "../controllers/notesController.js";

const router = express.Router();

router.post("/add", upload.single("file"), auth,addNote);
router.get("/", getNotes);

export default router;
