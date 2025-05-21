import React, { useEffect, useState } from 'react';
import {
    getAllAccommodations,
    createAccommodation,
    updateAccommodation,
    deleteAccommodation // <-- 1. Import delete
} from '../repositories/accommodationRepository';
import AccommodationsList from '../components/accommodation/AccommodationsList';
import AccommodationForm from '../components/accommodation/AccommodationForm';

const AccommodationsPage = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingAccommodation, setEditingAccommodation] = useState(null);

    useEffect(() => {
        fetchAccommodations();
    }, []);

    const fetchAccommodations = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await getAllAccommodations();
            setAccommodations(data);
        } catch (err) {
            setError('Failed to load accommodations.');
        }
        setLoading(false);
    };

    // Create
    const handleAddAccommodation = async (formData) => {
        try {
            await createAccommodation(formData);
            await fetchAccommodations();
            setShowAddForm(false);
        } catch {
            alert('Failed to create accommodation.');
        }
    };

    // Edit/Update
    const handleEditAccommodation = (accommodation) => {
        setEditingAccommodation(accommodation);
        setShowAddForm(false);
    };

    const handleUpdateAccommodation = async (formData) => {
        try {
            await updateAccommodation(editingAccommodation.id, formData);
            await fetchAccommodations();
            setEditingAccommodation(null);
        } catch {
            alert('Failed to update accommodation.');
        }
    };

    // Cancel editing
    const handleCancelEdit = () => setEditingAccommodation(null);

    // 2. Delete handler
    const handleDeleteAccommodation = async (id) => {
        if (!window.confirm('Are you sure you want to delete this accommodation?')) return;
        try {
            await deleteAccommodation(id);
            await fetchAccommodations();
            // Hide forms if the deleted item was being edited
            setEditingAccommodation(null);
            setShowAddForm(false);
        } catch {
            alert('Failed to delete accommodation.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div>
            <h1>Accommodations</h1>
            <button onClick={() => { setShowAddForm((prev) => !prev); setEditingAccommodation(null); }}>
                {showAddForm ? 'Cancel' : 'Add Accommodation'}
            </button>
            {showAddForm && (
                <AccommodationForm
                    onSubmit={handleAddAccommodation}
                    onCancel={() => setShowAddForm(false)}
                />
            )}
            {editingAccommodation && (
                <AccommodationForm
                    initialValues={editingAccommodation}
                    onSubmit={handleUpdateAccommodation}
                    onCancel={handleCancelEdit}
                />
            )}
            {/* 3. Pass onDelete handler here */}
            <AccommodationsList
                accommodations={accommodations}
                onEdit={handleEditAccommodation}
                onDelete={handleDeleteAccommodation}
            />
        </div>
    );
};

export default AccommodationsPage;
