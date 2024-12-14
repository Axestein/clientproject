import React from 'react';
import consulting from "../assets/consulting.png";
import innovations from "../assets/innovations.png";
import insights from "../assets/insights.png";
import opportunity from "../assets/opportunity.png";
import leaf from "../assets/leaf.png";

const Mainsection = () => {
  return (
    <div className="bg-white mt-28 mb-28">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-green-600">
            Explore Our Services
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-gray-600">
            Discover how we are driving innovation and sustainability across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-2 border-green-600">
            <div className="bg-white p-6 flex justify-center items-center">
              <img src={opportunity} alt="Opportunities" className="h-20 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Opportunities</h3>
              <p className="text-gray-200">
                Unlock business opportunities and drive sustainable growth across sectors.
              </p>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-2 border-green-600">
            <div className="bg-white p-6 flex justify-center items-center">
              <img src={consulting} alt="Consulting" className="h-20 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Consulting</h3>
              <p className="text-gray-200">
                Professional consulting services to help you navigate the bio-economy.
              </p>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-2 border-green-600">
            <div className="bg-white p-6 flex justify-center items-center">
              <img src={insights} alt="Insights" className="h-20 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Insights</h3>
              <p className="text-gray-200">
                Data-driven insights to inform your strategy and decision-making processes.
              </p>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-2 border-green-600">
            <div className="bg-white p-6 flex justify-center items-center">
              <img src={innovations} alt="Innovation Insights" className="h-20 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Innovation Insights</h3>
              <p className="text-gray-200">
                Explore the latest innovations shaping the bio-economy and climate tech.
              </p>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-2 border-green-600">
            <div className="bg-white p-6 flex justify-center items-center">
              <img src={leaf} alt="Biomass Residue Intelligence" className="h-20 object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Biomass Residue Intelligence</h3>
              <p className="text-gray-200">
                Leveraging biomass residue data to optimize resources and drive sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
