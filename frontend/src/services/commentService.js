import api from "../api/axios"

export const getCommentsByGame = async (gameId) => {
    const response = await api.get(`/comments/${gameId}`);

    return response.data;
}

export const createComment = async (commentData) => {
    const response = await api.post(`/comments`, commentData);

    return response.data;
}

export const deleteComment = async (id) => {
    const response = await api.delete(`/comments/${id}`);

    return response.data;
}

export const editComment = async (id, commentData) => {
    const response = await api.put(`/comments/${id}`, commentData);

    return response.data;
}
