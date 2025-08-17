import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      university: 'University of Oxford',
      country: 'UK',
      rating: 5,
      text: 'Woconsult made my dream of studying in the UK a reality. Their guidance throughout the entire process was exceptional. From course selection to visa application, they were there every step of the way.',
      avatar: '👩‍🎓'
    },
    {
      name: 'Michael Chen',
      university: 'University of Toronto',
      country: 'Canada',
      rating: 5,
      text: 'The team at Woconsult is incredibly professional and knowledgeable. They helped me navigate the complex Canadian student visa process with ease. Highly recommended!',
      avatar: '👨‍🎓'
    },
    {
      name: 'Emma Rodriguez',
      university: 'University of Melbourne',
      country: 'Australia',
      rating: 5,
      text: 'I was overwhelmed with the application process, but Woconsult simplified everything. Their expertise in Australian education made all the difference. Thank you!',
      avatar: '👩‍🎓'
    },
    {
      name: 'David Kim',
      university: 'Trinity College Dublin',
      country: 'Ireland',
      rating: 5,
      text: 'Outstanding service from start to finish. The counselors were always available to answer my questions and provided valuable insights about studying in Ireland.',
      avatar: '👨‍🎓'
    },
    {
      name: 'Lisa Thompson',
      university: 'Stanford University',
      country: 'USA',
      rating: 5,
      text: 'Woconsult helped me secure a scholarship and admission to my dream university. Their dedication to student success is truly remarkable.',
      avatar: '👩‍🎓'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students about their experience with Woconsult
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "{currentTestimonial.text}"
              </blockquote>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-primary-600 font-medium">
                  {currentTestimonial.university}
                </p>
                <p className="text-gray-600 text-sm">
                  {currentTestimonial.country}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
