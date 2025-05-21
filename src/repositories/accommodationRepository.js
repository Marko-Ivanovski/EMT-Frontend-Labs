import api from '../api/axios';

export const getAllAccommodations = async () => {
    const response = await api.get('/accommodations');
    return response.data;
};

export const getAccommodationById = async (id) => {
    if (!id) throw new Error('Accommodation ID is required');
    const response = await api.get(`/accommodations/${id}`);
    return response.data;
};

export const createAccommodation = async (accommodation) => {
    const response = await api.post('/accommodations', accommodation);
    return response.data;
};

export const updateAccommodation = async (id, accommodation) => {
    if (!id) throw new Error('Accommodation ID is required for update');
    const response = await api.put(`/accommodations/${id}`, accommodation);
    return response.data;
};

export const deleteAccommodation = async (id) => {
    if (!id) throw new Error('Accommodation ID is required for deletion');
    const response = await api.delete(`/accommodations/${id}`);
    return response.data;
};
