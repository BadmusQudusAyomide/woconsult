import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Welcome to <span className="text-primary-600">Wo Consult</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-700">
            Your trusted partner for global education and visa guidance.
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            At WO Consult Education, we are committed to empowering students to
            achieve their dream of studying abroad. Our dedicated team provides
            expert guidance throughout every step of the journey, from selecting
            the right course and university to navigating the visa application
            process. With a personalized approach and a deep understanding of
            international education systems, we ensure that you feel supported
            and confident in pursuing your academic goals. Let us be your
            dependable partner in shaping a future filled with opportunities and
            success!
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Over the years, we’ve helped over 10,000 international students
            achieve their academic goals abroad. We are partnered with more than
            500 education institutions in UK, Ireland, Canada &amp; Australia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
