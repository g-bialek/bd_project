const mongoose = require("mongoose");

const teamInfoSchema = new mongoose.Schema({

    teamId: {
        type: Number,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    founded: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model(
    "TeamInfo",
    teamInfoSchema
);