import React from 'react';
import biobizlogo from "../assets/biobizlogo.png";  

const Footer = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
            <img src={biobizlogo} alt="BioBiz Logo" className="h-12" />
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-green-600 transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="hover:text-green-600 transition-colors duration-200">About</a></li>
                <li><a href="#india-updates" className="hover:text-green-600 transition-colors duration-200">India Updates</a></li>
                <li><a href="#opportunities" className="hover:text-green-600 transition-colors duration-200">Opportunities</a></li>
                <li><a href="#biobiz-consulting" className="hover:text-green-600 transition-colors duration-200">BioBiz Consulting</a></li>
                <li><a href="#innovation-insights" className="hover:text-green-600 transition-colors duration-200">Innovation Insights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Insights</h3>
              <ul className="space-y-2">
                <li><a href="#bioenergy" className="hover:text-green-600 transition-colors duration-200">Bioenergy</a></li>
                <li><a href="#environmental-solutions" className="hover:text-green-600 transition-colors duration-200">Environmental Solutions</a></li>
                <li><a href="#bio-products" className="hover:text-green-600 transition-colors duration-200">Bio Products</a></li>
                <li><a href="#bio-based-science" className="hover:text-green-600 transition-colors duration-200">Bio-based Science & Tech Pathways</a></li>
                <li><a href="#regional-biomass" className="hover:text-green-600 transition-colors duration-200">Regional Biomass Residues</a></li>
                <li><a href="#india-biomass" className="hover:text-green-600 transition-colors duration-200">India Biomass Residues</a></li>
                <li><a href="#indian-bioeconomy" className="hover:text-green-600 transition-colors duration-200">Indian Bioeconomy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <p className="hover:text-green-600 transition-colors duration-200">info@biobiz.com</p>
              <p className="hover:text-green-600 transition-colors duration-200">+X XXXXXXXXXX</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-4 text-center text-sm">
          <p>&copy; 2024 BioBiz. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
