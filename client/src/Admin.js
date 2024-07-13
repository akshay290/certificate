import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [date, setDate] = useState('');

    const handleGenerateCertificate = async () => {
        const response = await axios.post('/api/generate-certificate', { name, course, date });
        alert('Certificate generated: ' + response.data.link);
    };

    return (
        <div>
            <h2>Generate Certificate</h2>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
                <button type="button" onClick={handleGenerateCertificate}>Generate Certificate</button>
            </form>
        </div>
    );
};

export default Admin;
