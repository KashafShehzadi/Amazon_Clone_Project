import React from 'react';
import "../CSS/Footer.css";



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                {/* About Section */}
                <div className="footer_section">
                    <h2 className="footer_title">About Us</h2>
                    <p className="footer_text">
                        We offer a wide range of products with exceptional quality. Customer satisfaction is our priority.
                        Discover our collection today and find something you'll love!
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer_section">
                    <h2 className="footer_title">Quick Links</h2>
                    <ul className="footer_links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer_section">
                    <h2 className="footer_title">Contact Us</h2>
                    <p className="footer_text">123 Street Name, City, Country</p>
                    <p className="footer_text">Email: contact@example.com</p>
                    <p className="footer_text">Phone: (123) 456-7890</p>
                </div>


            </div>
            <div className="footer_bottom">
                <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
