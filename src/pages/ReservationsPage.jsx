import React, { useEffect, useState } from 'react';
import {
    getAllReservations,
    deleteReservation,
    confirmAllReservations
} from '../repositories/reservationRepository';
import ReservationsList from '../components/reservations/ReservationsList';

const ReservationsPage = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch reservations when the component mounts
    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await getAllReservations();
            setReservations(data);
        } catch (err) {
            setError('Failed to load reservations.');
        }
        setLoading(false);
    };

    // Delete a single reservation
    const handleDelete = async (reservationId) => {
        if (!window.confirm('Are you sure you want to delete this reservation?')) return;
        try {
            await deleteReservation(reservationId);
            await fetchReservations ();
        } catch {
            alert('Failed to delete reservation.');
        }
    };

    // Clear all reservations (delete each one)
    const handleClearAll = async () => {
        if (!window.confirm('Delete ALL reservations?')) return;
        try {
            await Promise.all(reservations.map(res => deleteReservation(res.reservationId)));
            await fetchReservations();
        } catch {
            alert('Failed to clear all reservations.');
        }
    };

    const handleConfirmAll = async () => {
        try {
            await confirmAllReservations();
            await fetchReservations();
            alert('All accommodations reserved successfully.');
        } catch {
            alert('Failed to confirm reservations.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div>
            <h1>Temporary Reservations</h1>
            <button onClick={handleClearAll} disabled={reservations.length === 0}>Clear All</button>
            <button onClick={handleConfirmAll} disabled={reservations.length === 0} style={{ marginLeft: '1rem' }}>Confirm All</button>
            <ReservationsList reservations={reservations} onDelete={handleDelete} />
        </div>
    );
};

export default ReservationsPage;
