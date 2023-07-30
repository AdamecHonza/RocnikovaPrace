const express = require("express");
const router = express.Router();
const concertController = require("../controllers/concert");

router.get("/", concertController.getConcerts);
router.get("/:id", concertController.getConcert);
router.post("/", concertController.postConcert);
router.delete("/:id", concertController.deleteConcert)

module.exports = router;