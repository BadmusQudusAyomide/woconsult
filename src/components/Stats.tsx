import React from "react";

const Stats: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Partner Universities",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      number: "15+",
      label: "Years of Experience",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "1000+",
      label: "Courses Available",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary-600 to-blue-700 section-padding">
      <div className="container-custom laptop-optimized">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-laptop font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-laptop text-blue-100 max-w-4xl mx-auto">
            Trusted by thousands of students and hundreds of institutions
            worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-white/30 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-base sm:text-lg lg:text-xl font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 max-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Join thousands of successful students
            </h3>
            <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl">
              Start your journey today with our proven track record of success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-lg transition-colors duration-200 text-base sm:text-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-lg transition-colors duration-200 text-base sm:text-lg">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
