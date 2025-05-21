import React from 'react';

const ReservationsList = ({ reservations, onDelete }) => {
    if (!reservations.length) {
        return <div>No temporary reservations found.</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Reservation ID</th>
                <th>Accommodation Name</th>
                <th>Rented</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {reservations.map(reservation => (
                <tr key={reservation.reservationId}>
                    <td>{reservation.reservationId}</td>
                    <td>{reservation.accommodationName}</td>
                    <td>{reservation.rented ? 'Yes' : 'No'}</td>
                    <td>
                        <button onClick={() => onDelete(reservation.reservationId)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ReservationsList;
