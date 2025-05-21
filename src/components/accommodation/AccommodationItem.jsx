import React from 'react';

const AccommodationItem = ({ accommodation, onEdit, onDelete }) => (
    <tr>
        <td>{accommodation.name}</td>
        <td>{accommodation.category}</td>
        <td>{accommodation.numRooms}</td>
        <td>{accommodation.hostId}</td>
        <td>
            <button onClick={() => onEdit(accommodation)}>Edit</button>
            <button onClick={() => onDelete(accommodation.id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
        </td>
    </tr>
);

export default AccommodationItem;
