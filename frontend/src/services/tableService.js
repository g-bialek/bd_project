import api from "../api/axios"

export const getTable = async() => {
    const response = await api.get("/table");

    return response.data
}