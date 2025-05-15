import React, { useState, useEffect } from 'react';
import '../styles/contacts.css';
import mascotImg from '../assets/cow1.png';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully! ✅');
      setFormData({ name: '', email: '', message: '' });

      // Clear message after 2 seconds
      setTimeout(() => setStatus(''), 2000);
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message ❌');

      // Clear message after 2 seconds
      setTimeout(() => setStatus(''), 2000);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h3 className="contact-title">Contact Us</h3>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-heading">Connect with Sparkle</h2>
            <p className="contact-description">
              Curious about what we can do for your business?<br />
              Our team is ready to help, reach out anytime,<br />
              we’d love to hear from you.
            </p>
            <img src={mascotImg} alt="Mascot" className="mascot-img" />
          </div>

          {/* Contact Form */}
          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="form-button">Submit</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
