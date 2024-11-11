import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [feedback, setFeedback] = useState(null); // State to store feedback message
  const [isSending, setIsSending] = useState(false); // State to indicate if the email is being sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        setFeedback({ message: 'Email sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setFeedback({ message: 'Failed to send email. Please try again later.', type: 'error' });
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setFeedback(null), 5000); // Hide feedback after 5 seconds
      });
  };

  return (
    <form onSubmit={handleSubmit} className='contactForm'>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          required
        />
      </div>
      <button type="submit" disabled={isSending}>
        {isSending ? 'Sending...' : 'Submit'}
      </button>
      
      {/* Feedback message */}
      {feedback && (
        <div
          style={{
            marginTop: '15px',
            padding: '10px',
            color: feedback.type === 'success' ? 'green' : 'red',
            backgroundColor: feedback.type === 'success' ? '#e6ffed' : '#ffe6e6',
            borderRadius: '4px',
            textAlign: 'center'
          }}
        >
          {feedback.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
