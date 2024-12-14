import React from 'react';

const Other = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-500 py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Other Updates
          </h2>
          <p className="mt-4 text-2xl text-gray-200 leading-relaxed">
            Stay updated with the latest developments, trends, and initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-50">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">India Updates</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Get the latest updates on India's bio-economy and climate tech sector, driving progress and sustainability.
            </p>
          </div>
          
          <div className="bg-white text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-50">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Weekly Updates</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Stay informed with our weekly digest of news, research, and insights in bio-energy and sustainability.
            </p>
          </div>

          <div className="bg-white text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-50">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">BRING</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A special initiative to promote sustainability, green technology, and innovation in the bio-economy.
            </p>
          </div>

          <div className="bg-white text-center p-10 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-50">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">India Biomass Residues</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Understanding biomass residues in India and their potential for sustainable growth and energy solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
