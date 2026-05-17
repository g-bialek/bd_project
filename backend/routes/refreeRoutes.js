const express = require("express");

const router = express.Router();

const {
    getAllReferees
} = require("../controllers/refreeController");

router.get("/", getAllReferees);

module.exports = router;