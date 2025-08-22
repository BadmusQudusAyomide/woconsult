import React from "react";

const Destinations: React.FC = () => {
  const destinations = [
    {
      name: "UK",
      description:
        "The United Kingdom is a melting pot of academic excellence, culture, and opportunity",
      features: [
        "World-class universities",
        "Rich cultural heritage",
        "Post-study work options",
      ],
      color: "from-blue-500 to-blue-700",
      flag: "🇬🇧",
    },
    {
      name: "IRELAND",
      description:
        "Home of leading MNC's, supportive learning environment & innovative culture",
      features: [
        "Innovation hub",
        "Friendly environment",
        "Tech industry focus",
      ],
      color: "from-green-500 to-green-700",
      flag: "🇮🇪",
    },
    {
      name: "CANADA",
      description:
        "Immigration friendly country, job focused courses & post study work permit",
      features: [
        "Immigration friendly",
        "Job-focused courses",
        "Post-study work permit",
      ],
      color: "from-red-500 to-red-700",
      flag: "🇨🇦",
    },
    {
      name: "AUSTRALIA",
      description:
        "Globally recognized qualifications, scholarships & bursaries",
      features: [
        "Global recognition",
        "Scholarships available",
        "Quality education",
      ],
      color: "from-yellow-500 to-yellow-700",
      flag: "🇦🇺",
    },
    {
      name: "USA",
      description:
        "Merit based scholarships and assistance & numerous study choices",
      features: [
        "Merit-based scholarships",
        "Diverse programs",
        "Research opportunities",
      ],
      color: "from-indigo-500 to-indigo-700",
      flag: "🇺🇸",
    },
  ];

  return (
    <section id="study-abroad" className="bg-white section-padding">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Favorite Destination!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top study destinations and find the perfect fit for your
            academic and career goals
          </p>
        </div>

        {/* Destinations Grid - 3 in a row on laptop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.slice(0, 3).map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`bg-gradient-to-br ${destination.color} p-6 sm:p-8 text-white h-56 sm:h-64 flex flex-col justify-between`}
              >
                <div className="text-4xl sm:text-6xl mb-4">
                  {destination.flag}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {destination.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs sm:text-sm text-gray-600"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="w-full mt-4 sm:mt-6 btn-primary text-center group-hover:bg-primary-700 transition-colors duration-200 text-sm sm:text-base block">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Assessment Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Not sure which destination is right for you?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Take our free assessment quiz to get personalized recommendations
              based on your preferences, academic background, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-sm sm:text-base">
                Take Assessment Quiz
              </button>
              <button className="btn-secondary text-sm sm:text-base">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
