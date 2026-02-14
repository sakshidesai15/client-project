import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { CONTACT_INFO, CONTACT_SUBJECTS } from '../utils/constants';
import './Pages.css';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for quotes, product inquiries, and custom manufacturing solutions.</p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="contact-container">
                        <div className="contact-info">
                            <div style={{ textAlign: 'center' }}>
                                <h2>Get in Touch</h2>
                                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                                    Our team is ready to assist you with your packaging requirements.
                                </p>
                            </div>

                            <div className="info-item">
                                <a href={CONTACT_INFO.MAP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <MapPin size={32} />
                                </a>
                                <div>
                                    <h4>Headquarters</h4>
                                    <a
                                        href={CONTACT_INFO.MAP_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'inherit', textDecoration: 'none' }}
                                    >
                                        <p>{CONTACT_INFO.ADDRESS}</p>
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <a href="https://wa.me/919000386555" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <Phone size={32} />
                                </a>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="https://wa.me/919000386555" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <p>{CONTACT_INFO.PHONE}</p>
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <a href={`mailto:${CONTACT_INFO.EMAIL}`} style={{ color: 'inherit' }}>
                                    <Mail size={32} />
                                </a>
                                <div>
                                    <h4>Email</h4>
                                    <a href={`mailto:${CONTACT_INFO.EMAIL}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <p>{CONTACT_INFO.EMAIL}</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select className="form-control">
                                        {CONTACT_SUBJECTS.map(subject => (
                                            <option key={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" placeholder="Tell us about your requirements..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
