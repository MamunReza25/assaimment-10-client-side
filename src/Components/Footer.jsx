import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A]  text-black dark:text-gray-200 py-5 md:py-10 px-0 md:px-20">
            <div className="container mx-auto px-6 md:px-0">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-black dark:text-white">LearnHub</h2>
                        <p className="text-black dark:text-gray-400 mt-1">Empowering your learning journey</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-black dark:text-white font-bold mb-2">Quick Links</h3>

                        <Link to={'/'} className="hover:text-blue-500 transition">Home</Link>
                        <Link to={'/allcourse'} className="hover:text-blue-500 transition">Courses</Link>
                        <Link to={'/'} className="hover:text-blue-500 transition">About Us</Link>
                        <Link to={'/'} className="hover:text-blue-500 transition">Contact</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-black dark:text-white font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                            <a href="#" className="hover:text-sky-500 transition"><FaXTwitter /></a>
                            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 text-center text-black dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} LearnHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
