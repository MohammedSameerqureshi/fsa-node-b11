import express from "express";
const router = express.Router();
import { addBook, deleteBook, editBook, getBooks } from "../controller/bookCtrl.js";

router.get("/getBooks",getBooks);
router.post("/addBook",addBook);
router.patch("/editBook/:id", editBook);
router.delete("/deleteBook/:id", deleteBook );

export default router;