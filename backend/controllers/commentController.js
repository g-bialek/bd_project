const Comment = require("../models/Comment");

const getCommentsByGame = async (req,res) => {
    try{
        const {gameId} = req.params
        const comments = await Comment.find({
            gameId: gameId
        }).sort({
            createdAt: -1
        })

        res.json(comments)
    }

    catch(error){
        console.error(error)
        res.status(500).json({
            message: "MongoDB error"
        });
    }
};

const createComment = async (req,res) => {
    try{
        const {
            gameId,
            author,
            content
        } = req.body;

        const comment = await Comment.create({
            gameId,
            author,
            content
        });

        res.status(201).json(comment);
    }

    catch(error){
        console.error(error)

        res.status(500).json({
            message: "MongoDB error"
        });
    }
};

const deleteComment = async (req,res) => {
    try {
        const {id} = req.params;

        const deletedComment = await Comment.findByIdAndDelete(id);

        if(!deletedComment){
            return res.status(404).json({
                message: "Komentarz nie istnieje"
            });
        }

        res.json({
            message: "Komentarz usuniety"
        })
    }

    catch(error){
        console.error(error)
        res.status(500).json({
            message: "MongoDB error"
        });
    }
}

const updateComment = async (req,res) => {
    try{
        const {id} = req.params
        const {
            author,
            content
        } = req.body

        const updatedComment = await Comment.findByIdAndUpdate(
            id,
            {
                author,
                content
            },
            {
                new: true
            }
        );

         if (!updatedComment) {

            return res.status(404).json({
                message: "Komentarz nie istnieje"
            });
        }

        res.json(updatedComment);
    }

    catch(error){
        console.error(error);

        res.status(500).json({
            message: "MongoDB error"
        });
    }
}

module.exports = {
    getCommentsByGame,
    createComment,
    deleteComment,
    updateComment
}