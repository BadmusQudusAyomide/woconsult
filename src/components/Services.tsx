import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Scholarship Opportunity",
      description:
        "Discover and apply for scholarships to reduce your education costs",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      color: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Education Counselling",
      description:
        "Expert advice on course selection, university choice, and career planning",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "University/College Application",
      description: "Complete application processing with expert guidance",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and coaching to boost your confidence",
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-custom laptop-optimized">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-laptop font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-laptop text-gray-600 max-w-4xl mx-auto">
            Comprehensive support services to make your study abroad journey
            smooth and successful
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 ${service.color} rounded-full flex items-center justify-center mb-4 sm:mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>
              <button
                className={`text-sm sm:text-base font-medium ${service.textColor} hover:underline transition-colors duration-200`}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              100% Free Counselling & Application Processing
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              Start your journey with a free consultation. No hidden fees, no
              obligations.
            </p>
            <button className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
              Check Your Eligibility
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
