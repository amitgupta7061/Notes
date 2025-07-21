import express from "express";
import authMiddleware from "../middleware/middleware.js";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notescontroller.js";

const router = express.Router();

router.use(authMiddleware);
router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
