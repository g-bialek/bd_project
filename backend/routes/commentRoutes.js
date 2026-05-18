const express = require("express");

const router = express.Router();

const {
    getCommentsByGame,
    createComment,
    deleteComment,
    updateComment
} = require("../controllers/commentController");

router.get("/:gameId", getCommentsByGame);
router.post("/", createComment);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment)

module.exports = router;
