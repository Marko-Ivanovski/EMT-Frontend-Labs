import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AccommodationsPage from './pages/AccommodationsPage';
import HostsPage from './pages/HostsPage';
import CountriesPage from './pages/CountriesPage';
import ReservationsPage from './pages/ReservationsPage';

import LoginForm from './components/authentication/LoginForm';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    if (!token) {
        return <LoginForm onLogin={setToken} />;
    }

    return (
        <Router>
            <button onClick={handleLogout} style={{
                position: 'absolute', right: '1rem', top: '1rem', padding: '0.5rem'
            }}>Logout</button>

            <nav style={{ margin: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/accommodations" style={{ marginRight: '1rem' }}>Accommodations</Link>
                <Link to="/hosts" style={{ marginRight: '1rem' }}>Hosts</Link>
                <Link to="/countries" style={{ marginRight: '1rem' }}>Countries</Link>
                <Link to="/reservations">Reservations</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/accommodations" element={<AccommodationsPage />} />
                <Route path="/hosts" element={<HostsPage />} />
                <Route path="/countries" element={<CountriesPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
