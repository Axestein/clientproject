import React from 'react';
import aboutus from "../assets/aboutus.jpeg"; 

const Aboutus = () => {
  return (
    <div className="bg-white py-16 md:py-24 mb-12 mt-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-green-600">
            About BioBiz
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-gray-600">
            Empowering India's Bio-Economy through Innovation and Collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="text-lg text-gray-800 leading-relaxed">
            <p>
              At BioBiz, we are keen to capitalize on India’s rich biodiversity and the availability of large amounts of biomass residues to develop a sustainable bio-economy and attractive business opportunities for diverse stakeholders – farmers, rural stakeholders, end-use industries, entrepreneurs/startups, and financial investors.
            </p>
            <p className="mt-4">
              As part of a leading climate tech consulting firm, we will provide critical assistance with market intelligence, data-driven analyses, professional networking, and opportunities for relevant stakeholders to gain effective visibility.
            </p>
          </div>

          <div className="flex justify-center md:justify-center">
            <img 
              src={aboutus} 
              alt="BioBiz Sustainability"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
