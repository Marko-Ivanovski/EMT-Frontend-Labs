import React from 'react';
import AccommodationItem from './AccommodationItem';

const AccommodationsList = ({ accommodations, onEdit, onDelete }) => {
    if (!accommodations.length) return <div>No accommodations found.</div>;

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Num Rooms</th>
                <th>Host ID</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {accommodations.map((acc) => (
                <AccommodationItem
                    key={acc.id}
                    accommodation={acc}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
            </tbody>
        </table>
    );
};

export default AccommodationsList;
