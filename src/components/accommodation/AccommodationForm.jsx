import React, { useState } from 'react';

const AccommodationForm = ({ onSubmit, initialValues = {}, onCancel }) => {
    const [formData, setFormData] = useState({
        name: initialValues.name || '',
        category: initialValues.category || '',
        numRooms: initialValues.numRooms || '',
        hostId: initialValues.hostId || '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            category: '',
            numRooms: '',
            hostId: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                name="numRooms"
                value={formData.numRooms}
                onChange={handleChange}
                placeholder="Number of Rooms"
                type="number"
                min="1"
                required
            />
            <input
                name="hostId"
                value={formData.hostId}
                onChange={handleChange}
                placeholder="Host ID"
                type="number"
                min="1"
                required
            />
            <button type="submit">Save</button>
            {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
    );
};

export default AccommodationForm;
