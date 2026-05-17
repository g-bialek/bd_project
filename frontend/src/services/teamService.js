import api from "../api/axios";

export const getAllTeams = async () => {

    const response = await api.get("/teams");

    return response.data;
};

export const getTeamById = async (id) => {
    const response = await api.get(`/teams/${id}`)

    return response.data;
};