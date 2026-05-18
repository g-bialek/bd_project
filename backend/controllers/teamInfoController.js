const TeamInfo = require("../models/TeamInfo");

const getTeamInfo = async (req, res) => {

    try {

        const { teamId } = req.params;

        const teamInfo = await TeamInfo.findOne({
            teamId: teamId
        });

        if (!teamInfo) {

            return res.status(404).json({
                message: "Brak informacji o klubie"
            });
        }

        res.json(teamInfo);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "MongoDB error"
        });
    }
};

const upsertTeamInfo = async (req, res) => {

    try {

        const { teamId } = req.params;

        const {
            description,
            founded
        } = req.body;

        const updatedInfo =
            await TeamInfo.findOneAndUpdate(

                {
                    teamId: teamId
                },

                {
                    description,
                    founded
                },

                {
                    new: true,
                    upsert: true
                }
            );

        res.json(updatedInfo);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "MongoDB error"
        });
    }
};

module.exports = {
    getTeamInfo,
    upsertTeamInfo
};