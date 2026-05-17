import api from "../api/axios";

export const getAllReferees = async () => {

    const response = await api.get("/referees");

    return response.data;
};