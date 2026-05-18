import api from "../api/axios";

export const getTeamInfo = async (teamId) => {

    const response = await api.get(
        `/team-info/${teamId}`
    );

    return response.data;
};

export const upsertTeamInfo = async (
    teamId,
    teamInfoData
) => {

    const response = await api.put(

        `/team-info/${teamId}`,

        teamInfoData
    );

    return response.data;
};