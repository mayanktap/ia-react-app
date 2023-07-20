import { useState } from 'react';
import PropTypes from 'prop-types';
import WildfireRisk from './WildfireRisk';
import SituationalAwareness from './SituationalAwareness';
import AirspaceManagement from './AirspaceManagement';
import RealTimeFireMonitoring from './RealTimeFireMonitoring';

const Section = ({ title, description, onClick }) => {
  return (
    <div 
      className="bg-white p-8 shadow-md rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const MyApplicationsPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionTitle) => {
    setSelectedSection(prevSection =>
      prevSection === sectionTitle ? null : sectionTitle
    );
  };

  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Applications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          <Section
            title="Wildfire Risk"
            description="Information about wildfire risk goes here."
            onClick={() => handleSectionClick('Wildfire Risk')}
          />
          <Section
            title="Situational Awareness"
            description="Information about situational awareness goes here."
            onClick={() => handleSectionClick('Situational Awareness')}
          />
          <Section
            title="Airspace Management"
            description="Information about airspace management goes here."
            onClick={() => handleSectionClick('Airspace Management')}
          />
          <Section
            title="Real-Time Fire Monitoring"
            description="Information about real-time fire monitoring goes here."
            onClick={() => handleSectionClick('Real-Time Fire Monitoring')}
          />
        </div>
        {selectedSection === 'Wildfire Risk' && <WildfireRisk />}
        {selectedSection === 'Situational Awareness' && <SituationalAwareness />}
        {selectedSection === 'Airspace Management' && <AirspaceManagement />}
        {selectedSection === 'Real-Time Fire Monitoring' && <RealTimeFireMonitoring />}
      </div>
    </div>
  );
};

export default MyApplicationsPage;