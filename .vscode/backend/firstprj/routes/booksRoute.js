import express from "express";
const router = express.Router();
import { addBook, editBook, getBooks } from "../controller/bookCtrl.js";

router.get("/getBooks",getBooks);
router.post("/addBook",addBook);
router.patch("/editBook/:id", editBook);
router.delete

export default router;