import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [certificateLink, setCertificateLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/generate-certificate', {
        name,
        course,
        date,
        email
      });
      setCertificateLink(response.data.link);
    } catch (error) {
      console.error('Error generating certificate', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Certificate Generation System</h1>
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input
              type="text"
              id="course"
              placeholder="Enter the course name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Generate Certificate</button>
          {certificateLink && (
            <div className="certificate-link">
              <h2>Certificate Link:</h2>
              <a href={certificateLink} target="_blank" rel="noopener noreferrer">
                {certificateLink}
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
