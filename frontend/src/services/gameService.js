import api from "../api/axios";

export const getAllGames = async () => {

    const response = await api.get("/games");

    return response.data;
};

export const getGameById = async (id) => {
    const response = await api.get(`/games/${id}`)

    return response.data;
};

export const createGame = async (gameData) => {
    const response = await api.post("/games", gameData);

    return response.data;
};

export const editGame = async (id, gameData) => {
    const response = await api.put(`/games/${id}`, gameData);

    return response.data;
};

export const deleteGame = async (id) => {
    const response = await api.delete(`/games/${id}`);
    return response.data;
}