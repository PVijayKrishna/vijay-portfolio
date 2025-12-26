import React from 'react';
// 1. Corrected Imports: FaHeart comes from 'fa', the others from 'fi'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black w-screen py-4 px-5 mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          
          {/* Logo */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent mb-6 md:mb-0">
            MyPortfolio
          </h2>

          {/* Quick Links (Moved inside the flex container for better layout) */}
          <ul className="flex flex-wrap gap-6 text-gray-300 font-bold mb-6 md:mb-0">
            <li><a href="#Hero" className="hover:text-purple-600 transition-colors">Hero</a></li>
            <li><a href="#About" className="hover:text-purple-600 transition-colors">About</a></li>
            <li><a href="#Projects" className="hover:text-purple-600 transition-colors">Projects</a></li>
            <li><a href="#Certificates" className="hover:text-purple-600 transition-colors">Certificates</a></li>
          </ul>

          {/* Social Connect */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-end text-white text-xl">
              <a href="https://github.com/PVijayKrishna" className="hover:text-purple-700 transition-colors duration-300"><FiGithub /></a>
              <a href='#'className="hover:text-purple-700 transition-colors duration-300"><FiTwitter /></a>
              <a href="https://www.linkedin.com/in/p-vijay-krishna" className="hover:text-purple-700 transition-colors duration-300"><FiLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
          
          {/* Fixed flex alignment and class typo */}
          <p className="flex items-center justify-center font-semibold hover:text-purple-400 transition-colors mt-2 md:mt-0">
             Made with <FaHeart className="text-red-500 animate-pulse   mx-2" /> in React
          </p>
        </div>

      </div>
    </footer>
  );
}