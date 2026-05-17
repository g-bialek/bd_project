import api from "../api/axios";

export const searchPlayers = async (query) => {

    const response = await api.get(
        `/players/search?search=${query}`
    );

    return response.data;
};