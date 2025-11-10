import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-200 py-5 md:py-10 px-0 md:px-20">
            <div className="container mx-auto px-6 md:px-0">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">LearnHub</h2>
                        <p className="text-gray-400 mt-1">Empowering your learning journey</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-white font-semibold mb-2">Quick Links</h3>
                        <a href="/" className="hover:text-blue-500 transition">Home</a>
                        <a href="/course" className="hover:text-blue-500 transition">Courses</a>
                        <a href="/about" className="hover:text-blue-500 transition">About Us</a>
                        <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-white font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                            <a href="#" className="hover:text-sky-500 transition"><FaXTwitter /></a>
                            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} LearnHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
