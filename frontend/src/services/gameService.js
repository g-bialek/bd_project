import api from "../api/axios";

export const getAllGames = async () => {

    const response = await api.get("/games");

    return response.data;
};

export const getGameById = async (id) => {
    const response = await api.get(`/games/${id}`)

    return response.data;
}