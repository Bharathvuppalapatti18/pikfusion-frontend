import React, { useState } from 'react';
import '../../assets/style.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formData);
    
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            console.log("Response status:", response.status);
    
            const result = await response.json();
            console.log("Response data:", result);
    
            if (response.ok) {
                alert(result.success || "Message sent successfully!");
                setFormData({ fullName: '', email: '', message: '' });
            } else {
                alert(result.error || "Something went wrong!");
            }
    
        } catch (error) {
            console.error("Error while submitting contact form:", error);
            alert('Failed to send message. Please try again later.');
        }
    };
    

    return (
        <div className="classic-font">
            {/* Header */}
            <section className="py-5 text-center bg-light">
                <div className="container">
                    <h1 className="fw-bold">Your IT Solutions Start Here - Contact Us</h1>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {/* Contact Details */}
                        <div className="col-md-6 mb-4">
                            <h3 className="fw-bold">Your IT Partner is Just a Message Away</h3>
                            <p><strong>ADDRESS:</strong><br />Shyam Nagar, Behind Chandiwala Estate,
                                Okhla Industrial Area, Phase – 3,
                                New Delhi</p>
                            <p><strong>PHONE:</strong><br />9494209449</p>
                            <p><strong>EMAIL:</strong><br />admin@pikfusion.com</p>
                            <p><strong>FOLLOW US:</strong></p>
                            <div className="d-flex gap-3">
                                <i className="bi bi-facebook fs-5"></i>
                                <i className="bi bi-instagram fs-5"></i>
                                <i className="bi bi-twitter fs-5"></i>
                                <i className="bi bi-youtube fs-5"></i>
                                <i className="bi bi-linkedin fs-5"></i>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-md-6">
                            <p>Your technology partner for seamless digital transformation.<br />Connect with us now</p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message *</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-5 text-center text-white" style={{ backgroundColor: '#3c3c4e' }}>
                <div className="container">
                    <p className="mb-4 fs-5">
                        Looking for expert IT solutions? We're here to transform your ideas into reality with cutting-edge technology and innovation. Whether you need consultation, development, or support—our team is ready to help. Reach out today and let’s create something amazing!
                    </p>
                    <p className="fst-italic">“Empowering Businesses with Innovative IT Solutions!”</p>
                    <a href="/contact" className="btn btn-primary px-4 mt-3">Call To Action</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-3 bg-light">
                <p className="mb-0">© 2025 PikFusion. All rights reserved.</p>
            </footer>
        </div>
    );
};
