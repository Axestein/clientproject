import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';  // Import large arrows and icons
import biobizlogo from "../assets/biobizlogo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');  

  const handleLinkClick = (page) => {
    setActivePage(page); 
  };

  return (
    <div className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <img src={biobizlogo} alt="BioBiz Logo" className="h-10 ml-4 mr-4" />

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl text-gray-800" />
            ) : (
              <FaBars className="text-xl text-gray-800" />
            )}
          </button>
        </div>

        <div
          className={`md:flex md:space-x-6 text-gray-800 ${
            isMobileMenuOpen
              ? 'flex-col absolute top-16 left-0 w-full bg-white shadow-lg md:flex-row md:static md:bg-transparent md:shadow-none'
              : 'hidden'
          }`}
        >
          <div className="flex flex-wrap md:flex-row md:space-x-6 space-x-4 md:space-x-6">
            <a
              href="#home"
              onClick={() => handleLinkClick('home')}
              className={`${
                activePage === 'home' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleLinkClick('about')}
              className={`${
                activePage === 'about' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              About
            </a>
            <a
              href="#india-updates"
              onClick={() => handleLinkClick('india-updates')}
              className={`${
                activePage === 'india-updates' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              India Updates
            </a>
            <a
              href="#opportunities"
              onClick={() => handleLinkClick('opportunities')}
              className={`${
                activePage === 'opportunities' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              Opportunities
            </a>
            <a
              href="#biobiz-consulting"
              onClick={() => handleLinkClick('biobiz-consulting')}
              className={`${
                activePage === 'biobiz-consulting' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              BioBiz Consulting
            </a>
            <a
              href="#innovation-insights"
              onClick={() => handleLinkClick('innovation-insights')}
              className={`${
                activePage === 'innovation-insights' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              Innovation Insights
            </a>

            <div className="relative hidden md:block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-green-500 transition-colors duration-200 font-bold flex items-center space-x-1 px-4 py-2"
              >
                <span>Insights</span>
                {isDropdownOpen ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-56 z-50">
                  <a
                    href="#bioenergy"
                    onClick={() => handleLinkClick('bioenergy')}
                    className={`${
                      activePage === 'bioenergy' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    Bioenergy
                  </a>
                  <a
                    href="#environmental-solutions"
                    onClick={() => handleLinkClick('environmental-solutions')}
                    className={`${
                      activePage === 'environmental-solutions' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    Environmental Solutions
                  </a>
                  <a
                    href="#bio-products"
                    onClick={() => handleLinkClick('bio-products')}
                    className={`${
                      activePage === 'bio-products' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    Bio Products
                  </a>
                  <a
                    href="#bio-based-science"
                    onClick={() => handleLinkClick('bio-based-science')}
                    className={`${
                      activePage === 'bio-based-science' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    Bio-based Science & Tech Pathways
                  </a>
                  <a
                    href="#regional-biomass"
                    onClick={() => handleLinkClick('regional-biomass')}
                    className={`${
                      activePage === 'regional-biomass' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    Regional Biomass Residues
                  </a>
                  <a
                    href="#india-biomass"
                    onClick={() => handleLinkClick('india-biomass')}
                    className={`${
                      activePage === 'india-biomass' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    India Biomass Residues
                  </a>
                  <a
                    href="#indian-bioeconomy"
                    onClick={() => handleLinkClick('indian-bioeconomy')}
                    className={`${
                      activePage === 'indian-bioeconomy' ? 'text-green-500' : 'text-gray-800'
                    } block px-4 py-2 hover:bg-green-100`}
                  >
                    Indian Bioeconomy
                  </a>
                </div>
              )}
            </div>

            <a
              href="#bring"
              onClick={() => handleLinkClick('bring')}
              className={`${
                activePage === 'bring' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              BRING
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className={`${
                activePage === 'contact' ? 'text-green-500' : 'text-gray-800'
              } hover:text-green-500 transition-colors duration-200 font-bold px-4 py-2`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
