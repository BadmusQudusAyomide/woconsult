import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'University of Oxford', country: 'UK', logo: '🏛️' },
    { name: 'University of Cambridge', country: 'UK', logo: '🎓' },
    { name: 'Imperial College London', country: 'UK', logo: '🔬' },
    { name: 'University College London', country: 'UK', logo: '🌍' },
    { name: 'Trinity College Dublin', country: 'Ireland', logo: '☘️' },
    { name: 'University College Dublin', country: 'Ireland', logo: '📚' },
    { name: 'University of Toronto', country: 'Canada', logo: '🍁' },
    { name: 'McGill University', country: 'Canada', logo: '🎯' },
    { name: 'University of Melbourne', country: 'Australia', logo: '🦘' },
    { name: 'Australian National University', country: 'Australia', logo: '⭐' },
    { name: 'Harvard University', country: 'USA', logo: '🎭' },
    { name: 'Stanford University', country: 'USA', logo: '🌲' }
  ];

  const accreditations = [
    { name: 'British Council', logo: '🇬🇧', description: 'Official UK education partner' },
    { name: 'English UK', logo: '📖', description: 'Quality English language education' },
    { name: 'PTE Academic', logo: '📝', description: 'Official test center' },
    { name: 'UCAS Registration', logo: '🎯', description: 'Official UK university application system' },
    { name: 'ICEF Agent', logo: '🌐', description: 'International education standards' }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leading Universities & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with top-tier institutions worldwide to provide you with the best educational opportunities
          </p>
        </div>

        {/* Partner Universities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Partner Universities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h4>
                <p className="text-primary-600 font-medium">{partner.country}</p>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-3 hover:underline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Accreditations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="text-4xl mb-4">{accreditation.logo}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {accreditation.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {accreditation.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our Awards
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Best Education Consultancy
                </h4>
                <p className="text-gray-600">2024 Education Excellence Awards</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Student Choice Award
                </h4>
                <p className="text-gray-600">2023 International Education Summit</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Excellence in Service
                </h4>
                <p className="text-gray-600">2023 Quality Assurance Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
