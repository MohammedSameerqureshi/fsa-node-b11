import express from "express" ;

const router = express.Router();

router.get("/welcome", (req, res) => {
    res.status(200).json({ message: "Welcome to my Backend Servre", success: "true"});
}); 
router.get("/health",(req, res) => {
    res.status(200).json({ message: "Server is Up and Running", success: "true"});
}); 

export default router;