import api from '../api/axios';

export const getAllReservations = async () => {
    const response = await api.get('/reservations');
    return response.data;
};

export const addReservation = async (reservation) => {
    const response = await api.post('/reservations', reservation);
    return response.data;
};

export const deleteReservation = async (reservationId) => {
    await api.delete(`/reservations/${reservationId}`);
};

export const confirmAllReservations = async () => {
    const response = await api.post('/reservations/confirm');
    return response.data;
};
